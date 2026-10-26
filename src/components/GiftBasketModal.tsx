import React from 'react';
import { X, Check, MessageCircle, ShoppingBag, Sparkles } from 'lucide-react';
import { GiftBasket } from '../data/storeData';

interface GiftBasketModalProps {
  basket: GiftBasket | null;
  onClose: () => void;
  onAddToBag: (basket: GiftBasket) => void;
}

export const GiftBasketModal: React.FC<GiftBasketModalProps> = ({
  basket,
  onClose,
  onAddToBag,
}) => {
  if (!basket) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Anjrich The Toy Store! I'd like to reserve or customize the "${basket.title}" gift basket (₹${basket.price}) at your Ambernath showroom.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#ECEAE4] overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-[#202321] hover:bg-[#F3F1EC] transition-colors cursor-pointer shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Basket Photo */}
          <div className="h-64 sm:h-auto bg-[#FAF9F7] relative overflow-hidden">
            <img
              src={basket.imageUrl}
              alt={basket.title}
              className="w-full h-full object-cover"
            />
            {basket.badge && (
              <span className="absolute top-3 left-3 bg-white/95 text-[#202321] text-xs font-bold px-2.5 py-1 rounded shadow-xs">
                {basket.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#E98552] font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curated In Ambernath</span>
              </div>
              <h3 className="text-xl font-bold text-[#202321] font-heading">{basket.title}</h3>
              <p className="text-xs text-[#6B7280] mt-0.5">{basket.subtitle}</p>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#202321] tabular-nums">
                  ₹{basket.price.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[#6B7280]">
                  ({basket.itemCount} Curated Items)
                </span>
              </div>

              <p className="text-xs text-[#4B5563] mt-3 leading-relaxed">
                {basket.description}
              </p>

              <div className="mt-4 pt-4 border-t border-[#ECEAE4]">
                <h4 className="text-[11px] font-bold text-[#202321] uppercase tracking-wider mb-2">
                  What's Inside This Hamper:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#4B5563]">
                  {basket.includedItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-[#ECEAE4] space-y-2">
              <a
                href={`https://wa.me/919823124567?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reserve on WhatsApp (+91 98231 24567)</span>
              </a>

              <button
                onClick={() => {
                  onAddToBag(basket);
                  onClose();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#233B63] hover:bg-[#1C2F4F] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add Hamper to In-Store List</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
