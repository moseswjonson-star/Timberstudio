import React, { useState } from 'react';
import { BlogPost } from '../types';
import { ArticleReaderModal } from './ArticleReaderModal';
import { 
  Clock, 
  ArrowRight, 
  BookOpen, 
  Search, 
  Sparkles, 
  Plus, 
  Droplet, 
  ShieldCheck, 
  Wrench, 
  Trash2,
  Tag
} from 'lucide-react';
import { PublishContentType } from './ContentPublisherModal';

interface BlogSectionProps {
  posts: BlogPost[];
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  onOpenPublisher?: (type: PublishContentType) => void;
  onDeletePost?: (id: string) => void;
  onSelectGearProduct?: (productId: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  posts,
  selectedCategory = 'all',
  onCategoryChange,
  onOpenPublisher,
  onDeletePost,
  onSelectGearProduct
}) => {
  const [internalCategory, setInternalCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const activeCat = selectedCategory || internalCategory;

  const handleCategoryClick = (catId: string) => {
    if (onCategoryChange) {
      onCategoryChange(catId);
    } else {
      setInternalCategory(catId);
    }
  };

  const categories = [
    { id: 'all', label: 'All Guides' },
    { id: 'DIY & Tutorials', label: 'DIY & Jigs', icon: BookOpen },
    { id: 'Oils (Hardwax & Natural)', label: 'Oils & Waxes', icon: Droplet },
    { id: 'Polyurethanes & Topcoats', label: 'Polyurethanes', icon: ShieldCheck },
    { id: 'Tool Reviews', label: 'Tool Reviews', icon: Wrench },
    { id: 'Joinery Techniques', label: 'Joinery Tutorials' },
    { id: 'Shop Setup', label: 'Shop Setup & Dust' },
    { id: 'my-posts', label: 'My Published Posts' },
  ];

  const filteredPosts = posts.filter((post) => {
    let matchesCat = true;
    if (activeCat === 'all') {
      matchesCat = true;
    } else if (activeCat === 'my-posts') {
      matchesCat = !!post.isUserPost;
    } else if (activeCat === 'Finishing & Care') {
      matchesCat = post.category === 'Finishing & Care' || 
                   post.category === 'Oils (Hardwax & Natural)' || 
                   post.category === 'Polyurethanes & Topcoats';
    } else {
      matchesCat = post.category === activeCat;
    }

    const matchesSearch = searchTerm === '' ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.subCategory && post.subCategory.toLowerCase().includes(searchTerm.toLowerCase())) ||
      post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="blog" className="py-16 md:py-24 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Woodcraft Journal, DIY Plans & Finishes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100 tracking-tight">
              Workshop Guides & Finishing Tests
            </h2>
            <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm sm:text-base max-w-2xl">
              Battle-tested joinery techniques, DIY workshop sled blueprints, hardwax oils vs. polyurethane comparisons, and shop calibration notes written for makers who demand accuracy.
            </p>
          </div>

          {/* Right Action: "+ Post Guide" button & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {onOpenPublisher && (
              <button
                onClick={() => {
                  let pType: PublishContentType = 'diy';
                  if (activeCat === 'Oils (Hardwax & Natural)') pType = 'oils';
                  else if (activeCat === 'Polyurethanes & Topcoats') pType = 'polyurethanes';
                  else if (activeCat === 'Tool Reviews') pType = 'tools';
                  onOpenPublisher(pType);
                }}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md shadow-xs transition-colors shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Post New Guide</span>
              </button>
            )}

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search DIY, oils, poly..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-md border border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
              />
            </div>
          </div>
        </div>

        {/* Category Segmented Filters */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/60 dark:bg-stone-900 rounded-lg border border-stone-300/60 dark:border-stone-800 mb-8 w-fit">
          {categories.map((cat) => {
            const isActive = activeCat === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  isActive
                    ? 'bg-white dark:bg-amber-600 text-stone-900 dark:text-stone-950 font-semibold shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                {Icon && <Icon className="w-3 h-3 text-amber-600 dark:text-stone-900" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Banner for Oils or Polyurethanes or DIY */}
        {activeCat === 'Oils (Hardwax & Natural)' && (
          <div className="mb-6 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Droplet className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200">
                  Oils & Hardwax: Tung, Linseed & Natural Waxes
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300">
                  Zero-VOC plant oils that bond molecularly with cellulose, preserving tactile wood grain without plastic film.
                </p>
              </div>
            </div>
            {onOpenPublisher && (
              <button
                onClick={() => onOpenPublisher('oils')}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-md bg-amber-600 text-stone-950 hover:bg-amber-500 shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Publish Oil Review/Guide</span>
              </button>
            )}
          </div>
        )}

        {activeCat === 'Polyurethanes & Topcoats' && (
          <div className="mb-6 p-4 rounded-lg bg-stone-200/60 dark:bg-stone-900/60 border border-stone-300 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                  Polyurethanes & High-Durability Coatings
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300">
                  Clear water-based poly, warm oil-based urethanes, and thinned 50/50 wipe-on formulations for heavy tabletop protection.
                </p>
              </div>
            </div>
            {onOpenPublisher && (
              <button
                onClick={() => onOpenPublisher('polyurethanes')}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-md bg-amber-600 text-stone-950 hover:bg-amber-500 shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Publish Polyurethane Guide</span>
              </button>
            )}
          </div>
        )}

        {activeCat === 'DIY & Tutorials' && (
          <div className="mb-6 p-4 rounded-lg bg-stone-200/60 dark:bg-stone-900/60 border border-stone-300 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                  DIY Workshop Blueprints & Precision Jigs
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300">
                  Step-by-step cutting diagrams, 5-cut calibration method, and apprentice guides for shop fixtures.
                </p>
              </div>
            </div>
            {onOpenPublisher && (
              <button
                onClick={() => onOpenPublisher('diy')}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-md bg-amber-600 text-stone-950 hover:bg-amber-500 shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Publish DIY Plan</span>
              </button>
            )}
          </div>
        )}

        {/* Featured Flagship Article (First in list when all selected) */}
        {filteredPosts.length > 0 && activeCat === 'all' && searchTerm === '' && (
          <div
            onClick={() => setActiveArticle(filteredPosts[0])}
            className="mb-10 cursor-pointer rounded-xl bg-stone-100/60 dark:bg-stone-900/60 border border-stone-200/90 dark:border-stone-800 overflow-hidden hover:border-amber-600/60 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group shadow-xs"
          >
            <div className="lg:col-span-7 relative h-72 sm:h-96 overflow-hidden bg-stone-900">
              <img
                src={filteredPosts[0].coverImage}
                alt={filteredPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-stone-900/90 text-amber-400 border border-amber-500/30 backdrop-blur-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Featured Guide
                </span>
                {filteredPosts[0].isUserPost && (
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-amber-500 text-stone-950">
                    My Post
                  </span>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-800 dark:text-amber-400 font-semibold mb-2">
                  <span>{filteredPosts[0].category}</span>
                  {filteredPosts[0].subCategory && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-stone-500 dark:text-stone-400">{filteredPosts[0].subCategory}</span>
                    </>
                  )}
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 text-stone-500 dark:text-stone-400 font-normal">
                    <Clock className="w-3 h-3" />
                    {filteredPosts[0].readTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors leading-tight">
                  {filteredPosts[0].title}
                </h3>

                <p className="mt-3 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {filteredPosts[0].excerpt}
                </p>

                {filteredPosts[0].keyTakeaways && filteredPosts[0].keyTakeaways[0] && (
                  <div className="mt-4 p-3 rounded-md bg-stone-200/50 dark:bg-stone-800/50 border border-stone-300/40 dark:border-stone-700/40 text-xs text-stone-700 dark:text-stone-300">
                    <strong className="text-amber-800 dark:text-amber-400">Tested finding:</strong> {filteredPosts[0].keyTakeaways[0]}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 dark:border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={filteredPosts[0].author.avatar}
                    alt={filteredPosts[0].author.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="text-xs font-medium text-stone-800 dark:text-stone-200">
                    {filteredPosts[0].author.name}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 dark:text-amber-400 group-hover:underline">
                  <span>Read Field Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Standard Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeCat === 'all' && searchTerm === '' ? filteredPosts.slice(1) : filteredPosts).map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="cursor-pointer rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden shadow-2xs hover:border-amber-600/70 dark:hover:border-amber-500/70 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-stone-100 dark:bg-stone-950">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-stone-950/80 text-white backdrop-blur-xs">
                      {post.category}
                    </span>
                    {post.diyDifficulty && (
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-xs bg-amber-600 text-stone-950">
                        {post.diyDifficulty}
                      </span>
                    )}
                    {post.finishType && (
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-xs bg-stone-800 text-amber-300">
                        {post.finishType}
                      </span>
                    )}
                    {post.isUserPost && (
                      <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-xs bg-amber-500 text-stone-950">
                        My Post
                      </span>
                    )}
                  </div>

                  {post.isUserPost && onDeletePost && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`Delete your custom post "${post.title}"?`)) {
                          onDeletePost(post.id);
                        }
                      }}
                      className="absolute top-3 right-3 p-1.5 rounded-md bg-stone-950/80 text-red-400 hover:text-red-200 transition-colors"
                      title="Delete post"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="p-5 sm:p-6 text-left">
                  <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {post.subCategory && (
                    <div className="mt-3 flex items-center gap-1 text-[11px] font-medium text-amber-800 dark:text-amber-400">
                      <Tag className="w-3 h-3" />
                      <span>{post.subCategory}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between text-xs">
                <span className="text-stone-500 dark:text-stone-400">
                  By {post.author.name.split(' ')[0]}
                </span>
                <span className="font-semibold text-amber-800 dark:text-amber-400 flex items-center gap-1 group-hover:underline">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-stone-100/50 dark:bg-stone-900/30 rounded-xl border border-dashed border-stone-300 dark:border-stone-800">
            <BookOpen className="w-8 h-8 mx-auto text-stone-400 mb-2" />
            <p className="text-stone-600 dark:text-stone-300 text-sm font-semibold">
              No articles match this category or search keyword.
            </p>
            {onOpenPublisher && (
              <button
                onClick={() => {
                  let pType: PublishContentType = 'diy';
                  if (activeCat === 'Oils (Hardwax & Natural)') pType = 'oils';
                  else if (activeCat === 'Polyurethanes & Topcoats') pType = 'polyurethanes';
                  onOpenPublisher(pType);
                }}
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md"
              >
                <Plus className="w-4 h-4" />
                <span>Post the First Guide Here</span>
              </button>
            )}
          </div>
        )}

      </div>

      {/* Full Article Reader Modal */}
      <ArticleReaderModal
        post={activeArticle}
        onClose={() => setActiveArticle(null)}
        onSelectGearProduct={onSelectGearProduct}
      />
    </section>
  );
};
