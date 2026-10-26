import React from 'react';
import { X, Calendar, User, BookOpen } from 'lucide-react';
import { Article } from '../data/storeData';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#ECEAE4] overflow-hidden p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#FAF9F7] text-[#202321] hover:bg-[#E8E5DF] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 text-xs text-[#6B7280] mb-3">
          <span className="flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-[#E98552]" />
            <span>{article.author}</span>
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.date}</span>
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#202321] font-heading leading-tight mb-4">
          {article.title}
        </h3>

        <div className="prose prose-sm text-[#4B5563] space-y-3 leading-relaxed text-xs sm:text-sm border-t border-[#ECEAE4] pt-4">
          <p className="font-medium text-[#202321]">
            {article.summary}
          </p>
          <p>
            When introducing toys into a child's routine, tactile engagement and curiosity-led discovery are far more rewarding than complex screens. In our Ambernath showroom, we observe firsthand how hands-on gear assemblies, solar cells, and track physics ignite spontaneous problem-solving.
          </p>
          <p>
            For parents planning birthday surprises or classroom gifts, we recommend focusing on open-ended sets that allow children to build, test, disassemble, and re-create without strict rigid rules.
          </p>
          <div className="p-4 rounded-xl bg-[#FAF9F7] border border-[#ECEAE4] mt-4">
            <h4 className="text-xs font-bold text-[#202321] mb-1">
              Have questions about choosing toys?
            </h4>
            <p className="text-xs text-[#6B7280]">
              Visit us at Silver Arch Complex in Ambernath East or message our toy specialists on WhatsApp (+91 98231 24567). We provide unboxing demos every single day!
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#ECEAE4] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#202321] text-white text-xs font-semibold hover:bg-[#233B63] transition-colors cursor-pointer"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
