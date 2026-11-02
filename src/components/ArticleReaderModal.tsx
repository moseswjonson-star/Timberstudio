import React, { useEffect, useState } from 'react';
import { BlogPost } from '../types';
import { 
  X, 
  Clock, 
  Calendar, 
  Share2, 
  Check, 
  ExternalLink, 
  ShoppingBag, 
  Sparkles, 
  ChevronRight, 
  HelpCircle,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface ArticleReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onSelectGearProduct?: (productId: string) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  post,
  onClose,
  onSelectGearProduct
}) => {
  const [copied, setCopied] = useState(false);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      // Inject Article + FAQ Schema.org JSON-LD dynamically
      const scriptId = 'article-dynamic-jsonld';
      let existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();

      const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.metaDescription,
        "image": post.coverImage,
        "datePublished": post.isoDate,
        "dateModified": post.isoDate,
        "author": {
          "@type": "Person",
          "name": post.author.name,
          "jobTitle": post.author.role
        },
        "publisher": {
          "@type": "Organization",
          "name": "TimberCraft Studio",
          "logo": {
            "@type": "ImageObject",
            "url": "https://timbercraft.studio/icon.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://timbercraft.studio/journal/${post.slug}`
        }
      };

      const newScript = document.createElement('script');
      newScript.id = scriptId;
      newScript.type = 'application/ld+json';
      newScript.text = JSON.stringify(schema);
      document.head.appendChild(newScript);

      return () => {
        const cleanup = document.getElementById(scriptId);
        if (cleanup) cleanup.remove();
      };
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-stone-950/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-4xl bg-[#faf7f2] dark:bg-[#161413] rounded-lg shadow-2xl border border-stone-300 dark:border-stone-800 overflow-hidden my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 px-6 py-3.5 bg-[#faf7f2]/95 dark:bg-[#161413]/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 truncate max-w-md">
            <span>Journal</span>
            <ChevronRight className="w-3 h-3 text-stone-400" />
            <span className="text-amber-800 dark:text-amber-400 font-medium">{post.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-md transition-colors"
              title="Copy guide link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              aria-label="Close reader"
              className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="max-h-[85vh] overflow-y-auto px-6 sm:px-10 py-8 space-y-8">
          
          {/* Article Header */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-3">
              <span>{post.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50 leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              {post.excerpt}
            </p>

            {/* Author Credit Byline */}
            <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-amber-600/30"
              />
              <div>
                <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                  {post.author.name}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400">
                  {post.author.role} · TimberCraft Studio
                </div>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800 shadow-sm max-h-[420px]">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* FTC Legal Disclosure Card inside Article */}
          <div className="p-3.5 rounded-md bg-stone-200/40 dark:bg-stone-900/40 border border-stone-300/60 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400 flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
            <span>
              <strong>Editorial Transparency:</strong> Our tool evaluations are grounded in hands-on workshop usage. If you purchase through our affiliate links, TimberCraft Studio earns a modest referral commission at zero extra cost to you.
            </span>
          </div>

          {/* Key Takeaways Box */}
          <div className="p-5 rounded-lg bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-amber-900 dark:text-amber-300 mb-3">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Executive Summary & Key Takeaways</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-800 dark:text-stone-200">
              {post.keyTakeaways.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-700 dark:text-amber-400 mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Table of Contents */}
          <div className="p-4 rounded-md border border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-900/30">
            <div className="text-xs uppercase tracking-wider font-semibold text-stone-500 dark:text-stone-400 mb-2">
              In This Comprehensive Guide
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {post.tableOfContents.map((toc, idx) => (
                <button
                  key={toc.id}
                  onClick={() => scrollToSection(toc.id)}
                  className="text-left text-amber-800 dark:text-amber-400 hover:underline flex items-center gap-1.5"
                >
                  <span className="text-stone-400 font-mono text-[11px]">0{idx+1}.</span>
                  <span>{toc.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Pull Quote */}
          {post.pullQuote && (
            <div className="my-6 p-6 rounded-lg bg-amber-500/10 border-l-4 border-amber-600 dark:border-amber-500 italic space-y-2">
              <p className="font-serif text-lg sm:text-xl text-stone-900 dark:text-stone-100 leading-snug">
                "{post.pullQuote.quote}"
              </p>
              <div className="text-xs font-semibold not-italic text-amber-900 dark:text-amber-400">
                — {post.pullQuote.author}, <span className="font-normal text-stone-600 dark:text-stone-400">{post.pullQuote.role}</span>
              </div>
            </div>
          )}

          {/* Testing Breakdown Scorecard */}
          {post.testingBreakdown && post.testingBreakdown.length > 0 && (
            <div className="my-8 p-6 rounded-lg bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-wider font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Rigorous Testing Breakdown & Scores</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-500 text-stone-950 font-bold">
                  Verified Lab Benchmark
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {post.testingBreakdown.map((test, idx) => (
                  <div key={idx} className="p-3.5 rounded-md bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-stone-900 dark:text-stone-100">
                      <span>{test.category}</span>
                      <span className="font-mono text-amber-800 dark:text-amber-400">{test.score} / 10</span>
                    </div>
                    <div className="w-full bg-stone-200 dark:bg-stone-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-amber-600 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${Math.min(100, (test.score / 10) * 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                      {test.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* High-Res Gallery Images Grid */}
          {post.galleryImages && post.galleryImages.length > 0 && (
            <div className="my-8 space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-stone-500 dark:text-stone-400">
                High-Resolution Workshop Gallery ({post.galleryImages.length} Photos)
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {post.galleryImages.map((imgUrl, gIdx) => (
                  <div 
                    key={gIdx} 
                    onClick={() => setLightboxImage(imgUrl)}
                    className="relative h-36 sm:h-44 rounded-lg overflow-hidden border border-stone-300 dark:border-stone-800 cursor-pointer group shadow-xs"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Gallery item ${gIdx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                      Click to Expand
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content Sections */}
          <div className="space-y-10">
            {post.contentSections.map((sec) => (
              <div key={sec.id} id={sec.id} className="scroll-mt-20 space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                  {sec.heading}
                </h2>

                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Callout box if present */}
                {sec.callout && (
                  <div className="p-4 rounded-md bg-stone-100 dark:bg-stone-900 border-l-4 border-amber-600 dark:border-amber-500 space-y-1 my-4">
                    <div className="text-xs uppercase tracking-wider font-bold text-amber-800 dark:text-amber-400">
                      {sec.callout.title}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                      {sec.callout.text}
                    </p>
                  </div>
                )}

                {/* Comparison Table if present */}
                {sec.comparisonTable && (
                  <div className="overflow-x-auto my-6 border border-stone-200 dark:border-stone-800 rounded-lg">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-stone-200/60 dark:bg-stone-800/80 text-stone-900 dark:text-stone-100 font-semibold border-b border-stone-200 dark:border-stone-800">
                        <tr>
                          {sec.comparisonTable.headers.map((h, i) => (
                            <th key={i} className="p-3 whitespace-nowrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 dark:divide-stone-800 text-stone-700 dark:text-stone-300">
                        {sec.comparisonTable.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-stone-50 dark:hover:bg-stone-900/40">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={`p-3 ${cIdx === 0 ? 'font-semibold text-stone-900 dark:text-stone-100' : ''}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Featured Product Affiliate Card */}
          {post.featuredProduct && (
            <div className="my-8 p-6 rounded-lg bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-700">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-amber-800 dark:text-amber-400 mb-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Editor's Benchmark Tool Pick For This Guide</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-4">
                  <img
                    src={post.featuredProduct.image}
                    alt={post.featuredProduct.name}
                    className="w-full h-44 object-cover rounded-md border border-stone-200 dark:border-stone-800"
                  />
                </div>
                <div className="sm:col-span-8 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-stone-500">
                    <span>{post.featuredProduct.brand}</span>
                    <span className="text-stone-900 dark:text-stone-100 font-bold">{post.featuredProduct.priceEstimate}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                    {post.featuredProduct.name}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    {post.featuredProduct.summary}
                  </p>

                  <div className="pt-2">
                    <a
                      href={post.featuredProduct.affiliateLink}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-amber-700 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-md transition-colors shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Check Price at {post.featuredProduct.merchant}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Frequently Asked Questions (FAQ Section) */}
          <div id="frequently-asked-questions" className="pt-6 border-t border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Woodworker Q&A · Common Field Questions</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {post.faqItems.map((faq, idx) => {
                const isOpen = expandedFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-stone-200 dark:border-stone-800 rounded-md overflow-hidden bg-white dark:bg-stone-900"
                  >
                    <button
                      onClick={() => setExpandedFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 text-sm font-semibold text-stone-900 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800/50"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-100 dark:border-stone-800/60 mt-1">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Author Bio Box */}
          <div className="p-6 rounded-lg bg-stone-100 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-amber-600 shrink-0"
            />
            <div className="text-center sm:text-left space-y-1">
              <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 dark:text-amber-400">
                About the Author & Tester
              </div>
              <h4 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">
                {post.author.name}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                Johnson has spent over 18 years milling, turning, and joinery-crafting bespoke timber furniture. He oversees TimberCraft Studio’s tool testing laboratory, providing independent evaluations without corporate sponsorship.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-100 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            Published in {post.category}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-md"
          >
            Close Guide
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[70] flex items-center justify-center bg-stone-950/90 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-10 right-0 p-2 text-white hover:text-amber-400"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={lightboxImage} 
              alt="High-resolution workshop preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-stone-700"
            />
          </div>
        </div>
      )}
    </div>
  );
};
