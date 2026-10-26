import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SecondaryBannersProps {
  onShopUnder499: () => void;
  onShopGames: () => void;
}

export const SecondaryBanners: React.FC<SecondaryBannersProps> = ({
  onShopUnder499,
  onShopGames,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-4">
      {/* Left Promo Card (~40% width, cols 5 of 12) - Pocket money gifts under ₹499 */}
      <div className="md:col-span-5 rounded-xl overflow-hidden border border-[#F6D5CE] bg-[#FCE8E6] p-6 flex flex-col justify-between shadow-xs group">
        <div className="text-center space-y-1">
          <p className="text-[11px] font-semibold text-[#8C5D55] uppercase tracking-wider">
            Shop In-Store Gifts Under
          </p>
          <p className="text-3xl font-extrabold text-[#202321] font-heading tabular-nums">
            ₹499
          </p>
          <div className="pt-2">
            <button
              onClick={onShopUnder499}
              className="text-xs font-bold text-[#202321] hover:text-[#233B63] inline-flex items-center gap-1 uppercase tracking-wider cursor-pointer border-b border-[#202321] pb-0.5"
            >
              <span>SHOP NOW</span>
              <ArrowRight className="w-3 h-3 text-[#E98552]" />
            </button>
          </div>
        </div>

        {/* Gift boxes visual */}
        <div className="mt-5 h-32 w-full rounded-lg overflow-hidden bg-white/60 p-2 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80"
            alt="Toys and gifts under 499 rupees"
            className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Right Promo Card (~60% width, cols 7 of 12) - 30% Off Family Games & Sets */}
      <div className="md:col-span-7 rounded-xl overflow-hidden border border-[#D5E3F5] bg-[#EBF2FA] p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs group">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-[10px] font-bold text-[#4B6B94] uppercase tracking-widest block">
            AMAZING TOYS & GAMES
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202321] font-heading leading-tight">
            30% Off Family Board Games
          </h3>
          <div className="pt-2">
            <button
              onClick={onShopGames}
              className="text-xs font-bold text-[#202321] hover:text-[#233B63] inline-flex items-center gap-1 uppercase tracking-wider cursor-pointer border-b border-[#202321] pb-0.5"
            >
              <span>SHOP NOW</span>
              <ArrowRight className="w-3 h-3 text-[#233B63]" />
            </button>
          </div>
        </div>

        {/* Festive blue ribbon & games photo */}
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden shrink-0 border-2 border-white shadow-xs">
          <img
            src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=600&q=80"
            alt="Family Board Games and Gift Sets"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};
