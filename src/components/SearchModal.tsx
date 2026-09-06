import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, Eye, MessageSquare } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { getProductOrderWhatsAppUrl } from '../utils/whatsapp';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  products?: Product[];
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  products = PRODUCTS,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const results = products.filter((p) => {
    if (!query.trim()) return false;
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  const popularSearches = [
    'Arlo Lounge Sofa',
    'Verona Bed',
    'Haven Dining Table',
    'Solid Teak',
    'Wardrobe',
    'Accent Chair'
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-sm">
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative z-10 w-full max-w-2xl bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#EAE2D5] overflow-hidden"
        >
          {/* Search Input Bar */}
          <div className="p-4 sm:p-6 border-b border-[#EAE2D5] flex items-center gap-3 bg-[#F4EFE6]">
            <Search className="w-5 h-5 text-[#8B735B]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by furniture name, wood, room or finish..."
              className="w-full bg-transparent text-sm sm:text-base text-[#2D241E] placeholder-[#9E9182] focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-[#8B735B] hover:text-[#2D241E] rounded-full cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-[#6B5D52] hover:text-[#2D241E] rounded-full text-xs font-semibold cursor-pointer"
            >
              ESC
            </button>
          </div>

          {/* Body Results or Suggestions */}
          <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6">
            {query.trim() === '' ? (
              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#8B735B]">
                  Popular Furniture Searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3.5 py-1.5 bg-white border border-[#EAE2D5] rounded-full text-xs text-[#2D241E] hover:bg-[#F4EFE6] transition-colors cursor-pointer"
                    >
                      {term}
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#EAE2D5]">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8B735B] mb-3">
                    Featured Highlights
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {products.slice(0, 2).map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          onSelectProduct(p);
                          onClose();
                        }}
                        className="p-3 bg-white rounded-2xl border border-[#EAE2D5] flex items-center gap-3 cursor-pointer hover:shadow-md hover:border-[#8B735B] transition-all"
                      >
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                        <div className="overflow-hidden">
                          <div className="font-semibold text-xs text-[#2D241E] truncate">{p.name}</div>
                          <div className="text-[11px] text-[#8B735B] font-bold">₹{p.price.toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="text-center py-10 text-xs text-[#6B5D52]">
                No matching furniture found for "{query}". Try searching for "sofa", "bed", "teak", or "dining".
              </div>
            ) : (
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#8B735B]">
                  Found {results.length} Matching Designs
                </div>
                <div className="space-y-2">
                  {results.map((product) => (
                    <div
                      key={product.id}
                      className="p-3 bg-white rounded-2xl border border-[#EAE2D5] hover:border-[#8B735B] flex items-center justify-between gap-4 transition-all hover:shadow-sm"
                    >
                      <div
                        onClick={() => {
                          onSelectProduct(product);
                          onClose();
                        }}
                        className="flex items-center gap-3 flex-1 cursor-pointer"
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                        />
                        <div>
                          <div className="font-serif font-medium text-sm text-[#2D241E]">{product.name}</div>
                          <div className="text-xs text-[#6B5D52] line-clamp-1">{product.material}</div>
                          <div className="text-xs font-bold text-[#8B735B] mt-0.5">₹{product.price.toLocaleString('en-IN')}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            onSelectProduct(product);
                            onClose();
                          }}
                          className="p-2 text-xs font-semibold text-[#2D241E] bg-[#F4EFE6] hover:bg-[#EAE2D5] rounded-xl flex items-center gap-1 cursor-pointer"
                          title="View Details"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={getProductOrderWhatsAppUrl(product.name, product.finishes[0], product.price)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-xl flex items-center gap-1.5 shadow-sm cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5 fill-white text-white" />
                          <span>Order</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
