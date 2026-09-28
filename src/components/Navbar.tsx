import React from 'react';
import { 
  GraduationCap, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Bookmark, 
  Menu, 
  X,
  Scale,
  Building2
} from 'lucide-react';

interface NavbarProps {
  activeTab: 'directory' | 'campus' | 'matchmaker' | 'safety' | 'resources' | 'saved';
  setActiveTab: (tab: 'directory' | 'campus' | 'matchmaker' | 'safety' | 'resources' | 'saved') => void;
  savedCount: number;
}

interface NavItem {
  id: 'directory' | 'campus' | 'matchmaker' | 'safety' | 'resources' | 'saved';
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number | null;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, savedCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: NavItem[] = [
    { id: 'directory', label: 'Earning Platforms', icon: GraduationCap },
    { id: 'campus', label: 'Campus & Internships', icon: Building2 },
    { id: 'matchmaker', label: 'Platform Matchmaker', icon: Sparkles },
    { id: 'safety', label: 'Safety & Legality Hub', icon: ShieldCheck },
    { id: 'resources', label: 'Study-Work Balance', icon: Clock },
    { id: 'saved', label: 'Saved Gigs', icon: Bookmark, badge: savedCount > 0 ? savedCount : null },
  ];

  const handleNavClick = (id: typeof activeTab) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('directory')}
            className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-md py-1"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center text-white shadow-sm group-hover:bg-teal-700 transition-colors">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-slate-900 tracking-tight">AcademiCash</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200">Verified Legal</span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">Academic-Safe Student Earnings Network</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-teal-800 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge !== null && item.badge !== undefined && (
                    <span className="ml-1 text-xs bg-teal-600 text-white font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {savedCount > 0 && (
              <button
                onClick={() => handleNavClick('saved')}
                className="relative p-2 text-slate-600 hover:text-slate-900"
                aria-label="View saved platforms"
              >
                <Bookmark className="w-5 h-5 text-teal-600" />
                <span className="absolute -top-0.5 -right-0.5 text-[10px] bg-teal-600 text-white font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {savedCount}
                </span>
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-left ${
                  isActive ? 'bg-teal-50 text-teal-800 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge !== null && item.badge !== undefined && (
                  <span className="text-xs bg-teal-600 text-white font-semibold rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
