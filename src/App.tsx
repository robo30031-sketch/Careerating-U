import { useCallback, useEffect, useRef, useState } from 'react';
import { CareerProfileView } from './components/CareerProfileView.tsx';
import { CatalogHome } from './components/CatalogHome.tsx';
import { CompareView } from './components/CompareView.tsx';
import { PathwayExplorerView } from './components/PathwayExplorerView.tsx';
import { QuickSearchModal } from './components/QuickSearchModal.tsx';
import { TopBar, type AppView } from './components/TopBar.tsx';
import { INITIAL_CAREERS } from './data/careersSeed.ts';
import { CAREER_CLUSTERS } from './data/clusters.ts';
import type { CareerProfile, ClusterWithStats } from './types/career.ts';

const CHECKLIST_STORAGE_KEY = 'careerating_checklist_v1';
const COMPARE_STORAGE_KEY = 'ascend_compare_ids_v1';

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

export default function App() {
  const [clusters, setClusters] = useState<ClusterWithStats[]>(FALLBACK_CLUSTERS);
  const [profileCache, setProfileCache] = useState<Record<string, CareerProfile>>(buildSeedMap);
  const profileCacheRef = useRef<Record<string, CareerProfile>>(profileCache);
  profileCacheRef.current = profileCache;

  const [currentView, setCurrentView] = useState<AppView>('catalog');
  const [activeCareerId, setActiveCareerId] = useState<string>(INITIAL_CAREERS[0].id);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [profileError, setProfileError] = useState<string | null>(null);

  const [compareIds, setCompareIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(COMPARE_STORAGE_KEY);
      return saved ? (JSON.parse(saved) as string[]) : ['aerospace-engineer', 'clinical-surgeon'];
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
      const res = await fetch('/api/clusters');
      if (res.ok) {
        const data = (await res.json()) as ClusterWithStats[];
        if (Array.isArray(data) && data.length === 18) {
          setClusters(data);
        }
      }
    } catch {
      // Keep fallback clusters if offline
    }
  }, []);

  const fetchCareerProfile = useCallback(async (id: string): Promise<CareerProfile | null> => {
    const cached = profileCacheRef.current[id];
    if (cached) return cached;
    try {
      const res = await fetch(`/api/occupations/${encodeURIComponent(id)}`);
      if (!res.ok) return null;
      const profile = (await res.json()) as CareerProfile;
      setProfileCache((prev) => ({ ...prev, [profile.id]: profile }));
      return profile;
    } catch {
      return null;
    }
  }, []);

  // Load cluster stats on mount
  useEffect(() => {
    refreshClusters();
  }, [refreshClusters]);

  // Ensure activeCareerId is hydrated whenever profile or pathway view opens
  useEffect(() => {
    if ((currentView === 'profile' || currentView === 'pathway') && activeCareerId) {
      if (!profileCacheRef.current[activeCareerId]) {
        setLoadingProfile(true);
        setProfileError(null);
        fetchCareerProfile(activeCareerId)
          .then((res) => {
            if (!res) setProfileError(`Could not load profession "${activeCareerId}".`);
          })
          .finally(() => setLoadingProfile(false));
      } else {
        setProfileError(null);
      }
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

  const openProfile = useCallback(
    (careerId: string) => {
      setActiveCareerId(careerId);
      setProfileError(null);
      setCurrentView('profile');
      if (!profileCacheRef.current[careerId]) {
        setLoadingProfile(true);
        fetchCareerProfile(careerId)
          .then((res) => {
            if (!res) setProfileError(`Could not load profession "${careerId}".`);
          })
          .finally(() => setLoadingProfile(false));
      }
      window.scrollTo({ top: 0, behavior: 'auto' });
    },
    [fetchCareerProfile]
  );

  const openPathway = useCallback(
    (careerId: string) => {
      setActiveCareerId(careerId);
      setCurrentView('pathway');
      if (!profileCacheRef.current[careerId]) {
        fetchCareerProfile(careerId);
      }
      window.scrollTo({ top: 0, behavior: 'auto' });
    },
    [fetchCareerProfile]
  );

  const activeCareer = profileCache[activeCareerId] || null;
  const cachedCareersList = Object.values(profileCache);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1C1917]">
      <TopBar
        currentView={currentView}
        compareCount={compareIds.length}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'auto' });
        }}
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
                  onClick={() => setCurrentView('catalog')}
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
                onBackToCatalog={() => setCurrentView('catalog')}
                onSelectCareer={openProfile}
                onToggleCompare={handleToggleCompare}
                onOpenPathway={openPathway}
                onOpenCompareView={() => setCurrentView('compare')}
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
            onBackToCatalog={() => setCurrentView('catalog')}
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
              onClick={() => setCurrentView('catalog')}
              className="hover:text-stone-900 cursor-pointer"
            >
              All 18 Clusters
            </button>
            <button
              type="button"
              onClick={() => setCurrentView('compare')}
              className="hover:text-stone-900 cursor-pointer"
            >
              Compare Careers
            </button>
            <button
              type="button"
              onClick={() => setCurrentView('pathway')}
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
