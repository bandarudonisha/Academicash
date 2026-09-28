import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle2, 
  HelpCircle, 
  Info, 
  Scale, 
  Lock, 
  FileCheck,
  Globe2,
  XCircle,
  FileQuestion,
  ChevronRight,
  Eye,
  FileWarning
} from 'lucide-react';
import { STUDENT_AUDIT_CASES, StudentAuditCase } from '../data/auditCases';

export const SafetyHub: React.FC = () => {
  // Scam checker form state
  const [upfrontFee, setUpfrontFee] = useState<'none' | 'equipment' | 'training' | 'deposit'>('none');
  const [communication, setCommunication] = useState<'platform' | 'corporate_email' | 'telegram_whatsapp'>('platform');
  const [paymentMethod, setPaymentMethod] = useState<'escrow_ach' | 'check' | 'crypto_giftcard'>('escrow_ach');
  const [payRate, setPayRate] = useState<'realistic' | 'hyper_inflated'>('realistic');
  const [academicCheating, setAcademicCheating] = useState<'no' | 'yes'>('no');

  // Selected case study
  const [activeCaseId, setActiveCaseId] = useState<string>(STUDENT_AUDIT_CASES[0].id);
  const activeCase = STUDENT_AUDIT_CASES.find((c) => c.id === activeCaseId) || STUDENT_AUDIT_CASES[0];

  // Calculate scam risk
  const evaluateScamRisk = () => {
    let flags: { title: string; desc: string; severity: 'high' | 'medium' }[] = [];
    let riskScore = 0; // 0 is safe, 100 is definite scam

    if (upfrontFee !== 'none') {
      riskScore += 45;
      flags.push({
        title: 'Advance-Fee Fraud Indicator',
        desc: 'Legitimate employers provide tools or hire you for your existing computer. Asking a student to purchase equipment, training kits, or software licenses is a classic upfront fee scam.',
        severity: 'high'
      });
    }

    if (communication === 'telegram_whatsapp') {
      riskScore += 35;
      flags.push({
        title: 'Off-Platform Disintermediation',
        desc: 'Scammers insist on Telegram or WhatsApp to circumvent platform identity verification and dispute protection systems. Never communicate outside official channels.',
        severity: 'high'
      });
    }

    if (paymentMethod === 'check') {
      riskScore += 40;
      flags.push({
        title: 'Counterfeit Cashier’s Check Scheme',
        desc: 'Checks take up to 3 weeks to clear. If an "employer" sends a check and asks you to wire back a portion, the check will bounce, and your bank will hold you responsible for the stolen balance.',
        severity: 'high'
      });
    } else if (paymentMethod === 'crypto_giftcard') {
      riskScore += 50;
      flags.push({
        title: 'Untraceable Payment Channel',
        desc: 'No legitimate, compliant corporate entity pays student workers via Bitcoin, Apple Gift Cards, or non-escrow Zelle transfers.',
        severity: 'high'
      });
    }

    if (payRate === 'hyper_inflated') {
      riskScore += 25;
      flags.push({
        title: 'Unrealistic Pay Trap',
        desc: 'Offers like "$75/hour for basic data entry or copy-pasting" are bait used by predatory phishing rings targeting financially stressed students.',
        severity: 'medium'
      });
    }

    if (academicCheating === 'yes') {
      riskScore += 50;
      flags.push({
        title: 'Academic Dishonesty & University Code Violation',
        desc: 'Writing graded essays, doing homework, or sitting exams for other students is illegal in many jurisdictions and universally triggers academic suspension or expulsion.',
        severity: 'high'
      });
    }

    return {
      score: Math.min(riskScore, 100),
      flags,
      status: riskScore === 0 ? 'safe' : riskScore < 40 ? 'caution' : 'danger'
    };
  };

  const riskResult = evaluateScamRisk();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          Trust, Compliance & Security Standards
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mt-1">
          Safety & Legality Verification Hub
        </h2>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Every platform on AcademiCash is audited against labor regulations, contract safety laws, and campus academic honor codes. Learn how to verify any gig and protect your finances.
        </p>
      </div>

      {/* Interactive Tool: The "Is This Gig Legit?" Scam Audit Checker */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Interactive Opportunity Scam & Legality Auditor
            </h3>
            <p className="text-xs text-slate-500">
              Found a job posting or freelance offer on social media, Discord, or an email? Audit its legitimacy here.
            </p>
          </div>
        </div>

        {/* Audit Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          
          {/* Question 1 */}
          <div className="space-y-2">
            <label className="font-bold text-slate-900 block">
              1. Are they asking you for any upfront payment?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'none', label: 'Zero fees ($0)' },
                { id: 'equipment', label: 'Buy "certified laptop/tools"' },
                { id: 'training', label: 'Pay for "training kit"' },
                { id: 'deposit', label: 'Send refundable deposit' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setUpfrontFee(opt.id as any)}
                  className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                    upfrontFee === opt.id
                      ? 'border-teal-600 bg-teal-50 font-semibold text-teal-900'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div className="space-y-2">
            <label className="font-bold text-slate-900 block">
              2. Where are you communicating with the recruiter?
            </label>
            <div className="grid grid-cols-1 gap-2">
              {[
                { id: 'platform', label: 'Inside verified portal (Upwork, Handshake, etc.)' },
                { id: 'corporate_email', label: 'Official corporate domain email (e.g. @company.com)' },
                { id: 'telegram_whatsapp', label: 'Telegram, WhatsApp, Signal, or personal @gmail' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setCommunication(opt.id as any)}
                  className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                    communication === opt.id
                      ? 'border-teal-600 bg-teal-50 font-semibold text-teal-900'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3 */}
          <div className="space-y-2">
            <label className="font-bold text-slate-900 block">
              3. What payout mechanism is proposed?
            </label>
            <div className="grid grid-cols-1 gap-2">
              {[
                { id: 'escrow_ach', label: 'Platform Escrow, Direct ACH, Stripe, or Verified PayPal' },
                { id: 'check', label: 'Physical or digital check sent via email/courier' },
                { id: 'crypto_giftcard', label: 'Cryptocurrency, Gift Cards, or Wire transfer' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setPaymentMethod(opt.id as any)}
                  className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                    paymentMethod === opt.id
                      ? 'border-teal-600 bg-teal-50 font-semibold text-teal-900'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 4 & 5 */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="font-bold text-slate-900 block">
                4. Is the advertised pay rate realistic for the work?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setPayRate('realistic')}
                  className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                    payRate === 'realistic'
                      ? 'border-teal-600 bg-teal-50 font-semibold text-teal-900'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  Realistic ($15 - $45/hr)
                </button>
                <button
                  onClick={() => setPayRate('hyper_inflated')}
                  className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                    payRate === 'hyper_inflated'
                      ? 'border-rose-600 bg-rose-50 font-semibold text-rose-900'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  Absurd ($60-$100/hr for simple tasks)
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-bold text-slate-900 block">
                5. Does this involve doing student homework or exams for others?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setAcademicCheating('no')}
                  className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                    academicCheating === 'no'
                      ? 'border-teal-600 bg-teal-50 font-semibold text-teal-900'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  No (Legitimate business/tutoring)
                </button>
                <button
                  onClick={() => setAcademicCheating('yes')}
                  className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                    academicCheating === 'yes'
                      ? 'border-rose-600 bg-rose-50 font-semibold text-rose-900'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  Yes (Ghostwriting student essays)
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Live Risk Evaluation Result Box */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <div className={`p-5 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
            riskResult.status === 'safe'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
              : riskResult.status === 'caution'
              ? 'bg-amber-50 border-amber-200 text-amber-950'
              : 'bg-rose-50 border-rose-200 text-rose-950'
          }`}>
            <div className="flex items-center gap-3">
              {riskResult.status === 'safe' ? (
                <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
              ) : riskResult.status === 'caution' ? (
                <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0" />
              ) : (
                <ShieldAlert className="w-8 h-8 text-rose-600 shrink-0" />
              )}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider block">
                  Auditor Assessment
                </span>
                <span className="text-base font-bold">
                  {riskResult.status === 'safe' && 'Low Risk / Standard Legal Framework Detected'}
                  {riskResult.status === 'caution' && 'Caution: Potential Contract or Verification Weakness'}
                  {riskResult.status === 'danger' && 'High Risk: Classic Employment Scam Indicators Detected'}
                </span>
              </div>
            </div>

            <div className="text-right sm:text-right shrink-0">
              <span className="text-xs text-slate-500 block">Risk Index</span>
              <span className="text-2xl font-bold tabular-nums">
                {riskResult.score}/100
              </span>
            </div>
          </div>

          {/* Detected Red Flags Detailed Breakdown */}
          {riskResult.flags.length > 0 ? (
            <div className="mt-4 space-y-2">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Identified Risk Factors:
              </span>
              {riskResult.flags.map((flag, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                  <div className="font-semibold text-rose-900 flex items-center gap-1.5 mb-0.5">
                    <XCircle className="w-3.5 h-3.5 text-rose-600" />
                    <span>{flag.title}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{flag.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-3 text-xs text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Zero red flags detected. The opportunity appears to adhere to standard legal guidelines.</span>
            </div>
          )}
        </div>

      </div>

      {/* The 6 Golden Rules of Legal Student Earning */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            The 6 Golden Rules of Legal Student Earning
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Memorize these core principles to ensure you never fall prey to predatory online labor schemes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              num: '01',
              title: 'The Zero-Upfront-Cost Rule',
              body: 'A real employer pays YOU for your talent. You NEVER pay them. Any requirement to purchase "onboarding supplies," pay for criminal background checks via wire, or pay a registration fee is fraudulent.'
            },
            {
              num: '02',
              title: 'Mandatory Escrow Protection',
              body: 'On platforms like Upwork, Fiverr, Contra, or Parker Dewey, client funds are locked in third-party escrow before work starts. Never send complete deliverables without an escrow deposit.'
            },
            {
              num: '03',
              title: 'Tax Identity Legitimacy',
              body: 'Real platforms require an SSN/TIN or Form W-8BEN. While it feels intimidating, this is legal proof the platform reports to federal tax authorities and operates as a legitimate business.'
            },
            {
              num: '04',
              title: 'Strict Academic Integrity',
              body: 'Never write term papers, take quizzes, or generate academic submissions for other students. Contract cheating is a criminal misdemeanor in several states and leads to immediate expulsion.'
            },
            {
              num: '05',
              title: 'International Student Compliance',
              body: 'Students on F-1 visas in the US are legally restricted to 20 hours/week of on-campus employment during terms. Off-campus gigs require formal CPT or pre-completion OPT authorization from your DSO.'
            },
            {
              num: '06',
              title: 'Clear Deliverables & Scope',
              body: 'Always agree on the number of revision rounds before starting creative or freelance gigs. Uncapped client revisions eat away at study time and destroy your effective hourly wage.'
            },
          ].map((rule) => (
            <div key={rule.num} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-teal-600 block mb-1">{rule.num}</span>
                <h4 className="font-bold text-slate-900 text-sm mb-2">{rule.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{rule.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Case Studies: Real-World Student Scenarios & Post-Mortems */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1">
            <Eye className="w-4 h-4" />
            <span>Forensic Case Archive</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Real Student Case Files: Scams vs. Verified Safe Gigs
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Examine verbatim job offers reported by college students, see detected forensic red flags, and understand the legal liabilities.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {STUDENT_AUDIT_CASES.map((c) => {
            const isSelected = c.id === activeCase.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCaseId(c.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{c.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Review Panel */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 sm:p-6 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {activeCase.badge}
              </span>
              <h4 className="text-lg font-bold text-slate-900 mt-0.5">{activeCase.title}</h4>
              <p className="text-xs text-slate-500">{activeCase.subtitle}</p>
            </div>

            <div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                activeCase.verdict === 'VERIFIED_SAFE'
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : activeCase.verdict === 'HIGH_RISK'
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-rose-100 text-rose-900 border border-rose-300'
              }`}>
                {activeCase.verdict === 'VERIFIED_SAFE' && '✓ Verified Safe'}
                {activeCase.verdict === 'HIGH_RISK' && '⚠ High Academic Risk'}
                {activeCase.verdict === 'SCAM_ALERT' && '⛔ Malicious Scam'}
              </span>
            </div>
          </div>

          {/* Verbatim Offer Excerpt */}
          <div className="p-3.5 bg-white rounded-lg border border-slate-200 text-xs">
            <span className="font-semibold text-slate-500 uppercase text-[10px] tracking-wider block mb-1">
              Verbatim Text Received by Student:
            </span>
            <p className="text-slate-800 font-mono italic leading-relaxed bg-slate-50 p-2.5 rounded border border-slate-100">
              {activeCase.offerExcerpt}
            </p>
          </div>

          {/* Red Flags if any */}
          {activeCase.redFlagsDetected.length > 0 && (
            <div>
              <span className="font-bold text-slate-900 text-xs block mb-1.5">
                Forensic Red Flags Detected:
              </span>
              <ul className="space-y-1 text-xs text-rose-800">
                {activeCase.redFlagsDetected.map((rf, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                    <span>{rf}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Deep Forensic Analysis */}
          <div className="space-y-3 pt-2 border-t border-slate-200 text-xs">
            <div>
              <span className="font-bold text-slate-900 block mb-1">Mechanics & Deception Breakdown:</span>
              <p className="text-slate-700 leading-relaxed">{activeCase.analysis}</p>
            </div>

            <div>
              <span className="font-bold text-slate-900 block mb-1">Legal & Academic Liability:</span>
              <p className="text-slate-600 bg-amber-50/70 p-2.5 rounded border border-amber-200 leading-relaxed">
                {activeCase.legalBreakdown}
              </p>
            </div>

            <div>
              <span className="font-bold text-teal-900 block mb-1">Recommended Safe Student Action:</span>
              <p className="text-teal-950 bg-teal-50 p-2.5 rounded border border-teal-200 leading-relaxed font-medium">
                {activeCase.whatToDoInstead}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Special Deep-Dive: International Students & Visas */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <Globe2 className="w-6 h-6 text-teal-400 shrink-0 mt-1" />
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Important Notice for International Students (F-1 / J-1 Visas)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              If you are studying abroad on an international student visa in the United States, United Kingdom, Canada, or Australia, labor regulations differ significantly from domestic students:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                <span className="font-bold text-teal-400 block mb-1">US F-1 Visa Guidelines</span>
                <p className="text-slate-300 leading-relaxed">
                  During academic sessions, you are only legally permitted to work up to 20 hours/week <strong>on-campus</strong> (e.g., via Handshake campus jobs). Off-campus freelance work or 1099 independent contractor gigs without prior CPT/OPT authorization violates your visa status.
                </p>
              </div>
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                <span className="font-bold text-teal-400 block mb-1">UK & Canadian Work Permits</span>
                <p className="text-slate-300 leading-relaxed">
                  In the UK, Tier 4 student visas strictly ban self-employment or freelancing, but allow up to 20 hours/week of standard W-2 employment. Canada allows up to 24 hours/week of off-campus work during study terms. Always verify with your university international advisor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
