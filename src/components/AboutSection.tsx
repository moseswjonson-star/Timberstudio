import React from 'react';
import { Compass, Hammer, ShieldCheck, TreePine, Sparkles, Award } from 'lucide-react';
import johnsonProfileImg from '../assets/images/johnson_wadimbe_profile_1790219074978.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual & Detail Shot */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden border border-stone-300 dark:border-stone-800 shadow-xl bg-stone-900 group">
              <img
                src="/src/assets/images/joinery_detail_1790205522631.jpg"
                alt="Hand-cut dovetail joinery in black walnut and hard maple"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-md bg-stone-900/90 backdrop-blur-md border border-stone-700 text-stone-200 text-xs">
                <div className="flex items-center gap-1.5 text-amber-400 font-semibold mb-1">
                  <Hammer className="w-3.5 h-3.5" />
                  <span>THE BENCHMARK STANDARD</span>
                </div>
                <p>
                  Hand-chiseled through dovetails in solid American Black Walnut and Sugar Maple. No computer CNCs, no filler putty—pure friction-lock joinery built to endure centuries.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Story */}
          <div className="lg:col-span-7 text-left order-1 lg:order-2 space-y-6">
            
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
                <Compass className="w-4 h-4" />
                <span>The Studio Philosophy & Guild Ethos</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
                Crafting heirlooms in a culture of disposable furniture.
              </h2>
            </div>

            <p className="text-stone-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed font-light">
              Founded in 2008 in the Pacific Northwest by master furniture maker Johnson Wadimbe, TimberCraft Studio was built on a simple conviction: wood is a living material that deserves generational reverence, not disposable flatpack shortcuts.
            </p>

            <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
              Every dining table, credenza, and custom desk leaving our shop begins as rough-sawn lumber personally selected from regional sawmills practicing sustainable selective logging and urban tree salvage. We dry our own stock to 7% equilibrium moisture content, hand-plane surfaces to avoid machine chatter, and assemble using traditional mortise, tenon, and dovetail joints designed to breathe naturally with seasonal humidity shifts.
            </p>

            {/* Three Pillar Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200 dark:border-stone-800">
              
              <div className="space-y-1.5">
                <div className="w-8 h-8 rounded-sm bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 flex items-center justify-center mb-2">
                  <TreePine className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">
                  Ethical Sourcing
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                  100% domestic Appalachian hardwoods and certified urban salvage logs. Zero illegal rainforest timbers.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="w-8 h-8 rounded-sm bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">
                  Unbiased Tool Tests
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                  We purchase or workshop-test every tool for months. No paid sponsorships; just honest craftsman field reviews.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="w-8 h-8 rounded-sm bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 flex items-center justify-center mb-2">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">
                  0% Plastic Finishes
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                  Zero-VOC plant oils and European hardwax finishes that can be spot-repaired without stripping the entire piece.
                </p>
              </div>

            </div>

            {/* Master Maker Profile Card */}
            <div className="mt-8 p-5 rounded-xl bg-stone-100 dark:bg-stone-900/70 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center gap-5">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-amber-600 dark:border-amber-500 shrink-0 shadow-md">
                <img
                  src={johnsonProfileImg}
                  alt="Johnson Wadimbe, Master Furniture Maker"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left space-y-1.5">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-sm">
                  <Award className="w-3.5 h-3.5" />
                  <span>Master Founder & Lead Woodworker</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                  Johnson Wadimbe
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 italic leading-relaxed">
                  "Every joint we cut and every oil we rub is an act of respect for the tree's decades of growth. We build heirlooms intended to outlive us."
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
