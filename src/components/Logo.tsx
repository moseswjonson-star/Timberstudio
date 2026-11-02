import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'auto';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'auto' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Precision Dovetail & Timber Emblem */}
      <div className={`${sizeClasses[size]} rounded-md bg-gradient-to-br from-amber-600 via-amber-700 to-stone-900 text-stone-50 flex items-center justify-center shadow-md border border-amber-500/30 transition-transform group-hover:scale-105 relative overflow-hidden shrink-0`}>
        {/* Subtle wood grain background lines */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fde047_1px,transparent_1px)] [background-size:6px_6px]" />
        
        {/* Custom SVG Dovetail / Precision Tool Mark */}
        <svg 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-amber-200 relative z-10"
        >
          {/* Dovetail pin and tail interlocking geometry */}
          <path 
            d="M6 8H10L13 14H19L22 8H26V11L21 21H11L6 11V8Z" 
            fill="currentColor" 
            fillOpacity="0.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Center precision marker / blade */}
          <path 
            d="M16 6V26M10 16H22" 
            stroke="#f59e0b" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          {/* Intersection node */}
          <circle cx="16" cy="16" r="3" fill="#fbbf24" />
        </svg>
      </div>

      <div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-serif text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
            TimberCraft
          </span>
          <span className="text-[11px] uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
            Studio
          </span>
        </div>
        <p className="text-[11px] text-stone-500 dark:text-stone-400 font-medium tracking-wide">
          Heirloom Woodcraft & Tool Lab
        </p>
      </div>
    </div>
  );
};
