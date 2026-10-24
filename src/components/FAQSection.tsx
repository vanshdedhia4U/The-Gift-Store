import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/storeData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-20 bg-[#FAF9F6] border-b border-[#E8E5DF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 pb-4 border-b border-[#E8E5DF]">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#233B63] mb-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#E98552]" />
            <span>Store Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#202321] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5 leading-relaxed">
            Everything you need to know about gift wrapping, developmental milestones, store timings, and Hot Wheels drops.
          </p>
        </div>

        {/* Elegant Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#E8E5DF] bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF9F6] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-[#202321]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#6B7280] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#233B63]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-[#F3F1EC] animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have a question prompt */}
        <div className="mt-8 p-5 rounded-xl bg-white border border-[#E8E5DF] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-xs sm:text-sm font-bold text-[#202321]">Have a specific toy in mind?</h4>
            <p className="text-xs text-[#6B7280] mt-0.5">Send a photo or description to our Ambernath team on WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/919823124567?text=Hello%20Anjrich!%20I'm%20looking%20for%20a%20specific%20toy."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold rounded-lg shrink-0 transition-colors cursor-pointer shadow-2xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
