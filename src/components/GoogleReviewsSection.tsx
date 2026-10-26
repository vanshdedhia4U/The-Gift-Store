import React from 'react';
import { Star, ShieldCheck, ExternalLink } from 'lucide-react';
import { REVIEWS } from '../data/storeData';

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-[#FAF9F6] border-b border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#E8E5DF]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#233B63] mb-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Customer Experiences</span>
              <span aria-hidden="true" className="text-[#E8E5DF]">•</span>
              <span className="text-[#6B7280]">Real Google Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202321] tracking-tight">
              Loved by Ambernath Families
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#E8E5DF]">
            <div className="flex items-center gap-0.5 text-[#E98552]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-xs">
              <span className="font-bold text-[#202321]">4.9 / 5.0</span>
              <span className="text-[#6B7280] ml-1.5">(180+ local reviews)</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-[#E8E5DF] shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-0.5 text-[#E98552] mb-2.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Neighborhood */}
              <div className="pt-3 mt-4 border-t border-[#F3F1EC] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#E8E5DF] text-[#233B63] font-bold text-xs flex items-center justify-center shrink-0">
                  {review.name
                    .split(' ')
                    .map((n: string) => n[0])
                    .join('')}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-[#202321] truncate">{review.name}</h4>
                  <p className="text-[11px] text-[#6B7280] truncate">{review.area} · {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Link */}
        <div className="mt-8 text-center">
          <a
            href="https://maps.google.com/?q=Anjrich+The+Toy+Store+Ambernath"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#233B63] hover:text-[#1C2F4F] transition-colors"
          >
            <span>Read more customer reviews on Google Maps</span>
            <ExternalLink className="w-3 h-3 text-[#E98552]" />
          </a>
        </div>
      </div>
    </section>
  );
};
