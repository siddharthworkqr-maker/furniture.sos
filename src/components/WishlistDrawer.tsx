import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, MessageSquare, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { getMultiProductWhatsAppUrl, getProductOrderWhatsAppUrl, WHATSAPP_PHONE_DISPLAY } from '../utils/whatsapp';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: Product[];
  onRemoveItem: (id: string) => void;
  onClearWishlist: () => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveItem,
  onClearWishlist,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const totalPrice = wishlistItems.reduce((acc, item) => acc + item.price, 0);
  const multiWhatsAppUrl = getMultiProductWhatsAppUrl(
    wishlistItems.map((item) => ({
      name: item.name,
      price: item.price,
      finish: item.finishes[0],
    }))
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-md bg-[#FDFBF7] h-full shadow-2xl flex flex-col border-l border-[#EAE2D5]"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#EAE2D5] flex items-center justify-between bg-[#F4EFE6]">
            <div>
              <h3 className="font-serif text-xl font-medium text-[#2D241E]">
                Saved Inquiries & Wishlist
              </h3>
              <span className="text-xs text-[#8B735B]">
                {wishlistItems.length} {wishlistItems.length === 1 ? 'piece' : 'pieces'} curated
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#6B5D52] hover:text-[#2D241E] rounded-full cursor-pointer transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistItems.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#F4EFE6] flex items-center justify-center mx-auto text-[#8B735B]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg text-[#2D241E]">Your saved collection is empty</h4>
                <p className="text-xs text-[#6B5D52] max-w-xs mx-auto">
                  Click the heart icon on any furniture piece to save it here for a combined WhatsApp quote.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-[#EAE2D5]">
                  <span className="text-xs font-semibold text-[#8B735B] uppercase">Selected Designs</span>
                  <button
                    onClick={onClearWishlist}
                    className="text-xs text-[#A83D2A] hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {wishlistItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 bg-white rounded-2xl border border-[#EAE2D5] flex items-center gap-3 shadow-sm hover:border-[#8B735B] transition-colors"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0 cursor-pointer"
                        onClick={() => {
                          onSelectProduct(item);
                          onClose();
                        }}
                      />

                      <div className="flex-1 min-w-0">
                        <h4
                          onClick={() => {
                            onSelectProduct(item);
                            onClose();
                          }}
                          className="font-serif text-sm font-medium text-[#2D241E] truncate cursor-pointer hover:text-[#8B735B]"
                        >
                          {item.name}
                        </h4>
                        <div className="text-xs font-bold text-[#8B735B]">
                          ₹{item.price.toLocaleString('en-IN')}
                        </div>
                        <span className="text-[10px] text-[#6B5D52] block">
                          Finish: {item.finishes[0]}
                        </span>
                      </div>

                      <div className="flex flex-col gap-1 items-end">
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 text-[#9E9182] hover:text-[#A83D2A] transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <a
                          href={getProductOrderWhatsAppUrl(item.name, item.finishes[0], item.price)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-[#25D366] text-white rounded-lg hover:bg-[#1EBE5D] transition-colors cursor-pointer"
                          title="Order on WhatsApp"
                        >
                          <MessageSquare className="w-3.5 h-3.5 fill-white text-white" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Footer with Combined WhatsApp Order */}
          {wishlistItems.length > 0 && (
            <div className="p-6 border-t border-[#EAE2D5] bg-[#F4EFE6] space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-semibold text-[#5A4F44]">Estimated Subtotal:</span>
                <span className="font-serif text-2xl font-bold text-[#2D241E]">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>

              <a
                href={multiWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 group transition-all cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white text-white" />
                <span>Inquire All {wishlistItems.length} Pieces on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="text-center text-[11px] text-[#8B735B]">
                Orders routed to official WhatsApp concierge: {WHATSAPP_PHONE_DISPLAY}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
