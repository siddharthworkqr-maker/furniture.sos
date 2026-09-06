import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Tag, Clock } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface SpecialOfferBannerProps {
  onExploreOffers: () => void;
}

export const SpecialOfferBanner: React.FC<SpecialOfferBannerProps> = ({ onExploreOffers }) => {
  return (
    <section className="py-12 sm:py-16 bg-[#2D241E] text-white overflow-hidden relative border-y border-[#3E3228]">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8B735B_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#8B735B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#241D18] rounded-3xl p-8 sm:p-12 border border-[#483B2E] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text Block */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3D3228] border border-[#8B735B]/40 text-[#E8D4A8] text-xs font-semibold uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>LIMITED SEASONAL PROMOTION</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#FDFBF7] tracking-tight">
              Refresh Your Space
            </h2>

            <p className="text-xl sm:text-2xl font-light text-[#E5C384]">
              Up to <span className="font-semibold text-white">20% OFF</span> on selected signature furniture
            </p>

            <p className="text-xs sm:text-sm text-[#C4B7A5] font-light max-w-lg leading-relaxed">
              Upgrade your living room, bedroom, and dining spaces with handcrafted solid wood designs. Includes complimentary white glove delivery and 10-year warranty.
            </p>
          </div>

          {/* Right Action Block */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              onClick={onExploreOffers}
              id="special-offer-explore-btn"
              className="w-full sm:w-auto px-8 py-4 bg-[#FDFBF7] hover:bg-[#EAE2D5] text-[#2D241E] font-bold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Explore Offers</span>
              <ArrowRight className="w-4 h-4 text-[#8B735B] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 bg-[#8B735B] hover:bg-[#735D48] text-white font-medium text-sm rounded-full border border-[#A68F77] transition-colors flex items-center justify-center gap-2"
            >
              <span>Inquire on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
