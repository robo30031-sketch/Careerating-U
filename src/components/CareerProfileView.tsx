import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  CheckCircle2,
  Compass,
  ExternalLink,
  GitCompare,
  GraduationCap,
  Layers,
  MapPin,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { CAREER_CLUSTERS } from '../data/clusters.ts';
import type { CareerProfile, SpecialisationItem, SupportedCountry } from '../types/career.ts';
import { SECTION_TITLES } from '../types/career.ts';
import { SafeImage } from './SafeImage.tsx';
import { StatusIndicator } from './StatusIndicator.tsx';

interface CareerProfileViewProps {
  career: CareerProfile;
  allCareers: CareerProfile[];
  isCompared: boolean;
  onBackToCatalog: () => void;
  onSelectCareer: (careerId: string) => void;
  onToggleCompare: (careerId: string) => void;
  onOpenPathway: (careerId: string) => void;
  onOpenCompareView: () => void;
}

export function CareerProfileView({
  career,
  allCareers,
  isCompared,
  onBackToCatalog,
  onSelectCareer,
  onToggleCompare,
  onOpenPathway,
  onOpenCompareView,
}: CareerProfileViewProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-1');
  const [selectedSpec, setSelectedSpec] = useState<SpecialisationItem | null>(
    career.specialisations.items[0] || null
  );
  const [skillsTab, setSkillsTab] = useState<'all' | 'technical' | 'personal'>('all');
  const [selectedCountry, setSelectedCountry] = useState<SupportedCountry>('India');

  useEffect(() => {
    setSelectedSpec(career.specialisations.items[0] || null);
    setSelectedCountry(career.countryRequirements?.[0]?.country || 'India');
    setSkillsTab('all');
    setActiveSectionId('sec-1');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [career.id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSectionId(visible[0].target.id);
        }
      },
      { rootMargin: '-18% 0px -65% 0px', threshold: 0.05 }
    );

    SECTION_TITLES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [career.id]);

  const scrollToSection = (sectionId: string) => {
    setActiveSectionId(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeIndex = SECTION_TITLES.findIndex((s) => s.id === activeSectionId);
  const progressPercent = Math.round(((Math.max(activeIndex, 0) + 1) / SECTION_TITLES.length) * 100);

  const primaryRelated = career.relatedCareers.items[0];
  const validRelatedTarget =
    primaryRelated?.targetId || (allCareers.find((c) => c.id === primaryRelated?.targetId)?.id ?? null);
  const activeCountryReq =
    career.countryRequirements?.find((cr) => cr.country === selectedCountry) ||
    career.countryRequirements?.[0] ||
    null;
  const secondaryClusterNames = (career.secondaryClusterIds || [])
    .map((id) => CAREER_CLUSTERS.find((cl) => cl.id === id)?.name)
    .filter((name): name is string => Boolean(name));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Breadcrumb */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBackToCatalog}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All 18 Clusters</span>
        </button>

        <div className="flex items-center gap-3 text-xs text-stone-500">
          <span className="tabular-nums">Last updated {career.lastUpdated}</span>
        </div>
      </div>

      {/* Profile Header */}
      <header className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 lg:p-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              {/* Unboxed typographic metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                <span className="font-medium text-stone-700">{career.clusterName}</span>
                <span aria-hidden="true">·</span>
                <StatusIndicator status={career.status} />
                <span aria-hidden="true">·</span>
                <span>{career.workplaces.workMode} Work Mode</span>
              </div>

              {(career.industry || career.specialisation || career.jobFamily) && (
                <div className="text-[11px] font-mono text-stone-500 leading-relaxed">
                  World of Careers › {career.clusterName}
                  {career.industry ? ` › ${career.industry}` : ''}
                  {career.specialisation ? ` › ${career.specialisation}` : ''}
                  {career.jobFamily ? ` › ${career.jobFamily}` : ''}
                  {career.specialisedRole ? ` › ${career.specialisedRole}` : ''}
                </div>
              )}

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-900 leading-[1.12] [text-wrap:balance]">
                {career.name}
              </h1>

              {career.aliases && career.aliases.length > 0 && (
                <p className="text-xs text-stone-500">
                  <span className="font-semibold text-stone-700">Also known as: </span>
                  {career.aliases.join(' · ')}
                </p>
              )}

              <p className="text-base text-stone-600 leading-relaxed max-w-2xl">
                {career.shortIntro}
              </p>

              <p className="text-xs text-stone-500 pt-1">
                <span className="font-semibold text-stone-700">Specialisations: </span>
                {career.specialisationTags.join(' · ')}
              </p>

              {secondaryClusterNames.length > 0 && (
                <p className="text-xs text-stone-500">
                  <span className="font-semibold text-stone-700">Cross-listed Clusters: </span>
                  {secondaryClusterNames.join(' · ')}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onToggleCompare(career.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isCompared
                    ? 'bg-[#1E3A8A]/10 text-[#1E3A8A] border-[#1E3A8A]'
                    : 'bg-white text-stone-800 border-stone-300 hover:bg-stone-50'
                }`}
              >
                <GitCompare className="w-4 h-4" />
                <span>{isCompared ? 'Added to Compare' : 'Compare Career'}</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenPathway(career.id)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#1E3A8A] rounded-md hover:bg-[#172D6E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Pathway</span>
              </button>

              {isCompared && (
                <button
                  type="button"
                  onClick={onOpenCompareView}
                  className="text-xs font-semibold text-[#1E3A8A] hover:underline whitespace-nowrap cursor-pointer"
                >
                  Open Comparison Table →
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 min-h-[220px] aspect-[4/3] lg:aspect-auto lg:max-h-[380px] overflow-hidden rounded-md border border-stone-200 bg-stone-100">
              <SafeImage
                src={career.imageUrl}
                alt={career.name}
                title={career.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs font-serif italic text-stone-500 mt-2">
              Fig. 1 — {career.imageCaption}
            </p>
          </div>
        </div>
      </header>

      {/* Mobile Compact Sticky Section Navigator (Single compact row <= 15% mobile height) */}
      <div className="lg:hidden sticky top-16 z-30 bg-[#FAF9F6]/95 backdrop-blur-sm border-y border-stone-200 -mx-4 px-4 py-2 mb-6 flex items-center justify-between gap-3">
        <label htmlFor="mobile-section-select" className="text-xs font-medium text-stone-600 shrink-0">
          Section:
        </label>
        <select
          id="mobile-section-select"
          value={activeSectionId}
          onChange={(e) => scrollToSection(e.target.value)}
          className="flex-1 text-xs font-medium text-stone-900 bg-white border border-stone-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-[#1E3A8A]"
        >
          {SECTION_TITLES.map((sec) => (
            <option key={sec.id} value={sec.id}>
              {sec.shortTitle}
            </option>
          ))}
        </select>
        <span className="font-mono text-xs text-stone-500 tabular-nums shrink-0">
          {progressPercent}%
        </span>
      </div>

      {/* Main 2-Column Layout: Sticky 16-Section Sidebar + Encyclopedia Article */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Desktop Sticky 16-Section Sidebar */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-22">
          <nav
            aria-label="16 Career Profile Sections"
            className="bg-white border border-stone-200 rounded-lg p-4 space-y-3"
          >
            <div className="flex items-center justify-between text-xs text-stone-500 pb-2 border-b border-stone-100">
              <span className="font-semibold text-stone-800">Profile Sections</span>
              <span className="font-mono tabular-nums">{progressPercent}%</span>
            </div>

            <div className="w-full h-1 bg-stone-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1E3A8A] transition-all duration-200"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <ul className="space-y-0.5 max-h-[68vh] overflow-y-auto pr-1">
              {SECTION_TITLES.map((sec) => {
                const active = activeSectionId === sec.id;
                return (
                  <li key={sec.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-2.5 py-1.5 text-xs rounded transition-colors flex items-center gap-2 cursor-pointer ${
                        active
                          ? 'bg-[#1E3A8A]/8 text-[#1E3A8A] font-semibold'
                          : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                      }`}
                    >
                      <span className="font-mono text-[11px] tabular-nums opacity-70 w-5 shrink-0">
                        {String(sec.number).padStart(2, '0')}
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Encyclopedia Body — All 16 Sections */}
        <div className="lg:col-span-9 space-y-12">
          {/* 01. INTRODUCTION */}
          <section id="sec-1" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-stone-400 tabular-nums">Section 01</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                Introduction
              </h2>
              <p className="text-sm text-stone-600 mt-1">{career.introduction.summary}</p>
            </div>

            <p className="text-base text-stone-800 leading-relaxed max-w-prose first-letter:text-5xl first-letter:font-serif first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#1E3A8A]">
              {career.introduction.definition}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-5 space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Main Purpose
                </h3>
                <p className="text-sm text-stone-800 leading-relaxed">{career.introduction.mainPurpose}</p>
              </div>
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-5 space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Why This Profession Exists
                </h3>
                <p className="text-sm text-stone-800 leading-relaxed">{career.introduction.whyItExists}</p>
              </div>
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-5 space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Importance to Society & Industries
                </h3>
                <p className="text-sm text-stone-800 leading-relaxed">{career.introduction.societalImportance}</p>
              </div>
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-5 space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  What Makes This Career Interesting
                </h3>
                <p className="text-sm text-stone-800 leading-relaxed">{career.introduction.whatMakesItInteresting}</p>
              </div>
            </div>
          </section>

          {/* 02. RESPONSIBILITIES */}
          <section id="sec-2" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-stone-400 tabular-nums">Section 02</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                Responsibilities
              </h2>
              <p className="text-sm text-stone-600 mt-1">{career.responsibilities.summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <div>
                  <h3 className="text-sm font-semibold text-stone-900 mb-2.5">Main Duties</h3>
                  <ul className="space-y-2 text-sm text-stone-700 leading-relaxed list-disc pl-5">
                    {career.responsibilities.mainDuties.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-900 mb-2.5">Critical Responsibilities</h3>
                  <ul className="space-y-2 text-sm text-stone-700 leading-relaxed list-disc pl-5">
                    {career.responsibilities.importantResponsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <h3 className="text-sm font-semibold text-stone-900 mb-2.5">Problems Solved</h3>
                  <ul className="space-y-2 text-sm text-stone-700 leading-relaxed list-disc pl-5">
                    {career.responsibilities.problemsSolved.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-900 mb-2.5">Key Decisions Made</h3>
                  <ul className="space-y-2 text-sm text-stone-700 leading-relaxed list-disc pl-5">
                    {career.responsibilities.decisionsMade.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                    People & Organisations They Work With
                  </h3>
                  <ul className="space-y-1 text-sm text-stone-800">
                    {career.responsibilities.collaborators.map((item, i) => (
                      <li key={i}>· {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 03. DAILY WORK */}
          <section id="sec-3" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-stone-400 tabular-nums">Section 03</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                Daily Work
              </h2>
              <p className="text-sm text-stone-600 mt-1">{career.dailyWork.summary}</p>
            </div>

            <p className="text-sm text-stone-700 bg-[#FAF9F6] border border-stone-200 rounded-md p-4 leading-relaxed">
              <strong className="font-semibold text-stone-900">Schedule Reality: </strong>
              {career.dailyWork.scheduleNote}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-stone-200 rounded-md p-4 space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                  Morning Activities
                </h3>
                <ul className="space-y-1.5 text-sm text-stone-700 list-disc pl-4">
                  {career.dailyWork.morningActivities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="border border-stone-200 rounded-md p-4 space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                  Core Working Tasks
                </h3>
                <ul className="space-y-1.5 text-sm text-stone-700 list-disc pl-4">
                  {career.dailyWork.mainTasks.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="border border-stone-200 rounded-md p-4 space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                  Meetings, Research & Fieldwork
                </h3>
                <ul className="space-y-1.5 text-sm text-stone-700 list-disc pl-4">
                  {career.dailyWork.meetingsAndFieldwork.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="border border-stone-200 rounded-md p-4 space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                  End-of-Day Activities
                </h3>
                <ul className="space-y-1.5 text-sm text-stone-700 list-disc pl-4">
                  {career.dailyWork.endOfDayActivities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                  Daily Tools & Equipment
                </h3>
                <p className="text-sm text-stone-800">{career.dailyWork.toolsUsedDaily.join(' · ')}</p>
              </div>
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                  Communication & Teamwork
                </h3>
                <p className="text-sm text-stone-800">{career.dailyWork.communicationAndTeamwork}</p>
              </div>
            </div>
          </section>

          {/* 04. SPECIALISATIONS (Clickable Interactive Cards) */}
          <section id="sec-4" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-stone-400 tabular-nums">Section 04</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                Specialisations
              </h2>
              <p className="text-sm text-stone-600 mt-1">
                {career.specialisations.summary} Select any branch card below to inspect its focus and job titles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {career.specialisations.items.map((spec) => {
                const isSelected = selectedSpec?.id === spec.id;
                return (
                  <button
                    key={spec.id}
                    type="button"
                    onClick={() => setSelectedSpec(spec)}
                    className={`text-left p-4 rounded-md border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#1E3A8A] text-white border-[#1E3A8A]'
                        : 'bg-[#FAF9F6] text-stone-900 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-serif text-base font-semibold">{spec.title}</span>
                      <Layers className={`w-4 h-4 shrink-0 ${isSelected ? 'text-blue-200' : 'text-stone-400'}`} />
                    </div>
                    <p
                      className={`text-xs mt-1.5 line-clamp-2 ${
                        isSelected ? 'text-blue-100' : 'text-stone-600'
                      }`}
                    >
                      {spec.focus}
                    </p>
                  </button>
                );
              })}
            </div>

            {selectedSpec && (
              <div className="bg-[#FAF9F6] border border-stone-300 rounded-md p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                  <h3 className="font-serif text-xl font-semibold text-stone-900">
                    {selectedSpec.title}
                  </h3>
                  <span className="text-xs font-medium text-[#1E3A8A]">Selected Branch Detail</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                      Core Focus
                    </div>
                    <p className="text-stone-800 leading-relaxed">{selectedSpec.focus}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                      How This Branch Differs
                    </div>
                    <p className="text-stone-800 leading-relaxed">{selectedSpec.howItDiffers}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                      Specialised Job Titles
                    </div>
                    <p className="text-stone-800">{selectedSpec.jobTitles.join(' · ')}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                      Opportunities Within Branch
                    </div>
                    <p className="text-stone-800 leading-relaxed">{selectedSpec.opportunities}</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* 05. SKILLS */}
          <section id="sec-5" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <span className="font-mono text-xs text-stone-400 tabular-nums">Section 05</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                  Skills Required
                </h2>
                <p className="text-sm text-stone-600 mt-1">{career.skills.summary}</p>
              </div>
              <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-md self-start sm:self-auto">
                {(
                  [
                    { id: 'all', label: 'All Skills' },
                    { id: 'technical', label: 'Technical (A)' },
                    { id: 'personal', label: 'Personal (B)' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSkillsTab(tab.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded whitespace-nowrap cursor-pointer ${
                      skillsTab === tab.id
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {(skillsTab === 'all' || skillsTab === 'technical') && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-stone-900">A. Technical Skills</h3>
                  <div className="space-y-3">
                    {career.skills.technical.map((skill, idx) => (
                      <div key={idx} className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4">
                        <div className="flex items-start justify-between gap-3">
                          <span className="font-medium text-sm text-stone-900">{skill.name}</span>
                          <span
                            className={`text-xs font-medium shrink-0 inline-flex items-center gap-1 ${
                              skill.priority === 'Essential' ? 'text-[#1E3A8A]' : 'text-stone-500'
                            }`}
                          >
                            {skill.priority === 'Essential' && (
                              <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                            )}
                            {skill.priority}
                          </span>
                        </div>
                        <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(skillsTab === 'all' || skillsTab === 'personal') && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-stone-900">
                    B. Personal & Professional Skills
                  </h3>
                  <div className="space-y-3">
                    {career.skills.personalProfessional.map((skill, idx) => (
                      <div key={idx} className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4">
                        <div className="flex items-start justify-between gap-3">
                          <span className="font-medium text-sm text-stone-900">{skill.name}</span>
                          <span
                            className={`text-xs font-medium shrink-0 inline-flex items-center gap-1 ${
                              skill.priority === 'Essential' ? 'text-[#1E3A8A]' : 'text-stone-500'
                            }`}
                          >
                            {skill.priority === 'Essential' && (
                              <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                            )}
                            {skill.priority}
                          </span>
                        </div>
                        <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* 06. SCHOOL SUBJECTS */}
          <section id="sec-6" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-stone-400 tabular-nums">Section 06</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                School Subjects
              </h2>
              <p className="text-sm text-stone-600 mt-1">{career.schoolSubjects.summary}</p>
            </div>

            <div className="overflow-x-auto border border-stone-200 rounded-md">
              <table className="w-full text-left border-collapse text-sm">
                <thead className="bg-[#FAF9F6] border-b border-stone-200 text-xs uppercase tracking-wider text-stone-500">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Subject</th>
                    <th className="py-3 px-4 font-semibold">Requirement</th>
                    <th className="py-3 px-4 font-semibold">Why It Matters</th>
                    <th className="py-3 px-4 font-semibold">How Students Can Start</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {career.schoolSubjects.subjects.map((sub, i) => (
                    <tr key={i} className="align-top">
                      <td className="py-3.5 px-4 font-medium text-stone-900">{sub.subject}</td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span
                          className={`text-xs font-medium ${
                            sub.tier === 'Essential'
                              ? 'text-[#1E3A8A]'
                              : sub.tier === 'Recommended'
                              ? 'text-[#166534]'
                              : 'text-stone-500'
                          }`}
                        >
                          {sub.tier}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-stone-700 leading-relaxed">{sub.whyItMatters}</td>
                      <td className="py-3.5 px-4 text-stone-600 leading-relaxed">{sub.howToStart}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4 space-y-1">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Indian Curriculum Context (CBSE / ICSE / State Boards)
                </h3>
                <p className="text-sm text-stone-800 leading-relaxed">
                  {career.schoolSubjects.indianCurriculumNotes}
                </p>
              </div>
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4 space-y-1">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  International Curricula (IB / A-Levels / AP)
                </h3>
                <p className="text-sm text-stone-800 leading-relaxed">
                  {career.schoolSubjects.internationalNotes}
                </p>
              </div>
            </div>
          </section>

          {/* 07. EDUCATION (Visual Education Pathway Diagram) */}
          <section id="sec-7" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-stone-400 tabular-nums">Section 07</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                Education Pathways
              </h2>
              <p className="text-sm text-stone-600 mt-1">{career.education.summary}</p>
            </div>

            {/* Connected Pathway Diagram */}
            <div className="space-y-3" aria-label="Education pathway steps">
              {career.education.pathways.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                        <span className="font-mono font-medium text-stone-700 tabular-nums">
                          Step {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{step.stage}</span>
                        <span aria-hidden="true">·</span>
                        <span>{step.countryContext}</span>
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-stone-900">
                        {step.title}
                      </h3>
                      <p className="text-sm text-stone-700 leading-relaxed">{step.details}</p>
                    </div>
                    <div className="sm:text-right shrink-0 space-y-1">
                      <div
                        className={`text-xs font-semibold ${
                          step.requirement === 'Mandatory'
                            ? 'text-[#1E3A8A]'
                            : step.requirement === 'Recommended Additional'
                            ? 'text-[#166534]'
                            : 'text-stone-600'
                        }`}
                      >
                        {step.requirement}
                      </div>
                      <div className="font-mono text-xs text-stone-500 tabular-nums">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                  {idx < career.education.pathways.length - 1 && (
                    <div className="flex justify-center py-1 text-stone-400" aria-hidden="true">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="border border-stone-200 rounded-md p-4 space-y-1">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Vocational, Diploma & Alternative Routes
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {career.education.alternativeAndVocationalNote}
                </p>
              </div>
              <div className="border border-stone-200 rounded-md p-4 space-y-1">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Research & Advanced Study
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {career.education.researchAndAdvancedNote}
                </p>
              </div>
            </div>
          </section>

          {/* 08. TOOLS AND TECHNOLOGY */}
          <section id="sec-8" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-stone-400 tabular-nums">Section 08</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                Tools and Technology
              </h2>
              <p className="text-sm text-stone-600 mt-1">{career.toolsAndTechnology.summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {career.toolsAndTechnology.items.map((tool, i) => (
                <div key={i} className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-sm text-stone-900">{tool.name}</span>
                    <Wrench className="w-3.5 h-3.5 text-stone-400 shrink-0" aria-hidden="true" />
                  </div>
                  <div className="text-xs font-medium text-[#1E3A8A]">{tool.category}</div>
                  <p className="text-xs text-stone-600 leading-relaxed">{tool.usedFor}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 09. EXPERIENCE */}
          <section id="sec-9" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-stone-400 tabular-nums">Section 09</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                How to Gain Practical Experience
              </h2>
              <p className="text-sm text-stone-600 mt-1">{career.experience.summary}</p>
            </div>

            <div className="space-y-3">
              {career.experience.stages.map((stage, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
                >
                  <div className="sm:w-48 shrink-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                      {stage.level}
                    </div>
                    <div className="text-xs text-stone-500 mt-0.5">{stage.category}</div>
                  </div>
                  <p className="text-sm text-stone-800 leading-relaxed">{stage.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 10. QUALIFICATIONS */}
          <section id="sec-10" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-stone-400 tabular-nums">Section 10</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                Official Qualifications & Licences
              </h2>
              <p className="text-sm text-stone-600 mt-1">{career.qualifications.summary}</p>
            </div>

            <div className="overflow-x-auto border border-stone-200 rounded-md">
              <table className="w-full text-left border-collapse text-sm">
                <thead className="bg-[#FAF9F6] border-b border-stone-200 text-xs uppercase tracking-wider text-stone-500">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Credential</th>
                    <th className="py-3 px-4 font-semibold">Status</th>
                    <th className="py-3 px-4 font-semibold">Type & Jurisdiction</th>
                    <th className="py-3 px-4 font-semibold">Regulatory Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {career.qualifications.items.map((q, i) => (
                    <tr key={i} className="align-top">
                      <td className="py-3.5 px-4 font-medium text-stone-900">{q.title}</td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1 text-xs font-semibold ${
                            q.tier === 'Mandatory'
                              ? 'text-[#1E3A8A]'
                              : q.tier === 'Recommended Additional'
                              ? 'text-[#166534]'
                              : 'text-stone-600'
                          }`}
                        >
                          {q.tier === 'Mandatory' && <ShieldCheck className="w-3.5 h-3.5" />}
                          {q.tier}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-stone-600">
                        <div>{q.kind}</div>
                        <div className="text-stone-500 mt-0.5">{q.country}</div>
                      </td>
                      <td className="py-3.5 px-4 text-stone-700 leading-relaxed">{q.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4 text-sm text-stone-700 leading-relaxed">
              <strong className="font-semibold text-stone-900">Country-Specific Differences: </strong>
              {career.qualifications.countryDifferencesNote}
            </div>

            {career.countryRequirements && career.countryRequirements.length > 0 && (
              <div className="border border-stone-200 rounded-md p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-stone-900">
                      Country-by-Country Education & Licensing Guide
                    </h3>
                    <p className="text-xs text-stone-500">
                      Compare school prerequisites, degree/apprenticeship structures, and regulatory bodies across regions.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 bg-stone-100 p-1 rounded-md">
                    {career.countryRequirements.map((cr) => (
                      <button
                        key={cr.country}
                        type="button"
                        onClick={() => setSelectedCountry(cr.country)}
                        className={`px-2.5 py-1 text-xs font-medium rounded cursor-pointer transition-colors ${
                          (activeCountryReq?.country || selectedCountry) === cr.country
                            ? 'bg-white text-[#1E3A8A] shadow-xs'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        {cr.country}
                      </button>
                    ))}
                  </div>
                </div>

                {activeCountryReq && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-[#FAF9F6] border border-stone-200 rounded-md p-4">
                    <div className="space-y-1">
                      <div className="font-semibold uppercase tracking-wider text-stone-500">
                        School Pathway ({activeCountryReq.country})
                      </div>
                      <p className="text-sm text-stone-800 leading-relaxed">
                        {activeCountryReq.schoolPathway}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold uppercase tracking-wider text-stone-500">
                        Higher Education / Vocational Route
                      </div>
                      <p className="text-sm text-stone-800 leading-relaxed">
                        {activeCountryReq.higherEducationOrTraining}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold uppercase tracking-wider text-stone-500">
                        Licensing, Registration & Entrance Exams
                      </div>
                      <p className="text-sm text-stone-800 leading-relaxed">
                        {activeCountryReq.licensingOrExams}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold uppercase tracking-wider text-stone-500">
                        Regional Advisory Note
                      </div>
                      <p className="text-sm text-stone-700 leading-relaxed">
                        {activeCountryReq.notes}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>

          {/* 11. CAREER PROGRESSION */}
          <section id="sec-11" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-stone-400 tabular-nums">Section 11</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                Career Progression
              </h2>
              <p className="text-sm text-stone-600 mt-1">{career.careerProgression.summary}</p>
            </div>

            {/* Progression Timeline */}
            <div className="space-y-3">
              {career.careerProgression.stages.map((st, idx) => (
                <div key={idx} className="flex items-stretch gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full border-2 border-[#1E3A8A] bg-white text-[#1E3A8A] font-mono text-xs font-semibold flex items-center justify-center tabular-nums shrink-0">
                      {idx + 1}
                    </div>
                    {idx < career.careerProgression.stages.length - 1 && (
                      <div className="w-px flex-1 bg-stone-300 my-1" />
                    )}
                  </div>
                  <div className="flex-1 bg-[#FAF9F6] border border-stone-200 rounded-md p-4 mb-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-serif text-base font-semibold text-stone-900">
                        {st.stage}
                      </h3>
                      <span className="font-mono text-xs text-stone-500 tabular-nums">
                        {st.typicalTimeframe}
                      </span>
                    </div>
                    <p className="text-sm text-stone-700 mt-1 leading-relaxed">{st.focus}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="border border-stone-200 rounded-md p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                  Entrepreneurship Track
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {career.careerProgression.nonManagementTracks.entrepreneurship}
                </p>
              </div>
              <div className="border border-stone-200 rounded-md p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                  Research Track
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {career.careerProgression.nonManagementTracks.research}
                </p>
              </div>
              <div className="border border-stone-200 rounded-md p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                  Deep Specialisation Track
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {career.careerProgression.nonManagementTracks.specialisation}
                </p>
              </div>
              <div className="border border-stone-200 rounded-md p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                  Institutional Leadership Track
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {career.careerProgression.nonManagementTracks.leadership}
                </p>
              </div>
            </div>
          </section>

          {/* 12. WORKPLACES */}
          <section id="sec-12" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-stone-400 tabular-nums">Section 12</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                Workplaces & Environment
              </h2>
              <p className="text-sm text-stone-600 mt-1">{career.workplaces.summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-5 space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Primary Work Mode</span>
                </div>
                <div className="font-serif text-2xl font-semibold text-stone-900">
                  {career.workplaces.workMode}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {career.workplaces.environmentDescription}
                </p>
              </div>

              <div className="md:col-span-2 border border-stone-200 rounded-md p-5 space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Typical Workplace Settings</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-800">
                  {career.workplaces.locations.map((loc, i) => (
                    <li key={i} className="bg-[#FAF9F6] border border-stone-200 rounded px-3 py-2">
                      {loc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 13. CAREER OPPORTUNITIES */}
          <section id="sec-13" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-stone-400 tabular-nums">Section 13</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                Career Opportunities & Industries
              </h2>
              <p className="text-sm text-stone-600 mt-1">{career.careerOpportunities.summary}</p>
            </div>

            <div className="text-sm text-stone-700">
              <span className="font-semibold text-stone-900">Main Industries: </span>
              {career.careerOpportunities.mainIndustries.join(' · ')}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4 space-y-1">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Private Sector
                </h3>
                <p className="text-stone-800 leading-relaxed">{career.careerOpportunities.privateSector}</p>
              </div>
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4 space-y-1">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Government & Public Sector
                </h3>
                <p className="text-stone-800 leading-relaxed">{career.careerOpportunities.governmentSector}</p>
              </div>
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4 space-y-1">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Research & Academic Opportunities
                </h3>
                <p className="text-stone-800 leading-relaxed">{career.careerOpportunities.researchOpportunities}</p>
              </div>
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4 space-y-1">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  International Opportunities
                </h3>
                <p className="text-stone-800 leading-relaxed">{career.careerOpportunities.internationalOpportunities}</p>
              </div>
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4 space-y-1">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Freelancing & Self-Employment
                </h3>
                <p className="text-stone-800 leading-relaxed">
                  {career.careerOpportunities.freelancingAndSelfEmployment}
                </p>
              </div>
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4 space-y-1">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Entrepreneurship, Startups & Emerging Demand
                </h3>
                <p className="text-stone-800 leading-relaxed">
                  {career.careerOpportunities.entrepreneurshipAndStartups}{' '}
                  {career.careerOpportunities.emergingDemand}
                </p>
              </div>
            </div>

            <div className="border border-stone-200 rounded-md p-4 text-xs text-stone-600 leading-relaxed">
              <strong className="font-semibold text-stone-800">Sourced Employment Data Note: </strong>
              {career.careerOpportunities.verifiedStatisticsNote}
            </div>
          </section>

          {/* 14. RELATED CAREERS (Clickable Cards) */}
          <section id="sec-14" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-stone-400 tabular-nums">Section 14</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                Related Careers
              </h2>
              <p className="text-sm text-stone-600 mt-1">
                {career.relatedCareers.summary} Select any connected career to inspect its full 16-section entry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {career.relatedCareers.items.map((rel, i) => (
                <div
                  key={i}
                  className="bg-[#FAF9F6] border border-stone-200 rounded-md p-5 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="text-xs text-stone-500">{rel.clusterName}</div>
                    <h3 className="font-serif text-xl font-semibold text-stone-900">
                      {rel.name}
                    </h3>
                    <p className="text-sm text-stone-700 leading-relaxed">{rel.whyRelated}</p>
                    <div className="text-xs text-stone-600">
                      <strong className="text-stone-800">Shared Skills: </strong>
                      {rel.sharedSkills.join(' · ')}
                    </div>
                    <div className="text-xs text-stone-600 leading-relaxed">
                      <strong className="text-stone-800">How Responsibilities Differ: </strong>
                      {rel.differencesInResponsibilities}
                    </div>
                    <div className="text-xs text-stone-600 leading-relaxed">
                      <strong className="text-stone-800">Transition Pathway: </strong>
                      {rel.transitionPathway}
                    </div>
                  </div>

                  {rel.targetId && (
                    <button
                      type="button"
                      onClick={() => onSelectCareer(rel.targetId)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A8A] hover:underline self-start cursor-pointer"
                    >
                      <span>Explore {rel.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 15. FUTURE DEVELOPMENTS */}
          <section id="sec-15" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-stone-400 tabular-nums">Section 15</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                Future Developments
              </h2>
              <p className="text-sm text-stone-600 mt-1">{career.futureDevelopments.summary}</p>
            </div>

            <p className="text-xs text-stone-600 bg-stone-50 border border-stone-200 rounded-md px-4 py-3">
              {career.futureDevelopments.disclaimer}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#166534] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Established Developments (Active Today)</span>
                </h3>
                {career.futureDevelopments.establishedDevelopments.map((item, idx) => (
                  <div key={idx} className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4">
                    <div className="font-medium text-sm text-stone-900">{item.area}</div>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Speculative Predictions (Not Guaranteed)</span>
                </h3>
                {career.futureDevelopments.speculativePredictions.map((item, idx) => (
                  <div key={idx} className="bg-[#FAF9F6] border border-stone-200 rounded-md p-4">
                    <div className="font-medium text-sm text-stone-900">{item.area}</div>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-stone-200 pt-4 text-sm text-stone-700 leading-relaxed">
              <strong className="font-semibold text-stone-900">
                Environmental & Social Forces:{' '}
              </strong>
              {career.futureDevelopments.environmentalAndSocialFactors}
            </div>
          </section>

          {/* 16. REAL-WORLD EXAMPLES */}
          <section id="sec-16" className="scroll-mt-32 lg:scroll-mt-24 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-stone-400 tabular-nums">Section 16</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
                Real-World Examples & Pioneers
              </h2>
              <p className="text-sm text-stone-600 mt-1">
                {career.realWorldExamples.pioneers.length > 0
                  ? career.realWorldExamples.summary
                  : 'Historical and contemporary contributors across this discipline.'}
              </p>
            </div>

            {career.realWorldExamples.pioneers.length === 0 ? (
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-md p-5 text-sm text-stone-600 leading-relaxed">
                Named biographical pioneer profiles for this speciality are catalogued under its
                parent discipline and primary reference sources listed below.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {career.realWorldExamples.pioneers.map((pioneer, idx) => (
                  <article
                    key={idx}
                    className="bg-[#FAF9F6] border border-stone-200 rounded-md p-5 space-y-3"
                  >
                    <div>
                      <div className="text-xs text-stone-500">
                        {pioneer.profession} · {pioneer.country}
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-stone-900 mt-0.5">
                        {pioneer.name}
                      </h3>
                    </div>
                    <div className="space-y-2 text-sm text-stone-700 leading-relaxed">
                      <p>
                        <strong className="font-semibold text-stone-900">Major Contributions: </strong>
                        {pioneer.majorContributions}
                      </p>
                      <p>
                        <strong className="font-semibold text-stone-900">Key Achievements: </strong>
                        {pioneer.achievements}
                      </p>
                      <p>
                        <strong className="font-semibold text-stone-900">Why Their Work Matters: </strong>
                        {pioneer.whyWorkMatters}
                      </p>
                    </div>
                    <div className="text-xs text-stone-500 pt-2 border-t border-stone-200">
                      Source: {pioneer.sourceNote}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          {/* Verified Sources & Attribution Footer */}
          <section className="bg-white border border-stone-200 rounded-lg p-6 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-stone-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#1E3A8A]" />
                <span>Reference Sources & Editorial Metadata</span>
              </h3>
              <span className="font-mono text-xs text-stone-500 tabular-nums">
                Last Updated: {career.lastUpdated}
              </span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
              {career.sources.map((src, i) => (
                <li key={i}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between gap-2 bg-[#FAF9F6] border border-stone-200 rounded px-3 py-2 text-stone-700 hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-colors"
                  >
                    <span className="truncate">
                      <span className="font-medium block truncate">{src.label}</span>
                      <span className="text-stone-500">{src.organization}</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* MANDATORY BOTTOM LEARNING EXPERIENCE PROMPT */}
          <section
            aria-label="Understand this career next actions"
            className="bg-[#1C1917] text-stone-100 rounded-lg p-6 sm:p-8 space-y-5"
          >
            <div className="space-y-2 max-w-2xl">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                UNDERSTAND THIS CAREER?
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed">
                Continue your exploration—compare adjacent professions side by side or map out your
                exact educational route.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <button
                type="button"
                onClick={() => {
                  if (validRelatedTarget) {
                    onSelectCareer(validRelatedTarget);
                  } else {
                    scrollToSection('sec-14');
                  }
                }}
                className="flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium bg-stone-800 hover:bg-stone-700 text-white rounded-md border border-stone-700 transition-colors cursor-pointer text-left"
              >
                <span>
                  1. Explore{' '}
                  {primaryRelated ? primaryRelated.name.split('&')[0].trim() : 'a related career'}
                </span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                type="button"
                onClick={() => onToggleCompare(career.id)}
                className={`flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium rounded-md border transition-colors cursor-pointer text-left ${
                  isCompared
                    ? 'bg-[#166534] border-[#166534] text-white'
                    : 'bg-stone-800 hover:bg-stone-700 text-white border-stone-700'
                }`}
              >
                <span>
                  2. {isCompared ? 'Added to Compare Matrix' : 'Compare with other careers'}
                </span>
                {isCompared ? (
                  <Check className="w-4 h-4 shrink-0" />
                ) : (
                  <GitCompare className="w-4 h-4 shrink-0" />
                )}
              </button>

              <button
                type="button"
                onClick={() => onOpenPathway(career.id)}
                className="flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium bg-[#1E3A8A] hover:bg-[#2547A8] text-white rounded-md border border-[#1E3A8A] transition-colors cursor-pointer text-left"
              >
                <span>3. Explore Education & Skill Pathway</span>
                <GraduationCap className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
