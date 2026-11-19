import { ArrowRight, Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type {
  CareerProfile,
  OccupationSummary,
  PaginatedOccupationsResponse,
} from '../types/career.ts';
import { StatusIndicator } from './StatusIndicator.tsx';

interface QuickSearchModalProps {
  isOpen: boolean;
  fallbackCareers: CareerProfile[];
  onClose: () => void;
  onSelectCareer: (careerId: string) => void;
}

export function QuickSearchModal({
  isOpen,
  fallbackCareers,
  onClose,
  onSelectCareer,
}: QuickSearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<OccupationSummary[]>([]);
  const [totalMatches, setTotalMatches] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveIndex(0);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 40);
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      const q = query.trim();
      const params = new URLSearchParams({ limit: '16', page: '1' });
      if (q) params.set('q', q);

      setLoading(true);
      fetch(`/api/occupations?${params.toString()}`)
        .then((res) => (res.ok ? res.json() : null))
        .then((data: PaginatedOccupationsResponse | null) => {
          if (cancelled) return;
          if (data && Array.isArray(data.items)) {
            setResults(data.items);
            setTotalMatches(data.total);
            setActiveIndex(0);
          }
        })
        .catch(() => {
          if (cancelled) return;
          const lower = q.toLowerCase();
          const local = fallbackCareers
            .filter(
              (c) =>
                !lower ||
                c.name.toLowerCase().includes(lower) ||
                c.clusterName.toLowerCase().includes(lower) ||
                c.shortIntro.toLowerCase().includes(lower)
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
          setResults(local);
          setTotalMatches(local.length);
        })
        .finally(() => {
          if (!cancelled) setLoading(false);
        });
    }, 150);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [isOpen, query, fallbackCareers]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/50 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Search career encyclopedia"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#FAF9F6] border border-stone-300 rounded-lg shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-stone-200 bg-white">
          <Search className="w-4 h-4 text-stone-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown' && results.length > 0) {
                e.preventDefault();
                setActiveIndex((prev) => (prev + 1) % results.length);
              } else if (e.key === 'ArrowUp' && results.length > 0) {
                e.preventDefault();
                setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
              } else if (e.key === 'Enter' && results.length > 0) {
                e.preventDefault();
                const picked = results[activeIndex] || results[0];
                if (picked) {
                  onSelectCareer(picked.id);
                  onClose();
                }
              }
            }}
            placeholder="Search 1,000+ professions by title, alias, subject, tool, or cluster..."
            className="w-full text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none bg-transparent"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-5 py-2 bg-stone-100/70 border-b border-stone-200 flex items-center justify-between text-[11px] text-stone-500">
          <span>
            {loading
              ? 'Searching encyclopedia...'
              : query.trim()
              ? `${totalMatches.toLocaleString()} matching ${totalMatches === 1 ? 'profession' : 'professions'}`
              : 'Featured & encyclopedic highlights'}
          </span>
          <span className="font-mono">Press Esc to close</span>
        </div>

        <div className="max-h-[60vh] overflow-y-auto divide-y divide-stone-200">
          {results.length === 0 && !loading ? (
            <div className="p-8 text-center text-sm text-stone-600">
              No professions matched "{query}". Try searching for a role like "Welder", "Geneticist", "Actuary", or a subject like "Biology".
            </div>
          ) : (
            results.map((career, idx) => (
              <button
                key={career.id}
                type="button"
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => {
                  onSelectCareer(career.id);
                  onClose();
                }}
                className={`w-full text-left px-5 py-3.5 transition-colors flex items-center justify-between gap-4 cursor-pointer ${
                  idx === activeIndex ? 'bg-white' : 'hover:bg-white'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-0.5">
                    <span>{career.clusterName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{career.industry}</span>
                    <span aria-hidden="true">·</span>
                    <StatusIndicator status={career.status} />
                  </div>
                  <div className="font-serif text-base font-semibold text-stone-900 truncate">
                    {career.name}
                  </div>
                  {career.aliases.length > 0 && (
                    <div className="text-[11px] text-stone-500 truncate mt-0.5">
                      Also known as: {career.aliases.join(', ')}
                    </div>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 shrink-0" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
