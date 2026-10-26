import React from 'react';
import { GiftBasket } from '../data/storeData';

interface GiftBasketsSectionProps {
  baskets: GiftBasket[];
  onSelectBasket: (basket: GiftBasket) => void;
}

export const GiftBasketsSection: React.FC<GiftBasketsSectionProps> = ({
  baskets,
  onSelectBasket,
}) => {
  return (
    <section id="gift-baskets" className="pt-4">
      {/* Script Section Title (Exact match of "Gift kits & baskets" from screenshot) */}
      <div className="text-center mb-8">
        <h2 className="font-script text-4xl sm:text-5xl text-[#202321] lowercase">
          Gift kits & baskets
        </h2>
      </div>

      {/* 4 Photo Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {baskets.map((basket) => (
          <div
            key={basket.id}
            onClick={() => onSelectBasket(basket)}
            className="group flex flex-col items-center text-center cursor-pointer"
          >
            {/* Square Photo of Curated Gift Hamper */}
            <div className="w-full aspect-square rounded-xl overflow-hidden border border-[#ECEAE4] bg-[#FAF9F7] shadow-xs group-hover:border-[#202321] group-hover:shadow-md transition-all duration-300 relative mb-3">
              <img
                src={basket.imageUrl}
                alt={basket.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {basket.badge && (
                <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[#202321] text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                  {basket.badge}
                </span>
              )}
            </div>

            {/* Title & Items Count */}
            <h3 className="text-xs sm:text-sm font-bold text-[#202321] group-hover:text-[#233B63] transition-colors">
              {basket.title}
            </h3>
            <p className="text-[11px] text-[#6B7280] mt-0.5">
              {basket.itemCount} Items · ₹{basket.price.toLocaleString('en-IN')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
