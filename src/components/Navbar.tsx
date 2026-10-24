import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, MessageCircle, Phone, Menu, X, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenEnquiryBag: () => void;
  enquiryCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenEnquiryBag, enquiryCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Catalogue', href: '#products' },
    { name: 'Categories', href: '#categories' },
    { name: 'Gift Finder', href: '#gift-discovery' },
    { name: 'Store Story', href: '#about-store' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit & Hours', href: '#visit-store' },
  ];

  return (
    <>
      {/* 1. Minimal Announcement Bar (Verified Real Store Timings & Perks) */}
      <div className="bg-[#202321] text-[#FAF9F6] text-[11px] sm:text-xs py-2 px-4 border-b border-[#202321]/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E98552] shrink-0" />
            <span className="font-medium text-[#E8E5DF] truncate">
              Silver Arch Complex, Ambernath East · Open 7 Days: 10:00 AM – 9:30 PM
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[#E8E5DF] shrink-0 font-medium">
            <span>Complimentary In-Store Gift Wrapping</span>
            <span className="text-[#E8E5DF]/40">|</span>
            <a href="tel:+919823124567" className="hover:text-white transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#E98552]" />
              <span>+91 98231 24567</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Refined Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-xs border-b border-[#E8E5DF]'
            : 'bg-[#FAF9F6] border-b border-[#E8E5DF]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 h-18">
            {/* Zone 1: Brand Wordmark */}
            <a href="#home" className="flex flex-col group shrink-0">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#202321] font-heading group-hover:text-[#233B63] transition-colors leading-none">
                ANJRICH<span className="text-[#E98552]">.</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-[#6B7280] mt-1">
                The Toy Store · Ambernath
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-medium text-[#202321]/80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#233B63] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#E98552] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Search Trigger */}
              <button
                onClick={onOpenSearch}
                className="p-2 text-[#202321]/80 hover:text-[#202321] hover:bg-[#E8E5DF]/50 rounded-lg transition-colors cursor-pointer"
                title="Search toys by brand, age, or category"
                aria-label="Search toys"
              >
                <Search className="w-4.5 h-4.5" />
              </button>

              {/* WhatsApp Quick Link */}
              <a
                href="https://wa.me/919823124567?text=Hello%20Anjrich%20The%20Toy%20Store!%20I'd%20like%20to%20inquire%20about%20toy%20availability%20at%20your%20Ambernath%20store."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#202321] bg-white border border-[#E8E5DF] hover:border-[#233B63] rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              {/* In-Store Enquiry Bag */}
              <button
                onClick={onOpenEnquiryBag}
                className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#233B63] hover:bg-[#1C2F4F] text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                aria-label="View In-Store Reservation Bag"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reserve Bag</span>
                {enquiryCount > 0 && (
                  <span className="w-4.5 h-4.5 rounded-full bg-[#E98552] text-white text-[10px] font-bold flex items-center justify-center tabular-nums">
                    {enquiryCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#202321] rounded-lg hover:bg-[#E8E5DF]/50 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF9F6] border-b border-[#E8E5DF] px-4 pt-3 pb-6 space-y-4 shadow-md animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#202321] hover:bg-white hover:text-[#233B63] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#E8E5DF] flex flex-col gap-2">
              <a
                href="https://wa.me/919823124567?text=Hello%20Anjrich%20The%20Toy%20Store!%20I'm%20browsing%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] text-white rounded-lg text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 98231 24567)</span>
              </a>

              <a
                href="tel:+919823124567"
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-[#E8E5DF] text-[#202321] rounded-lg text-xs font-medium"
              >
                <Phone className="w-4 h-4 text-[#E98552]" />
                <span>Call Ambernath Showroom</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
