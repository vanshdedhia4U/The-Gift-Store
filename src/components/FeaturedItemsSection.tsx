import React from 'react';
import { Star, Eye, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../data/storeData';

interface FeaturedItemsSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToBag: (product: Product) => void;
  addedProductId: string | null;
}

export const FeaturedItemsSection: React.FC<FeaturedItemsSectionProps> = ({
  products,
  onSelectProduct,
  onAddToBag,
  addedProductId,
}) => {
  // Take up to 8 products for the exact 4x2 grid of the screenshot
  const displayProducts = products.slice(0, 8);

  return (
    <section id="featured-items" className="pt-2">
      {/* Cursive Script Section Heading (Exact match of "Feature items" from screenshot) */}
      <div className="text-center mb-8">
        <h2 className="font-script text-4xl sm:text-5xl text-[#202321] lowercase">
          Feature items
        </h2>
      </div>

      {/* 4-column grid (2 rows of 4 = 8 items) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
        {displayProducts.map((product) => {
          const isAdded = addedProductId === product.id;

          return (
            <div
              key={product.id}
              className="group flex flex-col items-center text-center bg-white p-3 sm:p-4 rounded-xl border border-transparent hover:border-[#ECEAE4] hover:shadow-xs transition-all duration-200"
            >
              {/* Product Image Container with Quick View & Add to Bag actions */}
              <div className="relative w-full aspect-square bg-[#FAF9F7] rounded-lg overflow-hidden flex items-center justify-center p-3 mb-3">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Hover overlay with action buttons */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="p-2 rounded-full bg-white text-[#202321] hover:bg-[#233B63] hover:text-white shadow-md transition-colors cursor-pointer"
                    title="Quick View Details"
                    aria-label="Quick View"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onAddToBag(product)}
                    className={`p-2 rounded-full shadow-md transition-colors cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#233B63] text-white hover:bg-[#1C2F4F]'
                    }`}
                    title="Add to In-Store Reservation Bag"
                    aria-label="Add to Bag"
                  >
                    {isAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Price Line (strikethrough original price + sale price, matching screenshot) */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs sm:text-sm font-bold text-[#202321] tabular-nums">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-[11px] sm:text-xs text-[#9CA3AF] line-through tabular-nums">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              {/* Product Title */}
              <h3
                onClick={() => onSelectProduct(product)}
                className="text-xs font-medium text-[#4B5563] group-hover:text-[#202321] cursor-pointer line-clamp-2 h-8 leading-snug px-1 transition-colors"
                title={product.name}
              >
                {product.name}
              </h3>

              {/* 5 Rating Stars (matching screenshot) */}
              <div className="flex items-center justify-center gap-0.5 mt-2 text-[#FBBF24]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
