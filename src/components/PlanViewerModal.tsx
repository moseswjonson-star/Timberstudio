import React, { useState } from 'react';
import { WoodworkingPlan } from '../types';
import { 
  X, 
  Printer, 
  CheckSquare, 
  Square, 
  Clock, 
  DollarSign, 
  Ruler, 
  Wrench, 
  Layers, 
  Lightbulb, 
  Download, 
  Hammer,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';

interface PlanViewerModalProps {
  plan: WoodworkingPlan | null;
  onClose: () => void;
  onOpenPublisher?: () => void;
}

export const PlanViewerModal: React.FC<PlanViewerModalProps> = ({
  plan,
  onClose,
  onOpenPublisher
}) => {
  const [checkedParts, setCheckedParts] = useState<Record<number, boolean>>({});
  const [activeTab, setActiveTab] = useState<'cutlist' | 'assembly' | 'hardware'>('cutlist');

  if (!plan) return null;

  const toggleCheckPart = (index: number) => {
    setCheckedParts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const completedCuts = Object.values(checkedParts).filter(Boolean).length;
  const totalCuts = plan.cutList.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#faf7f2] dark:bg-[#181716] border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl overflow-hidden my-6 text-stone-900 dark:text-stone-100 max-h-[92vh] flex flex-col text-left">
        
        {/* Modal Top Header */}
        <div className="p-4 sm:p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-100/70 dark:bg-stone-900/70 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              <span>{plan.categoryLabel}</span>
              <span>·</span>
              <span className="px-2 py-0.5 rounded-xs bg-amber-600/20 text-amber-900 dark:text-amber-300 font-semibold">
                {plan.difficulty}
              </span>
              {plan.isUserPost && (
                <span className="px-1.5 py-0.5 rounded-xs bg-amber-500 text-stone-950 font-extrabold text-[10px]">
                  User Submitted
                </span>
              )}
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
              {plan.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-xs font-semibold text-stone-800 dark:text-stone-200 transition-colors"
              title="Print Cut Sheet for Workshop"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print Cut Sheet</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-lg bg-stone-200/50 dark:bg-stone-900/60 border border-stone-300/40 dark:border-stone-800/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-600" /> Build Time
              </span>
              <p className="text-xs sm:text-sm font-semibold mt-1">{plan.estimatedHours}</p>
            </div>

            <div className="p-3 rounded-lg bg-stone-200/50 dark:bg-stone-900/60 border border-stone-300/40 dark:border-stone-800/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1">
                <DollarSign className="w-3 h-3 text-amber-600" /> Material Cost
              </span>
              <p className="text-xs sm:text-sm font-semibold mt-1">{plan.estimatedCost}</p>
            </div>

            <div className="p-3 rounded-lg bg-stone-200/50 dark:bg-stone-900/60 border border-stone-300/40 dark:border-stone-800/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1">
                <Ruler className="w-3 h-3 text-amber-600" /> Dimensions
              </span>
              <p className="text-xs sm:text-sm font-semibold mt-1">{plan.dimensions}</p>
            </div>

            <div className="p-3 rounded-lg bg-stone-200/50 dark:bg-stone-900/60 border border-stone-300/40 dark:border-stone-800/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1">
                <Layers className="w-3 h-3 text-amber-600" /> Lumber Needed
              </span>
              <p className="text-xs sm:text-sm font-semibold mt-1 truncate" title={plan.totalBoardFeet}>
                {plan.totalBoardFeet}
              </p>
            </div>
          </div>

          {/* Overview & Image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-6 rounded-xl overflow-hidden bg-stone-900 h-56 sm:h-64">
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-6 space-y-3">
              <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                Plan Overview & Engineering
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {plan.description}
              </p>

              <div className="space-y-1.5 pt-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  Recommended Timber Species:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {plan.recommendedTimber.map((timber, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-xs bg-amber-600/10 border border-amber-600/20 text-amber-900 dark:text-amber-300 text-xs font-mono font-medium">
                      {timber}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  Required Shop Tools:
                </p>
                <ul className="text-xs text-stone-600 dark:text-stone-400 space-y-1">
                  {plan.recommendedTools.map((tool, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Segmented Tabs: Cut List, Assembly Phases, Hardware */}
          <div className="border-t border-stone-200 dark:border-stone-800 pt-4">
            <div className="flex items-center gap-2 p-1 bg-stone-200/60 dark:bg-stone-900 rounded-lg w-fit mb-4">
              <button
                onClick={() => setActiveTab('cutlist')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeTab === 'cutlist'
                    ? 'bg-white dark:bg-amber-600 text-stone-900 dark:text-stone-950 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                }`}
              >
                Interactive Cut List ({completedCuts}/{totalCuts} Done)
              </button>
              <button
                onClick={() => setActiveTab('assembly')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeTab === 'assembly'
                    ? 'bg-white dark:bg-amber-600 text-stone-900 dark:text-stone-950 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                }`}
              >
                Assembly Phases & Pro Tips ({plan.assemblyPhases.length})
              </button>
              <button
                onClick={() => setActiveTab('hardware')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeTab === 'hardware'
                    ? 'bg-white dark:bg-amber-600 text-stone-900 dark:text-stone-950 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                }`}
              >
                Hardware BOM ({plan.hardwareList.length})
              </button>
            </div>

            {/* TAB 1: INTERACTIVE CUT LIST TABLE */}
            {activeTab === 'cutlist' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span>Check off each part as you mill & dimension it at the saw:</span>
                  <span className="font-mono text-amber-700 dark:text-amber-400 font-semibold">
                    {Math.round((completedCuts / totalCuts) * 100)}% Cut Progress
                  </span>
                </div>

                <div className="overflow-x-auto rounded-lg border border-stone-200 dark:border-stone-800">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-stone-100 dark:bg-stone-900/80 text-stone-600 dark:text-stone-300 uppercase tracking-wider font-semibold border-b border-stone-200 dark:border-stone-800">
                        <th className="p-3 w-10">Done</th>
                        <th className="p-3">Part Name</th>
                        <th className="p-3 text-center">Qty</th>
                        <th className="p-3">Thickness</th>
                        <th className="p-3">Width</th>
                        <th className="p-3">Length</th>
                        <th className="p-3">Material</th>
                        <th className="p-3">Machining Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                      {plan.cutList.map((item, idx) => {
                        const isChecked = !!checkedParts[idx];
                        return (
                          <tr
                            key={idx}
                            onClick={() => toggleCheckPart(idx)}
                            className={`cursor-pointer transition-colors ${
                              isChecked
                                ? 'bg-amber-500/10 text-stone-500 line-through'
                                : 'hover:bg-stone-100/50 dark:hover:bg-stone-900/50'
                            }`}
                          >
                            <td className="p-3 text-center">
                              {isChecked ? (
                                <CheckSquare className="w-4 h-4 text-amber-600 inline" />
                              ) : (
                                <Square className="w-4 h-4 text-stone-400 inline" />
                              )}
                            </td>
                            <td className="p-3 font-semibold text-stone-900 dark:text-stone-100">
                              {item.partName}
                            </td>
                            <td className="p-3 text-center font-mono font-bold">
                              {item.qty}
                            </td>
                            <td className="p-3 font-mono">{item.thickness}</td>
                            <td className="p-3 font-mono">{item.width}</td>
                            <td className="p-3 font-mono">{item.length}</td>
                            <td className="p-3">{item.material}</td>
                            <td className="p-3 text-[11px] text-stone-500 dark:text-stone-400">
                              {item.notes || '—'}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 2: ASSEMBLY PHASES */}
            {activeTab === 'assembly' && (
              <div className="space-y-4">
                {plan.assemblyPhases.map((phase) => (
                  <div
                    key={phase.phaseNumber}
                    className="p-4 rounded-lg bg-stone-100/60 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 text-left space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-600 text-stone-950 font-bold text-xs flex items-center justify-center">
                        {phase.phaseNumber}
                      </span>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
                        {phase.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 pl-8 leading-relaxed">
                      {phase.description}
                    </p>
                    {phase.proTips && (
                      <div className="ml-8 mt-2 p-3 rounded bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold">Master Craftsman Tip:</strong> {phase.proTips}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: HARDWARE BOM */}
            {activeTab === 'hardware' && (
              <div className="p-4 rounded-lg bg-stone-100/60 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 space-y-3">
                <h4 className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-amber-600" />
                  <span>Hardware, Fasteners & Chemistry Checklist</span>
                </h4>
                <p className="text-xs text-stone-500">
                  Everything required to complete assembly without making emergency trips to the supply house:
                </p>
                <ul className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
                  {plan.hardwareList.map((hw, i) => (
                    <li key={i} className="flex items-center gap-2 p-2 rounded bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                      <span className="w-2 h-2 rounded-full bg-amber-600" />
                      <span>{hw}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-4 sm:p-5 border-t border-stone-200 dark:border-stone-800 bg-stone-100/80 dark:bg-stone-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>Always test zero-clearance cuts on scrap timber first. Wear safety eye protection.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-stone-800 dark:text-stone-200 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 rounded-md transition-colors flex items-center justify-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print Workshop Card</span>
            </button>

            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md shadow-xs transition-colors"
            >
              Close Plan
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
