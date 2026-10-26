import React from 'react';
import { ShieldCheck, Gift, HeartHandshake, ArrowRight, Star } from 'lucide-react';
import { SIDEBAR_CATEGORIES, ARTICLES, Article } from '../data/storeData';

interface SidebarProps {
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
  onOpenArticle: (article: Article) => void;
  onExploreTopPicks: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenArticle,
  onExploreTopPicks,
}) => {
  return (
    <aside className="w-full lg:w-64 xl:w-72 shrink-0 space-y-8">
      {/* 1. Category Navigation Box (Soft pastel peach/rose background matching screenshot) */}
      <div className="bg-[#FCE8E6] rounded-xl p-5 border border-[#F8D2CC]/70 shadow-xs">
        <h3 className="text-xs font-bold text-[#202321] uppercase tracking-wider mb-3 px-1">
          Categories
        </h3>
        <ul className="space-y-1.5 text-xs">
          {SIDEBAR_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.slug;
            return (
              <li key={cat.slug}>
                <button
                  onClick={() => onSelectCategory(cat.slug)}
                  className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-white text-[#202321] shadow-xs font-bold'
                      : 'text-[#6B4E49] hover:bg-white/60 hover:text-[#202321]'
                  }`}
                >
                  <span className="truncate">{cat.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E98552]"></span>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 2. Three Value Proposition Badges (Circular pastel icons matching screenshot) */}
      <div className="space-y-6 px-1">
        {/* Badge 1: Quality */}
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-full bg-[#EBF0F8] text-[#233B63] flex items-center justify-center shrink-0 border border-[#D8E4F3]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#202321] leading-tight">Delivering quality toys</h4>
            <p className="text-[11px] text-[#6B7280] mt-0.5 leading-relaxed">
              100% BIS certified safe, non-toxic materials
            </p>
          </div>
        </div>

        {/* Badge 2: All occasions */}
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-full bg-[#FFF0EB] text-[#E98552] flex items-center justify-center shrink-0 border border-[#FDE1D6]">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#202321] leading-tight">Gifts for all occasions</h4>
            <p className="text-[11px] text-[#6B7280] mt-0.5 leading-relaxed">
              Curated for birthdays, return gifts & milestones
            </p>
          </div>
        </div>

        {/* Badge 3: Great customer service */}
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-full bg-[#FCE8E6] text-[#D96B5B] flex items-center justify-center shrink-0 border border-[#F8D2CC]">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#202321] leading-tight">Great customer service</h4>
            <p className="text-[11px] text-[#6B7280] mt-0.5 leading-relaxed">
              Personal toy demos & WhatsApp support
            </p>
          </div>
        </div>
      </div>

      {/* 3. "Top Holiday Gift Ideas" Card (matching screenshot vertical promo) */}
      <div className="relative rounded-xl overflow-hidden border border-[#ECEAE4] bg-white shadow-xs group">
        <div className="p-4 text-center bg-[#FAF9F7] border-b border-[#ECEAE4]">
          <p className="text-[10px] uppercase font-bold text-[#6B7280] tracking-widest">Top Holiday</p>
          <p className="text-xs font-bold text-[#202321] tracking-wider uppercase">GIFT IDEAS</p>
        </div>
        <div className="h-44 w-full relative overflow-hidden bg-[#F3F1EC]">
          <img
            src="https://images.unsplash.com/photo-1456086272160-b28b0645b729?auto=format&fit=crop&w=600&q=80"
            alt="Top Holiday Toy Gift Ideas"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-3 text-center bg-white">
          <button
            onClick={onExploreTopPicks}
            className="text-[11px] font-bold text-[#202321] hover:text-[#233B63] uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>SHOP NOW</span>
            <ArrowRight className="w-3 h-3 text-[#E98552]" />
          </button>
        </div>
      </div>

      {/* 4. "Articles" Widget with Cursive Script Header (matching screenshot) */}
      <div className="bg-white rounded-xl p-5 border border-[#ECEAE4] shadow-xs">
        <div className="border-b border-[#F0EFEB] pb-3 mb-4 text-center">
          <h3 className="font-script text-3xl text-[#202321] lowercase">
            Articles
          </h3>
        </div>

        <div className="space-y-4">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => onOpenArticle(article)}
              className="group cursor-pointer"
            >
              <h4 className="text-xs font-bold text-[#202321] group-hover:text-[#233B63] transition-colors leading-snug">
                {article.title}
              </h4>
              <p className="text-[10px] text-[#9CA3AF] mt-1">
                By {article.author} · {article.date}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-3 border-t border-[#F0EFEB] text-center">
          <button
            onClick={() => onOpenArticle(ARTICLES[0])}
            className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280] hover:text-[#202321] cursor-pointer transition-colors"
          >
            VIEW MORE ARTICLES
          </button>
        </div>
      </div>

      {/* 5. Customer Testimonial Card (Arched photo + quote matching screenshot) */}
      <div className="rounded-xl overflow-hidden border border-[#ECEAE4] bg-[#FAF9F7] p-5 text-center shadow-xs">
        {/* Decorative subtle wavy top banner */}
        <div className="w-14 h-14 mx-auto rounded-full overflow-hidden border-2 border-white shadow-xs mb-3">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
            alt="Customer avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center gap-1 text-[#FBBF24] mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-current" />
          ))}
        </div>
        <p className="text-xs text-[#4B5563] italic leading-relaxed">
          “Love my gift basket! It's going to make a wonderful birthday surprise.”
        </p>
        <p className="text-[11px] font-bold text-[#202321] mt-2.5">
          Pooja Sharma
        </p>
        <p className="text-[10px] text-[#9CA3AF]">
          Ambernath East, Maharashtra
        </p>
      </div>
    </aside>
  );
};
