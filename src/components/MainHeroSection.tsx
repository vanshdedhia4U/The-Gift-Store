import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MainHeroSectionProps {
  onExploreClick: () => void;
  onSaleClick: () => void;
}

export const MainHeroSection: React.FC<MainHeroSectionProps> = ({
  onExploreClick,
  onSaleClick,
}) => {
  return (
    <div className="space-y-6">
      {/* 1. Large Hero Flatlay Banner with Center Floating Ivory Box (matching screenshot) */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-[#ECEAE4] bg-[#F7F5F0] shadow-xs group">
        {/* Curated flatlay background image */}
        <div className="h-72 sm:h-96 md:h-[420px] w-full relative overflow-hidden bg-[#FAF9F7]">
          <img
            src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1400&q=85"
            alt="Unique Gifts and Curated Toys Flatlay Presentation"
            className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
          />
          {/* Subtle warm overlay */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          {/* Center Floating Ivory Box (exact recreation of mockup centerpiece) */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-[#FFF4E8]/95 backdrop-blur-xs border border-[#F2DECE] px-6 py-6 sm:px-10 sm:py-8 rounded-lg text-center max-w-sm sm:max-w-md shadow-md">
              <p className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-[#8C6D58] mb-1.5">
                • TOYS & CELEBRATION •
              </p>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#202321] font-heading tracking-tight">
                Unique Gifts
              </h2>
              <p className="text-[11px] sm:text-xs tracking-widest font-semibold uppercase text-[#5A524C] mt-2">
                FOR EVERY OCCASION
              </p>
              <div className="mt-4 pt-3 border-t border-[#ECD6C3] flex items-center justify-center gap-2">
                <button
                  onClick={onExploreClick}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#202321] hover:text-[#233B63] transition-colors cursor-pointer group/btn uppercase tracking-wider"
                >
                  <span>FROM ₹199 · EXPLORE SHOWROOM</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E98552] group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Dual Promo Banners Row (matching the two horizontal promo cards in mockup) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Left Promo Card: Soft Peach Background */}
        <div className="relative rounded-xl overflow-hidden border border-[#F6D5CE] bg-[#FCE8E6] p-6 flex items-center justify-between shadow-xs group">
          <div className="space-y-2 z-10">
            <span className="text-[11px] font-semibold text-[#8C5D55] uppercase tracking-wider block">
              Clearance & Festive Sale
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#202321] font-heading leading-tight">
              Birthday Return Gifts
            </h3>
            <div className="pt-2">
              <button
                onClick={onSaleClick}
                className="text-xs font-bold text-[#202321] hover:text-[#233B63] inline-flex items-center gap-1 uppercase tracking-wider cursor-pointer border-b border-[#202321] pb-0.5"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-3 h-3 text-[#E98552]" />
              </button>
            </div>
          </div>

          {/* Decorative image cutout */}
          <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80"
              alt="Birthday Return Gifts"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right Promo Card: Pastel Festive Sparkle Background with Code Box */}
        <div className="relative rounded-xl overflow-hidden border border-[#ECEAE4] bg-[#FFF8F6] p-6 flex flex-col justify-between shadow-xs group">
          <div className="text-center space-y-1.5">
            <span className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
              Holiday & Festive Offers
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202321] font-heading">
              Sale 30% Off
            </h3>
          </div>

          <div className="mt-4 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-white border border-dashed border-[#D1CECA] text-xs font-mono font-bold text-[#202321]">
              <Sparkles className="w-3.5 h-3.5 text-[#E98552]" />
              <span>CODE: ANJRICH30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
