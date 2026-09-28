/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { 
  SlidersHorizontal, 
  RotateCcw, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap, 
  Filter, 
  Check, 
  DollarSign, 
  Clock,
  ArrowUpDown,
  BookOpen
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlatformCard } from './components/PlatformCard';
import { PlatformDetailModal } from './components/PlatformDetailModal';
import { CompareDrawer } from './components/CompareDrawer';
import { PlatformMatchmaker } from './components/PlatformMatchmaker';
import { SafetyHub } from './components/SafetyHub';
import { StudentResources } from './components/StudentResources';
import { SavedTracker } from './components/SavedTracker';
import { CampusCareerPortal } from './components/CampusCareerPortal';
import { Footer } from './components/Footer';

import { Platform, PlatformCategory, SavedPlatformItem, ApplicationStatus } from './types/platform';
import { PLATFORMS_DATA, CATEGORY_INFO } from './data/platforms';

export default function App() {
  const [activeTab, setActiveTab] = useState<'directory' | 'campus' | 'matchmaker' | 'safety' | 'resources' | 'saved'>('directory');
  const [selectedCategory, setSelectedCategory] = useState<PlatformCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Secondary filters
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'Beginner' | 'Intermediate'>('all');
  const [minHourly, setMinHourly] = useState<number>(0);
  const [internationalOnly, setInternationalOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'recommended' | 'earnings' | 'difficulty' | 'name'>('recommended');
  
  // Selection & comparison state
  const [detailPlatform, setDetailPlatform] = useState<Platform | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  
  // Saved platforms state with localStorage persistence
  const [savedItems, setSavedItems] = useState<SavedPlatformItem[]>(() => {
    try {
      const stored = localStorage.getItem('academicash_saved_items');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    // Seed initial helpful bookmarked platforms for students
    return [
      {
        platformId: 'handshake',
        status: 'saved',
        notes: 'Check on-campus library and campus desk assistant postings before week 1',
        dateAdded: new Date().toISOString()
      },
      {
        platformId: 'prolific',
        status: 'approved',
        notes: 'Verified account; use between study sessions in the campus lab',
        dateAdded: new Date().toISOString()
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('academicash_saved_items', JSON.stringify(savedItems));
    } catch {
      // ignore
    }
  }, [savedItems]);

  const handleToggleSave = (platformId: string) => {
    setSavedItems((prev) => {
      const exists = prev.some((item) => item.platformId === platformId);
      if (exists) {
        return prev.filter((item) => item.platformId !== platformId);
      } else {
        return [
          ...prev,
          {
            platformId,
            status: 'saved',
            notes: '',
            dateAdded: new Date().toISOString()
          }
        ];
      }
    });
  };

  const handleUpdateStatus = (platformId: string, status: ApplicationStatus) => {
    setSavedItems((prev) =>
      prev.map((item) =>
        item.platformId === platformId ? { ...item, status } : item
      )
    );
  };

  const handleUpdateNotes = (platformId: string, notes: string) => {
    setSavedItems((prev) =>
      prev.map((item) =>
        item.platformId === platformId ? { ...item, notes } : item
      )
    );
  };

  const handleRemoveSaved = (platformId: string) => {
    setSavedItems((prev) => prev.filter((item) => item.platformId !== platformId));
  };

  const handleToggleCompare = (platformId: string) => {
    setCompareIds((prev) => {
      if (prev.includes(platformId)) {
        return prev.filter((id) => id !== platformId);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), platformId];
      }
      return [...prev, platformId];
    });
  };

  // Compare platforms data
  const comparePlatforms = useMemo(() => {
    return PLATFORMS_DATA.filter((p) => compareIds.includes(p.id));
  }, [compareIds]);

  // Filter and sort platforms
  const filteredPlatforms = useMemo(() => {
    return PLATFORMS_DATA.filter((platform) => {
      // Category filter
      if (selectedCategory !== 'all' && platform.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = platform.name.toLowerCase().includes(query);
        const matchesTagline = platform.tagline.toLowerCase().includes(query);
        const matchesDesc = platform.description.toLowerCase().includes(query);
        const matchesSkills = platform.skillsNeeded.some((s) => s.toLowerCase().includes(query));
        const matchesCategory = platform.category.toLowerCase().includes(query);
        if (!matchesName && !matchesTagline && !matchesDesc && !matchesSkills && !matchesCategory) {
          return false;
        }
      }

      // Difficulty
      if (difficultyFilter !== 'all' && platform.difficulty !== difficultyFilter) {
        return false;
      }

      // International
      if (internationalOnly && !platform.eligibility.internationalAllowed) {
        return false;
      }

      // Minimum Hourly
      if (minHourly > 0) {
        const numericHourly = parseInt(platform.earnings.averageHourly.replace(/[^0-9]/g, '')) || 0;
        if (numericHourly < minHourly) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'earnings') {
        const earnA = parseInt(a.earnings.averageHourly.replace(/[^0-9]/g, '')) || 0;
        const earnB = parseInt(b.earnings.averageHourly.replace(/[^0-9]/g, '')) || 0;
        return earnB - earnA;
      }
      if (sortBy === 'difficulty') {
        const diffMap = { Beginner: 1, Intermediate: 2, Advanced: 3 };
        return diffMap[a.difficulty] - diffMap[b.difficulty];
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      // Recommended: featured first, then fit score
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.eligibility.studentFriendlyScore - a.eligibility.studentFriendlyScore;
    });
  }, [selectedCategory, searchQuery, difficultyFilter, internationalOnly, minHourly, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setDifficultyFilter('all');
    setMinHourly(0);
    setInternationalOnly(false);
    setSortBy('recommended');
  };

  const isFiltering = selectedCategory !== 'all' || searchQuery !== '' || difficultyFilter !== 'all' || minHourly > 0 || internationalOnly;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedItems.length}
      />

      <main className="flex-1">
        {activeTab === 'directory' && (
          <div>
            {/* Hero Section */}
            <Hero
              onSelectCategory={(cat) => setSelectedCategory(cat)}
              selectedCategory={selectedCategory}
              onLaunchQuiz={() => {
                setActiveTab('matchmaker');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              totalPlatforms={PLATFORMS_DATA.length}
            />

            {/* Category Editorial Explainer Banner (When a specific category is chosen) */}
            {selectedCategory !== 'all' && (
              <div className="bg-slate-100 border-b border-slate-200 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
                        <span>Category Spotlight</span>
                        <span>·</span>
                        <span>{CATEGORY_INFO[selectedCategory].typicalHours}</span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 mt-0.5">
                        {CATEGORY_INFO[selectedCategory].name}
                      </h2>
                      <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                        {CATEGORY_INFO[selectedCategory].description}
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs shrink-0 space-y-1">
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-500">Average Pay:</span>
                        <span className="font-bold text-slate-900">{CATEGORY_INFO[selectedCategory].averageEarnings}</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-500">Ideal For:</span>
                        <span className="text-slate-700 font-medium truncate max-w-[200px]">{CATEGORY_INFO[selectedCategory].idealFor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Platform Directory Main Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              
              {/* Secondary Filter & Sorting Toolbar */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 mb-6 flex flex-wrap items-center justify-between gap-4 shadow-xs">
                
                {/* Left Controls: Filter Badges & Selectors */}
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <Filter className="w-3.5 h-3.5 text-slate-400" />
                    <span>Filter:</span>
                  </span>

                  {/* Difficulty Selector */}
                  <select
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value as any)}
                    aria-label="Filter by experience difficulty"
                    className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-600 cursor-pointer"
                  >
                    <option value="all">All Experience Levels</option>
                    <option value="Beginner">Beginner-Friendly (No Prior Exp)</option>
                    <option value="Intermediate">Intermediate (Basic Portfolio/Subject)</option>
                  </select>

                  {/* Hourly Pay Floor */}
                  <select
                    value={minHourly}
                    onChange={(e) => setMinHourly(Number(e.target.value))}
                    aria-label="Filter by minimum hourly rate"
                    className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-600 cursor-pointer"
                  >
                    <option value={0}>Any Hourly Rate</option>
                    <option value={15}>Min $15 / hr</option>
                    <option value={25}>Min $25 / hr</option>
                    <option value={35}>Min $35+ / hr</option>
                  </select>

                  {/* International Toggle */}
                  <label className="flex items-center gap-1.5 cursor-pointer text-slate-700 select-none">
                    <input
                      type="checkbox"
                      checked={internationalOnly}
                      onChange={(e) => setInternationalOnly(e.target.checked)}
                      className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                    />
                    <span>Open to International Students</span>
                  </label>

                  {isFiltering && (
                    <button
                      onClick={resetFilters}
                      className="text-teal-700 hover:text-teal-900 font-semibold underline underline-offset-2 ml-1 cursor-pointer"
                    >
                      Reset filters
                    </button>
                  )}
                </div>

                {/* Right Controls: Sort Order & Results Count */}
                <div className="flex items-center gap-3 text-xs ml-auto">
                  <span className="text-slate-500 hidden sm:inline">
                    Showing <strong className="text-slate-900 tabular-nums">{filteredPlatforms.length}</strong> verified platforms
                  </span>

                  <div className="flex items-center gap-1.5">
                    <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      aria-label="Sort platforms by criteria"
                      className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-600 cursor-pointer"
                    >
                      <option value="recommended">Sort: Student Recommended</option>
                      <option value="earnings">Sort: Highest Average Pay</option>
                      <option value="difficulty">Sort: Easiest to Start</option>
                      <option value="name">Sort: Alphabetical (A-Z)</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Platforms Grid */}
              {filteredPlatforms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPlatforms.map((platform) => (
                    <PlatformCard
                      key={platform.id}
                      platform={platform}
                      onOpenDetails={(p) => setDetailPlatform(p)}
                      isSaved={savedItems.some((item) => item.platformId === platform.id)}
                      onToggleSave={handleToggleSave}
                      isComparing={compareIds.includes(platform.id)}
                      onToggleCompare={handleToggleCompare}
                    />
                  ))}
                </div>
              ) : (
                /* Empty Filter Results */
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto shadow-xs">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400 mb-3">
                    <Filter className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">No platforms match your filters</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-6">
                    Try clearing your search keyword or relaxing the minimum hourly rate.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All Filters</span>
                  </button>
                </div>
              )}

              {/* Educational Inline Callout Section */}
              <div className="mt-16 bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">
                    Student Protection Pledge
                  </span>
                  <h3 className="text-2xl font-bold">
                    Need help deciding between freelancing, tutoring, or micro-internships?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Take our 60-second interactive matchmaker quiz to get a customized roadmap based on your course workload, available hours, and post-grad career goals.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setActiveTab('matchmaker');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-5 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer text-center"
                  >
                    Start Matchmaker Quiz
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('safety');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer text-center border border-slate-700"
                  >
                    Check Safety Hub
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Campus & Micro-Internships Portal */}
        {activeTab === 'campus' && (
          <CampusCareerPortal
            onNavigateToSafety={() => {
              setActiveTab('safety');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* Tab 3: Matchmaker Quiz */}
        {activeTab === 'matchmaker' && (
          <PlatformMatchmaker
            onSelectPlatform={(platform) => setDetailPlatform(platform)}
            onExploreDirectory={() => setActiveTab('directory')}
          />
        )}

        {/* Tab 3: Safety & Legality Hub */}
        {activeTab === 'safety' && <SafetyHub />}

        {/* Tab 4: Study-Work Balance & Financial Tools */}
        {activeTab === 'resources' && <StudentResources />}

        {/* Tab 5: Saved Gigs & Application Tracker */}
        {activeTab === 'saved' && (
          <SavedTracker
            savedItems={savedItems}
            onRemove={handleRemoveSaved}
            onUpdateStatus={handleUpdateStatus}
            onUpdateNotes={handleUpdateNotes}
            onOpenDetails={(p) => setDetailPlatform(p)}
            onExploreDirectory={() => setActiveTab('directory')}
          />
        )}
      </main>

      {/* Floating Comparison Drawer */}
      <CompareDrawer
        comparePlatforms={comparePlatforms}
        onRemove={(id) => setCompareIds((prev) => prev.filter((pId) => pId !== id))}
        onClear={() => setCompareIds([])}
        onOpenDetails={(p) => setDetailPlatform(p)}
      />

      {/* Full Platform Detail & Safety Audit Modal */}
      <PlatformDetailModal
        platform={detailPlatform}
        onClose={() => setDetailPlatform(null)}
        isSaved={detailPlatform ? savedItems.some((item) => item.platformId === detailPlatform.id) : false}
        onToggleSave={handleToggleSave}
      />

      {/* Global Footer */}
      <Footer
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onNavigateTab={(tab) => setActiveTab(tab)}
      />

    </div>
  );
}
