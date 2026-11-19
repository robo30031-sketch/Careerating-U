import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GitCompare,
  Search,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { apiQueryOccupations } from '../services/careerApi.ts';
import type {
  CareerProfile,
  CareerStatus,
  ClusterWithStats,
  OccupationSummary,
  PaginatedOccupationsResponse,
} from '../types/career.ts';
import { SafeImage } from './SafeImage.tsx';
import { StatusIndicator } from './StatusIndicator.tsx';

interface CatalogHomeProps {
  clusters: ClusterWithStats[];
  fallbackCareers: CareerProfile[];
  compareIds: string[];
  onSelectCareer: (careerId: string) => void;
  onToggleCompare: (careerId: string) => void;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const PAGE_LIMIT = 24;

function toFallbackSummary(c: CareerProfile): OccupationSummary {
  return {
    id: c.id,
    name: c.name,
    clusterId: c.clusterId,
    clusterName: c.clusterName,
    secondaryClusterIds: c.secondaryClusterIds ?? [],
    industry: c.industry || c.clusterName,
    specialisation: c.specialisation || c.specialisationTags.join(', '),
    jobFamily: c.jobFamily || c.clusterName,
    specialisedRole: c.specialisedRole || c.name,
    aliases: c.aliases ?? [],
    status: c.status,
    workMode: c.workplaces.workMode,
    shortIntro: c.shortIntro,
    specialisationTags: c.specialisationTags,
    verificationState: c.verificationState ?? 'Verified',
    unverifiedSectionsCount: c.unverifiedSections?.length ?? 0,
    lastUpdated: c.lastUpdated,
    isFeatured: Boolean(c.isFeatured ?? true),
  };
}

export function CatalogHome({
  clusters,
  fallbackCareers,
  compareIds,
  onSelectCareer,
  onToggleCompare,
}: CatalogHomeProps) {
  const [selectedClusterId, setSelectedClusterId] = useState<string>('all');
  const [industryFilter, setIndustryFilter] = useState<string>('All');
  const [specialisationFilter, setSpecialisationFilter] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | CareerStatus>('All');
  const [letterFilter, setLetterFilter] = useState<string>('');
  const [featuredOnly, setFeaturedOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [page, setPage] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(false);
  const [directoryData, setDirectoryData] = useState<PaginatedOccupationsResponse>(() => ({
    items: fallbackCareers.map(toFallbackSummary),
    total: fallbackCareers.length,
    page: 1,
    limit: PAGE_LIMIT,
    totalPages: 1,
    facets: { industries: [], specialisations: [], letters: [] },
  }));

  useEffect(() => {
    const trimmed = searchQuery.trim();
    const timer = window.setTimeout(() => {
      if (trimmed !== debouncedQuery) {
        setDebouncedQuery(trimmed);
        setPage(1);
      }
    }, 180);
    return () => window.clearTimeout(timer);
  }, [searchQuery, debouncedQuery]);

  // Reset cascading sub-filters when cluster changes
  const handleSelectCluster = (clusterId: string) => {
    setSelectedClusterId(clusterId);
    setIndustryFilter('All');
    setSpecialisationFilter('All');
    setLetterFilter('');
    setPage(1);
  };

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    apiQueryOccupations({
      clusterId: selectedClusterId,
      industry: industryFilter,
      specialisation: specialisationFilter,
      status: statusFilter,
      letter: letterFilter,
      featured: featuredOnly,
      q: debouncedQuery,
      page,
      limit: PAGE_LIMIT,
    })
      .then((data) => {
        if (cancelled) return;
        if (data && Array.isArray(data.items)) {
          setDirectoryData(data);
        }
      })
      .catch(() => {
        if (cancelled) return;
        const q = debouncedQuery.toLowerCase();
        const filtered = fallbackCareers
          .filter((c) => {
            if (selectedClusterId !== 'all' && c.clusterId !== selectedClusterId) return false;
            if (statusFilter !== 'All' && c.status !== statusFilter) return false;
            if (letterFilter && !c.name.toUpperCase().startsWith(letterFilter)) return false;
            if (!q) return true;
            return (
              c.name.toLowerCase().includes(q) ||
              c.clusterName.toLowerCase().includes(q) ||
              c.shortIntro.toLowerCase().includes(q) ||
              c.specialisationTags.some((t) => t.toLowerCase().includes(q))
            );
          })
          .map(toFallbackSummary);
        setDirectoryData({
          items: filtered.slice(0, PAGE_LIMIT),
          total: filtered.length,
          page: 1,
          limit: PAGE_LIMIT,
          totalPages: Math.max(1, Math.ceil(filtered.length / PAGE_LIMIT)),
          facets: { industries: [], specialisations: [], letters: [] },
        });
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [
    selectedClusterId,
    industryFilter,
    specialisationFilter,
    statusFilter,
    letterFilter,
    featuredOnly,
    debouncedQuery,
    page,
    fallbackCareers,
  ]);

  const totalEncyclopediaCount = useMemo(
    () => clusters.reduce((sum, c) => sum + c.occupationCount, 0),
    [clusters]
  );

  const selectedCluster = useMemo(
    () => clusters.find((c) => c.id === selectedClusterId) || null,
    [clusters, selectedClusterId]
  );

  const featuredCareer = useMemo(
    () => fallbackCareers.find((c) => c.id === 'aerospace-engineer') || fallbackCareers[0],
    [fallbackCareers]
  );

  const scrollToCatalog = () => {
    document.getElementById('cluster-catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const resetAllFilters = () => {
    setSelectedClusterId('all');
    setIndustryFilter('All');
    setSpecialisationFilter('All');
    setStatusFilter('All');
    setLetterFilter('');
    setFeaturedOnly(false);
    setSearchQuery('');
    setPage(1);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Editorial Hero Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-b border-stone-200 pb-12">
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6 py-2">
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-widest uppercase text-stone-500">
              Encyclopedia of Professions & Educational Pathways
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900 leading-[1.12] [text-wrap:balance]">
              Understand the complete world behind every profession.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              CAREERATING-U documents {totalEncyclopediaCount.toLocaleString()} careers across all 18 global
              clusters with a mandatory 16-section professional standard—covering daily reality,
              specialisations, Indian and international school subjects, statutory licences, and
              real-world pioneers.
            </p>
          </div>

          <div className="space-y-5">
            <p className="text-xs sm:text-sm font-medium text-stone-700 tracking-wide">
              What It Is <span aria-hidden="true" className="mx-1.5 text-stone-400">→</span>
              What They Do <span aria-hidden="true" className="mx-1.5 text-stone-400">→</span>
              What They Must Learn <span aria-hidden="true" className="mx-1.5 text-stone-400">→</span>
              How To Enter <span aria-hidden="true" className="mx-1.5 text-stone-400">→</span>
              How To Grow <span aria-hidden="true" className="mx-1.5 text-stone-400">→</span>
              What The Future Holds
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              {featuredCareer && (
                <button
                  type="button"
                  onClick={() => onSelectCareer(featuredCareer.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#1E3A8A] rounded-md hover:bg-[#172D6E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Read Featured 16-Section Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={scrollToCatalog}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-stone-800 bg-white border border-stone-300 rounded-md hover:bg-stone-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Browse All 18 Clusters</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col">
          <div className="relative flex-1 min-h-[240px] aspect-[4/3] lg:aspect-auto lg:max-h-[400px] overflow-hidden rounded-lg border border-stone-200 bg-stone-100">
            <SafeImage
              src="/src/assets/images/ascend_editorial_atelier_1795001231748.jpg"
              alt="Multidisciplinary research study room with architectural models, microscope, and bound reference volumes"
              title="CAREERATING-U Career Encyclopedia"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs font-serif italic text-stone-500 mt-2">
            Fig. 1 — Encyclopedic research across architecture, biological sciences, engineering, and public letters.
          </p>
        </div>
      </section>

      {/* Full-width 4-column Institutional Summary Strip */}
      <section aria-label="Encyclopedia scope overview" className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white border border-stone-200 rounded-lg p-5">
          <div className="font-mono text-2xl font-medium text-stone-900 tabular-nums">18</div>
          <div className="text-sm font-medium text-stone-800 mt-1">Career Clusters</div>
          <p className="text-xs text-stone-500 mt-1">Full taxonomy from Agriculture to Space Exploration.</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg p-5">
          <div className="font-mono text-2xl font-medium text-stone-900 tabular-nums">
            {totalEncyclopediaCount.toLocaleString()}
          </div>
          <div className="text-sm font-medium text-stone-800 mt-1">Encyclopedic Profiles</div>
          <p className="text-xs text-stone-500 mt-1">Canonical roles across Current, Emerging, and Historical work.</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg p-5">
          <div className="font-mono text-2xl font-medium text-stone-900 tabular-nums">16</div>
          <div className="text-sm font-medium text-stone-800 mt-1">Mandatory Sections</div>
          <p className="text-xs text-stone-500 mt-1">Uniform structure from Introduction to Real-World Pioneers.</p>
        </div>
        <div className="bg-white border border-stone-200 rounded-lg p-5">
          <div className="font-mono text-2xl font-medium text-stone-900 tabular-nums">7+ Countries</div>
          <div className="text-sm font-medium text-stone-800 mt-1">Education & Licences</div>
          <p className="text-xs text-stone-500 mt-1">India, US, UK, Germany, Canada, Australia, Japan & Global.</p>
        </div>
      </section>

      {/* 18 Career Clusters Index */}
      <section id="cluster-catalog" className="space-y-6 pt-2">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-5">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
              All 18 Career Clusters
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              Select a cluster to explore its industries, specialisations, and occupation directory.
            </p>
          </div>
          {selectedClusterId !== 'all' && (
            <button
              type="button"
              onClick={() => handleSelectCluster('all')}
              className="text-sm font-medium text-[#1E3A8A] hover:underline whitespace-nowrap shrink-0 cursor-pointer self-start md:self-auto"
            >
              Show All 18 Clusters
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {clusters.map((cluster) => {
            const isSelected = selectedClusterId === cluster.id;
            return (
              <button
                key={cluster.id}
                type="button"
                onClick={() => handleSelectCluster(isSelected ? 'all' : cluster.id)}
                className={`text-left p-4 rounded-lg border transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#1E3A8A] text-white border-[#1E3A8A]'
                    : 'bg-white text-stone-900 border-stone-200 hover:border-stone-400'
                }`}
              >
                <div className="flex items-center justify-between gap-2 text-xs mb-1">
                  <span
                    className={`font-mono tabular-nums ${
                      isSelected ? 'text-blue-200' : 'text-stone-400'
                    }`}
                  >
                    Cluster {String(cluster.number).padStart(2, '0')}
                  </span>
                  <span className={`tabular-nums ${isSelected ? 'text-blue-100' : 'text-stone-500'}`}>
                    {cluster.occupationCount}{' '}
                    {cluster.occupationCount === 1 ? 'profile' : 'profiles'}
                    {cluster.secondaryCount > 0 ? ` (+${cluster.secondaryCount} cross-listed)` : ''}
                  </span>
                </div>
                <div className="font-serif text-base font-semibold leading-snug">
                  {cluster.name}
                </div>
                <p
                  className={`text-xs mt-1.5 line-clamp-2 ${
                    isSelected ? 'text-blue-100' : 'text-stone-600'
                  }`}
                >
                  {cluster.summary}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Filter Toolbar & Profession Directory */}
      <section className="space-y-5 pt-2">
        {selectedCluster && (
          <div className="bg-white border border-stone-200 rounded-lg p-5 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="font-mono text-xs text-[#1E3A8A]">
                  Cluster {String(selectedCluster.number).padStart(2, '0')} ·{' '}
                  {selectedCluster.occupationCount} primary{' '}
                  {selectedCluster.secondaryCount > 0
                    ? `· ${selectedCluster.secondaryCount} cross-listed`
                    : ''}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900">
                  {selectedCluster.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => handleSelectCluster('all')}
                className="text-xs font-medium text-stone-600 hover:text-stone-900 underline cursor-pointer"
              >
                Clear Cluster Filter
              </button>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">{selectedCluster.summary}</p>
          </div>
        )}

        <div className="bg-white border border-stone-200 rounded-lg p-4 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search title, alias, industry, subject, or tool..."
                aria-label="Filter career profiles"
                className="w-full pl-9 pr-8 py-2 text-sm bg-[#FAF9F6] border border-stone-200 rounded-md text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1E3A8A]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div
                className="flex flex-wrap items-center gap-1 p-1 bg-stone-100 rounded-md"
                role="group"
                aria-label="Filter by career status"
              >
                {(['All', 'Current', 'Emerging', 'Historical', 'Obsolete'] as const).map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => {
                      setStatusFilter(status);
                      setPage(1);
                    }}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      statusFilter === status
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              <label className="inline-flex items-center gap-2 text-xs font-medium text-stone-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={featuredOnly}
                  onChange={(e) => {
                    setFeaturedOnly(e.target.checked);
                    setPage(1);
                  }}
                  className="rounded border-stone-300 text-[#1E3A8A]"
                />
                <span>Featured Flagships</span>
              </label>
            </div>
          </div>

          {/* Cascading Industry / Specialisation Hierarchy Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 border-t border-stone-100">
            <div>
              <label htmlFor="industry-select" className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1">
                Industry
              </label>
              <select
                id="industry-select"
                value={industryFilter}
                onChange={(e) => {
                  setIndustryFilter(e.target.value);
                  setSpecialisationFilter('All');
                  setPage(1);
                }}
                className="w-full text-xs bg-[#FAF9F6] border border-stone-200 rounded-md px-3 py-2 text-stone-800 focus:outline-none focus:border-[#1E3A8A]"
              >
                <option value="All">All Industries ({directoryData.facets.industries.length})</option>
                {directoryData.facets.industries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="specialisation-select" className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1">
                Specialisation
              </label>
              <select
                id="specialisation-select"
                value={specialisationFilter}
                onChange={(e) => {
                  setSpecialisationFilter(e.target.value);
                  setPage(1);
                }}
                className="w-full text-xs bg-[#FAF9F6] border border-stone-200 rounded-md px-3 py-2 text-stone-800 focus:outline-none focus:border-[#1E3A8A]"
              >
                <option value="All">
                  All Specialisations ({directoryData.facets.specialisations.length})
                </option>
                {directoryData.facets.specialisations.map((sp) => (
                  <option key={sp} value={sp}>
                    {sp}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1">
                Alphabetical Jump (A–Z)
              </span>
              <div className="flex flex-wrap items-center gap-0.5 bg-[#FAF9F6] border border-stone-200 rounded-md p-1">
                <button
                  type="button"
                  onClick={() => {
                    setLetterFilter('');
                    setPage(1);
                  }}
                  className={`px-1.5 py-0.5 text-[11px] font-mono rounded cursor-pointer ${
                    letterFilter === ''
                      ? 'bg-[#1E3A8A] text-white'
                      : 'text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  All
                </button>
                {ALPHABET.map((lt) => {
                  const hasLetter =
                    directoryData.facets.letters.length === 0 ||
                    directoryData.facets.letters.includes(lt);
                  return (
                    <button
                      key={lt}
                      type="button"
                      disabled={!hasLetter}
                      onClick={() => {
                        setLetterFilter((prev) => (prev === lt ? '' : lt));
                        setPage(1);
                      }}
                      className={`px-1 py-0.5 text-[11px] font-mono rounded ${
                        letterFilter === lt
                          ? 'bg-[#1E3A8A] text-white cursor-pointer'
                          : hasLetter
                          ? 'text-stone-700 hover:bg-stone-200 cursor-pointer'
                          : 'text-stone-300 cursor-default'
                      }`}
                    >
                      {lt}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
          <span className="tabular-nums">
            {loading ? 'Updating directory...' : `Showing ${directoryData.items.length} of ${directoryData.total.toLocaleString()} matching profiles`}
            {directoryData.totalPages > 1 ? ` · Page ${directoryData.page} of ${directoryData.totalPages}` : ''}
          </span>
          {(selectedClusterId !== 'all' ||
            industryFilter !== 'All' ||
            specialisationFilter !== 'All' ||
            statusFilter !== 'All' ||
            letterFilter !== '' ||
            featuredOnly ||
            debouncedQuery !== '') && (
            <button
              type="button"
              onClick={resetAllFilters}
              className="text-xs font-medium text-[#1E3A8A] hover:underline cursor-pointer"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {directoryData.items.length === 0 ? (
          <div className="bg-white border border-stone-200 rounded-lg p-12 text-center space-y-3">
            <p className="font-serif text-lg text-stone-800">
              No career profiles match the current filters.
            </p>
            <button
              type="button"
              onClick={resetAllFilters}
              className="px-4 py-2 text-sm font-medium text-[#1E3A8A] border border-[#1E3A8A] rounded-md hover:bg-[#1E3A8A]/5 cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {directoryData.items.map((career) => {
                const isCompared = compareIds.includes(career.id);
                return (
                  <article
                    key={career.id}
                    className="bg-white border border-stone-200 rounded-lg p-6 flex flex-col justify-between hover:border-stone-400 transition-colors"
                  >
                    <div className="space-y-3">
                      {/* Unboxed 1-line metadata kicker (zero pill sandwich) */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                        <span className="font-medium text-stone-600">{career.clusterName}</span>
                        <span aria-hidden="true">·</span>
                        <StatusIndicator status={career.status} />
                        {career.isFeatured && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="font-medium text-[#1E3A8A]">Featured</span>
                          </>
                        )}
                      </div>

                      <h3 className="font-serif text-2xl font-semibold text-stone-900 leading-snug">
                        <button
                          type="button"
                          onClick={() => onSelectCareer(career.id)}
                          className="text-left hover:text-[#1E3A8A] transition-colors cursor-pointer"
                        >
                          {career.name}
                        </button>
                      </h3>

                      <div className="text-xs text-stone-500">
                        {career.industry} <span aria-hidden="true">·</span> {career.jobFamily}
                      </div>

                      <p className="text-sm text-stone-600 leading-relaxed">{career.shortIntro}</p>

                      <div className="pt-1 text-xs text-stone-500 leading-relaxed">
                        <span className="font-medium text-stone-700">Specialisations: </span>
                        {career.specialisationTags.join(' · ')}
                      </div>
                    </div>

                    <div className="pt-5 mt-5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => onSelectCareer(career.id)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A8A] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>Open 16-Section Profile</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onToggleCompare(career.id)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            isCompared
                              ? 'bg-[#1E3A8A] text-white border-[#1E3A8A]'
                              : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                          }`}
                        >
                          <GitCompare className="w-3.5 h-3.5" />
                          <span>{isCompared ? 'Comparing' : 'Compare'}</span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {directoryData.totalPages > 1 && (
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
                <span className="font-mono text-xs text-stone-500 tabular-nums">
                  Page {directoryData.page} of {directoryData.totalPages} ({directoryData.total.toLocaleString()} entries)
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={directoryData.page <= 1}
                    onClick={() => {
                      setPage((p) => Math.max(1, p - 1));
                      scrollToCatalog();
                    }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-white border border-stone-300 rounded hover:bg-stone-50 disabled:opacity-40 cursor-pointer disabled:cursor-default"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    disabled={directoryData.page >= directoryData.totalPages}
                    onClick={() => {
                      setPage((p) => Math.min(directoryData.totalPages, p + 1));
                      scrollToCatalog();
                    }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-white border border-stone-300 rounded hover:bg-stone-50 disabled:opacity-40 cursor-pointer disabled:cursor-default"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
