import React from 'react';
import { ArrowRight, ShieldCheck, Award, Ruler, Sparkles, ChevronDown } from 'lucide-react';

interface HeroProps {
  onExplorePortfolio: () => void;
  onExploreGear: () => void;
  onScrollToBlog: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplorePortfolio,
  onExploreGear,
  onScrollToBlog
}) => {
  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background grain texture subtle accent */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#a37c4b_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Unboxed Kicker per Zero-Pill discipline */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 dark:text-amber-400 mb-3">
              <span>Studio Furniture Workshop</span>
              <span aria-hidden="true" className="text-amber-500/60">·</span>
              <span>Independent Tool Lab</span>
              <span aria-hidden="true" className="text-amber-500/60">·</span>
              <span>Est. 2008</span>
            </div>

            {/* Display Headline with Serif */}
            <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-normal tracking-tight text-stone-900 dark:text-stone-50 leading-[1.12] mb-6">
              Heirloom timber craft, <br className="hidden sm:inline" />
              <span className="italic font-light text-amber-800 dark:text-amber-400">tested machinery,</span> <br />
              uncompromising joinery.
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed mb-8">
              We design and handcraft custom studio furniture in American Black Walnut, White Oak, and salvaged timber—while publishing rigorous, hands-on tool reviews and joinery blueprints for serious woodworkers.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <button
                onClick={onExplorePortfolio}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-stone-900 dark:bg-amber-600 hover:bg-amber-700 dark:hover:bg-amber-500 rounded-md transition-all shadow-md group"
              >
                <span>View Portfolio Gallery</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreGear}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-800 dark:text-stone-200 bg-stone-200/70 dark:bg-stone-800/80 hover:bg-stone-300 dark:hover:bg-stone-700 rounded-md transition-colors border border-stone-300 dark:border-stone-700"
              >
                <span>Shop-Tested Gear Guide</span>
              </button>
            </div>

            {/* Trust and Craft Credential Strip */}
            <div className="pt-6 border-t border-stone-200 dark:border-stone-800 grid grid-cols-3 gap-4">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-amber-400">
                  18+
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  Years At The Bench
                </div>
              </div>

              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-amber-400">
                  340+
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  Custom Commissions
                </div>
              </div>

              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-amber-400">
                  100%
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  Solid Hardwood · 0% MDF
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Res Master Craftsmanship Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-stone-300/80 dark:border-stone-800 shadow-xl bg-stone-100 dark:bg-stone-900 group">
              <img
                src="/src/assets/images/woodworking_hero_1790205510240.jpg"
                alt="TimberCraft master craftsman workshop with walnut table in progress, hand plane and curled wood shavings"
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-103"
                loading="eager"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Craft Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-md bg-stone-900/90 backdrop-blur-md border border-stone-700/80 text-white">
                <div className="flex items-center justify-between text-xs text-amber-400 font-medium mb-1">
                  <span>CURRENT BENCH BUILD</span>
                  <span>SOLID CLARO WALNUT</span>
                </div>
                <div className="font-serif text-base font-semibold text-stone-100">
                  Bookmatched Kyoto Credenza with Sliding Tambour
                </div>
                <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                  Hand-cut 1:8 through dovetails, French-polished shellac undercoats, and solid brass turned hardware.
                </p>
              </div>
            </div>

            {/* Decorative Corner Accent */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-24 h-24 bg-amber-600/10 dark:bg-amber-500/10 rounded-full blur-2xl -z-10" />
          </div>

        </div>

        {/* Scroll indicator prompt */}
        <div className="mt-12 text-center">
          <button
            onClick={onScrollToBlog}
            aria-label="Scroll down to explore"
            className="inline-flex flex-col items-center gap-1 text-xs text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
          >
            <span className="uppercase tracking-widest text-[10px]">Scroll To Discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
};
