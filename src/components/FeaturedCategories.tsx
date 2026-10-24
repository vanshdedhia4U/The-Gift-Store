import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES, Category } from '../data/storeData';
import { CATEGORY_PHOTOS } from '../data/photoAssets';
import { ToyArtwork } from './ToyArtwork';

interface FeaturedCategoriesProps {
  onSelectCategory: (slug: string) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ onSelectCategory }) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (slug: string) => {
    setFailedImages((prev) => ({ ...prev, [slug]: true }));
  };

  const getArtworkType = (slug: string): 'hotwheels' | 'crane' | 'robot' | 'rcCar' | 'teddy' | 'boardGame' => {
    switch (slug) {
      case 'hot-wheels':
        return 'hotwheels';
      case 'building-toys':
        return 'crane';
      case 'stem-learning':
        return 'robot';
      case 'rc-vehicles':
        return 'rcCar';
      case 'soft-toys':
        return 'teddy';
      default:
        return 'boardGame';
    }
  };

  return (
    <section id="categories" className="py-16 md:py-20 bg-[#FAF9F6] border-b border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#E8E5DF]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#233B63] mb-1.5">
              <span>Department Aisles</span>
              <span aria-hidden="true" className="text-[#E8E5DF]">•</span>
              <span className="text-[#6B7280]">Ambernath Showroom</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202321] tracking-tight font-heading">
              Shop by Department
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4B5563] max-w-sm mt-2 md:mt-0 leading-relaxed">
            Organized shelves designed for focused browsing by age, hobby passion, and developmental stage.
          </p>
        </div>

        {/* Categories Grid with consistent 4:3 aspect ratio and clean hierarchy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat: Category) => {
            const hasError = failedImages[cat.slug];
            const photoUrl = CATEGORY_PHOTOS[cat.slug];

            return (
              <div
                key={cat.slug}
                onClick={() => onSelectCategory(cat.slug)}
                className="group bg-white rounded-xl border border-[#E8E5DF] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#233B63] transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container with strict 4:3 aspect ratio */}
                <div className="relative aspect-[4/3] w-full bg-[#F3F1EC] overflow-hidden">
                  {!hasError && photoUrl ? (
                    <img
                      src={photoUrl}
                      alt={cat.title}
                      onError={() => handleImageError(cat.slug)}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-104"
                      loading="lazy"
                    />
                  ) : (
                    <ToyArtwork
                      type={getArtworkType(cat.slug)}
                      className="w-full h-full transition-transform duration-300 group-hover:scale-104"
                    />
                  )}

                  {/* Gentle hover arrow */}
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/95 text-[#233B63] flex items-center justify-center shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#202321] group-hover:text-[#233B63] transition-colors leading-snug font-heading">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F3F1EC] flex items-center justify-between text-xs font-semibold text-[#233B63]">
                    <span>Browse department</span>
                    <span className="text-[#E98552] group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
