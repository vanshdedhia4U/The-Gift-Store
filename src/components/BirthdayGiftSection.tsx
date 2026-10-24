import React, { useState, useMemo } from 'react';
import { Gift, RotateCcw, MessageCircle, Check, Users, ShoppingBag, Eye } from 'lucide-react';
import { PRODUCTS, Product } from '../data/storeData';
import { PRODUCT_PHOTOS } from '../data/photoAssets';
import { ToyArtwork } from './ToyArtwork';

interface BirthdayGiftSectionProps {
  onQuickView: (product: Product) => void;
  onAddToEnquiryBag: (product: Product) => void;
}

export const BirthdayGiftSection: React.FC<BirthdayGiftSectionProps> = ({
  onQuickView,
  onAddToEnquiryBag,
}) => {
  const [selectedAge, setSelectedAge] = useState<string>('all');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('all');
  const [selectedBudget, setSelectedBudget] = useState<string>('all');
  const [bulkReturnGiftsOpen, setBulkReturnGiftsOpen] = useState(false);

  // Return Gift Planner form
  const [guestCount, setGuestCount] = useState('20 Guests');
  const [budgetPerGift, setBudgetPerGift] = useState('₹400 – ₹600');
  const [kidAge, setKidAge] = useState('6 Years');

  const ageOptions = [
    { label: 'All Ages', value: 'all' },
    { label: '0–2 Yrs (Infant & Nursery)', value: '0-2' },
    { label: '3–5 Yrs (Preschool & Building)', value: '3-5' },
    { label: '6–8 Yrs (STEM & Hot Wheels)', value: '6-8' },
    { label: '9–12 Yrs (Technic & Science)', value: '9-12' },
    { label: '13+ Yrs (Collectors & Strategy)', value: '13+' },
  ];

  const occasionOptions = [
    { label: 'Any Occasion', value: 'all' },
    { label: 'Birthday Surprise', value: 'birthday' },
    { label: 'Party Return Gifts', value: 'return-gifts' },
    { label: 'Learning & STEM', value: 'learning' },
    { label: 'Collector Gift', value: 'collector' },
  ];

  const budgetOptions = [
    { label: 'Any Budget', value: 'all' },
    { label: 'Under ₹2,000', value: 'under-2000' },
    { label: '₹2,000 – ₹3,000', value: 'mid' },
    { label: 'Above ₹3,000', value: 'above-3000' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Age filter
      if (selectedAge !== 'all' && p.ageBracket !== selectedAge) {
        return false;
      }
      // Occasion filter
      if (selectedOccasion !== 'all' && !p.occasions.includes(selectedOccasion as any)) {
        return false;
      }
      // Budget filter
      if (selectedBudget === 'under-2000' && p.price >= 2000) return false;
      if (selectedBudget === 'mid' && (p.price < 2000 || p.price > 3000)) return false;
      if (selectedBudget === 'above-3000' && p.price <= 3000) return false;

      return true;
    });
  }, [selectedAge, selectedOccasion, selectedBudget]);

  const handleResetFilters = () => {
    setSelectedAge('all');
    setSelectedOccasion('all');
    setSelectedBudget('all');
  };

  const handleWhatsAppEmptySearch = () => {
    const ageLabel = ageOptions.find((a) => a.value === selectedAge)?.label || selectedAge;
    const occasionLabel = occasionOptions.find((o) => o.value === selectedOccasion)?.label || selectedOccasion;
    const budgetLabel = budgetOptions.find((b) => b.value === selectedBudget)?.label || selectedBudget;

    const text = `Hello Anjrich The Toy Store! I'm looking for toy recommendations for:
• Age: ${ageLabel}
• Occasion: ${occasionLabel}
• Budget: ${budgetLabel}

Could you suggest items currently available in your Ambernath showroom?`;

    window.open(`https://wa.me/919823124567?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleReturnGiftsWhatsApp = () => {
    const text = `*Party Return Gifts Inquiry — Anjrich The Toy Store Ambernath*\nChild's Age: ${kidAge}\nGuest Count: ${guestCount}\nBudget Per Gift: ${budgetPerGift}\n\nPlease share curated return gift options available for store pickup or local delivery.`;
    window.open(`https://wa.me/919823124567?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="gift-discovery" className="py-16 md:py-20 bg-[#FAF9F6] border-b border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 pb-4 border-b border-[#E8E5DF]">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#233B63] mb-1.5">
            <Gift className="w-3.5 h-3.5 text-[#E98552]" />
            <span>Interactive Gift Finder</span>
            <span aria-hidden="true" className="text-[#E8E5DF]">•</span>
            <span className="text-[#6B7280]">Real In-Store Catalogue</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#202321] tracking-tight font-heading">
            Find the Right Gift
          </h2>

          <p className="text-xs sm:text-sm text-[#4B5563] mt-2 leading-relaxed">
            Select recipient age, occasion, and budget to filter our current Ambernath showroom inventory.
          </p>
        </div>

        {/* Working Interactive Filter Box */}
        <div className="bg-white rounded-xl p-5 border border-[#E8E5DF] shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E5DF]">
            <div>
              <h3 className="text-sm font-bold text-[#202321] font-heading">Filter Criteria</h3>
              <p className="text-xs text-[#6B7280]">Select options below to view matching toys</p>
            </div>

            <div className="flex items-center gap-2">
              {(selectedAge !== 'all' || selectedOccasion !== 'all' || selectedBudget !== 'all') && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#6B7280] hover:text-[#202321] hover:bg-[#FAF9F6] border border-[#E8E5DF] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}

              <button
                onClick={() => setBulkReturnGiftsOpen(!bulkReturnGiftsOpen)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#FAF9F6] hover:bg-[#F3F1EC] text-[#233B63] border border-[#E8E5DF] transition-colors cursor-pointer"
              >
                <Users className="w-3.5 h-3.5 text-[#E98552]" />
                <span>{bulkReturnGiftsOpen ? 'Close Return Gifts' : 'Party Return Gifts Planner'}</span>
              </button>
            </div>
          </div>

          {/* Bulk Return Gift Drawer */}
          {bulkReturnGiftsOpen && (
            <div className="my-4 p-4 rounded-xl bg-[#FAF9F6] border border-[#E8E5DF] space-y-3 animate-in fade-in duration-150">
              <h4 className="text-xs sm:text-sm font-bold text-[#202321] font-heading">
                Ambernath Party Return Gifts Concierge
              </h4>
              <p className="text-xs text-[#4B5563]">
                Planning a birthday celebration? Share your guest count and budget per child. We organize age-appropriate kits with complimentary individual gift wrapping and name tags.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#4B5563] mb-1">Child's Age / Grade</label>
                  <input
                    type="text"
                    value={kidAge}
                    onChange={(e) => setKidAge(e.target.value)}
                    className="w-full text-xs p-2 bg-white border border-[#E8E5DF] rounded-lg focus:outline-none focus:border-[#233B63]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#4B5563] mb-1">Number of Guests</label>
                  <input
                    type="text"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full text-xs p-2 bg-white border border-[#E8E5DF] rounded-lg focus:outline-none focus:border-[#233B63]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#4B5563] mb-1">Budget Per Child</label>
                  <input
                    type="text"
                    value={budgetPerGift}
                    onChange={(e) => setBudgetPerGift(e.target.value)}
                    className="w-full text-xs p-2 bg-white border border-[#E8E5DF] rounded-lg focus:outline-none focus:border-[#233B63]"
                  />
                </div>
              </div>

              <button
                onClick={handleReturnGiftsWhatsApp}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Request Return Gift Packages on WhatsApp</span>
              </button>
            </div>
          )}

          {/* 3 Interactive Selectors: Age, Occasion, Budget */}
          <div className="pt-4 space-y-4">
            {/* Age Group */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-2">1. Recipient Age Group</p>
              <div className="flex flex-wrap gap-1.5">
                {ageOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSelectedAge(opt.value)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      selectedAge === opt.value
                        ? 'bg-[#233B63] text-white shadow-xs font-semibold'
                        : 'bg-[#FAF9F6] text-[#4B5563] hover:text-[#202321] border border-[#E8E5DF]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Occasion */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-2">2. Occasion</p>
              <div className="flex flex-wrap gap-1.5">
                {occasionOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSelectedOccasion(opt.value)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      selectedOccasion === opt.value
                        ? 'bg-[#233B63] text-white shadow-xs font-semibold'
                        : 'bg-[#FAF9F6] text-[#4B5563] hover:text-[#202321] border border-[#E8E5DF]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-2">3. Budget Range</p>
              <div className="flex flex-wrap gap-1.5">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSelectedBudget(opt.value)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      selectedBudget === opt.value
                        ? 'bg-[#E98552] text-white shadow-xs font-semibold'
                        : 'bg-[#FAF9F6] text-[#4B5563] hover:text-[#202321] border border-[#E8E5DF]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count Bar */}
        <div className="flex items-center justify-between mb-5 px-1 text-xs">
          <span className="font-medium text-[#202321]">
            Found {filteredProducts.length} matching {filteredProducts.length === 1 ? 'toy' : 'toys'} in our showroom
          </span>
          <span className="text-[#6B7280]">Complimentary gift wrapping included</span>
        </div>

        {/* Filtered Results Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {filteredProducts.map((product) => {
              const photoUrl = PRODUCT_PHOTOS[product.id];
              return (
                <div
                  key={product.id}
                  onClick={() => onQuickView(product)}
                  className="bg-white rounded-xl border border-[#E8E5DF] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#233B63] transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="relative aspect-[4/3] w-full bg-[#F3F1EC] overflow-hidden">
                    {photoUrl ? (
                      <img
                        src={photoUrl}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                        loading="lazy"
                      />
                    ) : (
                      <ToyArtwork type={product.svgType} className="w-full h-full" badge={product.tag} />
                    )}
                    <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded-md bg-white/95 text-[11px] font-semibold text-[#233B63] border border-black/5 shadow-2xs">
                      {product.age}
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#6B7280] mb-1">
                        <span className="font-semibold text-[#233B63]">{product.category}</span>
                        <span className="text-emerald-700 font-medium">In Showroom</span>
                      </div>
                      <h4 className="text-sm font-bold text-[#202321] group-hover:text-[#233B63] transition-colors leading-snug font-heading">
                        {product.name}
                      </h4>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E8E5DF] flex items-center justify-between">
                      <div>
                        <span className="text-base font-bold text-[#202321] tabular-nums">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <p className="text-[11px] text-emerald-700">Free In-Store Wrapping</p>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onQuickView(product);
                          }}
                          className="p-2 rounded-lg border border-[#E8E5DF] text-[#4B5563] hover:text-[#202321] hover:bg-[#FAF9F6] transition-colors"
                          title="View specifications"
                          aria-label="View specifications"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToEnquiryBag(product);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-[#233B63] text-white text-xs font-semibold hover:bg-[#1C2F4F] transition-colors"
                        >
                          Reserve
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Helpful Empty State */
          <div className="p-8 sm:p-10 rounded-xl bg-white border border-[#E8E5DF] text-center max-w-lg mx-auto mb-10 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-[#E8E5DF] flex items-center justify-center text-[#6B7280] mx-auto">
              <Gift className="w-6 h-6 text-[#E98552]" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#202321] font-heading">
                No exact match found in current display
              </h4>
              <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed">
                We receive weekly stock shipments at our Ambernath showroom and can check backroom inventory or source specific items for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
              <button
                onClick={handleResetFilters}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#FAF9F6] hover:bg-[#F3F1EC] text-[#202321] text-xs font-semibold rounded-lg border border-[#E8E5DF] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>

              <button
                onClick={handleWhatsAppEmptySearch}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Ask Store on WhatsApp</span>
              </button>
            </div>
          </div>
        )}

        {/* Gift Wrapping Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#E8E5DF]">
            <h4 className="text-sm font-bold text-[#202321] font-heading">Complimentary Gift Wrapping</h4>
            <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
              Celebration paper with satin ribbon ties and personalized greeting cards included at zero extra cost.
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
              <Check className="w-3.5 h-3.5" /> Included on all orders
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#E8E5DF]">
            <h4 className="text-sm font-bold text-[#202321] font-heading">Bespoke Gift Hampers</h4>
            <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
              Combine Hot Wheels castings, brain puzzles, and plush animals into a custom presentation basket.
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-[#233B63] font-medium">
              <Check className="w-3.5 h-3.5" /> Tailored to your budget
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#E8E5DF]">
            <h4 className="text-sm font-bold text-[#202321] font-heading">Party Return Gift Bundles</h4>
            <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
              Pre-wrapped, BIS-certified toy bundles for 10 to 100+ children with personalized name stickers.
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-[#E98552] font-medium">
              <Check className="w-3.5 h-3.5" /> Bulk pricing available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
