import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export const VisitOurStore: React.FC = () => {
  return (
    <section id="visit-store" className="py-16 md:py-20 bg-white border-b border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#E8E5DF]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#233B63] mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E98552]" />
              <span>Flagship Location</span>
              <span aria-hidden="true" className="text-[#E8E5DF]">•</span>
              <span className="text-[#6B7280]">Ambernath (East), Maharashtra</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202321] tracking-tight">
              Visit Our Store
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4B5563] max-w-sm mt-2 md:mt-0 leading-relaxed">
            Convenient parking, hands-on play demonstration tables, and attentive personal advice.
          </p>
        </div>

        {/* Content Grid: Store Details Left (5 cols), Interactive Map Right (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Store Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#FAF9F6] rounded-2xl p-6 sm:p-7 border border-[#E8E5DF]">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#E8E5DF] flex items-center justify-center text-[#233B63] shrink-0 mt-0.5 shadow-2xs">
                  <MapPin className="w-4.5 h-4.5 text-[#E98552]" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                    Showroom Address
                  </h3>
                  <p className="text-sm font-bold text-[#202321] mt-0.5">
                    Anjrich The Toy Store
                  </p>
                  <p className="text-xs sm:text-sm text-[#4B5563] mt-1 leading-relaxed">
                    Shop No. 4 & 5, Silver Arch Commercial Complex, Near Station Road & Historic Shiv Mandir Chowk, Ambernath (East), Maharashtra 421501
                  </p>
                  <p className="text-xs text-emerald-700 font-medium mt-1">
                    Free customer parking outside the store.
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#E8E5DF] flex items-center justify-center text-[#233B63] shrink-0 mt-0.5 shadow-2xs">
                  <Clock className="w-4.5 h-4.5 text-[#233B63]" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                    Opening Hours
                  </h3>
                  <p className="text-sm font-bold text-[#202321] mt-0.5">
                    Monday to Sunday (Open All 7 Days)
                  </p>
                  <p className="text-xs sm:text-sm text-[#4B5563] mt-0.5">
                    10:00 AM – 9:30 PM IST
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#E8E5DF] flex items-center justify-center text-[#233B63] shrink-0 mt-0.5 shadow-2xs">
                  <Phone className="w-4.5 h-4.5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                    Store Inquiries & Holds
                  </h3>
                  <a
                    href="tel:+919823124567"
                    className="text-sm font-bold text-[#202321] hover:text-[#233B63] mt-0.5 block"
                  >
                    +91 98231 24567
                  </a>
                  <p className="text-xs text-[#6B7280]">Direct store desk for stock checks</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#E8E5DF] space-y-2.5">
              <a
                href="https://wa.me/919823124567?text=Hello%20Anjrich%20The%20Toy%20Store!%20I'm%20planning%20to%20visit%20your%20Ambernath%20showroom."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Anjrich+The+Toy+Store+Ambernath+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#233B63] hover:bg-[#1C2F4F] text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E8E5DF] bg-[#FAF9F6] shadow-2xs flex flex-col">
            <div className="p-3.5 bg-white border-b border-[#E8E5DF] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#202321] font-semibold">
                <MapPin className="w-4 h-4 text-[#E98552]" />
                <span>Interactive Map · Ambernath, Maharashtra</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Anjrich+The+Toy+Store+Ambernath+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#233B63] hover:underline flex items-center gap-1 font-medium"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Maps iFrame */}
            <div className="relative flex-1 min-h-[360px] w-full bg-[#E8E5DF]">
              <iframe
                title="Anjrich The Toy Store Ambernath Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15074.87784381895!2d73.1852003!3d19.1983002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be794939798544b%3A0xe5a3bbdd181747c4!2sAmbernath%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Pin Overlay Card */}
              <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl shadow-md border border-[#E8E5DF] max-w-xs text-xs">
                <p className="font-bold text-[#233B63]">Anjrich The Toy Store</p>
                <p className="text-[11px] text-[#4B5563] mt-0.5">
                  Silver Arch Commercial Complex, Ambernath (East)
                </p>
                <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-medium mt-1">
                  <ShieldCheck className="w-3 h-3" /> Open Today until 9:30 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
