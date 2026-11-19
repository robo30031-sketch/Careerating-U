import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CAREER_CLUSTERS } from './src/data/clusters.ts';
import { buildFullCareerDatabase, toOccupationSummary } from './src/data/profileHydrator.ts';
import type {
  CareerProfile,
  ClusterWithStats,
  OccupationSummary,
  PaginatedOccupationsResponse,
  VerificationState,
} from './src/types/career.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'ascend_db.json');

let careersMemory: CareerProfile[] = [];
let careersById = new Map<string, CareerProfile>();

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function rebuildIndex(list: CareerProfile[]): void {
  careersMemory = list;
  const nextMap = new Map<string, CareerProfile>();
  for (const item of list) {
    nextMap.set(item.id, item);
  }
  careersById = nextMap;
}

function writeDatabase(list: CareerProfile[]): void {
  ensureDataDir();
  rebuildIndex(list);
  fs.writeFileSync(DB_FILE, JSON.stringify(list), 'utf-8');
}

function initDatabase(): void {
  ensureDataDir();
  if (fs.existsSync(DB_FILE)) {
    try {
      const raw = fs.readFileSync(DB_FILE, 'utf-8');
      const parsed = JSON.parse(raw) as CareerProfile[];
      if (Array.isArray(parsed) && parsed.length >= 1000) {
        rebuildIndex(parsed);
        return;
      }
    } catch {
      // Fallback to hydrating fresh baseline database
    }
  }
  const full = buildFullCareerDatabase();
  writeDatabase(full);
}

function resolveVerificationState(career: CareerProfile): VerificationState {
  if (career.verificationState) return career.verificationState;
  return career.unverifiedSections && career.unverifiedSections.length > 0
    ? 'Partially Verified'
    : 'Verified';
}

function computeClustersWithStats(): ClusterWithStats[] {
  return CAREER_CLUSTERS.map((cluster) => {
    const primary = careersMemory.filter((c) => c.clusterId === cluster.id);
    const secondary = careersMemory.filter(
      (c) => c.clusterId !== cluster.id && c.secondaryClusterIds?.includes(cluster.id)
    );
    const allInCluster = [...primary, ...secondary];
    const industries = Array.from(
      new Set(allInCluster.map((c) => c.industry || c.clusterName).filter(Boolean))
    ).sort();
    const specialisations = Array.from(
      new Set(allInCluster.map((c) => c.specialisation || '').filter(Boolean))
    ).sort();

    return {
      ...cluster,
      occupationCount: primary.length,
      secondaryCount: secondary.length,
      industries,
      specialisations,
    };
  });
}

function matchesQuery(career: CareerProfile, q: string): number {
  const nameLower = career.name.toLowerCase();
  if (nameLower === q) return 100;
  if (nameLower.startsWith(q)) return 80;
  if (nameLower.includes(q)) return 65;

  const aliases = (career.aliases || []).map((a) => a.toLowerCase());
  if (aliases.some((a) => a === q)) return 75;
  if (aliases.some((a) => a.includes(q))) return 55;

  const metaParts = [
    career.industry || '',
    career.specialisation || '',
    career.jobFamily || '',
    career.specialisedRole || '',
    career.clusterName,
    ...career.specialisationTags,
  ]
    .join(' ')
    .toLowerCase();
  if (metaParts.includes(q)) return 40;

  const deepParts = [
    career.shortIntro,
    ...career.schoolSubjects.subjects.map((s) => s.subject),
    ...career.toolsAndTechnology.items.map((t) => t.name),
    ...career.realWorldExamples.pioneers.map((p) => p.name),
  ]
    .join(' ')
    .toLowerCase();
  if (deepParts.includes(q)) return 20;

  return 0;
}

