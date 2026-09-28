import React from 'react';
import { Scale, ShieldCheck, Heart } from 'lucide-react';
import { PlatformCategory } from '../types/platform';

interface FooterProps {
  onSelectCategory: (cat: PlatformCategory) => void;
  onNavigateTab: (tab: 'directory' | 'campus' | 'matchmaker' | 'safety' | 'resources' | 'saved') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onNavigateTab }) => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20 pt-12 pb-10 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-slate-900 tracking-tight">AcademiCash</span>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-sm">
              An educational platform and verified directory dedicated to empowering university and college students to earn safe, legal part-time income without compromising academic success.
            </p>
            <div className="flex items-center gap-1.5 text-emerald-700 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Audited Legal Platforms · Zero Upfront Costs</span>
            </div>
          </div>

          {/* Platform Categories */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('freelancing');
                    onNavigateTab('directory');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-teal-700 text-left cursor-pointer"
                >
                  Freelancing & Client Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('tutoring');
                    onNavigateTab('directory');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-teal-700 text-left cursor-pointer"
                >
                  Online Tutoring & Mentorship
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('internships');
                    onNavigateTab('directory');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-teal-700 text-left cursor-pointer"
                >
                  Micro-Internships & Co-Ops
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('creation');
                    onNavigateTab('directory');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-teal-700 text-left cursor-pointer"
                >
                  Digital Products & Content
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('microtasks');
                    onNavigateTab('directory');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-teal-700 text-left cursor-pointer"
                >
                  Micro-Tasks & Usability Research
                </button>
              </li>
            </ul>
          </div>

          {/* Student Resources & Tools */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Student Tools & Guides
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('matchmaker');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-teal-700 text-left cursor-pointer"
                >
                  Platform Matchmaker Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('safety');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-teal-700 text-left cursor-pointer"
                >
                  Scam & Legality Auditor
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('resources');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-teal-700 text-left cursor-pointer"
                >
                  168-Hour Balance Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('resources');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-teal-700 text-left cursor-pointer"
                >
                  Student Tax & 1099 Basics
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTab('safety');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-teal-700 text-left cursor-pointer"
                >
                  International Student Visa Rules
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Compliance Notice */}
        <div className="pt-6 border-t border-slate-100 space-y-3">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            <strong>Educational & Informational Disclaimer:</strong> AcademiCash is an independent educational guide and directory. Earnings figures represent realistic surveyed medians and do not guarantee fixed income. Independent contracting (Form 1099) requires self-employment tax filings. International students studying on non-immigrant visas (such as US F-1/J-1) must consult their university Designated School Official (DSO) or International Student Office before engaging in any employment or contracting activities. AcademiCash strictly condemns and refuses to list any services facilitating academic dishonesty or cheating.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
            <div>
              &copy; {new Date().getFullYear()} AcademiCash. Built for university student financial empowerment.
            </div>
            <div className="flex items-center gap-1">
              <span>Protecting student time and academic futures.</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
