import React, { useState } from 'react';
import { MapPin, Phone, ArrowUp, Check, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenShowroomPhoto?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#ECEAE4] pt-14 pb-8 text-[#6B7280] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns (exact match of mockup footer structure) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-[#ECEAE4]">
          {/* Column 1: OUR STORE */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#202321] uppercase tracking-wider">
              OUR STORE
            </h4>
            <p className="text-xs leading-relaxed text-[#6B7280]">
              We promise we'll get back to you promptly—your toy and gifting needs are always on our minds!
            </p>
            <div className="pt-1 space-y-1.5 text-xs text-[#4B5563]">
              <p className="font-semibold text-[#202321]">
                Monday – Sunday 10:00 AM – 9:30 PM Daily
              </p>
              <p className="flex items-start gap-1.5 text-[#6B7280]">
                <MapPin className="w-3.5 h-3.5 text-[#E98552] shrink-0 mt-0.5" />
                <span>Shop 4 & 5, Silver Arch Commercial Complex, Ambernath East, Maharashtra</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#233B63] shrink-0" />
                <a href="tel:+919823124567" className="hover:text-[#202321] font-semibold text-[#202321]">
                  +91 98231 24567
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: INFOMATION */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#202321] uppercase tracking-wider">
              INFORMATION
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about-store" className="hover:text-[#202321] transition-colors">About Our Ambernath Store</a>
              </li>
              <li>
                <a href="#featured-items" className="hover:text-[#202321] transition-colors">Showroom Catalogue</a>
              </li>
              <li>
                <a href="#gift-baskets" className="hover:text-[#202321] transition-colors">Curated Gift Baskets</a>
              </li>
              <li>
                <a href="#articles" className="hover:text-[#202321] transition-colors">Toy & STEM Guides</a>
              </li>
              <li>
                <a href="https://wa.me/919823124567" target="_blank" rel="noopener noreferrer" className="hover:text-[#202321] transition-colors">
                  WhatsApp Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: SERVICES */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#202321] uppercase tracking-wider">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-[#202321] font-medium">Complimentary Gift Wrapping</span>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#202321] transition-colors">Age Bracket Guide (0 to 13+)</a>
              </li>
              <li>
                <a href="#visit-store" className="hover:text-[#202321] transition-colors">Store Directions & Map</a>
              </li>
              <li>
                <span className="text-[#202321] font-medium">Birthday Return Gift Curation</span>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#202321] transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Column 4: NEWSLETTER SIGN-UP */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#202321] uppercase tracking-wider">
              NEWSLETTER SIGN-UP
            </h4>
            <p className="text-xs text-[#6B7280]">
              For News & Special Offers on Hot Wheels drops and festive arrivals
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <input
                type="email"
                required
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#FAF9F7] border border-[#ECEAE4] rounded focus:outline-none focus:border-[#202321] text-[#202321]"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#202321] hover:bg-[#233B63] text-white text-[11px] font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                SUBMIT
              </button>
            </form>

            {subscribed && (
              <p className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium animate-in fade-in">
                <Check className="w-3.5 h-3.5" />
                <span>Thank you for subscribing!</span>
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright, Social Icons, Top Button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p className="text-[#9CA3AF]">
            Copyright © 2026 Anjrich The Toy Store. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">
            {/* Social Icons */}
            <div className="flex items-center gap-3 text-[#9CA3AF]">
              <a
                href="https://wa.me/919823124567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-[#FAF9F7] border border-[#ECEAE4] flex items-center justify-center hover:text-[#25D366] hover:border-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a
                href="#visit-store"
                className="w-7 h-7 rounded-full bg-[#FAF9F7] border border-[#ECEAE4] flex items-center justify-center hover:text-[#233B63] hover:border-[#233B63] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="#visit-store"
                className="w-7 h-7 rounded-full bg-[#FAF9F7] border border-[#ECEAE4] flex items-center justify-center hover:text-[#E98552] hover:border-[#E98552] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#visit-store"
                className="w-7 h-7 rounded-full bg-[#FAF9F7] border border-[#ECEAE4] flex items-center justify-center hover:text-[#233B63] hover:border-[#233B63] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Back to Top button (matching red/coral rounded square in screenshot) */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded bg-[#E98552] hover:bg-[#d9733e] text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
