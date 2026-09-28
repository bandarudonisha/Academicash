import React, { useState } from 'react';
import { 
  Building2, 
  Briefcase, 
  MapPin, 
  Clock, 
  FileCheck2, 
  ExternalLink, 
  CheckCircle, 
  AlertCircle,
  Search,
  Filter,
  Users,
  CalendarCheck,
  Award,
  ShieldCheck,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface CampusRole {
  id: string;
  title: string;
  department: string;
  type: 'On-Campus W-2' | 'Micro-Internship' | 'Co-Op Fellow';
  avgHourly: string;
  maxWeeklyHours: string;
  studyFriendlyRating: 'Very High (Downtime allowed)' | 'High' | 'Active Engagement';
  visaStatus: '100% Legal for F-1 / J-1 Visas' | 'Requires CPT / Pre-OPT';
  hiringSeason: string;
  howToApply: string;
  skills: string[];
  insiderTip: string;
}

const VERIFIED_OPPORTUNITIES: CampusRole[] = [
  {
    id: 'library-monitor',
    title: 'University Library Circulation & Study Desk Monitor',
    department: 'University Library System',
    type: 'On-Campus W-2',
    avgHourly: '$16 – $19 / hr',
    maxWeeklyHours: '10 – 15 hrs / wk',
    studyFriendlyRating: 'Very High (Downtime allowed)',
    visaStatus: '100% Legal for F-1 / J-1 Visas',
    hiringSeason: '2–3 weeks before semester starts',
    howToApply: 'Apply via Handshake or your university student employment portal under Library Operations.',
    skills: ['Customer Service', 'Book Cataloging', 'Attention to Detail'],
    insiderTip: 'The holy grail of student jobs: after checking books in and assisting visitors, supervisors explicitly allow quiet course textbook reading and studying at the front desk.'
  },
  {
    id: 'cs-teaching-assistant',
    title: 'Undergraduate Peer Teaching Assistant (TA) / Lab Proctor',
    department: 'Computer Science & Engineering / Math Dept',
    type: 'On-Campus W-2',
    avgHourly: '$18 – $24 / hr',
    maxWeeklyHours: '8 – 12 hrs / wk',
    studyFriendlyRating: 'High',
    visaStatus: '100% Legal for F-1 / J-1 Visas',
    hiringSeason: 'During course registration of preceding term',
    howToApply: 'Reach out directly to course instructors in classes where you scored an A or A-.',
    skills: ['Python/Java/C++', 'Code Debugging', 'Clear Explanations'],
    insiderTip: 'Prepares you for technical coding interviews better than LeetCode: debugging 40 freshmen student codebases teaches edge-case comprehension instantly.'
  },
  {
    id: 'corporate-market-research',
    title: 'Market Research & Competitive Intelligence Fellow',
    department: 'Parker Dewey Enterprise Partner Network',
    type: 'Micro-Internship',
    avgHourly: '$22 – $28 / hr equivalent ($350 - $550 stipend)',
    maxWeeklyHours: '15 – 25 hrs total project',
    studyFriendlyRating: 'High',
    visaStatus: 'Requires CPT / Pre-OPT',
    hiringSeason: 'Rolling monthly applications year-round',
    howToApply: 'Register with your .edu email at Parker Dewey and submit concise 150-word written applications.',
    skills: ['Excel Modeling', 'Competitive Benchmarking', 'Slide Deck Synthesis'],
    insiderTip: 'Projects have fixed deadlines (e.g. 3 weeks). Finish them during quiet midterm weeks to maximize your effective hourly rate.'
  },
  {
    id: 'campus-media-producer',
    title: 'University Athletics / Admissions Social Media Specialist',
    department: 'Office of University Communications & Athletics',
    type: 'On-Campus W-2',
    avgHourly: '$17 – $22 / hr',
    maxWeeklyHours: '10 – 15 hrs / wk',
    studyFriendlyRating: 'Active Engagement',
    visaStatus: '100% Legal for F-1 / J-1 Visas',
    hiringSeason: 'Late August and early January',
    howToApply: 'Submit a creative portfolio link or short video reel to student affairs marketing director.',
    skills: ['Canva / Adobe Premiere', 'TikTok/Reels Storytelling', 'Event Photography'],
    insiderTip: 'Gives you backstage access to university sporting events, commencement ceremonies, and direct letters of recommendation from vice chancellors.'
  },
  {
    id: 'department-admin-aide',
    title: 'Academic Department Operations & Reception Aide',
    department: 'School of Humanities & Social Sciences',
    type: 'On-Campus W-2',
    avgHourly: '$16 – $18 / hr',
    maxWeeklyHours: '10 – 12 hrs / wk',
    studyFriendlyRating: 'Very High (Downtime allowed)',
    visaStatus: '100% Legal for F-1 / J-1 Visas',
    hiringSeason: 'Rolling openings each semester',
    howToApply: 'Inquire in person at the front desk of academic building department chairs.',
    skills: ['Google Docs / Workspace', 'Greeting Guests', 'Scheduling'],
    insiderTip: 'Academic departmental assistants often have 2 to 3 uninterrupted hours between phone calls where you can complete problem sets on the clock.'
  }
];

export const CampusCareerPortal: React.FC<{ onNavigateToSafety: () => void }> = ({ onNavigateToSafety }) => {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedOpportunity, setSelectedOpportunity] = useState<CampusRole | null>(null);

  const filtered = VERIFIED_OPPORTUNITIES.filter((role) => {
    if (filterType !== 'all' && role.type !== filterType) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        role.title.toLowerCase().includes(q) ||
        role.department.toLowerCase().includes(q) ||
        role.skills.some((s) => s.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          Campus & Early Career Gateway
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mt-1">
          Verified Campus Employment & Micro-Internships
        </h2>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          The highest-safety earnings tier for enrolled students. Guaranteed W-2 labor protections, class schedule synchronization, and 100% legal compliance for international student visas.
        </p>
      </div>

      {/* Trust & Visa Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                The Gold Standard of Student Labor
              </span>
            </div>
            <h3 className="text-lg font-bold">Why On-Campus & Micro-Internships Top All Other Gigs</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Campus supervisors legally cannot schedule you during lecture hours, federal regulations cap weekly work at 20 hours to protect your GPA, and taxes are handled automatically via Form W-2.
            </p>
          </div>
          <button
            onClick={onNavigateToSafety}
            className="px-4 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0"
          >
            Review Visa Regulations
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-4 shadow-xs">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search roles, majors, departments, or skills..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:bg-white"
          />
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500 font-medium">Type:</span>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:ring-1 focus:ring-teal-600 cursor-pointer"
          >
            <option value="all">All Employment Types</option>
            <option value="On-Campus W-2">On-Campus W-2 (University Direct)</option>
            <option value="Micro-Internship">Micro-Internships (Corporate)</option>
          </select>
        </div>
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((role) => (
          <div
            key={role.id}
            className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-all shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 text-xs mb-2">
                <span className="font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                  {role.type}
                </span>
                <span className="text-emerald-700 font-medium flex items-center gap-1 text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {role.visaStatus}
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-900">{role.title}</h4>
              <p className="text-xs text-slate-500 font-medium mt-0.5">{role.department}</p>

              <div className="mt-4 grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs">
                <div>
                  <span className="text-[11px] text-slate-400 block">Average Pay</span>
                  <span className="font-bold text-slate-900 tabular-nums">{role.avgHourly}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Study Downtime</span>
                  <span className="font-semibold text-slate-800 truncate block">{role.studyFriendlyRating}</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg text-xs text-amber-900">
                <span className="font-bold block mb-0.5">Insider Student Strategy:</span>
                <p className="leading-relaxed">{role.insiderTip}</p>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {role.skills.map((s, idx) => (
                  <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">
                Best to apply: <strong className="text-slate-800">{role.hiringSeason}</strong>
              </span>
              <button
                onClick={() => setSelectedOpportunity(role)}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold cursor-pointer"
              >
                Application Blueprint
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedOpportunity && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                  {selectedOpportunity.type}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">{selectedOpportunity.title}</h3>
                <p className="text-xs text-slate-500">{selectedOpportunity.department}</p>
              </div>
              <button
                onClick={() => setSelectedOpportunity(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">How and Where to Apply:</span>
                <p className="bg-slate-50 p-3 rounded-lg border border-slate-200 leading-relaxed">
                  {selectedOpportunity.howToApply}
                </p>
              </div>

              <div>
                <span className="font-bold text-slate-900 block mb-0.5">Visa & Work Authorization Status:</span>
                <p className="text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                  {selectedOpportunity.visaStatus}. Capped at 20 hours/week during academic terms.
                </p>
              </div>

              <div>
                <span className="font-bold text-slate-900 block mb-0.5">Why this role protects your GPA:</span>
                <p className="text-slate-600 leading-relaxed">
                  {selectedOpportunity.insiderTip}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedOpportunity(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
