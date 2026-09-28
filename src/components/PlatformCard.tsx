import React from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  Check, 
  AlertCircle, 
  ArrowUpRight,
  Clock,
  DollarSign
} from 'lucide-react';
import { Platform } from '../types/platform';

interface PlatformCardProps {
  platform: Platform;
  onOpenDetails: (platform: Platform) => void;
  isSaved: boolean;
  onToggleSave: (platformId: string) => void;
  isComparing: boolean;
  onToggleCompare: (platformId: string) => void;
}

export const PlatformCard: React.FC<PlatformCardProps> = ({
  platform,
  onOpenDetails,
  isSaved,
  onToggleSave,
  isComparing,
  onToggleCompare,
}) => {
  const getCategoryLabel = (cat: Platform['category']) => {
    switch (cat) {
      case 'freelancing': return 'Freelancing & Client Work';
      case 'tutoring': return 'Online Tutoring';
      case 'internships': return 'Micro-Internships';
      case 'creation': return 'Digital Products';
      case 'microtasks': return 'Micro-Tasks & Testing';
    }
  };

  return (
    <article className="group bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-all duration-200 shadow-xs hover:shadow-sm">
      
      {/* Top Header & Quiet Unboxed Metadata */}
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            {/* Clean unboxed metadata with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium mb-1.5">
              <span className="text-teal-700 font-semibold">{getCategoryLabel(platform.category)}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Min Age {platform.eligibility.minAge}+</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{platform.difficulty} Difficulty</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
              {platform.name}
            </h3>
          </div>

          {/* Bookmark & Compare Quick Toggles */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => onToggleCompare(platform.id)}
              title={isComparing ? 'Remove from comparison' : 'Compare with another platform'}
              className={`px-2.5 py-1 text-xs font-medium rounded border transition-colors cursor-pointer ${
                isComparing
                  ? 'bg-teal-50 border-teal-300 text-teal-800'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {isComparing ? '✓ Comparing' : '+ Compare'}
            </button>

            <button
              onClick={() => onToggleSave(platform.id)}
              title={isSaved ? 'Saved to bookmarks' : 'Save for later'}
              className={`p-1.5 rounded border transition-colors cursor-pointer ${
                isSaved
                  ? 'bg-teal-50 border-teal-300 text-teal-700'
                  : 'bg-white border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-300'
              }`}
              aria-label={isSaved ? `Remove ${platform.name} from saved` : `Save ${platform.name}`}
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Platform Tagline & Description */}
        <p className="mt-2.5 text-sm text-slate-600 font-medium leading-snug">
          {platform.tagline}
        </p>
        <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {platform.description}
        </p>

        {/* Key Metrics Grid */}
        <div className="mt-5 grid grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-100 text-xs">
          <div>
            <span className="text-[11px] text-slate-500 font-medium block">Average Pay</span>
            <span className="text-sm font-bold text-slate-900 tabular-nums">
              {platform.earnings.averageHourly}
            </span>
            <span className="text-[11px] text-slate-500 block truncate mt-0.5">
              {platform.earnings.range}
            </span>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 font-medium block">Time Commitment</span>
            <span className="text-sm font-semibold text-slate-800">
              {platform.timeCommitment}
            </span>
            <span className="text-[11px] text-slate-500 block truncate mt-0.5">
              Min cashout: {platform.earnings.minimumPayout}
            </span>
          </div>
        </div>

        {/* Safety & Legality Trust Signal */}
        <div className="mt-4 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Audited & Verified Legal</span>
          </div>
          <span className="text-slate-500 text-[11px]">
            {platform.safetyLegality.escrowOrGuaranteedPay ? 'Escrow Protected' : 'Guaranteed Pay'}
          </span>
        </div>

        {/* Student Pro-Tip Callout Box */}
        <div className="mt-3.5 pt-3 border-t border-slate-100">
          <p className="text-[11px] text-slate-600 leading-relaxed italic bg-amber-50/60 p-2.5 rounded border border-amber-100">
            <span className="font-semibold text-amber-900 not-italic">Student Pro-Tip: </span>
            {platform.studentProTip}
          </p>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(platform)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
        >
          <span>Full Guide & Safety Audit</span>
        </button>

        <a
          href={platform.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold text-teal-800 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors cursor-pointer"
          title={`Visit official ${platform.name} website`}
        >
          <span>Official Site</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </article>
  );
};
