import React from 'react';
import { 
  Sparkles, 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  DollarSign, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { PlatformCategory } from '../types/platform';

interface HeroProps {
  onSelectCategory: (cat: PlatformCategory) => void;
  selectedCategory: PlatformCategory;
  onLaunchQuiz: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  totalPlatforms: number;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectCategory,
  selectedCategory,
  onLaunchQuiz,
  searchQuery,
  setSearchQuery,
  totalPlatforms
}) => {
  const categories: { id: PlatformCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'All Platforms', icon: '✦' },
    { id: 'freelancing', label: 'Freelancing & Gigs', icon: '💼' },
    { id: 'tutoring', label: 'Online Tutoring', icon: '📚' },
    { id: 'internships', label: 'Micro-Internships', icon: '🎯' },
    { id: 'creation', label: 'Digital Products & Content', icon: '💡' },
    { id: 'microtasks', label: 'Micro-Tasks & Usability', icon: '⚡' },
  ];

  return (
    <section className="border-b border-slate-200 bg-white pt-10 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Subtitle & Headline */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-3">
            Academic-Safe Earning Guide · Updated for 2026
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Safe, legal part-time income for students who refuse to sacrifice their GPA.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Explore verified platforms with escrow protection, transparent earnings, and flexible hours designed to fit around lectures, labs, and exam weeks. Zero upfront fees. Zero shady schemes.
          </p>
        </div>

        {/* Action Row: Search Input + Matchmaker Quiz CTA */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-8 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by skill, subject, or platform (e.g., Python, Tutoring, Writing, User Testing)..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all shadow-xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>
          <div className="md:col-span-4 flex">
            <button
              onClick={onLaunchQuiz}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-teal-200" />
              <span>Take Matchmaker Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Student Trending Tags */}
        <div className="mt-3 flex items-center gap-2 flex-wrap text-xs text-slate-500">
          <span className="font-semibold text-slate-700">Quick Filters:</span>
          {[
            { label: '🔥 Instant PayPal', query: 'PayPal' },
            { label: '⚡ No Experience Needed', query: 'Beginner' },
            { label: '🧪 Academic Studies', query: 'Prolific' },
            { label: '🎓 On-Campus W-2', query: 'Handshake' },
            { label: '💼 0% Commission', query: 'Contra' },
          ].map((tag) => (
            <button
              key={tag.label}
              onClick={() => setSearchQuery(tag.query)}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Trust Badges / Structural Value Anchors */}
        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>100% Legal & Escrow Protected</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Zero Upfront Platform Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Verified Direct Cashouts</span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{totalPlatforms} Audited Student Platforms</span>
          </div>
        </div>

        {/* Functional Category Filter Bar */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Browse by Category
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white font-semibold shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <span className="opacity-80">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
