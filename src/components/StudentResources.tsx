import React, { useState } from 'react';
import { 
  Clock, 
  DollarSign, 
  BookOpen, 
  AlertCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  TrendingUp,
  PieChart,
  ShieldCheck,
  Scale,
  Sparkles,
  ArrowRight,
  Layers
} from 'lucide-react';
import { STUDENT_GUIDES, GuideSection } from '../data/guides';
import { STUDENT_EARNING_BLUEPRINTS, EarningsGoal } from '../data/auditCases';

export const StudentResources: React.FC = () => {
  // Weekly 168-hour budget state
  const [classHours, setClassHours] = useState<number>(15);
  const [studyHours, setStudyHours] = useState<number>(25);
  const [sleepHours, setSleepHours] = useState<number>(56); // 8 hrs x 7
  const [personalHours, setPersonalHours] = useState<number>(28); // Meals, gym, hygiene
  const [workHours, setWorkHours] = useState<number>(10);
  const [hourlyWage, setHourlyWage] = useState<number>(22);

  // Expanded guide tracker
  const [expandedGuideId, setExpandedGuideId] = useState<string>(STUDENT_GUIDES[0].id);

  // Time calculations
  const totalAllocated = classHours + studyHours + sleepHours + personalHours + workHours;
  const remainingHours = 168 - totalAllocated;
  const academicPlusWorkLoad = classHours + studyHours + workHours;

  const getBurnoutStatus = () => {
    if (academicPlusWorkLoad > 55 || remainingHours < 0 || sleepHours < 42) {
      return {
        level: 'danger',
        label: 'High Burnout Danger',
        message: 'Your combined academic and work load exceeds healthy limits. You risk severe sleep deprivation, cognitive fatigue, and GPA decline. Consider trimming your side-work hours.',
      };
    }
    if (academicPlusWorkLoad > 45 || remainingHours < 10) {
      return {
        level: 'caution',
        label: 'Tight Schedule (Moderate Strain)',
        message: 'Your schedule is tightly packed. You have minimal buffer for midterms or unexpected assignments. Keep Sunday free as an academic buffer.',
      };
    }
    return {
      level: 'optimal',
      label: 'Balanced & Sustainable',
      message: 'Excellent time distribution. Your studies remain prioritized, your sleep is protected, and your side-income is predictable and manageable.',
    };
  };

  const burnout = getBurnoutStatus();

  // Financial calculations
  const weeklyGross = workHours * hourlyWage;
  const monthlyGross = weeklyGross * 4.33;
  const taxReserve = monthlyGross * 0.15; // 15% self-employment buffer
  const monthlyNet = monthlyGross - taxReserve;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          Student Success & Financial Literacy
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mt-1">
          Study-Work Balance & Student Financial Tools
        </h2>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          The golden rule of part-time student income: your degree comes first. Use these interactive planners and research-backed frameworks to build wealth without tanking your GPA.
        </p>
      </div>

      {/* Interactive Tool: 168-Hour Weekly Time Budget & Burnout Analyzer */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Weekly 168-Hour Balance & Burnout Analyzer
            </h3>
            <p className="text-xs text-slate-500">
              There are exactly 168 hours in every week. Simulate your class, study, sleep, and side-work hours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Class Lecture Hours */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Class Lecture & Lab Hours</span>
                <span className="tabular-nums text-slate-900">{classHours} hrs / wk</span>
              </div>
              <input
                type="range"
                min="6"
                max="24"
                value={classHours}
                onChange={(e) => setClassHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
              <span className="text-[11px] text-slate-400">Typical full-time enrollment: 12-16 credit hours</span>
            </div>

            {/* Self-Study & Homework */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Study, Reading & Homework (2:1 rule recommended)</span>
                <span className="tabular-nums text-slate-900">{studyHours} hrs / wk</span>
              </div>
              <input
                type="range"
                min="10"
                max="45"
                value={studyHours}
                onChange={(e) => setStudyHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
              <span className="text-[11px] text-slate-400">Suggested: ~{classHours * 1.5} to {classHours * 2} hours for full comprehension</span>
            </div>

            {/* Sleep & Health */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Sleep & Recovery</span>
                <span className="tabular-nums text-slate-900">{sleepHours} hrs / wk ({(sleepHours / 7).toFixed(1)} hrs/night)</span>
              </div>
              <input
                type="range"
                min="35"
                max="63"
                value={sleepHours}
                onChange={(e) => setSleepHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
              <span className="text-[11px] text-slate-400">Under 49 hours/week (7h/night) impairs memory retention</span>
            </div>

            {/* Meals, Transit & Personal Life */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Campus Transit, Meals & Social Life</span>
                <span className="tabular-nums text-slate-900">{personalHours} hrs / wk</span>
              </div>
              <input
                type="range"
                min="14"
                max="40"
                value={personalHours}
                onChange={(e) => setPersonalHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
            </div>

            {/* Proposed Side Work Hours */}
            <div className="pt-2 border-t border-slate-100">
              <div className="flex justify-between text-xs font-bold text-teal-800 mb-1.5">
                <span>Planned Side-Work Earning Hours</span>
                <span className="tabular-nums text-teal-900 font-bold">{workHours} hrs / wk</span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                value={workHours}
                onChange={(e) => setWorkHours(Number(e.target.value))}
                className="w-full h-2 bg-teal-100 rounded-lg appearance-none cursor-pointer accent-teal-700"
              />
              <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                <span>Safe student cap: &le; 15-20 hrs</span>
                <span>Current: {workHours} hrs</span>
              </div>
            </div>

            {/* Hourly Rate Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Target Hourly Pay Rate</span>
                <span className="tabular-nums text-slate-900">${hourlyWage} / hr</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="2"
                value={hourlyWage}
                onChange={(e) => setHourlyWage(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
              />
            </div>

          </div>

          {/* Right Column: Visual Dashboard & Projections */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Visual 168-Hour Distribution Bar */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                <span>168-Hour Week Allocation</span>
                <span className="tabular-nums text-slate-500">{totalAllocated} / 168 hrs</span>
              </div>

              {/* Progress Segments */}
              <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden flex shadow-inner">
                <div 
                  style={{ width: `${(classHours / 168) * 100}%` }} 
                  className="bg-sky-500 h-full" 
                  title={`Classes: ${classHours}h`}
                />
                <div 
                  style={{ width: `${(studyHours / 168) * 100}%` }} 
                  className="bg-indigo-500 h-full" 
                  title={`Study: ${studyHours}h`}
                />
                <div 
                  style={{ width: `${(sleepHours / 168) * 100}%` }} 
                  className="bg-slate-700 h-full" 
                  title={`Sleep: ${sleepHours}h`}
                />
                <div 
                  style={{ width: `${(personalHours / 168) * 100}%` }} 
                  className="bg-amber-400 h-full" 
                  title={`Personal: ${personalHours}h`}
                />
                <div 
                  style={{ width: `${(workHours / 168) * 100}%` }} 
                  className="bg-teal-600 h-full" 
                  title={`Work: ${workHours}h`}
                />
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  <span>Classes ({classHours}h)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  <span>Study ({studyHours}h)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span>Sleep ({sleepHours}h)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                  <span>Side Work ({workHours}h)</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 text-xs flex justify-between font-semibold">
                <span className="text-slate-600">Free Buffer Hours:</span>
                <span className={`tabular-nums ${remainingHours < 0 ? 'text-rose-600 font-bold' : 'text-slate-900'}`}>
                  {remainingHours >= 0 ? `${remainingHours} hrs remaining` : `${Math.abs(remainingHours)} hrs deficit!`}
                </span>
              </div>
            </div>

            {/* Burnout Status Card */}
            <div className={`p-4 rounded-xl border text-xs ${
              burnout.level === 'optimal'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : burnout.level === 'caution'
                ? 'bg-amber-50 border-amber-200 text-amber-950'
                : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}>
              <div className="flex items-center gap-2 font-bold mb-1">
                {burnout.level === 'optimal' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                {burnout.level === 'caution' && <AlertCircle className="w-4 h-4 text-amber-600" />}
                {burnout.level === 'danger' && <AlertCircle className="w-4 h-4 text-rose-600" />}
                <span>{burnout.label}</span>
              </div>
              <p className="leading-relaxed opacity-90">{burnout.message}</p>
            </div>

            {/* Financial Projected Earnings Card */}
            <div className="p-4 bg-slate-900 text-white rounded-xl space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 block">
                Estimated Net Earning Projection
              </span>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Monthly Gross</span>
                  <span className="text-lg font-bold text-white tabular-nums">
                    ${Math.round(monthlyGross)}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">Tax Buffer (15%)</span>
                  <span className="text-lg font-bold text-amber-400 tabular-nums">
                    -${Math.round(taxReserve)}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">Take-Home Savings / Month:</span>
                <span className="text-xl font-bold text-emerald-400 tabular-nums">
                  ~${Math.round(monthlyNet)}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Structured Student Income Archetypes / Blueprints */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Proven Combination Models
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-0.5">
            Student Income Tier Blueprints: Zero GPA Sacrifice
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Real combination models engineered to produce consistent monthly returns while keeping total commitment under the 15–20 hour ceiling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STUDENT_EARNING_BLUEPRINTS.map((bp, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-slate-900">{bp.name}</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 tabular-nums">
                    ${bp.monthlyTarget} / mo
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {bp.description}
                </p>

                <div className="space-y-2.5 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                    Recommended Multi-Platform Stack:
                  </span>
                  {bp.recommendedCombination.map((c, cIdx) => (
                    <div key={cIdx} className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs">
                      <div className="flex justify-between items-center font-bold text-slate-900 mb-0.5">
                        <span>{c.platformName}</span>
                        <span className="text-teal-700 tabular-nums">~${c.estWeekly}/wk</span>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {c.hoursPerWeek} hrs/wk · {c.activity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Total: ~{bp.recommendedCombination.reduce((acc, curr) => acc + curr.hoursPerWeek, 0)} hrs/week</span>
                <span className="text-emerald-700 font-semibold">100% Academic Safe</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable Resource Guides */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Essential Student Guides: Time, Taxes & Financial Independence
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Carefully curated frameworks written specifically for undergraduate and graduate student schedules.
          </p>
        </div>

        <div className="space-y-4">
          {STUDENT_GUIDES.map((guide) => {
            const isExpanded = expandedGuideId === guide.id;
            return (
              <div
                key={guide.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                {/* Guide Accordion Header */}
                <button
                  onClick={() => setExpandedGuideId(isExpanded ? '' : guide.id)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-slate-50/60 transition-colors cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <span className="uppercase text-teal-700 font-semibold">{guide.category}</span>
                      <span>·</span>
                      <span>{guide.readTime}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{guide.title}</h4>
                    <p className="text-xs text-slate-600 line-clamp-1">{guide.summary}</p>
                  </div>

                  <div className="p-1 rounded-md text-slate-400 hover:text-slate-700">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Guide Content */}
                {isExpanded && (
                  <div className="p-6 pt-2 border-t border-slate-100 bg-slate-50/40 text-xs space-y-6">
                    
                    {/* Key Takeaways */}
                    <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl">
                      <span className="font-bold text-teal-950 uppercase tracking-wider block mb-2">
                        Key Takeaways:
                      </span>
                      <ul className="space-y-1.5 text-teal-900">
                        {guide.keyTakeaways.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-5 text-slate-700">
                      {guide.content.map((sec, idx) => (
                        <div key={idx} className="space-y-2">
                          <h5 className="font-bold text-slate-900 text-sm">{sec.heading}</h5>
                          <p className="leading-relaxed">{sec.body}</p>
                          {sec.bulletPoints && (
                            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
                              {sec.bulletPoints.map((b, bIdx) => (
                                <li key={bIdx}>{b}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
