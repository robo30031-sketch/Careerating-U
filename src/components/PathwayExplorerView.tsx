import {
  ArrowRight,
  CheckSquare,
  Compass,
  GraduationCap,
  Search,
  Square,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { apiQueryOccupations } from '../services/careerApi.ts';
import type {
  CareerProfile,
  OccupationSummary,
  SupportedCountry,
} from '../types/career.ts';

interface PathwayExplorerViewProps {
  profileCache: Record<string, CareerProfile>;
  initialCareerId: string;
  checklistByCareer: Record<string, string[]>;
  onFetchCareer: (id: string) => Promise<CareerProfile | null>;
  onToggleChecklistItem: (careerId: string, itemKey: string) => void;
  onSelectCareer: (careerId: string) => void;
}

const SUPPORTED_COUNTRIES: SupportedCountry[] = [
  'India',
  'United States',
  'United Kingdom',
  'Germany',
  'Canada',
  'Australia',
  'Japan',
  'International',
];

export function PathwayExplorerView({
  profileCache,
  initialCareerId,
  checklistByCareer,
  onFetchCareer,
  onToggleChecklistItem,
  onSelectCareer,
}: PathwayExplorerViewProps) {
  const cachedValues = useMemo(() => Object.values(profileCache), [profileCache]);
  const [selectedId, setSelectedId] = useState<string>(
    initialCareerId || cachedValues[0]?.id || 'aerospace-engineer'
  );
  const [selectedCountry, setSelectedCountry] = useState<SupportedCountry>('India');
  const [pickerQuery, setPickerQuery] = useState('');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerLoading, setPickerLoading] = useState(false);
  const [pickerOptions, setPickerOptions] = useState<OccupationSummary[]>([]);
  const [loadingCareer, setLoadingCareer] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialCareerId) {
      setSelectedId(initialCareerId);
    }
  }, [initialCareerId]);

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

  useEffect(() => {
    if (selectedId && !profileCache[selectedId]) {
      let cancelled = false;
      setLoadingCareer(true);
      setLoadError(null);
      onFetchCareer(selectedId)
        .then((res) => {
          if (!cancelled && !res) {
            setLoadError(`Could not load pathway details for "${selectedId}".`);
          }
        })
        .finally(() => {
          if (!cancelled) setLoadingCareer(false);
        });
      return () => {
        cancelled = true;
      };
    }
    setLoadingCareer(false);
    setLoadError(null);
  }, [selectedId, profileCache, onFetchCareer]);

  useEffect(() => {
    if (!pickerOpen) return;
    let cancelled = false;
    setPickerLoading(true);
    const timer = window.setTimeout(() => {
      apiQueryOccupations({ limit: 15, page: 1, q: pickerQuery.trim() })
        .then((data) => {
          if (!cancelled && data && Array.isArray(data.items)) {
            setPickerOptions(data.items);
          }
        })
        .catch(() => {
          if (!cancelled) {
            const q = pickerQuery.trim().toLowerCase();
            setPickerOptions(
              cachedValues
                .filter(
                  (c) =>
                    !q || c.name.toLowerCase().includes(q) || c.clusterName.toLowerCase().includes(q)
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
                }))
            );
          }
        })
        .finally(() => {
          if (!cancelled) setPickerLoading(false);
        });
    }, 150);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [pickerOpen, pickerQuery, cachedValues]);

  if (loadingCareer && !profileCache[selectedId]) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border border-stone-200 rounded-lg p-12 text-center space-y-2">
          <p className="font-serif text-xl text-stone-800">
            Loading education & skill pathway...
          </p>
          <p className="text-xs text-stone-500 font-mono">{selectedId}</p>
        </div>
      </main>
    );
  }

  if (loadError && !profileCache[selectedId]) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border border-stone-200 rounded-lg p-12 text-center space-y-4">
          <p className="font-serif text-xl text-stone-900">{loadError}</p>
          <button
            type="button"
            onClick={() => setSelectedId(cachedValues[0]?.id || 'aerospace-engineer')}
            className="px-4 py-2 text-sm font-medium text-white bg-[#1E3A8A] rounded-md hover:bg-[#172D6E] cursor-pointer"
          >
            Load Default Pathway
          </button>
        </div>
      </main>
    );
  }

  const career = profileCache[selectedId] || cachedValues[0];
  if (!career) return null;

  const checkedItems = checklistByCareer[career.id] || [];

  const countryReq =
    career.countryRequirements?.find((r) => r.country === selectedCountry) || null;

  const checklistMilestones = [
    ...career.schoolSubjects.subjects.slice(0, 3).map((s, i) => ({
      key: `sub-${i}`,
      group: 'School Subject Foundation',
      text: `${s.subject} (${s.tier}): ${s.howToStart}`,
    })),
    ...career.experience.stages.map((exp, i) => ({
      key: `exp-${i}`,
      group: exp.level,
      text: `${exp.category}: ${exp.description}`,
    })),
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <div className="border-b border-stone-200 pb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
            <Compass className="w-4 h-4" />
            <span>Education & Skill Pathway Explorer</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900">
            How to Enter: {career.name}
          </h1>
          <p className="text-sm text-stone-600 max-w-2xl">
            Inspect school subject choices, regional education routes across 7+ countries, mandatory qualifications, and practical beginner milestones.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <div ref={pickerRef} className="relative w-full sm:w-72">
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
                placeholder="Switch profession (1,000+)..."
                aria-label="Search profession for pathway explorer"
                className="w-full text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none bg-transparent"
              />
              {pickerOpen && (
                <button
                  type="button"
                  onClick={() => setPickerOpen(false)}
                  className="text-stone-400 hover:text-stone-700 cursor-pointer"
                  aria-label="Close profession switcher"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            {pickerOpen && (
              <div className="absolute right-0 left-0 mt-1 bg-white border border-stone-300 rounded-md shadow-lg z-30 max-h-72 overflow-y-auto divide-y divide-stone-100">
                {pickerLoading ? (
                  <div className="p-3 text-xs text-stone-500">Searching encyclopedia...</div>
                ) : pickerOptions.length === 0 ? (
                  <div className="p-3 text-xs text-stone-500">No matching professions found.</div>
                ) : (
                  pickerOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSelectedId(opt.id);
                        setPickerQuery('');
                        setPickerOpen(false);
                      }}
                      className="w-full text-left px-3 py-2.5 hover:bg-[#FAF9F6] cursor-pointer"
                    >
                      <div className="text-sm font-medium text-stone-900 truncate">{opt.name}</div>
                      <div className="text-[11px] text-stone-500 truncate">{opt.clusterName}</div>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => onSelectCareer(career.id)}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-[#1E3A8A] bg-white border border-[#1E3A8A] rounded-md hover:bg-[#1E3A8A]/5 whitespace-nowrap cursor-pointer"
          >
            <span>View Full 16 Sections</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Country / Curriculum Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-stone-200 rounded-lg p-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          Select Country / Educational System:
        </span>
        <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-100 rounded-md">
          {SUPPORTED_COUNTRIES.map((country) => (
            <button
              key={country}
              type="button"
              onClick={() => setSelectedCountry(country)}
              className={`px-2.5 py-1.5 text-xs font-medium rounded whitespace-nowrap cursor-pointer ${
                selectedCountry === country
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {country}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Regional School & Degree Roadmap */}
        <div className="lg:col-span-7 space-y-6">
          <section className="bg-white border border-stone-200 rounded-lg p-6 space-y-4">
            <h2 className="font-serif text-xl font-semibold text-stone-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#1E3A8A]" />
              <span>Stage-by-Stage Academic & Regulatory Route ({selectedCountry})</span>
            </h2>

            {countryReq ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#FAF9F6] border border-stone-200 rounded-md p-4 text-xs">
                <div>
                  <div className="font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    School Subjects & Streams
                  </div>
                  <p className="text-sm text-stone-800 leading-relaxed">{countryReq.schoolPathway}</p>
                </div>
                <div>
                  <div className="font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Degree / Vocational Route
                  </div>
                  <p className="text-sm text-stone-800 leading-relaxed">
                    {countryReq.higherEducationOrTraining}
                  </p>
                </div>
                <div>
                  <div className="font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Exams & Statutory Licensing
                  </div>
                  <p className="text-sm text-stone-800 leading-relaxed">
                    {countryReq.licensingOrExams}
                  </p>
                </div>
                <div>
                  <div className="font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Regional Notes
                  </div>
                  <p className="text-sm text-stone-700 leading-relaxed">{countryReq.notes}</p>
                </div>
              </div>
            ) : (
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4 text-sm text-stone-800 leading-relaxed">
                <strong className="font-semibold text-stone-900">
                  {selectedCountry === 'India' ? 'Indian School Guidance: ' : `${selectedCountry} Guidance: `}
                </strong>
                {selectedCountry === 'India'
                  ? career.schoolSubjects.indianCurriculumNotes
                  : career.schoolSubjects.internationalNotes}
              </div>
            )}

            <div className="space-y-3">
              {career.education.pathways.map((step, i) => (
                <div key={i} className="border border-stone-200 rounded-md p-4 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-mono text-[#1E3A8A] font-medium">
                      {step.stage} · {step.requirement}
                    </span>
                    <span className="font-mono text-stone-500 tabular-nums">{step.duration}</span>
                  </div>
                  <div className="font-serif text-base font-semibold text-stone-900">
                    {step.title}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">{step.details}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-stone-200">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                Statutory Licences & Key Examinations
              </h3>
              <ul className="space-y-2 text-sm">
                {career.qualifications.items.map((q, i) => (
                  <li key={i} className="bg-[#FAF9F6] border border-stone-200 rounded p-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-medium text-stone-900">{q.title}</span>
                      <span className="text-xs font-semibold text-[#1E3A8A]">
                        {q.tier} · {q.country}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mt-1">{q.details}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Right: Student Action & Skill Readiness Checklist */}
        <div className="lg:col-span-5 space-y-6">
          <section className="bg-white border border-stone-200 rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-serif text-xl font-semibold text-stone-900">
                Beginner Readiness Checklist
              </h2>
              <span className="font-mono text-xs text-stone-500 tabular-nums">
                {checkedItems.length}/{checklistMilestones.length} done
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Track practical activities you have tried—your progress is saved automatically in this browser.
            </p>

            <div className="space-y-2.5">
              {checklistMilestones.map((item) => {
                const done = checkedItems.includes(item.key);
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => onToggleChecklistItem(career.id, item.key)}
                    className={`w-full text-left p-3.5 rounded-md border transition-colors flex items-start gap-3 cursor-pointer ${
                      done
                        ? 'bg-[#166534]/5 border-[#166534]/30'
                        : 'bg-[#FAF9F6] border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    {done ? (
                      <CheckSquare className="w-4 h-4 text-[#166534] shrink-0 mt-0.5" />
                    ) : (
                      <Square className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    )}
                    <div className="text-xs leading-relaxed">
                      <div className="font-semibold text-stone-800">{item.group}</div>
                      <div className={done ? 'text-stone-600 line-through' : 'text-stone-700'}>
                        {item.text}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
