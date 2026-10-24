import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside aria-label="Customer Support" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-none">
      {/* Tooltip Popover (Only opens when triggered) */}
      {showTooltip && (
        <div className="mb-2 p-3.5 bg-white rounded-xl shadow-lg border border-[#E8E5DF] text-xs max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-150 pointer-events-auto">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#E8E5DF]">
            <span className="font-bold text-[#202321] font-heading">Anjrich The Toy Store</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#9CA3AF] hover:text-[#202321] p-1 cursor-pointer"
              aria-label="Close message prompt"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[#4B5563] text-[11px] leading-relaxed">
            Need help checking toy availability or reserving items at our Ambernath showroom? Message our team directly.
          </p>
          <a
            href="https://wa.me/919823124567?text=Hello%20Anjrich!%20I'm%20browsing%20your%20website%20and%20had%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 block w-full py-2 px-3 bg-[#25D366] text-white text-center font-semibold rounded-lg hover:bg-[#20BA5A] transition-colors"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2 pointer-events-auto">
        <button
          onClick={() => setShowTooltip(!showTooltip)}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white shadow-md border border-[#E8E5DF] text-xs font-semibold text-[#202321] hover:bg-[#FAF9F6] cursor-pointer"
        >
          <span>Ask Store on WhatsApp</span>
        </button>

        <a
          href="https://wa.me/919823124567?text=Hello%20Anjrich!%20I'd%20like%20to%20inquire%20about%20your%20toys."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#20BA5A] hover:scale-104 active:scale-95 transition-all cursor-pointer relative"
          aria-label="Chat on WhatsApp (+91 98231 24567)"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#E98552] rounded-full border-2 border-white" />
        </a>
      </div>
    </aside>
  );
};
