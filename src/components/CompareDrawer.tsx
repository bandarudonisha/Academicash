import React from 'react';
import { X, ArrowRight, ShieldCheck, Check, DollarSign, Clock, Layers } from 'lucide-react';
import { Platform } from '../types/platform';

interface CompareDrawerProps {
  comparePlatforms: Platform[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onOpenDetails: (platform: Platform) => void;
}

export const CompareDrawer: React.FC<CompareDrawerProps> = ({
  comparePlatforms,
  onRemove,
  onClear,
  onOpenDetails,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (comparePlatforms.length === 0) return null;

  return (
    <>
      {/* Floating Bottom Bar */}
      <aside aria-label="Platform Comparison" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-4 max-w-xl w-[92%] sm:w-auto border border-slate-800">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-teal-400 shrink-0" />
          <div className="text-xs">
            <span className="font-bold">{comparePlatforms.length} of 3</span>
            <span className="text-slate-400 ml-1 hidden sm:inline">platforms selected</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto">
          {comparePlatforms.map((p) => (
            <span
              key={p.id}
              className="inline-flex items-center gap-1 bg-slate-800 text-slate-200 text-xs px-2.5 py-1 rounded-md"
            >
              <span className="truncate max-w-[100px]">{p.name}</span>
              <button
                onClick={() => onRemove(p.id)}
                className="text-slate-400 hover:text-white"
                aria-label={`Remove ${p.name}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="px-3.5 py-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Compare Side-by-Side
          </button>
          <button
            onClick={onClear}
            className="text-xs text-slate-400 hover:text-slate-200 px-1 cursor-pointer"
            title="Clear all"
          >
            Clear
          </button>
        </div>
      </aside>

      {/* Comparison Full Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Side-by-Side Platform Comparison</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Evaluate potential earnings, escrow safety, time commitment, and student requirements.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Comparison Table */}
            <div className="p-6 overflow-y-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="py-3 px-4 text-slate-500 font-semibold w-1/4">Criteria</th>
                      {comparePlatforms.map((p) => (
                        <th key={p.id} className="py-3 px-4 font-bold text-slate-900 text-sm">
                          <div className="flex items-center justify-between">
                            <span>{p.name}</span>
                            <button
                              onClick={() => onRemove(p.id)}
                              className="text-slate-400 hover:text-rose-600 ml-2"
                              title="Remove"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <span className="text-[11px] font-normal text-slate-500 block capitalize">
                            {p.category}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-600 bg-slate-50/50">Average Pay</td>
                      {comparePlatforms.map((p) => (
                        <td key={p.id} className="py-3 px-4 font-bold text-slate-900 tabular-nums">
                          {p.earnings.averageHourly}
                          <span className="block text-[11px] font-normal text-slate-500">{p.earnings.range}</span>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-600 bg-slate-50/50">Weekly Commitment</td>
                      {comparePlatforms.map((p) => (
                        <td key={p.id} className="py-3 px-4 text-slate-700">
                          {p.timeCommitment}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-600 bg-slate-50/50">Payout Methods</td>
                      {comparePlatforms.map((p) => (
                        <td key={p.id} className="py-3 px-4 text-slate-700">
                          {p.earnings.payoutMethods.join(', ')}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-600 bg-slate-50/50">Minimum Cashout</td>
                      {comparePlatforms.map((p) => (
                        <td key={p.id} className="py-3 px-4 text-slate-700 font-medium">
                          {p.earnings.minimumPayout}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-600 bg-slate-50/50">Safety & Escrow</td>
                      {comparePlatforms.map((p) => (
                        <td key={p.id} className="py-3 px-4 text-emerald-700 font-medium">
                          <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{p.safetyLegality.escrowOrGuaranteedPay ? 'Escrow Protected' : 'Guaranteed'}</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-600 bg-slate-50/50">Age & Requirements</td>
                      {comparePlatforms.map((p) => (
                        <td key={p.id} className="py-3 px-4 text-slate-700">
                          <div>Min Age: {p.eligibility.minAge}+</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">Score: {p.eligibility.studentFriendlyScore}/10</div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-600 bg-slate-50/50">Key Skills</td>
                      {comparePlatforms.map((p) => (
                        <td key={p.id} className="py-3 px-4 text-slate-700">
                          {p.skillsNeeded.slice(0, 3).join(', ')}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-600 bg-slate-50/50">Actions</td>
                      {comparePlatforms.map((p) => (
                        <td key={p.id} className="py-3 px-4">
                          <button
                            onClick={() => {
                              setIsOpen(false);
                              onOpenDetails(p);
                            }}
                            className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold cursor-pointer"
                          >
                            Full Details
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100"
              >
                Close Comparison
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
