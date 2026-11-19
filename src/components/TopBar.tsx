import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export type AppView = 'catalog' | 'profile' | 'compare' | 'pathway';

interface TopBarProps {
  currentView: AppView;
  compareCount: number;
  onNavigate: (view: AppView) => void;
  onOpenQuickSearch: () => void;
}

export function TopBar({
  currentView,
  compareCount,
  onNavigate,
  onOpenQuickSearch,
}: TopBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { view: AppView; label: string }[] = [
    { view: 'catalog', label: 'Encyclopedia' },
    { view: 'compare', label: compareCount > 0 ? `Compare (${compareCount})` : 'Compare' },
    { view: 'pathway', label: 'Pathways' },
  ];

  const handleSelect = (view: AppView) => {
    setMobileOpen(false);
    onNavigate(view);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          type="button"
          onClick={() => handleSelect('catalog')}
          className="font-serif text-xl font-semibold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-[#1E3A8A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A8A] cursor-pointer"
        >
          CAREERATING-U
        </button>

        {/* Zone 2: Concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active =
              currentView === item.view || (item.view === 'catalog' && currentView === 'profile');
            return (
              <button
                key={item.view}
                type="button"
                onClick={() => handleSelect(item.view)}
                className={`text-sm font-medium whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A8A] ${
                  active
                    ? 'text-[#1E3A8A] border-[#1E3A8A]'
                    : 'text-stone-600 border-transparent hover:text-stone-900 hover:border-stone-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenQuickSearch}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#1E3A8A] rounded-md hover:bg-[#172D6E] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
          >
            Search Careers
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2.5 text-stone-700 hover:text-stone-900 border border-stone-200 rounded-md cursor-pointer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FAF9F6] px-4 py-3 flex flex-col gap-2">
          {navItems.map((item) => {
            const active =
              currentView === item.view || (item.view === 'catalog' && currentView === 'profile');
            return (
              <button
                key={item.view}
                type="button"
                onClick={() => handleSelect(item.view)}
                className={`text-left px-3 py-2.5 text-sm font-medium rounded-md whitespace-nowrap ${
                  active ? 'bg-stone-200/70 text-[#1E3A8A]' : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
