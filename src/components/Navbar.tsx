import React, { useState, useEffect, useRef } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Compass, 
  Ruler, 
  Wrench, 
  BookOpen, 
  FolderKanban, 
  Hammer,
  Droplet,
  ShieldCheck,
  ChevronDown,
  Plus,
  ArrowUpRight,
  Layers,
  ChevronRight,
  FileSpreadsheet,
  TreeDeciduous,
  Newspaper,
  Cpu,
  Film
} from 'lucide-react';
import { PublishContentType } from './ContentPublisherModal';
import { Logo } from './Logo';

declare global {
  interface Window {
    TimberCraftConfig?: {
      brandName?: string;
      tagline?: string;
      customLinks?: Array<{ label: string; url: string; external?: boolean }>;
      elementorMode?: boolean;
    };
    timbercraft_settings?: any;
  }
}

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string, categoryFilter?: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenToolFinder: () => void;
  onOpenPublisher: (type?: PublishContentType) => void;
  onOpenSmartHub: () => void;
  onOpenVideoGenerator: () => void;
  publishedCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  isDark,
  onToggleTheme,
  onOpenToolFinder,
  onOpenPublisher,
  onOpenSmartHub,
  onOpenVideoGenerator,
  publishedCount = 0
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (sectionId: string, categoryFilter?: string) => {
    onNavigate(sectionId, categoryFilter);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const handlePublishClick = (type: PublishContentType) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onOpenPublisher(type);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => prev === name ? null : name);
  };

  const toggleMobileAccordion = (name: string) => {
    setMobileExpandedSection(prev => prev === name ? null : name);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#faf7f2]/95 dark:bg-[#121110]/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 dark:border-stone-800/80 py-2.5' 
          : 'bg-[#faf7f2]/85 dark:bg-[#121110]/85 backdrop-blur-xs border-b border-transparent py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Studio Mark */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded-sm shrink-0"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Dropdown Menus */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* 1. TOOLS */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('tools')}
                onMouseEnter={() => setActiveDropdown('tools')}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
                  activeDropdown === 'tools' || activeSection === 'gear'
                    ? 'text-amber-800 dark:text-amber-400 bg-amber-500/10'
                    : 'text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white'
                }`}
              >
                <Wrench className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Tools</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'tools' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'tools' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 top-full mt-1.5 w-72 rounded-xl bg-[#faf7f2] dark:bg-[#181716] border border-stone-200 dark:border-stone-800 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500">
                    Workshop Machinery & Hand Gear
                  </div>
                  
                  <button
                    onClick={() => handleNavClick('gear', 'all')}
                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-stone-800 dark:text-stone-200 hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-400 flex items-center justify-between"
                  >
                    <span>All Tested Tools & Guides</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                  <button
                    onClick={() => handleNavClick('gear', 'saws')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Table Saws & Power Saws</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('gear', 'hand-tools')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Hand Planes, Saws & Chisels</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('gear', 'routers')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Routers & Joinery Machines</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('gear', 'dust-collection')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Dust Collection & Air Quality</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('gear', 'clamps')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Parallel Clamps & Workholding</span>
                  </button>

                  <div className="my-1.5 border-t border-stone-200 dark:border-stone-800" />

                  {/* Fast Post trigger for Tools */}
                  <div className="px-2">
                    <button
                      onClick={() => handlePublishClick('tools')}
                      className="w-full py-1.5 px-2.5 rounded-md bg-amber-600/10 hover:bg-amber-600 text-amber-800 dark:text-amber-300 hover:text-stone-950 text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Post Tool Review / Gear</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. PLANS */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('plans')}
                onMouseEnter={() => setActiveDropdown('plans')}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
                  activeDropdown === 'plans' || activeSection === 'plans'
                    ? 'text-amber-800 dark:text-amber-400 bg-amber-500/10'
                    : 'text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white'
                }`}
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Plans</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'plans' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'plans' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 top-full mt-1.5 w-76 rounded-xl bg-[#faf7f2] dark:bg-[#181716] border border-stone-200 dark:border-stone-800 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500">
                    Workshop Blueprints & Cut-Lists
                  </div>
                  
                  <button
                    onClick={() => handleNavClick('plans', 'all')}
                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-stone-800 dark:text-stone-200 hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-400 flex items-center justify-between"
                  >
                    <span>All Plans & Cut-Lists</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                  <button
                    onClick={() => handleNavClick('plans', 'shop-jigs')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Shop Jigs, Sleds & Fixtures</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('plans', 'furniture')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Fine Furniture (Tables, Benches)</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('plans', 'outdoor')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Outdoor & Garden Woodcraft</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('plans', 'small-craft')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Small Crafts & Turning</span>
                  </button>

                  <div className="my-1.5 border-t border-stone-200 dark:border-stone-800" />

                  {/* Fast Post trigger for Plans */}
                  <div className="px-2">
                    <button
                      onClick={() => handlePublishClick('plans')}
                      className="w-full py-1.5 px-2.5 rounded-md bg-amber-600/10 hover:bg-amber-600 text-amber-800 dark:text-amber-300 hover:text-stone-950 text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Post Woodworking Plan</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. PROJECTS */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('projects')}
                onMouseEnter={() => setActiveDropdown('projects')}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
                  activeDropdown === 'projects' || activeSection === 'portfolio'
                    ? 'text-amber-800 dark:text-amber-400 bg-amber-500/10'
                    : 'text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white'
                }`}
              >
                <FolderKanban className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Projects</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'projects' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'projects' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 top-full mt-1.5 w-72 rounded-xl bg-[#faf7f2] dark:bg-[#181716] border border-stone-200 dark:border-stone-800 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500">
                    Bespoke Works & Archives
                  </div>
                  
                  <button
                    onClick={() => handleNavClick('portfolio', 'all')}
                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-stone-800 dark:text-stone-200 hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-400 flex items-center justify-between"
                  >
                    <span>All Studio Projects</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                  <button
                    onClick={() => handleNavClick('portfolio', 'furniture')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Dining Tables & Credenzas</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('portfolio', 'joinery')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Fine Dovetails & Timber Joinery</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('portfolio', 'shop')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Roubo Workbenches & Cabinets</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('portfolio', 'turning')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Lathe Turning & Burl Vessels</span>
                  </button>

                  <div className="my-1.5 border-t border-stone-200 dark:border-stone-800" />

                  {/* Fast Post trigger for Projects */}
                  <div className="px-2">
                    <button
                      onClick={() => handlePublishClick('projects')}
                      className="w-full py-1.5 px-2.5 rounded-md bg-amber-600/10 hover:bg-amber-600 text-amber-800 dark:text-amber-300 hover:text-stone-950 text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Post New Project Build</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 4. DIY */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('diy')}
                onMouseEnter={() => setActiveDropdown('diy')}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
                  activeDropdown === 'diy' || (activeSection === 'blog' && false)
                    ? 'text-amber-800 dark:text-amber-400 bg-amber-500/10'
                    : 'text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>DIY</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'diy' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'diy' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 top-full mt-1.5 w-76 rounded-xl bg-[#faf7f2] dark:bg-[#181716] border border-stone-200 dark:border-stone-800 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500">
                    DIY Tutorials & Shop Plans
                  </div>
                  
                  <button
                    onClick={() => handleNavClick('blog', 'DIY & Tutorials')}
                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-stone-800 dark:text-stone-200 hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-400 flex items-center justify-between"
                  >
                    <span>All DIY Guides & Workshop Plans</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                  <button
                    onClick={() => handleNavClick('blog', 'DIY & Tutorials')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Table Saw Crosscut Sleds & Jigs</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('blog', 'Joinery Techniques')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Hand-Cut Dovetail Tutorials</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('blog', 'Shop Setup')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Small Shop Layout & Dust Plans</span>
                  </button>

                  <div className="my-1.5 border-t border-stone-200 dark:border-stone-800" />

                  {/* Fast Post trigger for DIY */}
                  <div className="px-2">
                    <button
                      onClick={() => handlePublishClick('diy')}
                      className="w-full py-1.5 px-2.5 rounded-md bg-amber-600/10 hover:bg-amber-600 text-amber-800 dark:text-amber-300 hover:text-stone-950 text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Post DIY Guide / Jig Plan</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 5. FINISHES */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('finishes')}
                onMouseEnter={() => setActiveDropdown('finishes')}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
                  activeDropdown === 'finishes'
                    ? 'text-amber-800 dark:text-amber-400 bg-amber-500/10'
                    : 'text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white'
                }`}
              >
                <Droplet className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Finishes</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'finishes' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'finishes' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 top-full mt-1.5 w-84 rounded-xl bg-[#faf7f2] dark:bg-[#181716] border border-stone-200 dark:border-stone-800 shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    
                    {/* OILS Column */}
                    <div className="p-2 rounded-lg bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-400 mb-1.5">
                        <Droplet className="w-3.5 h-3.5" />
                        <span>Oils</span>
                      </div>
                      <p className="text-[10px] text-stone-500 dark:text-stone-400 mb-2">
                        Tactile, zero-plastic grain enhancement
                      </p>
                      <div className="space-y-1">
                        <button
                          onClick={() => handleNavClick('blog', 'Oils (Hardwax & Natural)')}
                          className="w-full text-left text-[11px] font-medium text-stone-700 dark:text-stone-300 hover:text-amber-600"
                        >
                          • Hardwax Oils (Rubio/Osmo)
                        </button>
                        <button
                          onClick={() => handleNavClick('blog', 'Oils (Hardwax & Natural)')}
                          className="w-full text-left text-[11px] font-medium text-stone-700 dark:text-stone-300 hover:text-amber-600"
                        >
                          • Tung Oil & Citrus Solvent
                        </button>
                        <button
                          onClick={() => handleNavClick('blog', 'Oils (Hardwax & Natural)')}
                          className="w-full text-left text-[11px] font-medium text-stone-700 dark:text-stone-300 hover:text-amber-600"
                        >
                          • Danish & Boiled Linseed
                        </button>
                      </div>
                      <button
                        onClick={() => handlePublishClick('oils')}
                        className="mt-2.5 w-full py-1 px-1.5 rounded-sm bg-amber-600/15 hover:bg-amber-600 text-amber-900 dark:text-amber-200 hover:text-stone-950 text-[10px] font-bold uppercase flex items-center justify-center gap-1 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                        <span>+ Post Oils Guide</span>
                      </button>
                    </div>

                    {/* POLYURETHANES Column */}
                    <div className="p-2 rounded-lg bg-stone-200/50 dark:bg-stone-900/60 border border-stone-300/50 dark:border-stone-800">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 dark:text-stone-100 mb-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                        <span>Polyurethanes</span>
                      </div>
                      <p className="text-[10px] text-stone-500 dark:text-stone-400 mb-2">
                        Abrasion, water & chemical defense
                      </p>
                      <div className="space-y-1">
                        <button
                          onClick={() => handleNavClick('blog', 'Polyurethanes & Topcoats')}
                          className="w-full text-left text-[11px] font-medium text-stone-700 dark:text-stone-300 hover:text-amber-600"
                        >
                          • Water-Based Poly (Clear)
                        </button>
                        <button
                          onClick={() => handleNavClick('blog', 'Polyurethanes & Topcoats')}
                          className="w-full text-left text-[11px] font-medium text-stone-700 dark:text-stone-300 hover:text-amber-600"
                        >
                          • Oil Poly (Warm Amber)
                        </button>
                        <button
                          onClick={() => handleNavClick('blog', 'Polyurethanes & Topcoats')}
                          className="w-full text-left text-[11px] font-medium text-stone-700 dark:text-stone-300 hover:text-amber-600"
                        >
                          • Wipe-On 50/50 Method
                        </button>
                      </div>
                      <button
                        onClick={() => handlePublishClick('polyurethanes')}
                        className="mt-2.5 w-full py-1 px-1.5 rounded-sm bg-stone-300/60 dark:bg-stone-800 hover:bg-amber-600 text-stone-900 dark:text-stone-200 hover:text-stone-950 text-[10px] font-bold uppercase flex items-center justify-center gap-1 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                        <span>+ Post Poly Guide</span>
                      </button>
                    </div>

                  </div>

                  <div className="border-t border-stone-200 dark:border-stone-800 pt-2 flex items-center justify-between">
                    <button
                      onClick={() => handleNavClick('blog', 'Finishing & Care')}
                      className="text-[11px] font-medium text-stone-600 dark:text-stone-400 hover:text-amber-600 flex items-center gap-1"
                    >
                      <span>View All Finishing Shootouts</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 6. BLOGS */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('blogs')}
                onMouseEnter={() => setActiveDropdown('blogs')}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
                  activeDropdown === 'blogs' || activeSection === 'blog'
                    ? 'text-amber-800 dark:text-amber-400 bg-amber-500/10'
                    : 'text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white'
                }`}
              >
                <Newspaper className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Blogs</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'blogs' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'blogs' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 top-full mt-1.5 w-76 rounded-xl bg-[#faf7f2] dark:bg-[#181716] border border-stone-200 dark:border-stone-800 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500">
                    Woodcraft Journal & Field Notes
                  </div>
                  
                  <button
                    onClick={() => handleNavClick('blog', 'all')}
                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-stone-800 dark:text-stone-200 hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-400 flex items-center justify-between"
                  >
                    <span>All Articles & Field Tests</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                  <button
                    onClick={() => handleNavClick('blog', 'Tool Reviews')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Tool Reviews & Benchmarks</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('blog', 'Joinery Techniques')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Joinery & Woodcraft Techniques</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('blog', 'Finishing & Care')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Finishing Chemistry & Care Guides</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('blog', 'Shop Setup')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Shop Setup, Dust & Electrical</span>
                  </button>

                  <div className="my-1.5 border-t border-stone-200 dark:border-stone-800" />

                  {/* Fast Post trigger for Blog */}
                  <div className="px-2">
                    <button
                      onClick={() => handlePublishClick('diy')}
                      className="w-full py-1.5 px-2.5 rounded-md bg-amber-600/10 hover:bg-amber-600 text-amber-800 dark:text-amber-300 hover:text-stone-950 text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Post Blog Article</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 7. SMART SHOP & AI HUBS MENU */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('smarthub')}
                onMouseEnter={() => setActiveDropdown('smarthub')}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
                  activeDropdown === 'smarthub'
                    ? 'text-amber-800 dark:text-amber-400 bg-amber-500/10'
                    : 'text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Smart Shop & AI</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'smarthub' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'smarthub' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute right-0 top-full mt-1.5 w-76 rounded-xl bg-[#faf7f2] dark:bg-[#181716] border border-stone-200 dark:border-stone-800 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500">
                    IoT Automation & AI Productivity
                  </div>
                  
                  <button
                    onClick={() => { setActiveDropdown(null); onOpenSmartHub(); }}
                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-stone-800 dark:text-stone-200 hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-400 flex items-center justify-between"
                  >
                    <span>IoT Workshop & Kiln Monitor</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                  <button
                    onClick={() => { setActiveDropdown(null); onOpenSmartHub(); }}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>AI Cut-List Waste Optimizer</span>
                  </button>
                  <button
                    onClick={() => { setActiveDropdown(null); onOpenSmartHub(); }}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>AI Voice / Text Shop Build Log</span>
                  </button>
                  <button
                    onClick={() => { setActiveDropdown(null); onOpenSmartHub(); }}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>AI Receipt & Invoice OCR Parser</span>
                  </button>

                  <div className="my-1 border-t border-stone-200 dark:border-stone-800" />

                  <button
                    onClick={() => { setActiveDropdown(null); onOpenVideoGenerator(); }}
                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-amber-700 dark:text-amber-400 hover:bg-amber-500/10 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Film className="w-3.5 h-3.5 text-amber-600" />
                      <span>🎬 AI Short Video from Blog</span>
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-500 font-bold">Veo 3</span>
                  </button>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('suite')}
                onMouseEnter={() => setActiveDropdown('suite')}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
                  activeDropdown === 'suite' || activeSection === 'calculator'
                    ? 'text-amber-800 dark:text-amber-400 bg-amber-500/10'
                    : 'text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white'
                }`}
              >
                <Ruler className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Workshop Suite</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'suite' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'suite' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute right-0 top-full mt-1.5 w-76 rounded-xl bg-[#faf7f2] dark:bg-[#181716] border border-stone-200 dark:border-stone-800 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500">
                    Calculators & Timber Engineering
                  </div>
                  
                  <button
                    onClick={() => handleNavClick('calculator')}
                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-stone-800 dark:text-stone-200 hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-400 flex items-center justify-between"
                  >
                    <span>Lumber Board Foot & Pricing</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                  <button
                    onClick={() => handleNavClick('calculator')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Seasonal Wood Movement Swelling</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('calculator')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Timber Species & Janka Explorer</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('calculator')}
                    className="w-full px-3.5 py-1.5 text-left text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Fractions / Metric Unit Converter</span>
                  </button>
                </div>
              )}
            </div>

            {/* 6. ABOUT */}
            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
                activeSection === 'about'
                  ? 'text-amber-800 dark:text-amber-400 bg-amber-500/10'
                  : 'text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              <span>About Studio</span>
            </button>
          </nav>

          {/* Right Action Icons & Direct Post CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Direct "+ Post Content" Button */}
            <button
              onClick={() => onOpenPublisher('diy')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md shadow-xs hover:shadow-md transition-all group"
              title="Publish New Content to Studio Feeds"
            >
              <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
              <span className="hidden sm:inline">Post Content</span>
              <span className="sm:hidden">Post</span>
              {publishedCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 bg-stone-950 text-amber-400 text-[10px] rounded-full font-extrabold">
                  {publishedCount}
                </span>
              )}
            </button>

            {/* Tool Finder Quiz trigger */}
            <button
              onClick={onOpenToolFinder}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-800 dark:text-stone-200 bg-stone-200/60 dark:bg-stone-800/80 hover:bg-stone-300/70 dark:hover:bg-stone-700/80 rounded-md transition-colors border border-stone-300/60 dark:border-stone-700/60"
              title="Interactive Tool Recommendation Quiz"
            >
              <Compass className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Tool Finder</span>
            </button>

            {/* Smart Shop & AI Hub trigger */}
            <button
              onClick={onOpenSmartHub}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 rounded-md transition-colors border border-amber-500/30"
              title="IoT Workshop & AI Productivity Hub"
            >
              <Cpu className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Smart Shop Hub</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-md text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-stone-700 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Commission CTA button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden md:inline-flex items-center justify-center px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 dark:bg-amber-600 hover:bg-amber-700 dark:hover:bg-amber-500 rounded-md transition-colors shadow-xs"
            >
              Commission
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden p-2 rounded-md text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-6 mt-3 border-t border-stone-200 dark:border-stone-800 animate-in fade-in slide-in-from-top-2 duration-200 space-y-2">
            
            {/* Quick Post bar for mobile */}
            <div className="flex items-center gap-1.5 p-2 bg-amber-500/15 rounded-lg border border-amber-500/30 mb-3 overflow-x-auto">
              <span className="text-[11px] font-bold text-amber-900 dark:text-amber-200 shrink-0">Post:</span>
              <button
                onClick={() => handlePublishClick('plans')}
                className="px-2 py-1 bg-amber-600 text-stone-950 text-[10px] font-bold rounded-md shrink-0"
              >
                + Plans
              </button>
              <button
                onClick={() => handlePublishClick('diy')}
                className="px-2 py-1 bg-amber-600 text-stone-950 text-[10px] font-bold rounded-md shrink-0"
              >
                + DIY
              </button>
              <button
                onClick={() => handlePublishClick('oils')}
                className="px-2 py-1 bg-amber-600 text-stone-950 text-[10px] font-bold rounded-md shrink-0"
              >
                + Oils
              </button>
              <button
                onClick={() => handlePublishClick('polyurethanes')}
                className="px-2 py-1 bg-amber-600 text-stone-950 text-[10px] font-bold rounded-md shrink-0"
              >
                + Poly
              </button>
              <button
                onClick={() => handlePublishClick('tools')}
                className="px-2 py-1 bg-amber-600 text-stone-950 text-[10px] font-bold rounded-md shrink-0"
              >
                + Tools
              </button>
              <button
                onClick={() => handlePublishClick('diy')}
                className="px-2 py-1 bg-amber-600 text-stone-950 text-[10px] font-bold rounded-md shrink-0"
              >
                + Blog
              </button>
            </div>

            {/* Mobile Accordion 1: Tools */}
            <div className="border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('tools')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 bg-stone-100/70 dark:bg-stone-900/60"
              >
                <span className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-amber-600" />
                  <span>Tools</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'tools' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'tools' && (
                <div className="p-3 bg-white dark:bg-stone-950 space-y-2 border-t border-stone-200 dark:border-stone-800">
                  <button onClick={() => handleNavClick('gear', 'all')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1 font-semibold">• All Tested Tools</button>
                  <button onClick={() => handleNavClick('gear', 'saws')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Table Saws & Power</button>
                  <button onClick={() => handleNavClick('gear', 'hand-tools')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Hand Planes & Chisels</button>
                  <button onClick={() => handleNavClick('gear', 'routers')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Routers & Joinery</button>
                  <button onClick={() => handleNavClick('gear', 'dust-collection')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Dust Collection</button>
                  <button onClick={() => handleNavClick('gear', 'clamps')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Clamps & Fixtures</button>
                  <button onClick={() => handlePublishClick('tools')} className="w-full mt-2 py-1.5 bg-amber-600 text-stone-950 text-xs font-bold rounded-md">+ Post Tool Review</button>
                </div>
              )}
            </div>

            {/* Mobile Accordion 1B: Plans */}
            <div className="border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('plans')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 bg-stone-100/70 dark:bg-stone-900/60"
              >
                <span className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-amber-600" />
                  <span>Plans</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'plans' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'plans' && (
                <div className="p-3 bg-white dark:bg-stone-950 space-y-2 border-t border-stone-200 dark:border-stone-800">
                  <button onClick={() => handleNavClick('plans', 'all')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1 font-semibold">• All Plans & Blueprints</button>
                  <button onClick={() => handleNavClick('plans', 'shop-jigs')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Shop Jigs & Fixtures</button>
                  <button onClick={() => handleNavClick('plans', 'furniture')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Fine Furniture Plans</button>
                  <button onClick={() => handleNavClick('plans', 'outdoor')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Outdoor Builds</button>
                  <button onClick={() => handleNavClick('plans', 'small-craft')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Small Crafts & Turning</button>
                  <button onClick={() => handlePublishClick('plans')} className="w-full mt-2 py-1.5 bg-amber-600 text-stone-950 text-xs font-bold rounded-md">+ Post Woodworking Plan</button>
                </div>
              )}
            </div>

            {/* Mobile Accordion 2: Projects */}
            <div className="border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('projects')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 bg-stone-100/70 dark:bg-stone-900/60"
              >
                <span className="flex items-center gap-2">
                  <FolderKanban className="w-4 h-4 text-amber-600" />
                  <span>Projects</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'projects' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'projects' && (
                <div className="p-3 bg-white dark:bg-stone-950 space-y-2 border-t border-stone-200 dark:border-stone-800">
                  <button onClick={() => handleNavClick('portfolio', 'all')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1 font-semibold">• All Studio Projects</button>
                  <button onClick={() => handleNavClick('portfolio', 'furniture')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Dining Tables & Credenzas</button>
                  <button onClick={() => handleNavClick('portfolio', 'joinery')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Timber Joinery Art</button>
                  <button onClick={() => handleNavClick('portfolio', 'shop')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Workshop Builds & Jigs</button>
                  <button onClick={() => handleNavClick('portfolio', 'turning')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Lathe & Turning</button>
                  <button onClick={() => handlePublishClick('projects')} className="w-full mt-2 py-1.5 bg-amber-600 text-stone-950 text-xs font-bold rounded-md">+ Post Project</button>
                </div>
              )}
            </div>

            {/* Mobile Accordion 3: DIY */}
            <div className="border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('diy')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 bg-stone-100/70 dark:bg-stone-900/60"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span>DIY</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'diy' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'diy' && (
                <div className="p-3 bg-white dark:bg-stone-950 space-y-2 border-t border-stone-200 dark:border-stone-800">
                  <button onClick={() => handleNavClick('blog', 'DIY & Tutorials')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1 font-semibold">• All DIY Guides & Jigs</button>
                  <button onClick={() => handleNavClick('blog', 'DIY & Tutorials')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Workshop Fixtures & Sleds</button>
                  <button onClick={() => handleNavClick('blog', 'Joinery Techniques')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Hand Joinery Masterclass</button>
                  <button onClick={() => handleNavClick('blog', 'Shop Setup')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Shop Dust & Electrical</button>
                  <button onClick={() => handlePublishClick('diy')} className="w-full mt-2 py-1.5 bg-amber-600 text-stone-950 text-xs font-bold rounded-md">+ Post DIY Guide</button>
                </div>
              )}
            </div>

            {/* Mobile Accordion 4: Finishes */}
            <div className="border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('finishes')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 bg-stone-100/70 dark:bg-stone-900/60"
              >
                <span className="flex items-center gap-2">
                  <Droplet className="w-4 h-4 text-amber-600" />
                  <span>Finishes</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'finishes' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'finishes' && (
                <div className="p-3 bg-white dark:bg-stone-950 space-y-3 border-t border-stone-200 dark:border-stone-800">
                  <div className="space-y-1">
                    <p className="text-[11px] font-bold text-amber-700 dark:text-amber-400">Oils Category:</p>
                    <button onClick={() => handleNavClick('blog', 'Oils (Hardwax & Natural)')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300">• Hardwax Oils (Rubio & Osmo)</button>
                    <button onClick={() => handleNavClick('blog', 'Oils (Hardwax & Natural)')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300">• Tung Oil & Danish Oil</button>
                    <button onClick={() => handlePublishClick('oils')} className="w-full py-1 bg-amber-600/20 text-amber-800 dark:text-amber-300 text-[11px] font-bold rounded-sm mt-1">+ Post Oils Guide</button>
                  </div>
                  <div className="space-y-1 pt-2 border-t border-stone-200 dark:border-stone-800">
                    <p className="text-[11px] font-bold text-stone-800 dark:text-stone-200">Polyurethanes Category:</p>
                    <button onClick={() => handleNavClick('blog', 'Polyurethanes & Topcoats')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300">• Water-Based Clear Poly</button>
                    <button onClick={() => handleNavClick('blog', 'Polyurethanes & Topcoats')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300">• Oil Poly & Wipe-On 50/50</button>
                    <button onClick={() => handlePublishClick('polyurethanes')} className="w-full py-1 bg-stone-300 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-[11px] font-bold rounded-sm mt-1">+ Post Polyurethane Guide</button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Accordion 5: Blogs */}
            <div className="border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('blogs')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 bg-stone-100/70 dark:bg-stone-900/60"
              >
                <span className="flex items-center gap-2">
                  <Newspaper className="w-4 h-4 text-amber-600" />
                  <span>Blogs</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'blogs' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'blogs' && (
                <div className="p-3 bg-white dark:bg-stone-950 space-y-2 border-t border-stone-200 dark:border-stone-800">
                  <button onClick={() => handleNavClick('blog', 'all')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1 font-semibold">• All Articles & Field Tests</button>
                  <button onClick={() => handleNavClick('blog', 'Tool Reviews')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Tool Reviews & Tests</button>
                  <button onClick={() => handleNavClick('blog', 'Joinery Techniques')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Joinery Techniques</button>
                  <button onClick={() => handleNavClick('blog', 'Finishing & Care')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Finishing Chemistry & Care</button>
                  <button onClick={() => handleNavClick('blog', 'Shop Setup')} className="w-full text-left text-xs text-stone-700 dark:text-stone-300 py-1">• Shop Setup & Dust</button>
                  <button onClick={() => handlePublishClick('diy')} className="w-full mt-2 py-1.5 bg-amber-600 text-stone-950 text-xs font-bold rounded-md">+ Post Blog Article</button>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <button
              onClick={() => handleNavClick('calculator')}
              className="w-full flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 bg-stone-100/50 dark:bg-stone-900/50"
            >
              <Ruler className="w-4 h-4 text-amber-600" />
              <span>Lumber Board Foot Calculator</span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="w-full flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 bg-stone-100/50 dark:bg-stone-900/50"
            >
              <Compass className="w-4 h-4 text-amber-600" />
              <span>About Studio Philosophy</span>
            </button>

            {/* CTA Buttons */}
            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenToolFinder();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-800 dark:text-stone-200 bg-stone-200/80 dark:bg-stone-800 rounded-md"
              >
                <Compass className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Launch 60-Sec Tool Finder</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 dark:bg-amber-600 hover:bg-amber-700 dark:hover:bg-amber-500 rounded-md"
              >
                Commission Custom Furniture
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
