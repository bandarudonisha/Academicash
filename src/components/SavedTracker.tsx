import React from 'react';
import { 
  Bookmark, 
  Trash2, 
  ExternalLink, 
  FileEdit, 
  CheckCircle, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Platform, SavedPlatformItem, ApplicationStatus } from '../types/platform';
import { PLATFORMS_DATA } from '../data/platforms';

interface SavedTrackerProps {
  savedItems: SavedPlatformItem[];
  onRemove: (platformId: string) => void;
  onUpdateStatus: (platformId: string, status: ApplicationStatus) => void;
  onUpdateNotes: (platformId: string, notes: string) => void;
  onOpenDetails: (platform: Platform) => void;
  onExploreDirectory: () => void;
}

export const SavedTracker: React.FC<SavedTrackerProps> = ({
  savedItems,
  onRemove,
  onUpdateStatus,
  onUpdateNotes,
  onOpenDetails,
  onExploreDirectory,
}) => {
  const getPlatform = (id: string) => {
    return PLATFORMS_DATA.find((p) => p.id === id);
  };

  const statusOptions: { id: ApplicationStatus; label: string }[] = [
    { id: 'saved', label: 'Considering / Researching' },
    { id: 'applying', label: 'Application Submitted' },
    { id: 'approved', label: 'Profile Verified & Approved' },
    { id: 'active', label: 'Currently Earning' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          Personal Action Tracker
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mt-1">
          Your Saved Earning Platforms ({savedItems.length})
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Track onboarding stages, store notes on application requirements, and manage your student gigs in one place.
        </p>
      </div>

      {savedItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-xs max-w-lg mx-auto">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400 mb-4">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">No platforms saved yet</h3>
          <p className="text-xs text-slate-500 mt-1 mb-6 leading-relaxed">
            Click the bookmark icon on any platform card while exploring to save it to your personal application pipeline.
          </p>
          <button
            onClick={onExploreDirectory}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            <span>Browse All Platforms</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {savedItems.map((item) => {
            const platform = getPlatform(item.platformId);
            if (!platform) return null;

            return (
              <div
                key={item.platformId}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                {/* Platform Overview */}
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                      {platform.category}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-500">Avg {platform.earnings.averageHourly}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-500">{platform.timeCommitment}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{platform.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                    {platform.tagline}
                  </p>

                  {/* Notes Field */}
                  <div className="pt-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 mb-1">
                      <FileEdit className="w-3.5 h-3.5 text-slate-400" />
                      <span>Student Notes & Deadlines:</span>
                    </div>
                    <input
                      type="text"
                      value={item.notes}
                      onChange={(e) => onUpdateNotes(item.platformId, e.target.value)}
                      placeholder="e.g. Uploaded student ID on Sept 28, waiting on tax review..."
                      className="w-full text-xs px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Status & Actions Controls */}
                <div className="w-full md:w-64 shrink-0 space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">
                      Application Status:
                    </label>
                    <select
                      value={item.status}
                      onChange={(e) => onUpdateStatus(item.platformId, e.target.value as ApplicationStatus)}
                      aria-label={`Application status for ${platform.name}`}
                      className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 font-medium text-slate-800 focus:ring-1 focus:ring-teal-600 text-xs cursor-pointer"
                    >
                      {statusOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => onOpenDetails(platform)}
                      className="flex-1 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold cursor-pointer"
                    >
                      Full Details
                    </button>
                    <a
                      href={platform.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-teal-50 hover:bg-teal-100 text-teal-800 rounded border border-teal-200"
                      title="Open official site"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => onRemove(item.platformId)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded hover:bg-rose-50"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
