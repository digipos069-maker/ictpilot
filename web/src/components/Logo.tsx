import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
      <div className="relative flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg shadow-primary/20">
          
          {/* Background Rounded Square */}
          <rect width="40" height="40" rx="12" fill="#1f1d34" stroke="#032EA1" strokeWidth="1.5" strokeOpacity="0.5" />
          
          {/* The Morphing Market Line */}
          <path stroke="url(#marketGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <animate 
              attributeName="d" 
              dur="4s" 
              repeatCount="indefinite"
              values="
                M8 28 L 16 16 L 24 24 L 32 12;
                M8 22 L 16 28 L 24 14 L 32 20;
                M8 26 L 16 12 L 24 26 L 32 10;
                M8 28 L 16 16 L 24 24 L 32 12
              "
              keyTimes="0; 0.33; 0.66; 1"
            />
          </path>

          {/* Glowing Nodes tracking the line's peaks/valleys */}
          {/* Node 1 (X=16) */}
          <circle cx="16" cy="16" r="2" fill="#fda9ff">
            <animate 
              attributeName="cy" 
              dur="4s" 
              repeatCount="indefinite"
              values="16; 28; 12; 16"
              keyTimes="0; 0.33; 0.66; 1"
            />
          </circle>

          {/* Node 2 (X=24) */}
          <circle cx="24" cy="24" r="2" fill="#3cddc7">
            <animate 
              attributeName="cy" 
              dur="4s" 
              repeatCount="indefinite"
              values="24; 14; 26; 24"
              keyTimes="0; 0.33; 0.66; 1"
            />
          </circle>

          {/* Node 3 (X=32) - Leading Edge */}
          <circle cx="32" cy="12" r="3" fill="#3cddc7" filter="drop-shadow(0 0 2px #3cddc7)">
            <animate 
              attributeName="cy" 
              dur="4s" 
              repeatCount="indefinite"
              values="12; 20; 10; 12"
              keyTimes="0; 0.33; 0.66; 1"
            />
          </circle>

          <defs>
            <linearGradient id="marketGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fda9ff" />
              <stop offset="1" stopColor="#3cddc7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-on-surface tracking-tight group-hover:text-primary transition-colors">ICTPilot</span>
    </Link>
  );
}
