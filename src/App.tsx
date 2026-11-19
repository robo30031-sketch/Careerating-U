import { useCallback, useEffect, useRef, useState } from 'react';
import { CareerProfileView } from './components/CareerProfileView.tsx';
import { CatalogHome } from './components/CatalogHome.tsx';
import { CompareView } from './components/CompareView.tsx';
import { PathwayExplorerView } from './components/PathwayExplorerView.tsx';
import { QuickSearchModal } from './components/QuickSearchModal.tsx';
import { TopBar, type AppView } from './components/TopBar.tsx';
import { INITIAL_CAREERS } from './data/careersSeed.ts';
import { CAREER_CLUSTERS } from './data/clusters.ts';
import { apiGetClusters, apiGetOccupationById } from './services/careerApi.ts';
import type { CareerProfile, ClusterWithStats } from './types/career.ts';

const CHECKLIST_STORAGE_KEY = 'careerating_checklist_v1';
const COMPARE_STORAGE_KEY = 'careerating_compare_ids_v1';
const LEGACY_COMPARE_STORAGE_KEY = 'ascend_compare_ids_v1';

const FALLBACK_CLUSTERS: ClusterWithStats[] = CAREER_CLUSTERS.map((cl) => {
  const inCluster = INITIAL_CAREERS.filter((c) => c.clusterId === cl.id);
  return {
    ...cl,
    occupationCount: inCluster.length,
    secondaryCount: 0,
    industries: [cl.name],
    specialisations: Array.from(new Set(inCluster.flatMap((c) => c.specialisationTags))),
  };
});

function buildSeedMap(): Record<string, CareerProfile> {
  const map: Record<string, CareerProfile> = {};
  for (const c of INITIAL_CAREERS) {
    map[c.id] = c;
  }
  return map;
}

