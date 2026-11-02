/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { GearSection } from './components/GearSection';
import { BlogSection } from './components/BlogSection';
import { LumberCalculator } from './components/LumberCalculator';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ToolFinderModal } from './components/ToolFinderModal';
import { AffiliateDisclosureModal } from './components/AffiliateDisclosureModal';
import { ContentPublisherModal, PublishContentType } from './components/ContentPublisherModal';
import { PlansSection } from './components/PlansSection';
import { SmartShopHubModal } from './components/SmartShopHubModal';
import { BlogVideoGeneratorModal } from './components/BlogVideoGeneratorModal';
import { BLOG_POSTS, PORTFOLIO_PROJECTS, AFFILIATE_PRODUCTS } from './data/woodworkingData';
import { WOODWORKING_PLANS } from './data/plansAndTimberData';
import { BlogPost, Project, AffiliateProduct, ProjectCategory, WoodworkingPlan } from './types';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('timbercraft_theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isToolFinderOpen, setIsToolFinderOpen] = useState<boolean>(false);
  const [isAffiliateDisclosureOpen, setIsAffiliateDisclosureOpen] = useState<boolean>(false);
  const [isSmartHubOpen, setIsSmartHubOpen] = useState<boolean>(false);
  const [isVideoGeneratorOpen, setIsVideoGeneratorOpen] = useState<boolean>(false);

  // Content state with local persistence
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    try {
      const saved = localStorage.getItem('timbercraft_custom_posts');
      if (saved) {
        const parsed: BlogPost[] = JSON.parse(saved);
        return [...parsed, ...BLOG_POSTS];
      }
    } catch (e) {
      console.error('Error loading custom blog posts', e);
    }
    return BLOG_POSTS;
  });

  const [portfolioProjects, setPortfolioProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('timbercraft_custom_projects');
      if (saved) {
        const parsed: Project[] = JSON.parse(saved);
        return [...parsed, ...PORTFOLIO_PROJECTS];
      }
    } catch (e) {
      console.error('Error loading custom projects', e);
    }
    return PORTFOLIO_PROJECTS;
  });

  const [affiliateProducts, setAffiliateProducts] = useState<AffiliateProduct[]>(() => {
    try {
      const saved = localStorage.getItem('timbercraft_custom_tools');
      if (saved) {
        const parsed: AffiliateProduct[] = JSON.parse(saved);
        return [...parsed, ...AFFILIATE_PRODUCTS];
      }
    } catch (e) {
      console.error('Error loading custom tools', e);
    }
    return AFFILIATE_PRODUCTS;
  });

  const [plans, setPlans] = useState<WoodworkingPlan[]>(() => {
    try {
      const saved = localStorage.getItem('timbercraft_custom_plans');
      if (saved) {
        const parsed: WoodworkingPlan[] = JSON.parse(saved);
        return [...parsed, ...WOODWORKING_PLANS];
      }
    } catch (e) {
      console.error('Error loading custom plans', e);
    }
    return WOODWORKING_PLANS;
  });

  // Active Category Filters for Data-Driven Menus
  const [blogCategoryFilter, setBlogCategoryFilter] = useState<string>('all');
  const [portfolioCategoryFilter, setPortfolioCategoryFilter] = useState<ProjectCategory>('all');
  const [gearCategoryFilter, setGearCategoryFilter] = useState<string>('all');
  const [plansCategoryFilter, setPlansCategoryFilter] = useState<string>('all');

  // Content Publisher Modal State
  const [isPublisherOpen, setIsPublisherOpen] = useState<boolean>(false);
  const [publisherType, setPublisherType] = useState<PublishContentType>('diy');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync theme with html document element & localStorage
  useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('timbercraft_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('timbercraft_theme', 'light');
      }
    } catch {}
  }, [isDark]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'plans', 'portfolio', 'gear', 'blog', 'calculator', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleNavigate = (sectionId: string, categoryFilter?: string) => {
    if (categoryFilter) {
      if (sectionId === 'blog') {
        setBlogCategoryFilter(categoryFilter);
      } else if (sectionId === 'gear') {
        setGearCategoryFilter(categoryFilter);
      } else if (sectionId === 'portfolio') {
        setPortfolioCategoryFilter(categoryFilter as ProjectCategory);
      } else if (sectionId === 'plans') {
        setPlansCategoryFilter(categoryFilter);
      }
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Publisher open helper
  const handleOpenPublisher = (type: PublishContentType = 'diy') => {
    setPublisherType(type);
    setIsPublisherOpen(true);
  };

  // Publishing handlers
  const handlePublishBlogPost = (post: BlogPost) => {
    setBlogPosts(prev => {
      const next = [post, ...prev];
      try {
        const userPosts = next.filter(p => p.isUserPost);
        localStorage.setItem('timbercraft_custom_posts', JSON.stringify(userPosts));
      } catch (e) {
        console.error(e);
      }
      return next;
    });

    setBlogCategoryFilter(post.category);
    handleNavigate('blog');
    showToast(`Published guide "${post.title}" to ${post.category}!`);
  };

  const handlePublishProject = (project: Project) => {
    setPortfolioProjects(prev => {
      const next = [project, ...prev];
      try {
        const userProjects = next.filter(p => p.isUserPost);
        localStorage.setItem('timbercraft_custom_projects', JSON.stringify(userProjects));
      } catch (e) {
        console.error(e);
      }
      return next;
    });

    setPortfolioCategoryFilter(project.category);
    handleNavigate('portfolio');
    showToast(`Published project "${project.title}" to ${project.category}!`);
  };

  const handleUpdateProject = (updatedProject: Project) => {
    setPortfolioProjects(prev => {
      const next = prev.map(p => p.id === updatedProject.id ? updatedProject : p);
      try {
        const userProjects = next.filter(p => p.isUserPost);
        localStorage.setItem('timbercraft_custom_projects', JSON.stringify(userProjects));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
    showToast(`Updated timeline and duration for "${updatedProject.title}"!`);
  };

  const handlePublishTool = (product: AffiliateProduct) => {
    setAffiliateProducts(prev => {
      const next = [product, ...prev];
      try {
        const userTools = next.filter(p => p.isUserPost);
        localStorage.setItem('timbercraft_custom_tools', JSON.stringify(userTools));
      } catch (e) {
        console.error(e);
      }
      return next;
    });

    setGearCategoryFilter(product.category);
    handleNavigate('gear');
    showToast(`Published tool review "${product.name}" to ${product.category}!`);
  };

  const handlePublishPlan = (plan: WoodworkingPlan) => {
    setPlans(prev => {
      const next = [plan, ...prev];
      try {
        const userPlans = next.filter(p => p.isUserPost);
        localStorage.setItem('timbercraft_custom_plans', JSON.stringify(userPlans));
      } catch (e) {
        console.error(e);
      }
      return next;
    });

    setPlansCategoryFilter(plan.category);
    handleNavigate('plans');
    showToast(`Published plan blueprint "${plan.title}"!`);
  };

  const handleDeletePost = (id: string) => {
    setBlogPosts(prev => {
      const next = prev.filter(p => p.id !== id);
      try {
        const userPosts = next.filter(p => p.isUserPost);
        localStorage.setItem('timbercraft_custom_posts', JSON.stringify(userPosts));
      } catch (e) {}
      return next;
    });
    showToast('Post removed.');
  };

  const handleDeletePlan = (id: string) => {
    setPlans(prev => {
      const next = prev.filter(p => p.id !== id);
      try {
        const userPlans = next.filter(p => p.isUserPost);
        localStorage.setItem('timbercraft_custom_plans', JSON.stringify(userPlans));
      } catch (e) {}
      return next;
    });
    showToast('Plan removed.');
  };

  const customPostCount = 
    blogPosts.filter(p => p.isUserPost).length + 
    portfolioProjects.filter(p => p.isUserPost).length + 
    affiliateProducts.filter(p => p.isUserPost).length +
    plans.filter(p => p.isUserPost).length;

  return (
    <div className="min-h-screen bg-[#faf7f2] dark:bg-[#121110] text-stone-900 dark:text-stone-100 flex flex-col transition-colors duration-200">
      
      {/* Navigation Header with Tools, Projects, DIY, Oils & Polyurethanes Menus */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onOpenToolFinder={() => setIsToolFinderOpen(true)}
        onOpenPublisher={handleOpenPublisher}
        onOpenSmartHub={() => setIsSmartHubOpen(true)}
        onOpenVideoGenerator={() => setIsVideoGeneratorOpen(true)}
        publishedCount={customPostCount}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExplorePortfolio={() => handleNavigate('portfolio')}
          onExploreGear={() => handleNavigate('gear')}
          onScrollToBlog={() => handleNavigate('blog')}
        />

        {/* Woodworking Plans Hub: Blueprints, Cut-Lists & Assembly Guides */}
        <PlansSection
          plans={plans}
          selectedCategory={plansCategoryFilter}
          onCategoryChange={(cat) => setPlansCategoryFilter(cat)}
          onOpenPublisher={() => handleOpenPublisher('plans')}
          onDeletePlan={handleDeletePlan}
        />

        {/* Portfolio Gallery Section with Custom Builds and DIY category */}
        <PortfolioSection
          projects={portfolioProjects}
          selectedCategory={portfolioCategoryFilter}
          onCategoryChange={(cat) => setPortfolioCategoryFilter(cat)}
          onOpenPublisher={() => handleOpenPublisher('projects')}
          onUpdateProject={handleUpdateProject}
          onSelectGearProduct={() => {
            handleNavigate('gear');
          }}
        />

        {/* Affiliate Gear & Tool Hub Section */}
        <GearSection
          products={affiliateProducts}
          selectedCategory={gearCategoryFilter}
          onCategoryChange={(cat) => setGearCategoryFilter(cat)}
          onOpenPublisher={() => handleOpenPublisher('tools')}
          onOpenToolFinder={() => setIsToolFinderOpen(true)}
          onOpenAffiliateDisclosure={() => setIsAffiliateDisclosureOpen(true)}
        />

        {/* SEO-Optimized Woodworking Blog: DIY, Oils, Polyurethanes & Field Tests */}
        <BlogSection
          posts={blogPosts}
          selectedCategory={blogCategoryFilter}
          onCategoryChange={(cat) => setBlogCategoryFilter(cat)}
          onOpenPublisher={(type) => handleOpenPublisher(type)}
          onDeletePost={handleDeletePost}
          onSelectGearProduct={() => {
            handleNavigate('gear');
          }}
        />

        {/* Interactive Board Foot & Lumber Calculator */}
        <LumberCalculator />

        {/* About Johnson Wadimbe & Workshop Ethics */}
        <AboutSection />

        {/* Contact & Custom Commission Form */}
        <ContactSection />
      </main>

      {/* Footer with FTC Disclaimers, Adjusted Menus & Quick Post Link */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAffiliateDisclosure={() => setIsAffiliateDisclosureOpen(true)}
        onOpenToolFinder={() => setIsToolFinderOpen(true)}
        onOpenPublisher={handleOpenPublisher}
      />

      {/* Interactive Tool Finder Quiz Modal */}
      <ToolFinderModal
        isOpen={isToolFinderOpen}
        onClose={() => setIsToolFinderOpen(false)}
        onSelectProduct={() => {
          setIsToolFinderOpen(false);
          handleNavigate('gear');
        }}
      />

      {/* FTC Affiliate Compliance Disclosure Modal */}
      <AffiliateDisclosureModal
        isOpen={isAffiliateDisclosureOpen}
        onClose={() => setIsAffiliateDisclosureOpen(false)}
      />

      {/* Content Publisher Modal (Post DIY guides, Oils, Polyurethanes, Tools, Projects, Plans frequently) */}
      <ContentPublisherModal
        isOpen={isPublisherOpen}
        initialType={publisherType}
        onClose={() => setIsPublisherOpen(false)}
        onPublishBlog={handlePublishBlogPost}
        onPublishProject={handlePublishProject}
        onPublishTool={handlePublishTool}
        onPublishPlan={handlePublishPlan}
      />

      {/* Smart Shop IoT & AI Productivity Hub Modal */}
      <SmartShopHubModal
        isOpen={isSmartHubOpen}
        onClose={() => setIsSmartHubOpen(false)}
      />

      {/* AI Short Video Generator from Blog Modal (Veo 3 Powered) */}
      <BlogVideoGeneratorModal
        isOpen={isVideoGeneratorOpen}
        onClose={() => setIsVideoGeneratorOpen(false)}
      />

      {/* Instant Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 px-4 py-3 bg-stone-900 text-stone-100 dark:bg-amber-600 dark:text-stone-950 rounded-lg shadow-xl border border-stone-700 dark:border-amber-500 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-amber-400 dark:text-stone-950 shrink-0" />
          <span>{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="ml-2 p-1 hover:opacity-75"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
