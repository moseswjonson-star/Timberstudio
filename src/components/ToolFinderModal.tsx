import React, { useState } from 'react';
import { AFFILIATE_PRODUCTS } from '../data/woodworkingData';
import { AffiliateProduct } from '../types';
import { X, CheckCircle, ArrowRight, RotateCcw, ExternalLink, Sparkles, Compass } from 'lucide-react';

interface ToolFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (productId: string) => void;
}

export const ToolFinderModal: React.FC<ToolFinderModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  const [step, setStep] = useState<number>(1);
  const [space, setSpace] = useState<string>('');
  const [experience, setExperience] = useState<string>('');
  const [focus, setFocus] = useState<string>('');
  const [recommendedProduct, setRecommendedProduct] = useState<AffiliateProduct | null>(null);

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setSpace('');
    setExperience('');
    setFocus('');
    setRecommendedProduct(null);
  };

  const computeRecommendation = (selectedFocus: string, selectedSpace: string, selectedExp: string) => {
    let match: AffiliateProduct | undefined;

    if (selectedFocus === 'hand-tools') {
      match = AFFILIATE_PRODUCTS.find(p => p.id === 'suizan-dozuki-saw') || AFFILIATE_PRODUCTS[2];
    } else if (selectedFocus === 'turning') {
      match = AFFILIATE_PRODUCTS.find(p => p.id === 'narex-richter-chisels') || AFFILIATE_PRODUCTS[7];
    } else if (selectedSpace === 'apartment' || selectedSpace === 'small') {
      match = AFFILIATE_PRODUCTS.find(p => p.id === 'veritas-low-angle-jack') || AFFILIATE_PRODUCTS[1];
    } else if (selectedExp === 'master' || selectedFocus === 'cabinetry') {
      match = AFFILIATE_PRODUCTS.find(p => p.id === 'sawstop-pcs') || AFFILIATE_PRODUCTS[0];
    } else {
      match = AFFILIATE_PRODUCTS.find(p => p.id === 'bosch-1617evspk-router') || AFFILIATE_PRODUCTS[4];
    }

    setRecommendedProduct(match);
    setStep(4);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-[#faf7f2] dark:bg-[#181614] rounded-lg shadow-2xl border border-stone-300 dark:border-stone-800 overflow-hidden text-left p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close wizard"
          className="absolute top-4 right-4 p-2 rounded-full text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Wizard Header */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-1">
          <Compass className="w-4 h-4" />
          <span>Interactive Shop Tool Advisor</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 dark:text-stone-100 mb-2">
          Find Your Next Shop Investment
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mb-6">
          Answer 3 quick questions about your workshop footprint and building goals to receive our hand-picked recommendation.
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-stone-200 dark:bg-stone-800 h-1.5 rounded-full mb-6 overflow-hidden">
          <div 
            className="bg-amber-600 h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Step 1: Workshop Space */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
              1. What is your available workshop space?
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { id: 'apartment', title: 'Apartment Bench / Shared Space', desc: 'Low noise, strict dust control, hand tool emphasis' },
                { id: 'small', title: '1-Car Garage or Basement (under 250 sq.ft)', desc: 'Needs mobile bases, cyclone dust separation, compact footprint' },
                { id: 'large', title: '2-Car Garage or Dedicated Barn (300+ sq.ft)', desc: 'Dedicated 220V power, stationary 3HP machines, full sheet capacity' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSpace(item.id);
                    setStep(2);
                  }}
                  className={`p-3.5 rounded-md border text-left transition-all ${
                    space === item.id 
                      ? 'border-amber-600 bg-amber-50/60 dark:bg-amber-950/30' 
                      : 'border-stone-200 dark:border-stone-800 hover:border-amber-500/50 bg-white dark:bg-stone-900'
                  }`}
                >
                  <div className="font-semibold text-sm text-stone-900 dark:text-stone-100">{item.title}</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Experience Level */}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
              2. What is your woodworking experience level?
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { id: 'beginner', title: 'Beginning Woodworker', desc: 'Learning grain orientation, basic joint cutting, safety fundamentals' },
                { id: 'intermediate', title: 'Active Hobbyist / Furniture Maker', desc: 'Comfortable with table saw setups, mortise and tenon, edge banding' },
                { id: 'master', title: 'Advanced Artisan or Studio Pro', desc: 'Demanding sub-thousandth precision, heavy production capacity, fine tuning' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setExperience(item.id);
                    setStep(3);
                  }}
                  className={`p-3.5 rounded-md border text-left transition-all ${
                    experience === item.id 
                      ? 'border-amber-600 bg-amber-50/60 dark:bg-amber-950/30' 
                      : 'border-stone-200 dark:border-stone-800 hover:border-amber-500/50 bg-white dark:bg-stone-900'
                  }`}
                >
                  <div className="font-semibold text-sm text-stone-900 dark:text-stone-100">{item.title}</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-300"
            >
              ← Back to Space
            </button>
          </div>
        )}

        {/* Step 3: Primary Focus */}
        {step === 3 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
              3. What type of woodworking excites you most right now?
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { id: 'cabinetry', title: 'Tables, Desks & Heavy Furniture', desc: 'Ripping thick hardwood slabs, dead-square carcase joinery' },
                { id: 'hand-tools', title: 'Hand-Cut Dovetails & Japanese Joinery', desc: 'Whisper-quiet hand planes, pull saws, razor chisels' },
                { id: 'routers', title: 'Edge Profiling, Dados & Template Routing', desc: 'Mortising, roundovers, custom molding, pattern shaping' },
                { id: 'turning', title: 'Bowls, Vessels & Lathe Turning', desc: 'Curved hollow forms, spindle work, green timber turning' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setFocus(item.id);
                    computeRecommendation(item.id, space, experience);
                  }}
                  className="p-3.5 rounded-md border border-stone-200 dark:border-stone-800 hover:border-amber-500 bg-white dark:bg-stone-900 text-left transition-all"
                >
                  <div className="font-semibold text-sm text-stone-900 dark:text-stone-100">{item.title}</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              className="text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-300"
            >
              ← Back to Experience
            </button>
          </div>
        )}

        {/* Step 4: Recommendation Results */}
        {step === 4 && recommendedProduct && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Our Top Recommended Match for Your Workshop</span>
              </div>
              <p className="text-xs text-emerald-900 dark:text-emerald-300">
                Based on your space and goals, this tool offers the highest return on investment, accuracy, and longevity.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900">
              <div className="flex items-start gap-4">
                <img
                  src={recommendedProduct.image}
                  alt={recommendedProduct.name}
                  className="w-24 h-24 object-cover rounded-md border border-stone-200 dark:border-stone-800 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2 text-xs text-amber-800 dark:text-amber-400 font-semibold">
                    <span>{recommendedProduct.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-stone-600 dark:text-stone-400">{recommendedProduct.priceEstimate}</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mt-0.5">
                    {recommendedProduct.name}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 line-clamp-2">
                    {recommendedProduct.summary}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={recommendedProduct.affiliateLink}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-amber-600 hover:bg-amber-500 rounded-md transition-colors"
                >
                  <span>Check Best Price at {recommendedProduct.merchant}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-300"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start Over</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
