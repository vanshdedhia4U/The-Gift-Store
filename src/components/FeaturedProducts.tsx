import React, { useState, useMemo } from 'react';
import { Eye, ShoppingBag, Check, ArrowUpDown, MessageCircle } from 'lucide-react';
import { PRODUCTS, Product, CATEGORIES } from '../data/storeData';
import { PRODUCT_PHOTOS } from '../data/photoAssets';
import { ToyArtwork } from './ToyArtwork';

interface FeaturedProductsProps {
  selectedCategorySlug: string;
  onSelectCategory: (slug: string) => void;
  onQuickView: (product: Product) => void;
  onAddToEnquiryBag: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  selectedCategorySlug,
  onSelectCategory,
  onQuickView,
  onAddToEnquiryBag,
}) => {
  const [addedId, setAddedId] = useState<string | null>(null);
  const [failedProductIds, setFailedProductIds] = useState<Record<string, boolean>>({});
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const filteredAndSortedProducts = useMemo(() => {
    let list = selectedCategorySlug === 'all'
      ? [...PRODUCTS]
      : PRODUCTS.filter((p) => p.categorySlug === selectedCategorySlug);

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    }
    return list;
  }, [selectedCategorySlug, sortBy]);

  const handleImageError = (id: string) => {
    setFailedProductIds((prev) => ({ ...prev, [id]: true }));
  };

  const handleAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToEnquiryBag(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const handleWhatsAppInquiry = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Hello Anjrich! Is "${product.name}" (₹${product.price.toLocaleString('en-IN')}) available for showroom pickup in Ambernath?`;
    window.open(`https://wa.me/919823124567?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="products" className="py-16 md:py-20 bg-white border-b border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E8E5DF]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#233B63] mb-1.5">
              <span>Showroom Catalog</span>
              <span aria-hidden="true" className="text-[#E8E5DF]">•</span>
              <span className="text-[#6B7280]">BIS Certified Toys</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202321] tracking-tight font-heading">
              Featured In-Store Curations
            </h2>
          </div>

          {/* Sort Selector */}
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs">
            <span className="text-[#6B7280] font-medium flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#233B63]" />
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-1.5 px-3 bg-[#FAF9F6] border border-[#E8E5DF] rounded-lg text-xs font-medium text-[#202321] focus:outline-none focus:border-[#233B63] cursor-pointer"
            >
              <option value="featured">Featured Order</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              selectedCategorySlug === 'all'
                ? 'bg-[#233B63] text-white'
                : 'bg-[#FAF9F6] text-[#4B5563] hover:text-[#202321] border border-[#E8E5DF]'
            }`}
          >
            All Toys ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => onSelectCategory(cat.slug)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                selectedCategorySlug === cat.slug
                  ? 'bg-[#233B63] text-white'
                  : 'bg-[#FAF9F6] text-[#4B5563] hover:text-[#202321] border border-[#E8E5DF]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Products Grid: 3-column desktop with consistent 4:3 image framing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedProducts.map((product) => {
            const hasError = failedProductIds[product.id];
            const photoUrl = PRODUCT_PHOTOS[product.id];

            return (
              <div
                key={product.id}
                onClick={() => onQuickView(product)}
                className="group bg-[#FAF9F6] rounded-xl border border-[#E8E5DF] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#233B63]/60 transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                {/* Product Photo Container */}
                <div className="relative aspect-[4/3] w-full bg-[#F3F1EC] overflow-hidden">
                  {!hasError && photoUrl ? (
                    <img
                      src={photoUrl}
                      alt={product.name}
                      onError={() => handleImageError(product.id)}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                      loading="lazy"
                    />
                  ) : (
                    <ToyArtwork type={product.svgType} className="w-full h-full" badge={product.tag} />
                  )}

                  {/* Clean Age Tag */}
                  <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded-md bg-white/95 text-[11px] font-semibold text-[#233B63] border border-black/5 shadow-2xs">
                    {product.age}
                  </div>

                  {/* Quick View Button overlay on hover */}
                  <div className="absolute inset-x-0 bottom-3 px-4 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                      }}
                      className="w-full py-2 px-3 bg-white/95 backdrop-blur-xs text-[#202321] hover:bg-white text-xs font-semibold rounded-lg shadow-sm flex items-center justify-center gap-1.5 border border-[#E8E5DF] cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#233B63]" />
                      <span>View Specifications</span>
                    </button>
                  </div>
                </div>

                {/* Product Metadata & Actions */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#6B7280] font-medium mb-1">
                      <span className="text-[#233B63] font-semibold">{product.category}</span>
                      <span className="text-emerald-700 font-medium">In Showroom</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#202321] group-hover:text-[#233B63] transition-colors line-clamp-2 leading-snug font-heading">
                      {product.name}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E8E5DF] flex items-center justify-between">
                    <div>
                      {/* Honest verified price */}
                      <span className="text-base sm:text-lg font-bold text-[#202321] tabular-nums">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <p className="text-[11px] text-emerald-700 font-medium">Free Gift Wrapping</p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={(e) => handleWhatsAppInquiry(product, e)}
                        className="p-2 rounded-lg border border-[#E8E5DF] text-[#4B5563] hover:text-[#25D366] hover:border-[#25D366] transition-colors cursor-pointer"
                        title={`Inquire about ${product.name} on WhatsApp`}
                        aria-label="Inquire on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => handleAdd(product, e)}
                        className={`p-2 rounded-lg border transition-all cursor-pointer ${
                          addedId === product.id
                            ? 'bg-emerald-700 text-white border-emerald-700'
                            : 'bg-[#FAF9F6] text-[#202321] border-[#E8E5DF] hover:bg-[#233B63] hover:text-white hover:border-[#233B63]'
                        }`}
                        title="Add to In-Store Reserve List"
                        aria-label="Add to In-Store Reserve List"
                      >
                        {addedId === product.id ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <ShoppingBag className="w-4 h-4" />
                        )}
                      </button>
                    </div>
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
