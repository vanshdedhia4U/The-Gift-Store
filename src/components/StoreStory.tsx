import React from 'react';
import { MapPin, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHY_PARENTS_LOVE_US } from '../data/storeData';

interface StoreStoryProps {
  onOpenShowroomPhoto: () => void;
}

export const StoreStory: React.FC<StoreStoryProps> = ({ onOpenShowroomPhoto }) => {
  return (
    <section id="about-store" className="py-16 md:py-24 bg-white border-b border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Store Photography & Showroom Anchor */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E5DF] bg-[#FAF9F6] shadow-sm">
              <div className="h-72 sm:h-80 w-full relative overflow-hidden bg-[#F3F1EC]">
                <img
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1000&q=85"
                  alt="Anjrich The Toy Store Ambernath Showroom interior with wooden shelves and curated displays"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-[#E98552] font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Silver Arch Commercial Complex, Ambernath East</span>
                  </div>
                  <p className="text-sm font-bold">Physical Retail Showroom</p>
                  <p className="text-xs text-white/80">3 minutes from Ambernath Railway Station</p>
                </div>
              </div>

              {/* Showroom Specs Strip */}
              <div className="p-4 bg-[#FAF9F6] border-t border-[#E8E5DF] grid grid-cols-2 gap-3 text-center">
                <div className="p-2.5 rounded-lg bg-white border border-[#E8E5DF]">
                  <p className="text-lg font-bold text-[#233B63] tabular-nums">1,200+</p>
                  <p className="text-[11px] text-[#6B7280] font-medium">Toys on Display</p>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E8E5DF]">
                  <p className="text-lg font-bold text-[#E98552] tabular-nums">100% BIS</p>
                  <p className="text-[11px] text-[#6B7280] font-medium">Govt. Certified</p>
                </div>
              </div>
            </div>

            {/* Secondary photo row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="h-28 rounded-xl overflow-hidden border border-[#E8E5DF] relative">
                <img
                  src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=600&q=80"
                  alt="Hot Wheels collector die-cast cars on display"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-2 text-white text-[11px] font-semibold">
                  Die-Cast Wall
                </div>
              </div>
              <div className="h-28 rounded-xl overflow-hidden border border-[#E8E5DF] relative">
                <img
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80"
                  alt="STEM robotics and building blocks on display"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-2 text-white text-[11px] font-semibold">
                  STEM Station
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Introduction & 5 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#233B63] mb-1.5">
                <Heart className="w-3.5 h-3.5 text-[#E98552]" />
                <span>The Anjrich Story</span>
                <span aria-hidden="true" className="text-[#E8E5DF]">•</span>
                <span className="text-[#6B7280]">Ambernath, Maharashtra</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#202321] tracking-tight">
                A toy store built for families, not algorithms.
              </h2>
              <p className="text-xs sm:text-sm text-[#4B5563] mt-2 leading-relaxed">
                In an era dominated by anonymous parcel shippers and brittle knockoffs, Anjrich gives Ambernath parents a clean, family-first environment to hold, test, and experience toys before taking them home.
              </p>
            </div>

            {/* Core Commitments List */}
            <div className="space-y-4 pt-2">
              {WHY_PARENTS_LOVE_US.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#FAF9F6] border border-[#E8E5DF] flex items-center justify-center shrink-0 mt-0.5 text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#202321]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs">
              <a
                href="#visit-store"
                className="font-semibold text-[#233B63] hover:text-[#1C2F4F] flex items-center gap-1"
              >
                <span>Plan your store visit</span>
                <span className="text-[#E98552]">→</span>
              </a>
              <span className="text-[#E8E5DF]">|</span>
              <span className="text-[#6B7280]">Open Monday through Sunday</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