async function startServer() {
  initDatabase();
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '6mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({
      ok: true,
      totalOccupations: careersMemory.length,
      clusters: CAREER_CLUSTERS.length,
    });
  });

  app.get('/api/clusters', (_req, res) => {
    res.json(computeClustersWithStats());
  });

  app.get('/api/occupations', (req, res) => {
    const clusterId = typeof req.query.clusterId === 'string' ? req.query.clusterId.trim() : 'all';
    const industry = typeof req.query.industry === 'string' ? req.query.industry.trim() : '';
    const specialisation =
      typeof req.query.specialisation === 'string' ? req.query.specialisation.trim() : '';
    const status = typeof req.query.status === 'string' ? req.query.status.trim() : 'All';
    const workMode = typeof req.query.workMode === 'string' ? req.query.workMode.trim() : 'All';
    const letter = typeof req.query.letter === 'string' ? req.query.letter.trim().toUpperCase() : '';
    const featuredOnly = req.query.featured === 'true';
    const verificationFilter =
      typeof req.query.verificationState === 'string' ? req.query.verificationState.trim() : 'All';
    const q = typeof req.query.q === 'string' ? req.query.q.trim().toLowerCase() : '';
    const pageRaw = Number.parseInt(String(req.query.page || '1'), 10);
    const limitRaw = Number.parseInt(String(req.query.limit || '24'), 10);
    const page = Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1;
    const limit = Number.isFinite(limitRaw) && limitRaw > 0 ? Math.min(limitRaw, 100) : 24;

    // Cluster-level scope first to derive clean facets
    const clusterScoped =
      clusterId && clusterId !== 'all'
        ? careersMemory.filter(
            (c) => c.clusterId === clusterId || c.secondaryClusterIds?.includes(clusterId)
          )
        : careersMemory;

    const facetIndustries = Array.from(
      new Set(clusterScoped.map((c) => c.industry || c.clusterName).filter(Boolean))
    ).sort();

    const industryScoped =
      industry && industry !== 'All'
        ? clusterScoped.filter((c) => (c.industry || c.clusterName) === industry)
        : clusterScoped;

    const facetSpecialisations = Array.from(
      new Set(industryScoped.map((c) => c.specialisation || '').filter(Boolean))
    ).sort();

    const facetLetters = Array.from(
      new Set(
        industryScoped
          .map((c) => c.name.trim().charAt(0).toUpperCase())
          .filter((ch) => /^[A-Z]$/.test(ch))
      )
    ).sort();

    const scored: { career: CareerProfile; score: number }[] = [];

    for (const c of industryScoped) {
      if (specialisation && specialisation !== 'All' && (c.specialisation || '') !== specialisation) {
        continue;
      }
      if (status && status !== 'All' && c.status !== status) {
        continue;
      }
      if (workMode && workMode !== 'All' && c.workplaces.workMode !== workMode) {
        continue;
      }
      if (letter && !c.name.trim().toUpperCase().startsWith(letter)) {
        continue;
      }
      if (featuredOnly && !c.isFeatured) {
        continue;
      }
      if (verificationFilter && verificationFilter !== 'All') {
        if (resolveVerificationState(c) !== verificationFilter) continue;
      }

      if (q) {
        const score = matchesQuery(c, q);
        if (score === 0) continue;
        scored.push({ career: c, score: score + (c.isFeatured ? 5 : 0) });
      } else {
        scored.push({ career: c, score: c.isFeatured ? 10 : 0 });
      }
    }

    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.career.name.localeCompare(b.career.name);
    });

    const total = scored.length;
    const totalPages = Math.max(1, Math.ceil(total / limit));
    const safePage = Math.min(page, totalPages);
    const start = (safePage - 1) * limit;
    const items: OccupationSummary[] = scored
      .slice(start, start + limit)
      .map((entry) => toOccupationSummary(entry.career));

    const payload: PaginatedOccupationsResponse = {
      items,
      total,
      page: safePage,
      limit,
      totalPages,
      facets: {
        industries: facetIndustries,
        specialisations: facetSpecialisations,
        letters: facetLetters,
      },
    };
    res.json(payload);
  });

  app.get('/api/occupations/compare', (req, res) => {
    const idsParam = typeof req.query.ids === 'string' ? req.query.ids : '';
    const ids = idsParam
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 12);
    const results = ids
      .map((id) => careersById.get(id))
      .filter((item): item is CareerProfile => Boolean(item));
    res.json(results);
  });

  app.get('/api/occupations/by-ids', (req, res) => {
    const idsParam = typeof req.query.ids === 'string' ? req.query.ids : '';
    const ids = idsParam
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 50);
    const results = ids
      .map((id) => careersById.get(id))
      .filter((item): item is CareerProfile => Boolean(item))
      .map(toOccupationSummary);
    res.json(results);
  });

  app.get('/api/occupations/:id', (req, res) => {
    const found = careersById.get(req.params.id);
    if (!found) {
      res.status(404).json({ error: `Occupation "${req.params.id}" not found.` });
      return;
    }
    res.json(found);
  });

  // Backwards-compatible route from Phase 1
  app.get('/api/careers', (_req, res) => {
    res.json(careersMemory.filter((c) => c.isFeatured));
  });

  app.all('/api/*', (_req, res) => {
    res.status(404).json({ error: 'API endpoint not found.' });
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(
      `CAREERATING-U server running on http://0.0.0.0:${PORT} (${careersMemory.length} occupations indexed across ${CAREER_CLUSTERS.length} clusters)`
    );
  });
}

startServer().catch((err) => {
  console.error('Failed to start CAREERATING-U server:', err);
  process.exit(1);
});
