import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { ToyArtwork } from './ToyArtwork';

interface HeroSectionProps {
  onExploreClick: () => void;
  onVisitClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onVisitClick,
}) => {
  const [imgError, setImgError] = useState(false);

  // High-resolution photograph of an organized toy display with natural lighting
  const heroPhotoUrl =
    'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=85';

  return (
    <section id="home" className="pt-10 pb-16 md:pt-14 md:pb-20 bg-[#FAF9F6] border-b border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Composition: Balanced proportions and generous whitespace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: ~45% width (5 of 12 cols lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location context */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#233B63] tracking-wider uppercase">
              <span>Ambernath, Maharashtra</span>
              <span aria-hidden="true" className="text-[#E8E5DF]">/</span>
              <span className="text-[#6B7280]">Silver Arch Complex</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#202321] tracking-[-0.03em] leading-[1.08] [text-wrap:balance] font-heading">
              Little Things. <br />
              <span className="text-[#233B63]">Big Adventures.</span>
            </h1>

            {/* Concise supporting sentence */}
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed [text-wrap:balance]">
              Discover hand-picked toys, official Hot Wheels collector models, STEM robotics, and family board games at Ambernath's independent toy store.
            </p>

            {/* Two clean action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#233B63] hover:bg-[#1C2F4F] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer shadow-xs whitespace-nowrap"
              >
                <span>Explore Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onVisitClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#202321] hover:bg-[#F3F1EC] text-xs sm:text-sm font-semibold rounded-xl border border-[#E8E5DF] transition-colors cursor-pointer whitespace-nowrap"
              >
                <MapPin className="w-4 h-4 text-[#E98552]" />
                <span>Visit Store</span>
              </button>
            </div>

            {/* Subtle verified store facts */}
            <div className="pt-6 border-t border-[#E8E5DF] grid grid-cols-3 gap-3">
              <div>
                <p className="text-sm font-bold text-[#202321]">Curated Aisles</p>
                <p className="text-[11px] text-[#6B7280] mt-0.5">6 Departments</p>
              </div>
              <div className="border-l border-[#E8E5DF] pl-3">
                <p className="text-sm font-bold text-[#233B63]">100% BIS</p>
                <p className="text-[11px] text-[#6B7280] mt-0.5">Safety Certified</p>
              </div>
              <div className="border-l border-[#E8E5DF] pl-3">
                <p className="text-sm font-bold text-[#E98552]">Free</p>
                <p className="text-[11px] text-[#6B7280] mt-0.5">Gift Wrapping</p>
              </div>
            </div>
          </div>

          {/* Right Column: ~55% width (7 of 12 cols lg:col-span-7) — One Compelling Photograph */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E5DF] bg-[#FAF9F6] shadow-sm">
              <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full bg-[#EFECE6] overflow-hidden">
                {!imgError ? (
                  <img
                    src={heroPhotoUrl}
                    alt="Neatly arranged display shelves featuring wooden toys, boxed sets, and curated playthings"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    loading="eager"
                  />
                ) : (
                  <ToyArtwork type="heroStore" className="w-full h-full" />
                )}
              </div>

              {/* Quiet, authentic caption bar below the photograph */}
              <div className="p-3 sm:p-4 bg-white border-t border-[#E8E5DF] flex items-center justify-between text-xs text-[#6B7280]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span className="font-medium text-[#202321]">Open Daily: 10:00 AM – 9:30 PM</span>
                </div>
                <span>Silver Arch Complex, Ambernath East</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
