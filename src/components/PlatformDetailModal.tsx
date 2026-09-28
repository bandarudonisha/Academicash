import React from 'react';
import { 
  X, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Bookmark, 
  BookmarkCheck,
  Building,
  FileText,
  DollarSign,
  Clock,
  Globe,
  Award
} from 'lucide-react';
import { Platform } from '../types/platform';

interface PlatformDetailModalProps {
  platform: Platform | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (platformId: string) => void;
}

export const PlatformDetailModal: React.FC<PlatformDetailModalProps> = ({
  platform,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  if (!platform) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Sticky Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-200 bg-slate-50/70">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
              <span className="uppercase tracking-wider text-teal-700 font-semibold">{platform.category}</span>
              <span>·</span>
              <span>Min Age {platform.eligibility.minAge}+</span>
              <span>·</span>
              <span>{platform.difficulty} Difficulty</span>
            </div>
            <h2 id="modal-headline" className="text-2xl font-bold text-slate-900">
              {platform.name}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {platform.tagline}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(platform.id)}
              className={`p-2 rounded-lg border text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                isSaved
                  ? 'bg-teal-50 border-teal-300 text-teal-700'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 divide-y divide-slate-100 text-sm">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">Average Pay</span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">{platform.earnings.averageHourly}</span>
              <span className="text-[11px] text-slate-500 block truncate">{platform.earnings.range}</span>
            </div>
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">Payout Frequency</span>
              <span className="text-sm font-semibold text-slate-900 block truncate">{platform.earnings.payoutFrequency}</span>
              <span className="text-[11px] text-slate-500 block">Min: {platform.earnings.minimumPayout}</span>
            </div>
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">Payout Channels</span>
              <span className="text-xs font-semibold text-slate-800 block truncate">{platform.earnings.payoutMethods.join(', ')}</span>
              <span className="text-[11px] text-emerald-700 font-medium">Direct Transfer</span>
            </div>
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">Student Fit Score</span>
              <span className="text-sm font-bold text-teal-800 tabular-nums">{platform.eligibility.studentFriendlyScore}/10</span>
              <span className="text-[11px] text-slate-500 block">Verified Student-Friendly</span>
            </div>
          </div>

          {/* Section: Overview & How it works */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-slate-900 mb-2">How It Works Step-by-Step</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              {platform.description}
            </p>
            <ol className="space-y-2.5">
              {platform.howItWorks.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 leading-snug">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Section: Safety & Legality Audit Check (CRITICAL REQUIREMENT) */}
          <div className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h3 className="text-base font-bold text-slate-900">Safety & Legality Verification Audit</h3>
            </div>
            
            <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-4.5 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="font-semibold text-emerald-950 block">Corporate Registration:</span>
                  <span className="text-emerald-900">{platform.safetyLegality.businessRegistration}</span>
                </div>
                <div>
                  <span className="font-semibold text-emerald-950 block">Tax Compliance:</span>
                  <span className="text-emerald-900">{platform.safetyLegality.taxReporting}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-emerald-200/60">
                <span className="font-semibold text-emerald-950 text-xs block mb-2">Audited Trust Safeguards:</span>
                <ul className="space-y-1.5 text-xs text-emerald-900">
                  {platform.safetyLegality.safetyAuditNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Eligibility & Visa Compliance */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-slate-900 mb-3">Eligibility & Student Verification</h3>
            <div className="space-y-2 text-slate-700">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900">Minimum Age:</span>
                <span>{platform.eligibility.minAge} years old</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900 block mb-1">Required Verification Documents:</span>
                <ul className="list-disc list-inside text-slate-600 space-y-1 text-xs">
                  {platform.eligibility.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
              {platform.eligibility.internationalNotes && (
                <div className="mt-3 p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900">
                  <span className="font-semibold block mb-0.5">International Student Compliance Note:</span>
                  {platform.eligibility.internationalNotes}
                </div>
              )}
            </div>
          </div>

          {/* Section: Pros vs Watch-Outs */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Student Advantages</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {platform.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Watch-Outs & Pitfalls</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {platform.watchOuts.map((watch, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">!</span>
                    <span>{watch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Student Pro-Tip */}
          <div className="pt-6">
            <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl">
              <span className="font-bold text-teal-950 text-xs uppercase tracking-wider block mb-1">
                College Insider Pro-Tip
              </span>
              <p className="text-teal-900 text-xs leading-relaxed">
                {platform.studentProTip}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Close Window
          </button>

          <a
            href={platform.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            <span>Visit Official {platform.name} Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
