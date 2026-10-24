import React, { useState, useEffect } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, Gift, MapPin, Sparkles } from 'lucide-react';
import { Product } from '../data/storeData';

export interface EnquiryItem {
  product: Product;
  quantity: number;
}

interface EnquiryBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: EnquiryItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearBag: () => void;
}

export const EnquiryBagDrawer: React.FC<EnquiryBagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const [includeGiftWrap, setIncludeGiftWrap] = useState(true);
  const [customerName, setCustomerName] = useState('');
  const [fulfillmentType, setFulfillmentType] = useState<'pickup' | 'delivery'>('pickup');

  // Keyboard ESC listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const estimatedTotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleSendWhatsAppReservation = () => {
    if (items.length === 0) return;

    let text = `*In-Store Reservation Request — Anjrich The Toy Store*\n`;
    if (customerName.trim()) {
      text += `Customer Name: ${customerName.trim()}\n`;
    }
    text += `Mode: ${fulfillmentType === 'pickup' ? 'Store Pickup (Ambernath East Showroom)' : 'Local Ambernath Delivery Inquiry'}\n`;
    text += `Complimentary Gift Wrap: ${includeGiftWrap ? 'Yes, please include celebration wrap & ribbon' : 'Standard packaging'}\n\n`;
    text += `*Reserved Toys:*\n`;

    items.forEach((item, index) => {
      text += `${index + 1}. ${item.product.name} (Qty: ${item.quantity}) — ₹${(item.product.price * item.quantity).toLocaleString('en-IN')}\n`;
    });

    text += `\n*Estimated Showroom Total:* ₹${estimatedTotal.toLocaleString('en-IN')}\n\n`;
    text += `Please confirm availability and pickup timing at your Ambernath store. Thank you!`;

    window.open(`https://wa.me/919823124567?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div 
          className="w-screen max-w-md bg-[#FAF9F6] shadow-xl flex flex-col justify-between border-l border-[#E8E5DF] animate-in slide-in-from-right duration-200"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-5 py-4 border-b border-[#E8E5DF] flex items-center justify-between bg-white">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-[#202321] font-heading">In-Store Reservation List</h2>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#233B63] text-white tabular-nums">
                  {totalItemCount}
                </span>
              </div>
              <p className="text-[11px] text-[#6B7280] mt-0.5">Hold toys at Ambernath Showroom</p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#6B7280] hover:text-[#202321] rounded-lg hover:bg-[#FAF9F6] transition-colors cursor-pointer"
              aria-label="Close reservation list"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items Container */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 rounded-xl bg-white border border-[#E8E5DF] flex items-center justify-center text-[#9CA3AF] mb-3">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold text-[#202321] font-heading">Your reservation list is empty</h3>
                <p className="text-xs text-[#6B7280] max-w-xs mt-1">
                  Add Hot Wheels, STEM kits, building sets, or board games to hold them for in-person viewing and pickup.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-[#233B63] bg-white border border-[#E8E5DF] rounded-lg hover:bg-[#F3F1EC] transition-colors cursor-pointer"
                >
                  Explore Catalogue
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3.5 rounded-xl border border-[#E8E5DF] bg-white flex gap-3 items-center justify-between shadow-2xs"
                    >
                      <div className="flex-1 min-w-0 pr-2">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#233B63] truncate block">
                          {item.product.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#202321] truncate mt-0.5 font-heading">
                          {item.product.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs sm:text-sm font-bold text-[#202321] tabular-nums font-heading">
                            ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                          </span>
                          <span className="text-[11px] text-[#6B7280] tabular-nums">
                            (₹{item.product.price.toLocaleString('en-IN')} each)
                          </span>
                        </div>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-1 border border-[#E8E5DF] rounded-lg p-0.5 bg-[#FAF9F6] shrink-0">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-6 h-6 flex items-center justify-center rounded hover:bg-white text-[#4B5563] cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold tabular-nums text-[#202321]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-6 h-6 flex items-center justify-center rounded hover:bg-white text-[#4B5563] cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-1.5 text-[#9CA3AF] hover:text-red-600 transition-colors cursor-pointer shrink-0"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Additional Reservation Options */}
                <div className="pt-3 border-t border-[#E8E5DF] space-y-3">
                  {/* Complimentary Gift Wrapping toggle */}
                  <label className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E8E5DF] cursor-pointer hover:border-[#233B63] transition-colors">
                    <input
                      type="checkbox"
                      checked={includeGiftWrap}
                      onChange={(e) => setIncludeGiftWrap(e.target.checked)}
                      className="mt-0.5 rounded text-[#233B63] focus:ring-[#233B63]"
                    />
                    <div className="text-xs">
                      <div className="font-semibold text-[#202321] flex items-center gap-1.5">
                        <Gift className="w-3.5 h-3.5 text-[#E98552]" />
                        <span>Include Complimentary In-Store Gift Wrapping</span>
                      </div>
                      <p className="text-[#6B7280] text-[11px] mt-0.5">
                        Celebratory wrap paper with satin ribbon ties and personalized greeting cards.
                      </p>
                    </div>
                  </label>

                  {/* Mode Selector */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                    <button
                      type="button"
                      onClick={() => setFulfillmentType('pickup')}
                      className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                        fulfillmentType === 'pickup'
                          ? 'border-[#233B63] bg-white text-[#233B63] font-semibold'
                          : 'border-[#E8E5DF] bg-white/50 text-[#4B5563]'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#E98552]" />
                        <span>Showroom Pickup</span>
                      </div>
                      <p className="text-[10px] text-[#6B7280] mt-0.5">Silver Arch Complex</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFulfillmentType('delivery')}
                      className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                        fulfillmentType === 'delivery'
                          ? 'border-[#233B63] bg-white text-[#233B63] font-semibold'
                          : 'border-[#E8E5DF] bg-white/50 text-[#4B5563]'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#233B63]" />
                        <span>Local Delivery</span>
                      </div>
                      <p className="text-[10px] text-[#6B7280] mt-0.5">Ambernath / Badlapur</p>
                    </button>
                  </div>

                  {/* Customer name */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Patil"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-[#E8E5DF] rounded-lg focus:outline-none focus:border-[#233B63] bg-white"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Action */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#E8E5DF] bg-white space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-[#6B7280]">Estimated Showroom Total</p>
                  <p className="text-[11px] text-[#6B7280]">Pay at showroom via UPI, Cash, or Card</p>
                </div>
                <span className="text-lg font-bold text-[#202321] tabular-nums font-heading">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                onClick={handleSendWhatsAppReservation}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Reservation via WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
