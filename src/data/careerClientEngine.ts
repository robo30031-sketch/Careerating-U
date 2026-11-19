import type {
  CareerProfile,
  ClusterWithStats,
  OccupationSummary,
  PaginatedOccupationsResponse,
  VerificationState,
} from '../types/career.ts';
import { CAREER_CLUSTERS } from './clusters.ts';
import { buildFullCareerDatabase, toOccupationSummary } from './profileHydrator.ts';

export interface OccupationQueryParams {
  clusterId?: string;
  industry?: string;
  specialisation?: string;
  status?: string;
  workMode?: string;
  letter?: string;
  featured?: boolean;
  q?: string;
  page?: number;
  limit?: number;
}

let cachedList: CareerProfile[] | null = null;
let cachedById: Map<string, CareerProfile> | null = null;

function ensureLoaded(): { list: CareerProfile[]; byId: Map<string, CareerProfile> } {
  if (!cachedList || !cachedById) {
    cachedList = buildFullCareerDatabase();
    cachedById = new Map<string, CareerProfile>();
    for (const item of cachedList) {
      cachedById.set(item.id, item);
    }
  }
  return { list: cachedList, byId: cachedById };
}

function resolveVerificationState(career: CareerProfile): VerificationState {
  if (career.verificationState) return career.verificationState;
  return career.unverifiedSections && career.unverifiedSections.length > 0
    ? 'Partially Verified'
    : 'Verified';
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

export function clientGetClusters(): ClusterWithStats[] {
  const { list } = ensureLoaded();
  return CAREER_CLUSTERS.map((cluster) => {
    const primary = list.filter((c) => c.clusterId === cluster.id);
    const secondary = list.filter(
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

export function clientQueryOccupations(
  params: OccupationQueryParams
): PaginatedOccupationsResponse {
  const { list } = ensureLoaded();
  const clusterId = (params.clusterId || 'all').trim();
  const industry = (params.industry || '').trim();
  const specialisation = (params.specialisation || '').trim();
  const status = (params.status || 'All').trim();
  const workMode = (params.workMode || 'All').trim();
  const letter = (params.letter || '').trim().toUpperCase();
  const featuredOnly = Boolean(params.featured);
  const q = (params.q || '').trim().toLowerCase();
  const page = params.page && params.page > 0 ? params.page : 1;
  const limit = params.limit && params.limit > 0 ? Math.min(params.limit, 100) : 24;

  const clusterScoped =
    clusterId && clusterId !== 'all'
      ? list.filter(
          (c) => c.clusterId === clusterId || c.secondaryClusterIds?.includes(clusterId)
        )
      : list;

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
    .map((entry) => toOccupationSummary({
      ...entry.career,
      verificationState: resolveVerificationState(entry.career),
    }));

  return {
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
}

export function clientGetOccupationById(id: string): CareerProfile | null {
  const { byId } = ensureLoaded();
  return byId.get(id) ?? null;
}

export function clientGetCompareOccupations(ids: string[]): CareerProfile[] {
  const { byId } = ensureLoaded();
  return ids
    .slice(0, 12)
    .map((id) => byId.get(id))
    .filter((item): item is CareerProfile => Boolean(item));
}
