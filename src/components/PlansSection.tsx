import React, { useState } from 'react';
import { WoodworkingPlan } from '../types';
import { PlanViewerModal } from './PlanViewerModal';
import { 
  Compass, 
  Ruler, 
  Clock, 
  DollarSign, 
  Layers, 
  ArrowUpRight, 
  Search, 
  Plus, 
  Trash2,
  CheckSquare,
  Wrench,
  FileSpreadsheet
} from 'lucide-react';

interface PlansSectionProps {
  plans: WoodworkingPlan[];
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  onOpenPublisher?: () => void;
  onDeletePlan?: (id: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({
  plans,
  selectedCategory = 'all',
  onCategoryChange,
  onOpenPublisher,
  onDeletePlan
}) => {
  const [internalCategory, setInternalCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activePlan, setActivePlan] = useState<WoodworkingPlan | null>(null);

  const activeCat = selectedCategory || internalCategory;

  const handleCategoryClick = (catId: string) => {
    if (onCategoryChange) {
      onCategoryChange(catId);
    } else {
      setInternalCategory(catId);
    }
  };

  const categories = [
    { id: 'all', label: 'All Plans & Blueprints' },
    { id: 'shop-jigs', label: 'Shop Jigs & Sleds' },
    { id: 'furniture', label: 'Fine Furniture' },
    { id: 'outdoor', label: 'Outdoor Projects' },
    { id: 'small-craft', label: 'Small Craft & Gifts' },
    { id: 'my-plans', label: 'My Published Plans' },
  ];

  const filteredPlans = plans.filter((plan) => {
    let matchesCat = true;
    if (activeCat === 'all') {
      matchesCat = true;
    } else if (activeCat === 'my-plans') {
      matchesCat = !!plan.isUserPost;
    } else {
      matchesCat = plan.category === activeCat;
    }

    const matchesSearch = searchTerm === '' ||
      plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.recommendedTimber.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
      plan.cutList.some(c => c.partName.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCat && matchesSearch;
  });

  return (
    <section id="plans" className="py-16 md:py-24 border-t border-stone-200 dark:border-stone-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
              <FileSpreadsheet className="w-4 h-4" />
              <span>Woodworking Plans, Blueprints & Cut-Lists</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100 tracking-tight">
              Workshop Blueprints & Cut Sheets
            </h2>
            <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm sm:text-base max-w-2xl">
              Engineered cutting diagrams, dimensioned timber cut-lists, hardware bill of materials, and step-by-step master craftsman assembly notes tested inside our Portland lab.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {onOpenPublisher && (
              <button
                onClick={onOpenPublisher}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md shadow-xs transition-colors shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Post New Plan</span>
              </button>
            )}

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search plans, sleds, tables..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-md border border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
              />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/60 dark:bg-stone-900 rounded-lg border border-stone-300/60 dark:border-stone-800 mb-8 w-fit">
          {categories.map((cat) => {
            const isActive = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  isActive
                    ? 'bg-white dark:bg-amber-600 text-stone-900 dark:text-stone-950 font-semibold shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setActivePlan(plan)}
              className="cursor-pointer rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden shadow-2xs hover:border-amber-600/70 dark:hover:border-amber-500/70 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-stone-100 dark:bg-stone-950">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-stone-950/80 text-white backdrop-blur-xs">
                      {plan.categoryLabel}
                    </span>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-xs bg-amber-600 text-stone-950">
                      {plan.difficulty}
                    </span>
                    {plan.isUserPost && (
                      <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-xs bg-amber-500 text-stone-950">
                        My Plan
                      </span>
                    )}
                  </div>

                  {plan.isUserPost && onDeletePlan && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`Delete custom plan "${plan.title}"?`)) {
                          onDeletePlan(plan.id);
                        }
                      }}
                      className="absolute top-3 right-3 p-1.5 rounded-md bg-stone-950/80 text-red-400 hover:text-red-200 transition-colors"
                      title="Delete plan"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-2">
                    <span className="flex items-center gap-1 font-mono">
                      <Ruler className="w-3 h-3 text-amber-600" />
                      {plan.dimensions}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-600" />
                      {plan.estimatedHours}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors leading-snug line-clamp-2">
                    {plan.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/80 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Cut Parts</span>
                      <span className="font-mono font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-1">
                        <CheckSquare className="w-3 h-3 text-amber-600" />
                        {plan.cutList.length} Components
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Est. Timber Cost</span>
                      <span className="font-mono font-semibold text-amber-800 dark:text-amber-400">
                        {plan.estimatedCost}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between text-xs">
                <span className="text-stone-500 dark:text-stone-400 flex items-center gap-1">
                  <Wrench className="w-3 h-3 text-stone-400" />
                  <span>{plan.recommendedTimber[0] || 'Hardwood'}</span>
                </span>
                <span className="font-semibold text-amber-800 dark:text-amber-400 flex items-center gap-1 group-hover:underline">
                  <span>Open Cut-List & Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredPlans.length === 0 && (
          <div className="text-center py-16 bg-stone-100/50 dark:bg-stone-900/30 rounded-xl border border-dashed border-stone-300 dark:border-stone-800">
            <FileSpreadsheet className="w-8 h-8 mx-auto text-stone-400 mb-2" />
            <p className="text-stone-600 dark:text-stone-300 text-sm font-semibold">
              No woodworking plans match this category or search keyword.
            </p>
            {onOpenPublisher && (
              <button
                onClick={onOpenPublisher}
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md"
              >
                <Plus className="w-4 h-4" />
                <span>Publish the First Plan Here</span>
              </button>
            )}
          </div>
        )}

      </div>

      {/* Interactive Plan Viewer Modal */}
      <PlanViewerModal
        plan={activePlan}
        onClose={() => setActivePlan(null)}
        onOpenPublisher={onOpenPublisher}
      />
    </section>
  );
};
