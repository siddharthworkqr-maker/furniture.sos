import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  MessageSquare, 
  Heart, 
  Shield, 
  Truck, 
  Sparkles, 
  Ruler, 
  CheckCircle2, 
  Info, 
  Share2, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { Product } from '../types';
import { getProductOrderWhatsAppUrl, WHATSAPP_PHONE_DISPLAY } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);

  // Initialize selected finish when product changes
  useEffect(() => {
    if (product) {
      setActiveImageIndex(0);
      setSelectedFinish(product.finishes[0] || '');
    }
  }, [product]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const whatsappOrderUrl = getProductOrderWhatsAppUrl(
    product.name,
    selectedFinish || product.finishes[0],
    product.price
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/65 backdrop-blur-sm">
        
        {/* Backdrop dismiss */}
        <div 
          className="fixed inset-0" 
          onClick={onClose}
          aria-hidden="true" 
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 bg-[#FDFBF7] w-full max-w-5xl rounded-3xl shadow-2xl border border-[#EAE2D5] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE2D5] bg-[#F4EFE6]">
            <div className="flex items-center gap-2 text-xs text-[#8B735B]">
              <span>Collection</span>
              <span>/</span>
              <span className="font-semibold text-[#2D241E]">{product.category}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 text-[#6B5D52] hover:text-[#2D241E] hover:bg-[#EAE2D5] rounded-full transition-colors relative cursor-pointer"
                title="Share link"
              >
                {copiedLink ? <Check className="w-4 h-4 text-[#28833E]" /> : <Share2 className="w-4 h-4" />}
                {copiedLink && (
                  <span className="absolute -bottom-7 right-0 bg-[#2D241E] text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap">
                    Link copied!
                  </span>
                )}
              </button>

              <button
                onClick={onClose}
                className="p-2 text-[#6B5D52] hover:text-[#2D241E] hover:bg-[#EAE2D5] rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body with Two Columns */}
          <div className="overflow-y-auto p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main Active Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4EFE6] border border-[#EAE2D5] shadow-inner">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={`${product.name} view ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Floating Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {product.isBestSeller && (
                    <span className="bg-[#2D241E] text-[#FDFBF7] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Signature Best Seller
                    </span>
                  )}
                  {product.isSpecialOffer && (
                    <span className="bg-[#A83D2A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Special Offer Price
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                    isWishlisted 
                      ? 'bg-[#8B735B] text-white shadow-md' 
                      : 'bg-white/80 text-[#2D241E] hover:bg-white hover:text-[#8B735B]'
                  }`}
                  title="Save to wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
                </button>
              </div>

              {/* Thumbnails Row */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-[#8B735B] shadow-md scale-105'
                          : 'border-[#EAE2D5] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Craftsmanship Guarantees */}
              <div className="bg-[#F4EFE6] rounded-2xl p-4 border border-[#EAE2D5] grid grid-cols-2 gap-3 text-xs text-[#6B5D52]">
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-[#8B735B] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#2D241E]">{product.warranty}</div>
                    <div className="text-[11px] text-[#8B735B]">Structural & Joint Integrity</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Truck className="w-4 h-4 text-[#8B735B] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#2D241E]">White Glove Setup</div>
                    <div className="text-[11px] text-[#8B735B]">{product.leadTime}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Product Details & WhatsApp Ordering */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Product Title & Rating */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8B735B]">
                    {product.category}
                  </span>
                  <span className="text-xs text-[#8B735B]">•</span>
                  <div className="flex items-center text-xs text-[#2D241E] font-medium">
                    ★ {product.rating} <span className="text-[#8B735B] ml-1">({product.reviewsCount} customer reviews)</span>
                  </div>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[#2D241E]">
                  {product.name}
                </h1>

                <p className="text-xs sm:text-sm text-[#6B5D52] italic">
                  "{product.tagline}"
                </p>
              </div>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 pb-4 border-b border-[#EAE2D5]">
                <span className="font-serif text-3xl font-bold text-[#2D241E]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-base text-[#9E9182] line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs bg-[#A83D2A]/10 text-[#A83D2A] font-bold px-2 py-0.5 rounded-full">
                      Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                    </span>
                  </>
                )}
                <span className="text-xs text-[#6B5D52] ml-auto">
                  Inclusive of all taxes & white glove installation
                </span>
              </div>

              {/* Available Colors / Finishes Selector */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-[#2D241E]">
                  <span>SELECT FINISH / COLOR:</span>
                  <span className="text-[#8B735B] font-medium">{selectedFinish}</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.finishes.map((finish) => {
                    const isSelected = selectedFinish === finish;
                    return (
                      <button
                        key={finish}
                        onClick={() => setSelectedFinish(finish)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-[#2D241E] text-[#FDFBF7] shadow-sm font-semibold'
                            : 'bg-white text-[#2D241E] border border-[#EAE2D5] hover:bg-[#F4EFE6]'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#8B735B]" />}
                        <span>{finish}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Primary WhatsApp Direct Ordering Box */}
              <div className="bg-[#EAF8EE] border-2 border-[#25D366]/40 rounded-2xl p-5 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#136630] uppercase tracking-wider">
                    <MessageSquare className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
                    <span>Direct WhatsApp Concierge Order</span>
                  </div>
                  <span className="text-[11px] text-[#2F7E47] font-medium">Verified Hotline: {WHATSAPP_PHONE_DISPLAY}</span>
                </div>

                <p className="text-xs text-[#2A613C] leading-relaxed">
                  Click below to launch an instant WhatsApp chat with pre-filled order specifications for <span className="font-semibold">{product.name}</span> in <span className="font-semibold">{selectedFinish || product.finishes[0]}</span>.
                </p>

                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-white text-white" />
                  <span>Order on WhatsApp (₹{product.price.toLocaleString('en-IN')})</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Material & Dimensions Specifications */}
              <div className="space-y-4 pt-2">
                <div className="bg-white rounded-2xl p-4 border border-[#EAE2D5] space-y-3 text-xs">
                  <div className="font-semibold text-[#2D241E] uppercase tracking-wider border-b border-[#EAE2D5] pb-2">
                    Architectural Specifications
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <span className="text-[#8B735B] block">Wood & Core Material:</span>
                      <span className="font-medium text-[#2D241E]">{product.material}</span>
                    </div>

                    <div>
                      <span className="text-[#8B735B] block">Overall Dimensions:</span>
                      <span className="font-medium text-[#2D241E]">
                        {product.dimensions.width} × {product.dimensions.depth} × {product.dimensions.height}
                      </span>
                    </div>

                    {product.dimensions.weight && (
                      <div>
                        <span className="text-[#8B735B] block">Crafted Weight:</span>
                        <span className="font-medium text-[#2D241E]">{product.dimensions.weight}</span>
                      </div>
                    )}

                    <div>
                      <span className="text-[#8B735B] block">Lead Time:</span>
                      <span className="font-medium text-[#2D241E]">{product.leadTime}</span>
                    </div>
                  </div>
                </div>

                {/* Key Structural Features */}
                <div className="space-y-2 text-xs text-[#6B5D52]">
                  <div className="font-semibold text-[#2D241E] uppercase tracking-wider">
                    Design Highlights & Joinery:
                  </div>
                  <ul className="space-y-1.5 pl-1">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#8B735B] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Delivery & Care Guide Accordions / Notes */}
                <div className="space-y-3 pt-2">
                  <div className="bg-[#F4EFE6] p-3.5 rounded-xl text-xs text-[#6B5D52] border border-[#EAE2D5]">
                    <span className="font-semibold text-[#2D241E] block mb-0.5">White Glove Delivery:</span>
                    {product.deliveryInfo}
                  </div>

                  <div className="bg-[#F4EFE6] p-3.5 rounded-xl text-xs text-[#6B5D52] border border-[#EAE2D5]">
                    <span className="font-semibold text-[#2D241E] block mb-0.5">Care Instructions:</span>
                    {product.careInstructions}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
