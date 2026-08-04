export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Glow Filters */}
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="primary-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E7FFF" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
        </defs>

        {/* Head Base / Jawline */}
        <polygon 
          points="35,25 65,25 75,50 65,65 60,80 40,80 35,65 25,50" 
          fill="url(#primary-grad)" fillOpacity="0.1" 
          stroke="url(#primary-grad)" 
        />

        {/* Forehead Armor Plate */}
        <polygon 
          points="42,25 58,25 53,55 47,55" 
          fill="#00D4FF" fillOpacity="0.1" 
          stroke="url(#primary-grad)" 
        />

        {/* Central Glowing Tech Line */}
        <line x1="50" y1="30" x2="50" y2="50" stroke="#00D4FF" filter="url(#glow)" strokeWidth="1.5" />
        <circle cx="50" cy="40" r="1.5" fill="#00D4FF" filter="url(#glow)" />
        <circle cx="50" cy="30" r="1.5" fill="#00D4FF" filter="url(#glow)" />

        {/* Left Horn (Curving INWARDS) */}
        <path 
          d="M 35,30 C 15,30 5,20 20,5 C 10,20 20,35 32,40 Z" 
          fill="url(#primary-grad)" fillOpacity="0.15" 
          stroke="url(#primary-grad)" 
        />
        
        {/* Right Horn (Curving INWARDS) */}
        <path 
          d="M 65,30 C 85,30 95,20 80,5 C 90,20 80,35 68,40 Z" 
          fill="url(#primary-grad)" fillOpacity="0.15" 
          stroke="url(#primary-grad)" 
        />

        {/* Left Ear */}
        <polygon points="25,50 5,55 22,60" fill="url(#primary-grad)" fillOpacity="0.1" stroke="#2E7FFF" />
        
        {/* Right Ear */}
        <polygon points="75,50 95,55 78,60" fill="url(#primary-grad)" fillOpacity="0.1" stroke="#2E7FFF" />

        {/* Slanted Eyes (Glowing Cyan) */}
        <polygon points="30,52 44,58 36,62" fill="#00D4FF" stroke="#00D4FF" filter="url(#glow)" />
        <polygon points="70,52 56,58 64,62" fill="#00D4FF" stroke="#00D4FF" filter="url(#glow)" />

        {/* Snout Box */}
        <polygon 
          points="38,80 62,80 66,90 55,95 45,95 34,90" 
          fill="url(#primary-grad)" fillOpacity="0.15"
          stroke="#2E7FFF" 
        />
        
        {/* Nostrils */}
        <circle cx="45" cy="87" r="1.5" fill="#00D4FF" filter="url(#glow)" />
        <circle cx="55" cy="87" r="1.5" fill="#00D4FF" filter="url(#glow)" />

        {/* Cyber Tech Lines on Cheeks */}
        <path d="M 35,65 L 42,75" stroke="#00D4FF" strokeWidth="1.5" filter="url(#glow)" />
        <path d="M 65,65 L 58,75" stroke="#00D4FF" strokeWidth="1.5" filter="url(#glow)" />
        
        <circle cx="42" cy="75" r="1" fill="#00D4FF" />
        <circle cx="58" cy="75" r="1" fill="#00D4FF" />
      </g>
    </svg>
  );
}
