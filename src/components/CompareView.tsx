import { ArrowRight, Plus, Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type {
  CareerProfile,
  OccupationSummary,
  PaginatedOccupationsResponse,
} from '../types/career.ts';
import { StatusIndicator } from './StatusIndicator.tsx';

interface CompareViewProps {
  profileCache: Record<string, CareerProfile>;
  compareIds: string[];
  onToggleCompare: (careerId: string) => void;
  onSelectCareer: (careerId: string) => void;
  onBackToCatalog: () => void;
}

export function CompareView({
  profileCache,
  compareIds,
  onToggleCompare,
  onSelectCareer,
  onBackToCatalog,
}: CompareViewProps) {
  const [fetchedMap, setFetchedMap] = useState<Record<string, CareerProfile>>({});
  const [pickerQuery, setPickerQuery] = useState('');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerOptions, setPickerOptions] = useState<OccupationSummary[]>([]);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pickerOpen) return;
    const handleOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setPickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [pickerOpen]);

  // Fetch full profiles for compareIds not already in profileCache
  useEffect(() => {
    const missing = compareIds.filter((id) => !profileCache[id] && !fetchedMap[id]);
    if (missing.length === 0) return;

    fetch(`/api/occupations/compare?ids=${encodeURIComponent(missing.join(','))}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: CareerProfile[] | null) => {
        if (Array.isArray(data) && data.length > 0) {
          setFetchedMap((prev) => {
            const next = { ...prev };
            for (const item of data) next[item.id] = item;
            return next;
          });
        }
      })
      .catch(() => {
        // Ignore offline errors
      });
  }, [compareIds, profileCache, fetchedMap]);

  // Search occupations for picker dropdown
  useEffect(() => {
    if (!pickerOpen) return;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      const params = new URLSearchParams({ limit: '15', page: '1' });
      if (pickerQuery.trim()) params.set('q', pickerQuery.trim());
      fetch(`/api/occupations?${params.toString()}`)
        .then((res) => (res.ok ? res.json() : null))
        .then((data: PaginatedOccupationsResponse | null) => {
          if (!cancelled && data && Array.isArray(data.items)) {
            setPickerOptions(data.items.filter((item) => !compareIds.includes(item.id)));
          }
        })
        .catch(() => {
          if (!cancelled) {
            const q = pickerQuery.trim().toLowerCase();
            const fallback = Object.values(profileCache)
              .filter(
                (c) =>
                  !compareIds.includes(c.id) &&
                  (!q || c.name.toLowerCase().includes(q) || c.clusterName.toLowerCase().includes(q))
              )
              .slice(0, 12)
              .map((c) => ({
                id: c.id,
                name: c.name,
                clusterId: c.clusterId,
                clusterName: c.clusterName,
                secondaryClusterIds: c.secondaryClusterIds ?? [],
                industry: c.industry || c.clusterName,
                specialisation: c.specialisation || '',
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
                isFeatured: Boolean(c.isFeatured),
              }));
            setPickerOptions(fallback);
          }
        });
    }, 150);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [pickerOpen, pickerQuery, compareIds, profileCache]);

  const selectedCareers = compareIds
    .map((id) => profileCache[id] || fetchedMap[id])
    .filter((c): c is CareerProfile => Boolean(c));

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-stone-500">
            Side-by-Side Matrix
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 mt-1">
            Compare Professions
          </h1>
          <p className="text-sm text-stone-600 mt-1">
            Contrast educational pathways, statutory qualifications, school subjects, and work environments across up to three professions.
          </p>
        </div>

        {selectedCareers.length < 3 && (
          <div ref={pickerRef} className="relative w-full md:w-80 shrink-0">
            <div className="flex items-center gap-2 bg-white border border-stone-300 rounded-md px-3 py-2 focus-within:border-[#1E3A8A]">
              <Search className="w-4 h-4 text-stone-400 shrink-0" />
              <input
                type="text"
                value={pickerQuery}
                onFocus={() => setPickerOpen(true)}
                onChange={(e) => {
                  setPickerQuery(e.target.value);
                  setPickerOpen(true);
                }}
                placeholder={`Add profession (${selectedCareers.length}/3)...`}
                aria-label="Search professions to add to comparison"
                className="w-full text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none bg-transparent"
              />
              {pickerOpen && (
                <button
                  type="button"
                  onClick={() => setPickerOpen(false)}
                  className="text-stone-400 hover:text-stone-700 cursor-pointer"
                  aria-label="Close profession picker"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {pickerOpen && (
              <div className="absolute right-0 left-0 mt-1 bg-white border border-stone-300 rounded-md shadow-lg z-30 max-h-72 overflow-y-auto divide-y divide-stone-100">
                {pickerOptions.length === 0 ? (
                  <div className="p-3 text-xs text-stone-500">
                    No matching professions found.
                  </div>
                ) : (
                  pickerOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        onToggleCompare(opt.id);
                        setPickerQuery('');
                        setPickerOpen(false);
                      }}
                      className="w-full text-left px-3 py-2.5 hover:bg-[#FAF9F6] flex items-center justify-between gap-2 cursor-pointer"
                    >
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-stone-900 truncate">{opt.name}</div>
                        <div className="text-[11px] text-stone-500 truncate">
                          {opt.clusterName} · {opt.industry}
                        </div>
                      </div>
                      <Plus className="w-3.5 h-3.5 text-[#1E3A8A] shrink-0" />
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {selectedCareers.length === 0 ? (
        <div className="bg-white border border-stone-200 rounded-lg p-12 text-center space-y-4">
          <h2 className="font-serif text-xl font-semibold text-stone-900">
            No professions selected for comparison yet
          </h2>
          <p className="text-sm text-stone-600 max-w-md mx-auto">
            Search for a profession above or click "Compare" on any career profile in the encyclopedia.
          </p>
          <button
            type="button"
            onClick={onBackToCatalog}
            className="px-4 py-2 text-sm font-medium text-white bg-[#1E3A8A] rounded-md hover:bg-[#172D6E] cursor-pointer"
          >
            Browse All 18 Clusters
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white border border-stone-200 rounded-lg">
          <table className="w-full text-left border-collapse text-sm min-w-[680px]">
            <thead>
              <tr className="border-b border-stone-200 bg-[#FAF9F6] align-top">
                <th className="py-4 px-5 w-48 text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Comparison Dimension
                </th>
                {selectedCareers.map((c) => (
                  <th key={c.id} className="py-4 px-5 border-l border-stone-200">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-xs font-normal text-stone-500 mb-1">
                          {c.clusterName}
                        </div>
                        <button
                          type="button"
                          onClick={() => onSelectCareer(c.id)}
                          className="font-serif text-lg font-semibold text-stone-900 hover:text-[#1E3A8A] text-left cursor-pointer"
                        >
                          {c.name}
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => onToggleCompare(c.id)}
                        aria-label={`Remove ${c.name} from comparison`}
                        className="p-1 text-stone-400 hover:text-stone-900 cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr className="align-top">
                <td className="py-4 px-5 font-semibold text-stone-700 bg-[#FAF9F6]/50">
                  Career Status & Taxonomy
                </td>
                {selectedCareers.map((c) => (
                  <td key={c.id} className="py-4 px-5 border-l border-stone-200 space-y-1">
                    <StatusIndicator status={c.status} />
                    {c.industry && (
                      <div className="text-xs text-stone-500">
                        {c.industry} {c.jobFamily ? `· ${c.jobFamily}` : ''}
                      </div>
                    )}
                  </td>
                ))}
              </tr>

              <tr className="align-top">
                <td className="py-4 px-5 font-semibold text-stone-700 bg-[#FAF9F6]/50">
                  Work Mode & Setting
                </td>
                {selectedCareers.map((c) => (
                  <td key={c.id} className="py-4 px-5 border-l border-stone-200 space-y-1">
                    <div className="font-medium text-stone-900">{c.workplaces.workMode}</div>
                    <div className="text-xs text-stone-600">
                      {c.workplaces.locations.slice(0, 3).join(' · ')}
                    </div>
                  </td>
                ))}
              </tr>

              <tr className="align-top">
                <td className="py-4 px-5 font-semibold text-stone-700 bg-[#FAF9F6]/50">
                  Essential School Subjects
                </td>
                {selectedCareers.map((c) => (
                  <td key={c.id} className="py-4 px-5 border-l border-stone-200">
                    <ul className="space-y-1 text-xs text-stone-800">
                      {c.schoolSubjects.subjects.map((sub, i) => (
                        <li key={i}>
                          <span className="font-medium">{sub.subject}</span>{' '}
                          <span className="text-stone-500">({sub.tier})</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              <tr className="align-top">
                <td className="py-4 px-5 font-semibold text-stone-700 bg-[#FAF9F6]/50">
                  Education Pathways
                </td>
                {selectedCareers.map((c) => (
                  <td key={c.id} className="py-4 px-5 border-l border-stone-200">
                    <ul className="space-y-2 text-xs text-stone-700">
                      {c.education.pathways.map((p, i) => (
                        <li key={i}>
                          <div className="font-medium text-stone-900">{p.title}</div>
                          <div className="text-stone-500 tabular-nums">
                            {p.requirement} · {p.duration}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              <tr className="align-top">
                <td className="py-4 px-5 font-semibold text-stone-700 bg-[#FAF9F6]/50">
                  Mandatory Qualifications
                </td>
                {selectedCareers.map((c) => (
                  <td key={c.id} className="py-4 px-5 border-l border-stone-200">
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {c.qualifications.items.map((q, i) => (
                        <li key={i}>
                          <span className="font-medium text-stone-900">{q.title}</span>{' '}
                          <span className="text-[#1E3A8A]">({q.tier})</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              <tr className="align-top">
                <td className="py-4 px-5 font-semibold text-stone-700 bg-[#FAF9F6]/50">
                  India & Global Requirements
                </td>
                {selectedCareers.map((c) => {
                  const india = c.countryRequirements?.find((r) => r.country === 'India');
                  const intl = c.countryRequirements?.find((r) => r.country === 'International');
                  return (
                    <td key={c.id} className="py-4 px-5 border-l border-stone-200 text-xs text-stone-700 space-y-2">
                      {india ? (
                        <div>
                          <span className="font-semibold text-stone-900">India: </span>
                          {india.higherEducationOrTraining}
                        </div>
                      ) : null}
                      {intl ? (
                        <div>
                          <span className="font-semibold text-stone-900">Global: </span>
                          {intl.licensingOrExams}
                        </div>
                      ) : null}
                      {!india && !intl && <span>{c.qualifications.countryDifferencesNote}</span>}
                    </td>
                  );
                })}
              </tr>

              <tr className="align-top">
                <td className="py-4 px-5 font-semibold text-stone-700 bg-[#FAF9F6]/50">
                  Key Specialisations
                </td>
                {selectedCareers.map((c) => (
                  <td key={c.id} className="py-4 px-5 border-l border-stone-200 text-xs text-stone-700">
                    {c.specialisationTags.join(' · ')}
                  </td>
                ))}
              </tr>

              <tr className="align-top">
                <td className="py-4 px-5 font-semibold text-stone-700 bg-[#FAF9F6]/50">
                  Full Encyclopedia Entry
                </td>
                {selectedCareers.map((c) => (
                  <td key={c.id} className="py-4 px-5 border-l border-stone-200">
                    <button
                      type="button"
                      onClick={() => onSelectCareer(c.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A8A] hover:underline cursor-pointer"
                    >
                      <span>Open 16-Section Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
