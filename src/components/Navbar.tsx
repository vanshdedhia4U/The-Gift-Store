import React, { useState } from 'react';
import { Search, ShoppingBag, Phone, Menu, X, Gift, Headphones, MapPin, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenEnquiryBag: () => void;
  enquiryCount: number;
  totalAmount: number;
  onSelectCategory?: (slug: string) => void;
  selectedCategory?: string;
  onOpenShowroomPhoto?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenEnquiryBag,
  enquiryCount,
  totalAmount,
  onSelectCategory,
  selectedCategory = 'all',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenSearch();
  };

  return (
    <header className="w-full bg-white border-b border-[#ECEAE4] text-[#202321] text-xs">
      {/* 1. Top Utility Header (matching screenshot top bar) */}
      <div className="border-b border-[#F0EFEB] bg-[#FAF9F7] py-2 px-4 text-[#6B7280]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px]">
          {/* Left info: Location & Language */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 hover:text-[#202321] transition-colors">
              <MapPin className="w-3 h-3 text-[#E98552]" />
              <span>Shop 4 & 5, Silver Arch, Ambernath East</span>
            </span>
            <span className="hidden sm:inline text-[#D1CECA]">|</span>
            <span className="hidden sm:flex items-center gap-1 text-[#4B5563]">
              <span>English · INR (₹)</span>
            </span>
          </div>

          {/* Right info: Sign In, About, Track, FAQ */}
          <div className="flex items-center gap-3 sm:gap-5 text-[#6B7280]">
            <a href="#about-store" className="hover:text-[#202321] transition-colors">Sign In / Register</a>
            <span className="text-[#D1CECA]">·</span>
            <a href="#about-store" className="hover:text-[#202321] transition-colors">About Us</a>
            <span className="text-[#D1CECA]">·</span>
            <a href="#faqs" className="hover:text-[#202321] transition-colors">FAQ & Timings</a>
          </div>
        </div>
      </div>

      {/* 2. Middle Brand & Value Highlights Bar (matching screenshot brand row) */}
      <div className="py-4 sm:py-5 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Logo (matching 'gifymo' style typography from mockup) */}
          <a href="#home" className="flex items-baseline gap-1 group">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#202321] lowercase font-heading">
              anjrich<span className="inline-block w-2 h-2 rounded-full bg-[#E98552] ml-0.5"></span>
            </span>
            <span className="hidden md:inline-block text-[9px] uppercase tracking-widest text-[#9CA3AF] font-bold ml-1.5 self-center">
              The Toy Store
            </span>
          </a>

          {/* Center feature 1: Free Gift Wrapping */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#FFF0EB] flex items-center justify-center text-[#E98552] shrink-0">
              <Gift className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#202321] leading-tight">Free Gift Wrapping</p>
              <p className="text-[10px] text-[#6B7280]">on all purchases & celebration boxes</p>
            </div>
          </div>

          {/* Center feature 2: Support / Contact */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#EBF0F8] flex items-center justify-center text-[#233B63] shrink-0">
              <Headphones className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="text-[10px] text-[#6B7280]">support@anjrichtoys.com</p>
              <a href="tel:+919823124567" className="text-xs font-bold text-[#202321] hover:text-[#233B63] leading-tight block">
                +91 98231 24567
              </a>
            </div>
          </div>

          {/* Right feature: Cart / Reservation Bag */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEnquiryBag}
              className="flex items-center gap-3 p-2 sm:px-3 sm:py-2 rounded-lg hover:bg-[#FAF9F7] border border-[#ECEAE4] transition-all cursor-pointer group"
              aria-label="View Reservation Bag"
            >
              <div className="relative text-[#202321]">
                <ShoppingBag className="w-5 h-5 group-hover:text-[#233B63] transition-colors" />
                {enquiryCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#E98552] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {enquiryCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-[10px] text-[#6B7280] leading-tight">Cart: {enquiryCount} items</p>
                <p className="text-xs font-bold text-[#202321]">₹{totalAmount.toLocaleString('en-IN')}</p>
              </div>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#202321] rounded-lg border border-[#ECEAE4]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Bottom Horizontal Navigation Bar with Active Pill & Search */}
      <div className="border-t border-[#ECEAE4] bg-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4 h-12">
          {/* Nav Links (HOME has soft peach/salmon background pill exactly like mockup!) */}
          <nav className="hidden lg:flex items-center gap-2">
            <a
              href="#home"
              className="px-3.5 py-1.5 rounded-sm bg-[#FCE8E6] text-[#202321] font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              HOME
            </a>

            {/* SHOP dropdown */}
            <div className="relative">
              <button
                onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                className="px-3 py-1.5 text-xs font-semibold text-[#4B5563] hover:text-[#202321] tracking-wider uppercase flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>SHOP</span>
                <ChevronDown className="w-3 h-3 text-[#9CA3AF]" />
              </button>

              {shopDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 w-56 bg-white border border-[#E8E5DF] rounded-lg shadow-lg py-2 z-50 animate-in fade-in duration-100">
                  <button
                    onClick={() => {
                      onSelectCategory?.('all');
                      setShopDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#FAF9F7] text-[#202321] font-medium"
                  >
                    All Collections
                  </button>
                  <button
                    onClick={() => {
                      onSelectCategory?.('hot-wheels');
                      setShopDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#FAF9F7] text-[#202321]"
                  >
                    Hot Wheels & Die-Cast
                  </button>
                  <button
                    onClick={() => {
                      onSelectCategory?.('building-toys');
                      setShopDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#FAF9F7] text-[#202321]"
                  >
                    Building Bricks & Technic
                  </button>
                  <button
                    onClick={() => {
                      onSelectCategory?.('stem-learning');
                      setShopDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#FAF9F7] text-[#202321]"
                  >
                    STEM & Robotics
                  </button>
                  <button
                    onClick={() => {
                      onSelectCategory?.('soft-toys');
                      setShopDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#FAF9F7] text-[#202321]"
                  >
                    Soft Toys & Plush
                  </button>
                  <button
                    onClick={() => {
                      onSelectCategory?.('board-games');
                      setShopDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-[#FAF9F7] text-[#202321]"
                  >
                    Board Games & Puzzles
                  </button>
                </div>
              )}
            </div>

            <a
              href="#featured-items"
              className="px-3 py-1.5 text-xs font-semibold text-[#4B5563] hover:text-[#202321] tracking-wider uppercase transition-colors"
            >
              FEATURED TOYS
            </a>

            <a
              href="#gift-baskets"
              className="px-3 py-1.5 text-xs font-semibold text-[#4B5563] hover:text-[#202321] tracking-wider uppercase transition-colors"
            >
              GIFT BASKETS
            </a>

            <a
              href="#about-store"
              className="px-3 py-1.5 text-xs font-semibold text-[#4B5563] hover:text-[#202321] tracking-wider uppercase transition-colors"
            >
              OUR STORY
            </a>

            <a
              href="#articles"
              className="px-3 py-1.5 text-xs font-semibold text-[#4B5563] hover:text-[#202321] tracking-wider uppercase transition-colors"
            >
              BLOG
            </a>

            <a
              href="#visit-store"
              className="px-3 py-1.5 text-xs font-semibold text-[#4B5563] hover:text-[#202321] tracking-wider uppercase transition-colors"
            >
              CONTACT
            </a>
          </nav>

          {/* Right: Search box in nav (matching screenshot search pill) */}
          <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full lg:w-60">
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClick={onOpenSearch}
              className="w-full py-1.5 pl-3 pr-8 text-xs text-[#202321] placeholder-[#9CA3AF] bg-[#FAF9F7] border border-[#ECEAE4] rounded-full focus:outline-none focus:border-[#202321] transition-colors"
            />
            <button
              type="submit"
              className="absolute right-2.5 text-[#9CA3AF] hover:text-[#202321] transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#ECEAE4] px-4 py-4 space-y-3 shadow-md animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded bg-[#FCE8E6] text-xs font-bold text-[#202321]"
            >
              HOME
            </a>
            <a
              href="#featured-items"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-xs font-semibold text-[#4B5563] hover:bg-[#FAF9F7]"
            >
              SHOP FEATURED TOYS
            </a>
            <a
              href="#gift-baskets"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-xs font-semibold text-[#4B5563] hover:bg-[#FAF9F7]"
            >
              GIFT KITS & BASKETS
            </a>
            <a
              href="#about-store"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-xs font-semibold text-[#4B5563] hover:bg-[#FAF9F7]"
            >
              OUR STORY
            </a>
            <a
              href="#visit-store"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-xs font-semibold text-[#4B5563] hover:bg-[#FAF9F7]"
            >
              CONTACT & HOURS
            </a>
          </div>

          <div className="pt-3 border-t border-[#ECEAE4] flex flex-col gap-2">
            <a
              href="tel:+919823124567"
              className="flex items-center gap-2 text-xs font-semibold text-[#202321] p-2 rounded bg-[#FAF9F7]"
            >
              <Phone className="w-4 h-4 text-[#E98552]" />
              <span>Call Showroom: +91 98231 24567</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
