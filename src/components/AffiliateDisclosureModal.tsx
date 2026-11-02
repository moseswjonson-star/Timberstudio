import React, { useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';

interface AffiliateDisclosureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AffiliateDisclosureModal: React.FC<AffiliateDisclosureModalProps> = ({
  isOpen,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-2xl bg-[#faf7f2] dark:bg-[#181614] rounded-lg shadow-2xl border border-stone-300 dark:border-stone-800 overflow-hidden text-left p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close disclosure"
          className="absolute top-4 right-4 p-2 rounded-full text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Legal & Editorial Transparency</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-4">
          FTC Affiliate Disclosure & Editorial Code
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed max-h-[70vh] overflow-y-auto pr-2">
          <p>
            In compliance with the <strong>Federal Trade Commission (FTC) guidelines</strong> on endorsements and testimonials, TimberCraft Studio maintains 100% transparency regarding our commercial affiliate relationships.
          </p>

          <div className="p-4 rounded-md bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 space-y-1">
            <div className="font-semibold text-amber-900 dark:text-amber-300 text-xs uppercase tracking-wider">
              The Fundamental Promise:
            </div>
            <p className="text-xs text-amber-950 dark:text-amber-200">
              You will never pay a penny more by clicking our links. The merchant pays us a modest referral percentage out of their own advertising budget.
            </p>
          </div>

          <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 pt-2">
            1. How Affiliate Links Function
          </h3>
          <p>
            When you click on tool recommendation links pointing to authorized woodworking retailers—such as <em>Woodcraft Supply, Rockler Woodworking, Lee Valley Tools, or Amazon</em>—a tracking cookie registers that TimberCraft Studio referred you. If you make a purchase within the cookie window, the merchant provides us a small commission.
          </p>

          <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 pt-2">
            2. Independent Workshop Bench Testing
          </h3>
          <p>
            No tool manufacturer has paid for a favorable ranking or placement in our guides. Our reviews are based on actual physical tool operation: measuring arbor runout with dial indicators, testing dust velocity with anemometers, and using tools during our client furniture commissions. If a tool fails our standards, we state so unequivocally.
          </p>

          <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 pt-2">
            3. Amazon Associates Program Notice
          </h3>
          <p>
            TimberCraft Studio is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </p>

          <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 pt-2">
            4. Questions or Inquiries
          </h3>
          <p>
            If you have questions about our testing methodology, or wish to submit equipment for laboratory evaluation, contact Johnson Wadimbe directly at <a href="mailto:testing@timbercraft.studio" className="text-amber-800 dark:text-amber-400 underline">testing@timbercraft.studio</a>.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 dark:bg-amber-600 hover:bg-amber-700 dark:hover:bg-amber-500 rounded-md"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
