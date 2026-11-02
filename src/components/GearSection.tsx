import React, { useState } from 'react';
import { AFFILIATE_PRODUCTS } from '../data/woodworkingData';
import { AffiliateProduct } from '../types';
import { 
  Star, 
  ExternalLink, 
  Check, 
  X as CloseIcon, 
  Info, 
  ShoppingBag, 
  SlidersHorizontal,
  Compass,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface GearSectionProps {
  products?: AffiliateProduct[];
  selectedCategory?: string;
  onCategoryChange?: (cat: string) => void;
  onOpenPublisher?: () => void;
  onOpenToolFinder: () => void;
  onOpenAffiliateDisclosure: () => void;
}

export const GearSection: React.FC<GearSectionProps> = ({
  products = AFFILIATE_PRODUCTS,
  selectedCategory = 'all',
  onCategoryChange,
  onOpenPublisher,
  onOpenToolFinder,
  onOpenAffiliateDisclosure
}) => {
  const [internalCategory, setInternalCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const activeCat = selectedCategory || internalCategory;

  const handleCategoryClick = (catId: string) => {
    if (onCategoryChange) {
      onCategoryChange(catId);
    } else {
      setInternalCategory(catId);
    }
  };

  const categories = [
    { id: 'all', label: 'All Tested Tools' },
    { id: 'saws', label: 'Table Saws & Power' },
    { id: 'hand-tools', label: 'Planes, Saws & Chisels' },
    { id: 'routers', label: 'Routers & Joinery' },
    { id: 'dust-collection', label: 'Dust Systems' },
    { id: 'clamps', label: 'Clamps & Fixtures' },
    { id: 'finishing', label: 'Oils & Finishes' },
  ];

  const filteredProducts = products.filter((prod) => {
    const matchesCat = activeCat === 'all' || prod.category === activeCat;
    const matchesSearch = searchTerm === '' || 
      prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="gear" className="py-16 md:py-24 border-t border-stone-200 dark:border-stone-800 bg-[#faf7f2]/50 dark:bg-[#151311]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
              <span>Field-Tested Gear Hub</span>
              <span aria-hidden="true">·</span>
              <span>Sub-Millimeter Tested</span>
              <span aria-hidden="true">·</span>
              <span>100% Bench Verified</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100 tracking-tight">
              The Woodworker’s Essential Tool Guide
            </h2>
            <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm sm:text-base max-w-2xl">
              We torture-test machinery, Japanese hand saws, cryogenic chisels, and hardwax finishes during daily studio commissions. No fluff, no sponsored bias—only equipment that earns its place on our workbench.
            </p>
          </div>

          {/* Interactive Tool Finder Quiz Button */}
          <button
            onClick={onOpenToolFinder}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-amber-700 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-md transition-all shadow-xs self-start md:self-auto shrink-0"
          >
            <Compass className="w-4 h-4" />
            <span>Launch Shop Tool Quiz</span>
          </button>
        </div>

        {/* FTC Affiliate Disclosure Notice Bar */}
        <div className="p-3.5 mb-8 rounded-md bg-stone-200/50 dark:bg-stone-900/60 border border-stone-300/70 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
            <span>
              <strong className="text-stone-800 dark:text-stone-200 font-medium">Affiliate Transparency:</strong> When you purchase through our verified merchant links, we may earn an affiliate commission. We only recommend tools that have survived 100+ hours of actual studio milling.
            </span>
          </div>
          <button
            onClick={onOpenAffiliateDisclosure}
            className="text-amber-800 dark:text-amber-400 underline underline-offset-2 hover:text-amber-900 dark:hover:text-amber-300 shrink-0 font-medium text-left"
          >
            Read Our Testing Policy
          </button>
        </div>

        {/* Controls: Category Segmented Tabs & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/60 dark:bg-stone-900 rounded-lg border border-stone-300/60 dark:border-stone-800">
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

          {/* Search bar & Post Tool CTA */}
          <div className="flex items-center gap-3">
            {onOpenPublisher && (
              <button
                onClick={onOpenPublisher}
                className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md shadow-xs transition-colors shrink-0"
              >
                <span>+ Post Tool</span>
              </button>
            )}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search tools & specs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 text-xs rounded-md border border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden shadow-xs hover:border-amber-600/70 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Product Image Header with Editorial Badge */}
                <div className="relative h-52 sm:h-56 bg-stone-100 dark:bg-stone-950 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-40" />

                  {/* Editorial Kicker Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-stone-900/90 text-amber-400 border border-amber-500/30 backdrop-blur-xs">
                      {product.badge}
                    </span>
                  </div>

                  {/* Merchant tag */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-sm bg-stone-900/80 text-white backdrop-blur-xs">
                      {product.merchant}
                    </span>
                  </div>
                </div>

                {/* Main Product Info */}
                <div className="p-5 sm:p-6 text-left">
                  
                  {/* Rating & Price Tier Strip */}
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-1.5 text-amber-500">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="font-semibold text-stone-800 dark:text-stone-200">
                        {product.rating}
                      </span>
                      <span className="text-stone-400">({product.reviewsCount})</span>
                    </div>

                    <div className="text-stone-600 dark:text-stone-300 font-semibold">
                      <span>{product.priceEstimate}</span>
                      <span className="text-[10px] text-stone-400 ml-1">({product.priceTier})</span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    {product.summary}
                  </p>

                  {/* Pros & Cons Checklist */}
                  <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 space-y-2 text-xs">
                    <div className="text-emerald-700 dark:text-emerald-400 font-medium flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{product.pros[0]}</span>
                    </div>
                    {product.pros[1] && (
                      <div className="text-emerald-700 dark:text-emerald-400 font-medium flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>{product.pros[1]}</span>
                      </div>
                    )}
                    <div className="text-stone-500 dark:text-stone-400 flex items-start gap-1.5">
                      <CloseIcon className="w-3.5 h-3.5 shrink-0 mt-0.5 text-stone-400" />
                      <span>{product.cons[0]}</span>
                    </div>
                  </div>

                  {/* Key Specs Pills */}
                  <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 grid grid-cols-2 gap-2 text-[11px]">
                    {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
                      <div key={key} className="bg-stone-50 dark:bg-stone-800/50 p-2 rounded-xs border border-stone-200/50 dark:border-stone-800">
                        <span className="text-stone-400 block">{key}</span>
                        <span className="font-semibold text-stone-800 dark:text-stone-200 truncate block" title={val}>
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Affiliate CTA Action Box */}
              <div className="p-5 sm:p-6 pt-0">
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 dark:bg-amber-600 hover:bg-amber-700 dark:hover:bg-amber-500 rounded-md transition-colors shadow-xs group"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Check Price at {product.merchant}</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone-500 dark:text-stone-400 text-sm">
              No tools matching "{searchTerm}". Try another search or reset category.
            </p>
            <button
              onClick={() => {
                handleCategoryClick('all');
                setSearchTerm('');
              }}
              className="mt-3 text-xs font-semibold text-amber-700 dark:text-amber-400 underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