function parseHashRoute(): { view: AppView; careerId?: string } {
  const raw = window.location.hash.replace(/^#\/?/, '').trim();
  if (!raw) return { view: 'catalog' };
  const parts = raw.split('/').map(decodeURIComponent);
  if (parts[0] === 'career' && parts[1]) {
    return { view: 'profile', careerId: parts[1] };
  }
  if (parts[0] === 'pathway') {
    return { view: 'pathway', careerId: parts[1] || undefined };
  }
  if (parts[0] === 'compare') {
    return { view: 'compare' };
  }
  return { view: 'catalog' };
}

function formatHashRoute(view: AppView, careerId?: string): string {
  if (view === 'profile' && careerId) return `#/career/${encodeURIComponent(careerId)}`;
  if (view === 'pathway' && careerId) return `#/pathway/${encodeURIComponent(careerId)}`;
  if (view === 'pathway') return '#/pathway';
  if (view === 'compare') return '#/compare';
  return '#/';
}

export default function App() {
  const [clusters, setClusters] = useState<ClusterWithStats[]>(FALLBACK_CLUSTERS);
  const [profileCache, setProfileCache] = useState<Record<string, CareerProfile>>(buildSeedMap);
  const profileCacheRef = useRef<Record<string, CareerProfile>>(profileCache);
  profileCacheRef.current = profileCache;
  const inFlightRef = useRef(new Map<string, Promise<CareerProfile | null>>());

  const initialRoute = parseHashRoute();
  const [currentView, setCurrentView] = useState<AppView>(initialRoute.view);
  const [activeCareerId, setActiveCareerId] = useState<string>(
    initialRoute.careerId || INITIAL_CAREERS[0].id
  );
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [profileError, setProfileError] = useState<string | null>(null);

  const [compareIds, setCompareIds] = useState<string[]>(() => {
    try {
      const saved =
        localStorage.getItem(COMPARE_STORAGE_KEY) ||
        localStorage.getItem(LEGACY_COMPARE_STORAGE_KEY);
      if (!saved) return ['aerospace-engineer', 'clinical-surgeon'];
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return ['aerospace-engineer', 'clinical-surgeon'];
      return Array.from(new Set(parsed.filter((x): x is string => typeof x === 'string' && x.length > 0))).slice(0, 3);
    } catch {
      return ['aerospace-engineer', 'clinical-surgeon'];
    }
  });
  const [checklistByCareer, setChecklistByCareer] = useState<Record<string, string[]>>(() => {
    try {
      const saved = localStorage.getItem(CHECKLIST_STORAGE_KEY);
      return saved ? (JSON.parse(saved) as Record<string, string[]>) : {};
    } catch {
      return {};
    }
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const refreshClusters = useCallback(async () => {
    try {
      const data = await apiGetClusters();
      if (Array.isArray(data) && data.length === 18) {
        setClusters(data);
      }
    } catch {
      // Keep fallback clusters if unavailable
    }
  }, []);

  const fetchCareerProfile = useCallback(async (id: string): Promise<CareerProfile | null> => {
    const cached = profileCacheRef.current[id];
    if (cached) return cached;
    const existing = inFlightRef.current.get(id);
    if (existing) return existing;

    const promise = apiGetOccupationById(id)
      .then((profile) => {
        if (profile) {
          setProfileCache((prev) => ({ ...prev, [profile.id]: profile }));
        }
        return profile;
      })
      .catch(() => null)
      .finally(() => {
        inFlightRef.current.delete(id);
      });

    inFlightRef.current.set(id, promise);
    return promise;
  }, []);

  // Load cluster stats on mount & listen for browser back/forward hash changes
  useEffect(() => {
    refreshClusters();
    const handleHashChange = () => {
      const parsed = parseHashRoute();
      setCurrentView(parsed.view);
      if (parsed.careerId) {
        setActiveCareerId(parsed.careerId);
      }
      setProfileError(null);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [refreshClusters]);

  // Ensure activeCareerId is hydrated whenever profile or pathway view opens
  useEffect(() => {
    if ((currentView === 'profile' || currentView === 'pathway') && activeCareerId) {
      if (!profileCacheRef.current[activeCareerId]) {
        let cancelled = false;
        setLoadingProfile(true);
        setProfileError(null);
        fetchCareerProfile(activeCareerId)
          .then((res) => {
            if (!cancelled && !res) {
              setProfileError(`Could not load profession "${activeCareerId}".`);
            }
          })
          .finally(() => {
            if (!cancelled) setLoadingProfile(false);
          });
        return () => {
          cancelled = true;
        };
      }
      setLoadingProfile(false);
      setProfileError(null);
    }
  }, [currentView, activeCareerId, fetchCareerProfile]);

  // Keyboard shortcut '/' to open Quick Search
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA' &&
        document.activeElement?.tagName !== 'SELECT'
      ) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleToggleChecklistItem = useCallback((careerId: string, itemKey: string) => {
    setChecklistByCareer((prev) => {
      const existing = prev[careerId] || [];
      const hasItem = existing.includes(itemKey);
      const nextItems = hasItem ? existing.filter((k) => k !== itemKey) : [...existing, itemKey];
      const next = { ...prev, [careerId]: nextItems };
      try {
        localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore storage quota errors
      }
      return next;
    });
  }, []);

  const handleToggleCompare = useCallback((careerId: string) => {
    setCompareIds((prev) => {
      let next: string[];
      if (prev.includes(careerId)) {
        next = prev.filter((id) => id !== careerId);
      } else if (prev.length >= 3) {
        next = [...prev.slice(1), careerId];
      } else {
        next = [...prev, careerId];
      }
      try {
        localStorage.setItem(COMPARE_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const navigateTo = useCallback((view: AppView, careerId?: string) => {
    const targetCareerId = careerId || activeCareerId;
    if (careerId) {
      setActiveCareerId(careerId);
    }
    setProfileError(null);
    setCurrentView(view);
    const nextHash = formatHashRoute(view, view === 'profile' || view === 'pathway' ? targetCareerId : undefined);
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeCareerId]);

  const openProfile = useCallback(
    (careerId: string) => {
      navigateTo('profile', careerId);
    },
    [navigateTo]
  );

  const openPathway = useCallback(
    (careerId: string) => {
      navigateTo('pathway', careerId);
    },
    [navigateTo]
  );

  const activeCareer = profileCache[activeCareerId] || null;
  const cachedCareersList = Object.values(profileCache);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1C1917]">
      <TopBar
        currentView={currentView}
        compareCount={compareIds.length}
        onNavigate={(view) => navigateTo(view)}
        onOpenQuickSearch={() => setIsSearchOpen(true)}
      />

      <div className="flex-1">
        {currentView === 'catalog' && (
          <CatalogHome
            clusters={clusters}
            fallbackCareers={INITIAL_CAREERS}
            compareIds={compareIds}
            onSelectCareer={openProfile}
            onToggleCompare={handleToggleCompare}
          />
        )}

        {currentView === 'profile' && (
          loadingProfile && !activeCareer ? (
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="bg-white border border-stone-200 rounded-lg p-12 text-center space-y-2">
                <p className="font-serif text-xl text-stone-800">
                  Loading 16-section encyclopedic entry...
                </p>
                <p className="text-xs text-stone-500 font-mono">{activeCareerId}</p>
              </div>
            </main>
          ) : profileError && !activeCareer ? (
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="bg-white border border-stone-200 rounded-lg p-12 text-center space-y-4">
                <p className="font-serif text-xl text-stone-900">{profileError}</p>
                <button
                  type="button"
                  onClick={() => navigateTo('catalog')}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#1E3A8A] rounded-md hover:bg-[#172D6E] cursor-pointer"
                >
                  Return to All 18 Clusters
                </button>
              </div>
            </main>
          ) : (
            activeCareer && (
              <CareerProfileView
                career={activeCareer}
                allCareers={cachedCareersList}
                isCompared={compareIds.includes(activeCareer.id)}
                onBackToCatalog={() => navigateTo('catalog')}
                onSelectCareer={openProfile}
                onToggleCompare={handleToggleCompare}
                onOpenPathway={openPathway}
                onOpenCompareView={() => navigateTo('compare')}
              />
            )
          )
        )}

        {currentView === 'compare' && (
          <CompareView
            profileCache={profileCache}
            compareIds={compareIds}
            onToggleCompare={handleToggleCompare}
            onSelectCareer={openProfile}
            onBackToCatalog={() => navigateTo('catalog')}
          />
        )}

        {currentView === 'pathway' && (
          <PathwayExplorerView
            profileCache={profileCache}
            initialCareerId={activeCareerId}
            checklistByCareer={checklistByCareer}
            onFetchCareer={fetchCareerProfile}
            onToggleChecklistItem={handleToggleChecklistItem}
            onSelectCareer={openProfile}
          />
        )}
      </div>

      <footer className="border-t border-stone-200 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            <span className="font-serif text-sm font-semibold text-stone-900">CAREERATING-U</span>
            <span className="mx-2 text-stone-300">|</span>
            <span>
              16-Section Career Encyclopedia across 18 Clusters (
              {clusters.reduce((sum, cl) => sum + cl.occupationCount, 0).toLocaleString()} Profiles)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => navigateTo('catalog')}
              className="hover:text-stone-900 cursor-pointer"
            >
              All 18 Clusters
            </button>
            <button
              type="button"
              onClick={() => navigateTo('compare')}
              className="hover:text-stone-900 cursor-pointer"
            >
              Compare Careers
            </button>
            <button
              type="button"
              onClick={() => navigateTo('pathway')}
              className="hover:text-stone-900 cursor-pointer"
            >
              Education Pathways
            </button>
          </div>
        </div>
      </footer>

      <QuickSearchModal
        isOpen={isSearchOpen}
        fallbackCareers={INITIAL_CAREERS}
        onClose={() => setIsSearchOpen(false)}
        onSelectCareer={openProfile}
      />
    </div>
  );
}
