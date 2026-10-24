import React, { useEffect } from 'react';
import { X, Check, MessageCircle, ShoppingBag, Sparkles } from 'lucide-react';
import { Product } from '../data/storeData';
import { PRODUCT_PHOTOS } from '../data/photoAssets';
import { ToyArtwork } from './ToyArtwork';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToEnquiryBag: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose, onAddToEnquiryBag }) => {
  // Keyboard ESC listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const photoUrl = PRODUCT_PHOTOS[product.id];

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hello Anjrich The Toy Store! I would like to reserve "${product.name}" (Price: ₹${product.price.toLocaleString('en-IN')}). Is it currently ready for showroom pickup at your Ambernath East store?`
    );
    window.open(`https://wa.me/919823124567?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#FAF9F6] rounded-2xl shadow-xl border border-[#E8E5DF] overflow-hidden my-auto animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accessible Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 text-[#4B5563] hover:text-[#202321] bg-white hover:bg-[#FAF9F6] rounded-full transition-colors cursor-pointer border border-[#E8E5DF] shadow-xs"
          aria-label="Close modal dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Photo Container with consistent 4:3 framing */}
          <div className="relative h-64 md:h-full min-h-[320px] bg-[#F3F1EC] border-b md:border-b-0 md:border-r border-[#E8E5DF] overflow-hidden">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            ) : (
              <ToyArtwork type={product.svgType} className="w-full h-full" badge={product.tag} />
            )}
            
            {/* Tag */}
            {product.tag && (
              <span className="absolute top-4 left-4 z-20 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/95 text-[#233B63] border border-black/5 shadow-2xs">
                {product.tag}
              </span>
            )}
          </div>

          {/* Right: Verified Product Details */}
          <div className="p-6 md:p-7 flex flex-col justify-between bg-white">
            <div>
              {/* Category & Status */}
              <div className="flex items-center gap-2 text-xs text-[#6B7280] font-medium mb-1.5">
                <span className="text-[#233B63] font-semibold">{product.category}</span>
                <span aria-hidden="true">•</span>
                <span>{product.age}</span>
                <span aria-hidden="true">•</span>
                <span className="text-emerald-700 font-medium">{product.availability}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#202321] tracking-tight leading-snug font-heading">
                {product.name}
              </h3>

              {/* Honest Verified Price */}
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-2xl font-bold text-[#202321] tabular-nums font-heading">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[#6B7280]">Inclusive of all taxes</span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#4B5563] mt-2.5 leading-relaxed">
                {product.description}
              </p>

              {/* Verified Highlights */}
              <div className="mt-4 pt-3.5 border-t border-[#E8E5DF]">
                <h4 className="text-xs font-semibold text-[#202321] uppercase tracking-wider mb-2">
                  Key Specifications
                </h4>
                <ul className="space-y-1.5">
                  {product.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#4B5563]">
                      <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications Box */}
              <div className="mt-3.5 pt-3 border-t border-[#E8E5DF] text-xs text-[#6B7280] space-y-1">
                <div><strong className="text-[#202321]">Material:</strong> {product.specs.material}</div>
                {product.specs.dimensions && (
                  <div><strong className="text-[#202321]">Dimensions:</strong> {product.specs.dimensions}</div>
                )}
                <div><strong className="text-[#202321]">Safety:</strong> {product.specs.certification}</div>
                <div><strong className="text-[#202321]">Package:</strong> {product.specs.inBox}</div>
              </div>

              {/* Gift Wrapping note */}
              <div className="mt-3.5 flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF9F6] border border-[#E8E5DF] text-xs text-[#4B5563]">
                <Sparkles className="w-3.5 h-3.5 text-[#E98552] shrink-0" />
                <span>Complimentary in-store gift wrapping & satin ribbon finish included.</span>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5 pt-3.5 border-t border-[#E8E5DF]">
              <button
                onClick={() => {
                  onAddToEnquiryBag(product);
                  onClose();
                }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#233B63] hover:bg-[#1C2F4F] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer shadow-xs whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Reserve List</span>
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer shadow-xs whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
