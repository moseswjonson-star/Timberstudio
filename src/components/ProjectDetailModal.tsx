import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Hammer, Clock, Ruler, Sparkles, CheckCircle2, ShoppingBag } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectGearProduct?: (productId: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectGearProduct
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-4xl bg-[#faf7f2] dark:bg-[#181614] rounded-lg shadow-2xl border border-stone-300 dark:border-stone-800 overflow-hidden my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white backdrop-blur-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Content Container */}
        <div className="max-h-[85vh] overflow-y-auto">
          
          {/* Hero Banner Images */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full bg-stone-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
            
            {/* Title Overlay on Hero */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
                <span aria-hidden="true">·</span>
                <span>{project.clientOrLocation}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white leading-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8 space-y-8">

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-md bg-stone-100 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 text-xs">
              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-0.5 font-medium">Build Time</span>
                <span className="font-semibold text-sm flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  {project.buildTime}
                </span>
              </div>

              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-0.5 font-medium">Difficulty Level</span>
                <span className="font-semibold text-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  {project.difficulty} Craft
                </span>
              </div>

              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-0.5 font-medium">Finished Dimensions</span>
                <span className="font-semibold text-sm flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  {project.dimensions}
                </span>
              </div>

              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-0.5 font-medium">Finishing Schedule</span>
                <span className="font-semibold text-sm truncate" title={project.finish}>
                  {project.finish.split(' ')[0]}...
                </span>
              </div>
            </div>

            {/* The Build Narrative */}
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">
                The Build Narrative & Concept
              </h3>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed text-sm sm:text-base">
                {project.fullStory}
              </p>
            </div>

            {/* Timber & Joinery Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Timber Species */}
              <div className="p-4 rounded-md border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/30">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-800 dark:text-amber-400 mb-2">
                  Timber Species Specified
                </h4>
                <ul className="space-y-1.5 text-sm text-stone-700 dark:text-stone-300">
                  {project.timberSpecies.map((species, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                      <span>{species}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Joinery Techniques */}
              <div className="p-4 rounded-md border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/30">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-800 dark:text-amber-400 mb-2">
                  Joinery Techniques Employed
                </h4>
                <ul className="space-y-1.5 text-sm text-stone-700 dark:text-stone-300">
                  {project.joineryMethods.map((method, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{method}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Secondary High-Res Photo if available */}
            {project.secondaryImage && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500 dark:text-stone-400 mb-2">
                  Joinery & Texture Close-Up
                </h4>
                <div className="rounded-md overflow-hidden border border-stone-300 dark:border-stone-800">
                  <img
                    src={project.secondaryImage}
                    alt={`${project.title} detail`}
                    className="w-full h-56 sm:h-72 object-cover"
                  />
                </div>
              </div>
            )}

            {/* Key Features List */}
            <div>
              <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-3">
                Key Architectural Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, i) => (
                  <div 
                    key={i} 
                    className="p-3 rounded-md bg-stone-100/80 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 text-xs sm:text-sm text-stone-700 dark:text-stone-300 flex items-start gap-2.5"
                  >
                    <span className="font-bold text-amber-700 dark:text-amber-400 mt-0.5">0{i+1}.</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TOOLS & GEAR USED IN THIS BUILD - Affiliate Monetization Feature */}
            <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                    <Hammer className="w-5 h-5 text-amber-700 dark:text-amber-400" />
                    <span>Tools & Gear Used on this Build</span>
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Direct shop-tested recommendations used to craft this exact piece. Affiliate links help support our free shop blueprints.
                  </p>
                </div>
                <span className="text-[11px] text-stone-400 dark:text-stone-500 italic">
                  FTC Disclosed · Tested at the Bench
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.toolsUsed.map((tool) => (
                  <div 
                    key={tool.id}
                    className="p-3.5 rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col justify-between hover:border-amber-500/60 transition-colors shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-amber-700 dark:text-amber-400 font-semibold mb-1">
                        <span>{tool.category}</span>
                        <span className="text-stone-500 dark:text-stone-400">{tool.priceEstimate}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100 leading-snug">
                        {tool.name}
                      </h4>
                      <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                        <strong className="text-stone-700 dark:text-stone-300 font-medium">Build Role:</strong> {tool.role}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between">
                      <a
                        href={tool.affiliateUrl}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 group"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Check Price & Specs</span>
                        <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </a>

                      {onSelectGearProduct && (
                        <button
                          onClick={() => {
                            onClose();
                            onSelectGearProduct(tool.id);
                          }}
                          className="text-[11px] text-stone-500 hover:text-stone-800 dark:hover:text-stone-300 underline underline-offset-2"
                        >
                          View In Gear Guide
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 bg-stone-100 dark:bg-stone-900/90 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-stone-500 dark:text-stone-400">
              Interested in commissioning a similar piece for your home or architectural space?
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-md"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 dark:bg-amber-600 hover:bg-amber-700 dark:hover:bg-amber-500 rounded-md shadow-xs"
              >
                Request Custom Quote
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
