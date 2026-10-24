import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { PRODUCTS, Product } from '../data/storeData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectProduct }) => {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.age.toLowerCase().includes(q)
    );
  }, [query]);

  const quickSearches = ['Hot Wheels', 'Building Bricks', 'STEM Robotics', 'RC Supercar', 'Plush Bear', 'Board Games'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center pt-14 sm:pt-20 px-4">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF9F6] rounded-2xl shadow-2xl border border-[#E8E5DF] overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 bg-white border-b border-[#E8E5DF]">
          <Search className="w-5 h-5 text-[#6B7280] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search toys by title, age group, category (e.g. Hot Wheels, STEM, 6-8 yrs)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-4 pl-3 pr-10 text-sm text-[#202321] placeholder-[#9CA3AF] focus:outline-none bg-transparent"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#9CA3AF] hover:text-[#202321] rounded-full cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="text-xs font-medium text-[#6B7280] hover:text-[#202321] px-2 py-1 rounded bg-[#F3F1EC] cursor-pointer"
            >
              ESC
            </button>
          )}
        </div>

        {/* Quick Suggestion Tags */}
        {!query && (
          <div className="p-5 bg-[#FAF9F6]">
            <p className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider mb-2.5">
              Popular Showroom Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {quickSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-[#E8E5DF] text-[#202321] hover:border-[#233B63] hover:text-[#233B63] transition-colors cursor-pointer"
                >
                  <Tag className="w-3 h-3 text-[#E98552]" />
                  <span>{term}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {query && (
          <div className="max-h-96 overflow-y-auto divide-y divide-[#E8E5DF] bg-white">
            {filteredProducts.length === 0 ? (
              <div className="p-8 text-center text-sm text-[#6B7280]">
                No toys found matching <span className="font-semibold text-[#202321]">"{query}"</span>.
                <p className="text-xs text-[#9CA3AF] mt-1">
                  Try searching for Hot Wheels, STEM, Building, or RC. You can also message our store team on WhatsApp!
                </p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="p-4 flex items-center justify-between hover:bg-[#FAF9F6] cursor-pointer transition-colors group"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                      <span className="font-medium text-[#233B63]">{product.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{product.age}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#202321] group-hover:text-[#233B63] transition-colors mt-0.5">
                      {product.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className="text-sm font-bold text-[#202321] tabular-nums">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#233B63] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Footer */}
        <div className="px-4 py-3 bg-[#FAF9F6] border-t border-[#E8E5DF] flex items-center justify-between text-xs text-[#6B7280]">
          <span>Anjrich The Toy Store · Ambernath</span>
          <span>Press ESC or click outside to dismiss</span>
        </div>
      </div>
    </div>
  );
};
