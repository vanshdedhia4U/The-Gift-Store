import React from 'react';

interface ToyArtworkProps {
  type: 'hotwheels' | 'crane' | 'robot' | 'rcCar' | 'teddy' | 'boardGame' | 'track' | 'magnet' | 'microscope' | 'heroStore' | 'galleryAisle' | 'galleryHotWheels' | 'galleryBuilding' | 'galleryStem' | 'galleryPlush' | 'galleryGames' | 'galleryWrapping';
  className?: string;
  badge?: string;
}

export const ToyArtwork: React.FC<ToyArtworkProps> = ({ type, className = 'w-full h-full', badge }) => {
  return (
    <div className={`relative overflow-hidden flex items-center justify-center select-none bg-gradient-to-b from-[#F7F6F2] to-[#ECEAE4] ${className}`}>
      {/* Background radial spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.9)_0%,rgba(240,238,232,0.4)_70%,rgba(226,223,214,0.7)_100%)] pointer-events-none" />

      {/* Subtle floor grid/travertine reflection line */}
      <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-black/[0.03] to-transparent pointer-events-none border-t border-black/[0.04]" />

      {/* Artwork rendered as high-fidelity SVG */}
      <div className="relative z-10 w-full h-full max-w-[90%] max-h-[85%] flex items-center justify-center">
        {type === 'hotwheels' && (
          <svg viewBox="0 0 400 260" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hwBody" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DC2626" />
                <stop offset="0.5" stopColor="#B91C1C" />
                <stop offset="1" stopColor="#7F1D1D" />
              </linearGradient>
              <linearGradient id="hwWindow" x1="120" y1="80" x2="280" y2="140" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1E293B" />
                <stop offset="0.8" stopColor="#0F172A" />
              </linearGradient>
              <linearGradient id="goldRim" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#F59E0B" />
                <stop offset="0.5" stopColor="#FCD34D" />
                <stop offset="1" stopColor="#B45309" />
              </linearGradient>
              <filter id="hwShadow" x="30" y="190" width="340" height="40" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>
            {/* Ground Contact Shadow */}
            <ellipse cx="200" cy="210" rx="150" ry="14" fill="#000000" fillOpacity="0.22" filter="url(#hwShadow)" />

            {/* Rear Wing Spoiler */}
            <path d="M50 115 L40 100 L75 100 L70 120 Z" fill="#111827" />
            <rect x="36" y="96" width="45" height="5" rx="2" fill="#B91C1C" />

            {/* Main Car Body Profile */}
            <path
              d="M50 160 C50 145 65 135 90 135 L125 130 C150 105 180 82 240 82 L285 86 C310 92 335 120 345 138 L365 152 C375 158 375 175 365 180 L350 182 C345 170 330 160 310 160 C290 160 275 172 270 185 L145 185 C140 172 125 160 105 160 C85 160 70 170 65 183 L50 180 Z"
              fill="url(#hwBody)"
              stroke="#7F1D1D"
              strokeWidth="2"
            />

            {/* Racing Dual Stripe */}
            <path d="M135 125 L235 84 L275 87 L340 135 L335 142 L275 94 L235 90 L135 132 Z" fill="#FEF08A" opacity="0.9" />

            {/* Aerodynamic Cabin Windows */}
            <path d="M140 125 C160 105 185 92 230 92 L275 94 C295 110 310 128 318 135 L200 135 Z" fill="url(#hwWindow)" stroke="#334155" strokeWidth="1.5" />
            <line x1="215" y1="92" x2="205" y2="135" stroke="#334155" strokeWidth="2" />

            {/* Headlights */}
            <polygon points="345,142 364,153 355,160 340,152" fill="#67E8F9" opacity="0.85" />

            {/* Front Wheel */}
            <g transform="translate(305, 185)">
              <circle cx="0" cy="0" r="28" fill="#18181B" stroke="#27272A" strokeWidth="4" />
              <circle cx="0" cy="0" r="19" fill="#09090B" />
              <circle cx="0" cy="0" r="14" fill="none" stroke="url(#goldRim)" strokeWidth="3" />
              <circle cx="0" cy="0" r="6" fill="#F59E0B" />
              <line x1="-12" y1="0" x2="12" y2="0" stroke="url(#goldRim)" strokeWidth="2" />
              <line x1="0" y1="-12" x2="0" y2="12" stroke="url(#goldRim)" strokeWidth="2" />
            </g>

            {/* Rear Wheel */}
            <g transform="translate(100, 185)">
              <circle cx="0" cy="0" r="28" fill="#18181B" stroke="#27272A" strokeWidth="4" />
              <circle cx="0" cy="0" r="19" fill="#09090B" />
              <circle cx="0" cy="0" r="14" fill="none" stroke="url(#goldRim)" strokeWidth="3" />
              <circle cx="0" cy="0" r="6" fill="#F59E0B" />
              <line x1="-12" y1="0" x2="12" y2="0" stroke="url(#goldRim)" strokeWidth="2" />
              <line x1="0" y1="-12" x2="0" y2="12" stroke="url(#goldRim)" strokeWidth="2" />
            </g>

            {/* Die-Cast Highlight Flare */}
            <path d="M150 98 Q 230 94 270 98" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            <path d="M70 148 L130 140" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          </svg>
        )}

        {type === 'crane' && (
          <svg viewBox="0 0 400 260" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="230" rx="140" ry="12" fill="#000000" fillOpacity="0.18" />
            {/* Crane Base Chassis */}
            <rect x="90" y="195" width="180" height="26" rx="4" fill="#EAB308" stroke="#CA8A04" strokeWidth="2" />
            <rect x="75" y="210" width="210" height="15" rx="3" fill="#1F2937" />
            {/* Wheels */}
            {[90, 130, 170, 210, 250].map((cx, i) => (
              <circle key={i} cx={cx} cy="225" r="12" fill="#374151" stroke="#111827" strokeWidth="3" />
            ))}
            {/* Turret */}
            <rect x="120" y="155" width="80" height="40" rx="4" fill="#CA8A04" />
            <rect x="165" y="160" width="30" height="25" rx="3" fill="#0284C7" opacity="0.7" />
            {/* Counterweight */}
            <rect x="90" y="162" width="28" height="28" rx="2" fill="#4B5563" />
            {/* Lattice Boom */}
            <polygon points="175,160 340,40 355,50 185,175" fill="#EAB308" stroke="#A16207" strokeWidth="2" />
            {/* Lattice Cross Bracing */}
            <line x1="210" y1="135" x2="230" y2="125" stroke="#78350F" strokeWidth="2" />
            <line x1="240" y1="115" x2="260" y2="105" stroke="#78350F" strokeWidth="2" />
            <line x1="270" y1="95" x2="290" y2="85" stroke="#78350F" strokeWidth="2" />
            <line x1="300" y1="75" x2="320" y2="65" stroke="#78350F" strokeWidth="2" />
            {/* Cable & Hook */}
            <line x1="345" y1="45" x2="345" y2="170" stroke="#374151" strokeWidth="2" strokeDasharray="3 2" />
            <circle cx="345" cy="170" r="5" fill="#CA8A04" />
            <path d="M345 175 C345 195 330 195 330 185 C330 180 338 180 340 185" stroke="#1F2937" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Hydraulic Piston */}
            <line x1="160" y1="195" x2="225" y2="135" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />
            <line x1="175" y1="180" x2="225" y2="135" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
          </svg>
        )}

        {type === 'robot' && (
          <svg viewBox="0 0 400 260" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="225" rx="120" ry="12" fill="#000000" fillOpacity="0.16" />
            {/* Tank Treads */}
            <rect x="120" y="195" width="160" height="24" rx="12" fill="#334155" stroke="#0F172A" strokeWidth="2" />
            {[140, 170, 200, 230, 260].map((cx, idx) => (
              <circle key={idx} cx={cx} cy="207" r="8" fill="#64748B" stroke="#0F172A" strokeWidth="2" />
            ))}
            {/* Robot Main Core Body */}
            <rect x="145" y="115" width="110" height="80" rx="10" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
            {/* Circuit grid decoration */}
            <line x1="160" y1="135" x2="190" y2="135" stroke="#7DD3FC" strokeWidth="2" />
            <line x1="190" y1="135" x2="190" y2="165" stroke="#7DD3FC" strokeWidth="2" />
            <circle cx="190" cy="165" r="3" fill="#38BDF8" />
            {/* Solar Panel Wing on top */}
            <polygon points="120,85 280,85 270,110 130,110" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            {[150, 180, 210, 240].map((x, i) => (
              <line key={i} x1={x} y1="85" x2={x - 5} y2="110" stroke="#38BDF8" strokeWidth="1.5" />
            ))}
            <line x1="125" y1="98" x2="275" y2="98" stroke="#38BDF8" strokeWidth="1.5" />
            {/* Robotic Eye Pod */}
            <circle cx="200" cy="65" r="22" fill="#F8FAFC" stroke="#0284C7" strokeWidth="3" />
            <circle cx="200" cy="65" r="14" fill="#06B6D4" />
            <circle cx="204" cy="61" r="5" fill="#FFFFFF" />
            {/* Antenna with status signal */}
            <line x1="200" y1="43" x2="200" y2="28" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
            <circle cx="200" cy="25" r="5" fill="#FF6B35" />
            {/* Articulated Claw Arm */}
            <path d="M255 145 L300 130 L320 155" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M320 155 L335 145 M320 155 L335 165" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
          </svg>
        )}

        {type === 'rcCar' && (
          <svg viewBox="0 0 400 260" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="215" rx="150" ry="14" fill="#000000" fillOpacity="0.2" />
            {/* Low-slung supercar body in fiery papaya orange */}
            <path
              d="M60 170 C60 150 80 135 110 130 L155 125 C185 95 230 75 285 75 L335 85 C355 98 368 125 370 150 L370 175 C370 185 360 188 350 188 L330 188 C325 170 305 158 285 158 C265 158 248 172 245 188 L145 188 C140 172 122 158 100 158 C78 158 65 170 60 188 Z"
              fill="#FF6B35"
              stroke="#EA580C"
              strokeWidth="2"
            />
            {/* Carbon Fiber Roof & Dihedral Windshield */}
            <path d="M170 120 C195 90 235 80 275 80 L315 90 C330 105 340 120 345 130 L220 130 Z" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
            <path d="M225 130 L245 82" stroke="#334155" strokeWidth="2" />
            {/* Aerodynamic Side Scoop */}
            <path d="M190 145 Q 220 140 235 160" stroke="#9A3412" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Aggressive LED Headlamp */}
            <path d="M345 135 L368 145 L358 155 Z" fill="#38BDF8" opacity="0.95" />
            {/* Rear Diffuser */}
            <rect x="52" y="168" width="14" height="12" fill="#09090B" />
            {/* Wheels */}
            <g transform="translate(285, 188)">
              <circle cx="0" cy="0" r="26" fill="#18181B" stroke="#27272A" strokeWidth="3" />
              <circle cx="0" cy="0" r="16" fill="#09090B" />
              <circle cx="0" cy="0" r="12" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 3" />
            </g>
            <g transform="translate(100, 188)">
              <circle cx="0" cy="0" r="26" fill="#18181B" stroke="#27272A" strokeWidth="3" />
              <circle cx="0" cy="0" r="16" fill="#09090B" />
              <circle cx="0" cy="0" r="12" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 3" />
            </g>
            {/* Light Flare */}
            <path d="M190 85 Q 260 82 300 88" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          </svg>
        )}

        {type === 'teddy' && (
          <svg viewBox="0 0 400 260" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="225" rx="100" ry="12" fill="#000000" fillOpacity="0.14" />
            {/* Bear Ears */}
            <circle cx="155" cy="80" r="24" fill="#B45309" stroke="#92400E" strokeWidth="2" />
            <circle cx="155" cy="80" r="14" fill="#FDE68A" />
            <circle cx="245" cy="80" r="24" fill="#B45309" stroke="#92400E" strokeWidth="2" />
            <circle cx="245" cy="80" r="14" fill="#FDE68A" />
            {/* Body */}
            <ellipse cx="200" cy="175" rx="65" ry="50" fill="#D97706" stroke="#B45309" strokeWidth="2" />
            <ellipse cx="200" cy="180" rx="38" ry="32" fill="#FEF3C7" />
            {/* Stitched Heart on Chest */}
            <path d="M200 172 C195 165 185 168 185 175 C185 182 200 190 200 190 C200 190 215 182 215 175 C215 168 205 165 200 172 Z" fill="#EF4444" opacity="0.85" />
            {/* Legs & Paws */}
            <ellipse cx="145" cy="210" rx="28" ry="18" fill="#B45309" />
            <ellipse cx="145" cy="210" rx="18" ry="10" fill="#FDE68A" />
            <ellipse cx="255" cy="210" rx="28" ry="18" fill="#B45309" />
            <ellipse cx="255" cy="210" rx="18" ry="10" fill="#FDE68A" />
            {/* Head */}
            <circle cx="200" cy="115" r="48" fill="#D97706" stroke="#B45309" strokeWidth="2" />
            {/* Snout */}
            <ellipse cx="200" cy="128" rx="22" ry="16" fill="#FEF3C7" />
            <ellipse cx="200" cy="122" rx="9" ry="6" fill="#451A03" />
            <path d="M200 128 L200 135 M194 135 C197 138 203 138 206 135" stroke="#451A03" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Eyes */}
            <circle cx="182" cy="108" r="5" fill="#1C1917" />
            <circle cx="184" cy="106" r="1.5" fill="#FFFFFF" />
            <circle cx="218" cy="108" r="5" fill="#1C1917" />
            <circle cx="220" cy="106" r="1.5" fill="#FFFFFF" />
            {/* Red Satin Bow Tie */}
            <polygon points="182,150 200,156 182,162" fill="#DC2626" />
            <polygon points="218,150 200,156 218,162" fill="#DC2626" />
            <circle cx="200" cy="156" r="5" fill="#991B1B" />
          </svg>
        )}

        {type === 'boardGame' && (
          <svg viewBox="0 0 400 260" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="225" rx="140" ry="14" fill="#000000" fillOpacity="0.16" />
            {/* Hexagonal Island Tiles */}
            {/* Center Hex */}
            <polygon points="200,80 235,100 235,140 200,160 165,140 165,100" fill="#15803D" stroke="#166534" strokeWidth="2" />
            {/* Surrounding Hexes */}
            <polygon points="238,102 273,122 273,162 238,182 203,162 203,122" fill="#EAB308" stroke="#CA8A04" strokeWidth="2" />
            <polygon points="162,102 197,122 197,162 162,182 127,162 127,122" fill="#D97706" stroke="#B45309" strokeWidth="2" />
            <polygon points="200,163 235,183 235,223 200,243 165,223 165,183" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
            <polygon points="275,124 310,144 310,184 275,204 240,184 240,144" fill="#15803D" stroke="#166534" strokeWidth="2" />
            <polygon points="125,124 160,144 160,184 125,204 90,184 90,144" fill="#84CC16" stroke="#65A30D" strokeWidth="2" />
            {/* Wooden Settlement Meeple & Road */}
            <polygon points="200,110 210,120 210,135 190,135 190,120" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
            <line x1="200" y1="135" x2="238" y2="142" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
            {/* Wooden tactile 3D Dice */}
            <g transform="translate(70, 70) rotate(-15)">
              <rect x="0" y="0" width="36" height="36" rx="6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
              <circle cx="10" cy="10" r="3" fill="#DC2626" />
              <circle cx="26" cy="26" r="3" fill="#DC2626" />
              <circle cx="18" cy="18" r="3" fill="#DC2626" />
            </g>
            <g transform="translate(300, 65) rotate(20)">
              <rect x="0" y="0" width="36" height="36" rx="6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
              <circle cx="10" cy="10" r="3" fill="#1E293B" />
              <circle cx="26" cy="10" r="3" fill="#1E293B" />
              <circle cx="10" cy="26" r="3" fill="#1E293B" />
              <circle cx="26" cy="26" r="3" fill="#1E293B" />
              <circle cx="18" cy="18" r="3" fill="#1E293B" />
            </g>
          </svg>
        )}

        {type === 'track' && (
          <svg viewBox="0 0 400 260" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="225" rx="145" ry="12" fill="#000000" fillOpacity="0.18" />
            {/* Looping orange speed track */}
            <path d="M60 215 C60 120 160 50 200 50 C240 50 340 120 340 215" stroke="#FF6B35" strokeWidth="18" strokeLinecap="round" fill="none" />
            <path d="M60 215 C60 120 160 50 200 50 C240 50 340 120 340 215" stroke="#EA580C" strokeWidth="2" strokeDasharray="6 4" fill="none" />
            {/* Victory Finish Line Arch */}
            <path d="M165 75 L165 35 L235 35 L235 75" stroke="#334155" strokeWidth="6" strokeLinecap="round" fill="none" />
            <rect x="175" y="38" width="50" height="14" fill="#FBBF24" rx="2" />
            <text x="200" y="48" textAnchor="middle" fill="#78350F" fontSize="9" fontWeight="bold">CHAMPION</text>
            {/* Monster Truck on Track */}
            <g transform="translate(130, 115) rotate(-35)">
              <rect x="0" y="0" width="45" height="24" rx="4" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" />
              <circle cx="8" cy="24" r="12" fill="#111827" stroke="#374151" strokeWidth="3" />
              <circle cx="37" cy="24" r="12" fill="#111827" stroke="#374151" strokeWidth="3" />
            </g>
          </svg>
        )}

        {type === 'magnet' && (
          <svg viewBox="0 0 400 260" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="225" rx="130" ry="12" fill="#000000" fillOpacity="0.15" />
            {/* 3D Translucent Crystal Magnetic Castle */}
            {/* Base Square Tiles */}
            <polygon points="150,170 200,145 250,170 200,195" fill="#3B82F6" fillOpacity="0.75" stroke="#2563EB" strokeWidth="2" />
            <polygon points="200,145 250,170 250,215 200,190" fill="#1D4ED8" fillOpacity="0.8" stroke="#1E40AF" strokeWidth="2" />
            <polygon points="150,170 200,195 200,240 150,215" fill="#60A5FA" fillOpacity="0.8" stroke="#2563EB" strokeWidth="2" />
            {/* Second Tier Pyramid Prism */}
            <polygon points="175,120 200,75 225,120" fill="#EC4899" fillOpacity="0.8" stroke="#DB2777" strokeWidth="2" />
            <polygon points="200,75 225,120 220,150 195,105" fill="#BE185D" fillOpacity="0.85" stroke="#9D174D" strokeWidth="2" />
            {/* Flanking Emerald Tiles */}
            <polygon points="100,140 140,120 150,165 110,185" fill="#10B981" fillOpacity="0.75" stroke="#059669" strokeWidth="2" />
            <polygon points="260,120 300,140 290,185 250,165" fill="#F59E0B" fillOpacity="0.75" stroke="#D97706" strokeWidth="2" />
            {/* Magnet Rivet Points */}
            {[[150,170], [200,145], [250,170], [200,195], [200,75], [175,120], [225,120]].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="3" fill="#E2E8F0" stroke="#475569" strokeWidth="1" />
            ))}
          </svg>
        )}

        {type === 'microscope' && (
          <svg viewBox="0 0 400 260" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="230" rx="110" ry="12" fill="#000000" fillOpacity="0.18" />
            {/* Microscope Horseshoe Base */}
            <path d="M140 225 C140 205 260 205 260 225 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            {/* Curved Arm */}
            <path d="M165 210 C165 130 190 70 230 70" stroke="#334155" strokeWidth="18" strokeLinecap="round" fill="none" />
            {/* Eyepiece Tube */}
            <g transform="translate(230, 60) rotate(25)">
              <rect x="0" y="0" width="22" height="70" rx="3" fill="#64748B" stroke="#475569" strokeWidth="2" />
              <rect x="-4" y="-8" width="30" height="10" rx="2" fill="#0F172A" />
              {/* Revolving Nosepiece Turret */}
              <circle cx="11" cy="74" r="16" fill="#1E293B" />
              <rect x="2" y="86" width="7" height="24" rx="2" fill="#F59E0B" />
              <rect x="14" y="86" width="8" height="30" rx="2" fill="#38BDF8" />
            </g>
            {/* Stage Platform */}
            <rect x="180" y="165" width="75" height="10" rx="2" fill="#0F172A" />
            {/* Glass Slide on Stage */}
            <rect x="195" y="160" width="45" height="4" rx="1" fill="#BAE6FD" opacity="0.9" />
            <circle cx="217" cy="162" r="2" fill="#EC4899" />
            {/* Substage Illuminator LED */}
            <path d="M210 185 L225 185 L220 200 L215 200 Z" fill="#CA8A04" />
            <polygon points="210,185 225,185 222,175 213,175" fill="#FEF08A" opacity="0.8" />
            {/* Coarse and Fine Adjustment Knobs */}
            <circle cx="175" cy="140" r="14" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
            <circle cx="175" cy="140" r="6" fill="#1E293B" />
          </svg>
        )}

        {/* Gallery / Showroom Interior Visuals */}
        {type.startsWith('gallery') && (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-3 text-[#1F3A8A]">
              {type === 'galleryHotWheels' && (
                <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              )}
              {type === 'galleryBuilding' && (
                <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              )}
              {type === 'galleryStem' && (
                <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )}
              {type === 'galleryPlush' && (
                <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              )}
              {type === 'galleryGames' && (
                <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              )}
              {type === 'galleryWrapping' && (
                <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              )}
            </div>
            <p className="text-sm font-semibold text-[#111827]">Anjrich Showroom</p>
            <p className="text-xs text-[#6B7280] mt-0.5">Ambernath, Maharashtra</p>
          </div>
        )}
      </div>

      {badge && (
        <span className="absolute top-3 left-3 z-20 text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-md bg-white/90 text-[#1F3A8A] shadow-xs border border-black/[0.05]">
          {badge}
        </span>
      )}
    </div>
  );
};
