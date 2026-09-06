import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, ShieldCheck, Truck, Sparkles, Award } from 'lucide-react';
import { WHATSAPP_PHONE_DISPLAY, getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onExploreClick: () => void;
  onSelectProduct?: (productId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onSelectProduct }) => {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#2D241E] text-[#FDFBF7]">
      {/* Background Image Container with Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
          alt="WOODORA LIVING Modern Showroom Interior"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multi-layered Gradients for Deep Warm Lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#211A15]/95 via-[#2D241E]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#211A15] via-transparent to-[#211A15]/40" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-36 min-h-[85vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Tagline Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3D332A]/80 border border-[#8B735B]/40 backdrop-blur-md text-[#E8D4A8] text-xs font-medium tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>HANDCRAFTED ARCHITECTURAL FURNITURE</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight text-[#FDFBF7]"
            >
              Furniture That Turns <br className="hidden sm:block" />
              <span className="italic font-light text-[#E5C384]">Houses Into Homes.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="text-base sm:text-lg lg:text-xl text-[#DDD3C2] font-light max-w-2xl leading-relaxed"
            >
              Discover thoughtfully crafted furniture designed to bring comfort, character and timeless elegance into every space.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onExploreClick}
                id="hero-explore-collection-btn"
                className="group inline-flex items-center justify-center gap-3 bg-[#FDFBF7] text-[#2D241E] hover:bg-[#EAE2D5] px-8 py-4 rounded-full font-semibold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 text-[#8B735B] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-order-btn"
                className="inline-flex items-center justify-center gap-3 bg-[#8B735B] hover:bg-[#735D48] text-[#FDFBF7] px-8 py-4 rounded-full font-semibold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 border border-[#A68F77]"
              >
                <MessageSquare className="w-5 h-5 text-[#E7C77E]" />
                <span>Order on WhatsApp</span>
              </a>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-6 sm:pt-8 border-t border-[#45392F]/80 max-w-xl text-[#C8BCAB]"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-[#FDFBF7]">100% Solid Wood</div>
                  <div className="text-[10px] sm:text-xs text-[#9E917F]">Kiln-Dried Hardwood</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-[#FDFBF7]">10-Year Warranty</div>
                  <div className="text-[10px] sm:text-xs text-[#9E917F]">Heirloom Joinery</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-[#FDFBF7]">White Glove</div>
                  <div className="text-[10px] sm:text-xs text-[#9E917F]">Free Home Setup</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Product Spotlight Card */}
          <div className="lg:col-span-5 hidden lg:flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
              className="bg-[#241D18]/90 backdrop-blur-md p-6 rounded-3xl border border-[#483B2E] shadow-2xl max-w-sm w-full space-y-4 text-left group"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
                  alt="Arlo Lounge Sofa Signature Piece"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#1C1612]/85 backdrop-blur-sm text-[#E7C77E] text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-[#8B735B]/40">
                  Featured Centerpiece
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-lg font-medium text-[#FDFBF7]">Arlo Lounge Sofa</h3>
                  <span className="text-[#E5C384] font-bold text-base">₹68,500</span>
                </div>
                <p className="text-xs text-[#B5A795] mt-1 line-clamp-2">
                  Sculpted in solid American white oak with Belgian wool-boucle blend cushioning.
                </p>
              </div>

              <div className="pt-2.5 flex items-center justify-between border-t border-[#3D3228] text-xs">
                <span className="text-[#8F8170]">WhatsApp Ready</span>
                <button
                  onClick={() => onSelectProduct && onSelectProduct('prod-arlo-sofa')}
                  className="text-[#E5C384] hover:text-white font-medium flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span>Quick View</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
