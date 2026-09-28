import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Compass, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { Platform } from '../types/platform';
import { PLATFORMS_DATA } from '../data/platforms';

interface PlatformMatchmakerProps {
  onSelectPlatform: (platform: Platform) => void;
  onExploreDirectory: () => void;
}

export const PlatformMatchmaker: React.FC<PlatformMatchmakerProps> = ({
  onSelectPlatform,
  onExploreDirectory,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [hours, setHours] = useState<number>(6);
  const [skillArea, setSkillArea] = useState<string>('academics');
  const [equipment, setEquipment] = useState<'phone' | 'laptop'>('laptop');
  const [timeline, setTimeline] = useState<'fast_cash' | 'weekly_income' | 'career_portfolio'>('weekly_income');
  const [submitted, setSubmitted] = useState(false);

  const calculateMatches = () => {
    return PLATFORMS_DATA.map((platform) => {
      let score = 0;
      let reasons: string[] = [];

      // Category / Skill match
      if (skillArea === 'academics') {
        if (platform.category === 'tutoring') {
          score += 45;
          reasons.push('Leverages your academic strength to command higher hourly rates.');
        } else if (platform.id === 'prolific') {
          score += 25;
          reasons.push('Academic university research aligns with your college environment.');
        }
      } else if (skillArea === 'creative') {
        if (platform.category === 'freelancing' || platform.category === 'creation') {
          score += 45;
          reasons.push('Great match for packaging visual, audio, or written creative output.');
        }
      } else if (skillArea === 'tech') {
        if (platform.id === 'contra' || platform.id === 'upwork' || platform.id === 'wyzant') {
          score += 45;
          reasons.push('High-paying demand for coding, debugging, and STEM technical skills.');
        }
      } else if (skillArea === 'tasks') {
        if (platform.category === 'microtasks') {
          score += 50;
          reasons.push('Zero prerequisite skill needed; instant start in 15-minute campus gaps.');
        }
      } else if (skillArea === 'career') {
        if (platform.category === 'internships') {
          score += 50;
          reasons.push('Provides formal corporate resume credentials and manager recommendations.');
        }
      }

      // Hours match
      if (hours <= 4) {
        if (platform.category === 'microtasks' || platform.id === 'cambly') {
          score += 25;
          reasons.push('Perfect for under 5 hours/week without ongoing client deadlines.');
        }
      } else if (hours >= 10) {
        if (platform.category === 'freelancing' || platform.category === 'internships') {
          score += 25;
          reasons.push('Allows you to tackle comprehensive projects for maximum earnings.');
        }
      } else {
        score += 20; // 5-9 hours is sweet spot for tutoring and freelancing
      }

      // Equipment match
      if (equipment === 'phone') {
        if (platform.id === 'prolific' || platform.id === 'clickworker' || platform.id === 'usertesting') {
          score += 20;
        } else {
          score -= 15;
        }
      }

      // Timeline match
      if (timeline === 'fast_cash') {
        if (platform.category === 'microtasks') {
          score += 20;
          reasons.push('Fastest cashout cycles (direct PayPal within days).');
        }
      } else if (timeline === 'career_portfolio') {
        if (platform.category === 'internships' || platform.id === 'contra' || platform.id === 'handshake') {
          score += 25;
          reasons.push('Direct corporate experience accelerates your post-grad career.');
        }
      } else {
        if (platform.category === 'tutoring' || platform.category === 'freelancing') {
          score += 20;
          reasons.push('Steady weekly cash flow into your bank account.');
        }
      }

      return {
        platform,
        score,
        reasons: reasons.slice(0, 2),
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  };

  const matches = calculateMatches();

  // Estimate monthly income based on student's chosen hours
  const calculateEstimatedEarnings = (avgRateString: string) => {
    const num = parseInt(avgRateString.replace(/[^0-9]/g, '')) || 20;
    const monthly = num * hours * 4;
    const net = Math.round(monthly * 0.85); // minus 15% tax reserve
    return { gross: monthly, net };
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setSubmitted(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Quiz Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          Personalized Recommendation Engine
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
          Find Your Ideal Part-Time Earning Match
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Answer 4 quick questions about your schedule and goals. We’ll match you with verified, academic-safe platforms that protect your GPA.
        </p>
      </div>

      {!submitted ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-6 pb-4 border-b border-slate-100">
            <span>Step {currentStep} of 4</span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`h-1.5 rounded-full transition-all ${
                    currentStep >= step ? 'w-8 bg-teal-600' : 'w-4 bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* STEP 1: Hours Available */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  How many hours per week can you realistically commit?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Remember the 20-Hour Rule: full-time students should limit work to 15-20 hours max to maintain high academic standing.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { value: 3, label: '1 - 4 hours / week', desc: 'Bite-sized campus breaks (Micro-tasks, fast surveys)' },
                  { value: 7, label: '5 - 8 hours / week', desc: 'Evenings & weekend slots (1-on-1 tutoring, small gigs)' },
                  { value: 12, label: '9 - 14 hours / week', desc: 'Sweet spot for consistent freelance clients or micro-internships' },
                  { value: 18, label: '15 - 20 hours / week', desc: 'Upper limit for full-time undergrads (Campus jobs & major projects)' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setHours(option.value)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      hours === option.value
                        ? 'border-teal-600 bg-teal-50/50 ring-1 ring-teal-600'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-sm">{option.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Primary Skill / Interest */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  What is your primary strength or preferred activity?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Pick the category you enjoy most or where you have natural confidence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'academics', title: 'Academics & Language Fluency', desc: 'Help others with Calculus, Chemistry, English, or high school test prep.' },
                  { id: 'creative', title: 'Creative, Writing & Design', desc: 'Graphic design, video editing, social media copy, or digital planners.' },
                  { id: 'tech', title: 'Coding, Data & Technical', desc: 'Web development, Python scripts, debugging, or technical documentation.' },
                  { id: 'tasks', title: 'No Prior Skill Needed (Testing & Tasks)', desc: 'Test mobile apps, answer research surveys, or do data verification.' },
                  { id: 'career', title: 'Resume Building & Corporate Projects', desc: 'Real corporate micro-internships and campus department roles.' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSkillArea(item.id)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      skillArea === item.id
                        ? 'border-teal-600 bg-teal-50/50 ring-1 ring-teal-600'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Equipment Available */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  What primary device will you be working from?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Some platforms require desktop screen recording, while others run right on your phone.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'laptop', title: 'Laptop or Desktop Computer', desc: 'Access to full suite: video classrooms, coding IDEs, screen recorders, and design tools.' },
                  { id: 'phone', title: 'Smartphone Only', desc: 'Mobile surveys, bite-sized tasks, and quick user feedback audio tests.' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setEquipment(item.id as 'phone' | 'laptop')}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      equipment === item.id
                        ? 'border-teal-600 bg-teal-50/50 ring-1 ring-teal-600'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Income Goal & Payout Urgency */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  What is your primary income goal?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Different platforms offer different trade-offs between speed and hourly value.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'fast_cash', title: 'Fast Cash This Week', desc: 'Immediate payouts to PayPal for urgent groceries or textbooks.' },
                  { id: 'weekly_income', title: 'Steady Weekly Income', desc: 'Predictable recurring earnings to cover regular semester living expenses.' },
                  { id: 'career_portfolio', title: 'Career Credentials', desc: 'Resume-building projects that unlock lucrative post-grad job offers.' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTimeline(item.id as any)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      timeline === item.id
                        ? 'border-teal-600 bg-teal-50/50 ring-1 ring-teal-600'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : <div />}

            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-teal-300" />
                <span>Calculate My Top Matches</span>
              </button>
            )}
          </div>

        </div>
      ) : (
        /* RESULTS VIEW */
        <div className="space-y-6">
          
          {/* Personalized Summary Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">
                  Your Student Earning Profile
                </span>
                <h3 className="text-xl font-bold mt-0.5">Custom Academic Balance Roadmap</h3>
              </div>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 px-3 py-1.5 rounded-lg cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block">Weekly Target</span>
                <span className="text-base font-bold text-white tabular-nums">{hours} hrs/week</span>
              </div>
              <div>
                <span className="text-slate-400 block">Academic Safety</span>
                <span className="text-base font-bold text-teal-400">100% Safe (Under 20hr cap)</span>
              </div>
              <div>
                <span className="text-slate-400 block">Estimated Gross / Mo</span>
                <span className="text-base font-bold text-white tabular-nums">
                  ${matches[0] ? calculateEstimatedEarnings(matches[0].platform.earnings.averageHourly).gross : 0}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Net After 15% Tax Reserve</span>
                <span className="text-base font-bold text-emerald-400 tabular-nums">
                  ~${matches[0] ? calculateEstimatedEarnings(matches[0].platform.earnings.averageHourly).net : 0}
                </span>
              </div>
            </div>
          </div>

          {/* Top 3 Matches */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Top 3 Tailored Platform Recommendations
            </h4>

            {matches.map((item, index) => {
              const est = calculateEstimatedEarnings(item.platform.earnings.averageHourly);
              return (
                <div
                  key={item.platform.id}
                  className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-slate-300 transition-all shadow-xs"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center">
                        #{index + 1}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900">{item.platform.name}</h4>
                      <span className="text-xs text-slate-400">·</span>
                      <span className="text-xs font-semibold text-teal-700 capitalize">{item.platform.category}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.platform.tagline}
                    </p>

                    <div className="space-y-1 pt-1">
                      {item.reasons.map((r, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Financial Estimate for this platform */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs w-full md:w-56 shrink-0 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Hourly Rate:</span>
                      <span className="font-bold text-slate-900">{item.platform.earnings.averageHourly}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">At {hours}h/wk:</span>
                      <span className="font-bold text-teal-800 tabular-nums">${est.gross} / mo</span>
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <button
                        onClick={() => onSelectPlatform(item.platform)}
                        className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                      >
                        View Full Blueprint
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Directory Link */}
          <div className="text-center pt-4">
            <button
              onClick={onExploreDirectory}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900 cursor-pointer"
            >
              <span>Explore all 15+ verified student platforms</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
};
