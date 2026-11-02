import React, { useState } from 'react';
import { Hammer, Mail, Check, ShieldCheck, ArrowRight, Compass, Plus, Droplet, BookOpen } from 'lucide-react';
import { PublishContentType } from './ContentPublisherModal';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (sectionId: string, categoryFilter?: string) => void;
  onOpenAffiliateDisclosure: () => void;
  onOpenToolFinder: () => void;
  onOpenPublisher?: (type?: PublishContentType) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAffiliateDisclosure,
  onOpenToolFinder,
  onOpenPublisher
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterDone(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Studio Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-white">
              <Logo size="md" />
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Dedicated to preserving the sacred art of traditional joinery, slow timber drying, and honest, independent tool evaluations. Crafted in the Pacific Northwest since 2008.
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={onOpenAffiliateDisclosure}
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 underline underline-offset-2"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>FTC Affiliate Transparency Policy</span>
              </button>

              {onOpenPublisher && (
                <button
                  onClick={() => onOpenPublisher('diy')}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-semibold"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Post Content Frequently (Open Publisher)</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Nav 1: Categorized Sections */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-white">
              Studio Sections
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onNavigate('gear', 'all')} className="hover:text-amber-400 transition-colors">
                  Tools
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('plans', 'all')} className="hover:text-amber-400 transition-colors">
                  Plans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio', 'all')} className="hover:text-amber-400 transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog', 'DIY & Tutorials')} className="hover:text-amber-400 transition-colors">
                  DIY
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog', 'all')} className="hover:text-amber-400 transition-colors">
                  Finishes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog', 'all')} className="hover:text-amber-400 transition-colors">
                  Blogs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calculator')} className="hover:text-amber-400 transition-colors text-amber-400/90 font-medium">
                  Lumber Board Foot Calc →
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Nav 2: Tested Gear & Saws */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-white">
              Field-Tested Categories
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onNavigate('gear', 'saws')} className="hover:text-amber-400 transition-colors">
                  Table Saws & Track Saws
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gear', 'hand-tools')} className="hover:text-amber-400 transition-colors">
                  Hand Planes & Japanese Saws
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gear', 'routers')} className="hover:text-amber-400 transition-colors">
                  Plunge Routers & Domino Joiners
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gear', 'dust-collection')} className="hover:text-amber-400 transition-colors">
                  Cyclone Dust Collectors & HEPA
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog', 'Oils (Hardwax & Natural)')} className="hover:text-amber-400 transition-colors">
                  Rubio Monocoat vs. Osmo Polyx
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-white">
              The Guild Dispatch
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Join 18,400+ woodworkers. Receive our monthly workshop blueprints, cut-lists, and verified tool price drop alerts.
            </p>

            {newsletterDone ? (
              <div className="p-3 rounded bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>You're subscribed! Check your inbox for the welcome cut-sheet.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded border border-stone-700 bg-stone-800/80 text-white placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-3 text-xs font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded transition-colors flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Subscribe to Field Notes</span>
                </button>
              </form>
            )}

            <button
              onClick={onOpenToolFinder}
              className="w-full mt-2 py-1.5 px-3 rounded border border-stone-700 text-stone-300 hover:text-white hover:border-stone-500 text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Take the 60-Sec Tool Finder</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} TimberCraft Studio LLC. All rights reserved. Handcrafted in Portland, OR.</p>
          <div className="flex items-center gap-4">
            <button onClick={onOpenAffiliateDisclosure} className="hover:text-stone-400 transition-colors">
              FTC Affiliate Disclosure
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-stone-400 transition-colors">
              Studio Inquiries
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => onNavigate('calculator')} className="hover:text-stone-400 transition-colors">
              Lumber Calculator
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
