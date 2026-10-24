import React from 'react';
import { Phone, MessageCircle, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { CATEGORIES } from '../data/storeData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#202321] text-[#FAF9F6] pt-14 pb-10 border-t border-[#202321]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-3">
            <a href="#home" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                ANJRICH<span className="text-[#E98552]">.</span>
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-white/50 mt-0.5">
                The Toy Store · Ambernath
              </span>
            </a>
            <p className="text-xs text-[#E8E5DF]/70 leading-relaxed">
              Ambernath’s destination for authentic Hot Wheels collectibles, hands-on STEM building labs, and memorable family gifts.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% BIS Certified Toys</span>
            </div>
            <p className="text-[11px] text-[#E8E5DF]/50">
              Silver Arch Commercial Complex, Ambernath East, Maharashtra 421501
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/80">
              Store Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-[#E8E5DF]/75">
              <li>
                <a href="#products" className="hover:text-white transition-colors">In-Store Catalogue</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Shop by Department</a>
              </li>
              <li>
                <a href="#gift-discovery" className="hover:text-white transition-colors">Birthday Gift Finder</a>
              </li>
              <li>
                <a href="#about-store" className="hover:text-white transition-colors">The Anjrich Story</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#visit-store" className="hover:text-white transition-colors">Location & Directions</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/80">
              Departments
            </h4>
            <ul className="space-y-1.5 text-xs text-[#E8E5DF]/75">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <a href="#products" className="hover:text-white transition-colors">
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/80">
              Store Contact & Hours
            </h4>
            <div className="space-y-2 text-xs text-[#E8E5DF]/80">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#E98552] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Mon – Sun: 10:00 AM – 9:30 PM</p>
                  <p className="text-white/50 text-[11px]">Open All 7 Days</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:+919823124567" className="hover:text-white">
                  +91 98231 24567
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/919823124567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: +91 98231 24567
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E98552] shrink-0" />
                <span>Near Shiv Mandir Chowk, Ambernath (E)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-3">
          <p>© {new Date().getFullYear()} Anjrich The Toy Store. All rights reserved.</p>
          <p className="text-[11px]">
            Serving parents & collectors in Ambernath, Ulhasnagar, and Badlapur.
          </p>
        </div>
      </div>
    </footer>
  );
};
