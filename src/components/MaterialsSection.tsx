import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Sparkles, Check, ArrowRight } from 'lucide-react';
import { MATERIALS } from '../data/content';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const MaterialsSection: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState(MATERIALS[0]);

  return (
    <section id="materials" className="py-20 sm:py-28 bg-[#FDFBF7] text-[#2D241E] border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B735B]">
            <Layers className="w-3.5 h-3.5 text-[#8B735B]" />
            <span>HONEST & TACTILE ELEMENTS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2D241E]">
            Natural Materials of Heirloom Caliber
          </h2>

          <p className="text-base text-[#6B5D52] font-light leading-relaxed">
            We touch, test, and cure every raw material before it enters production. Explore the tactile textures and sustainable finishes behind our furniture.
          </p>
        </div>

        {/* 6 Material Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MATERIALS.map((mat, index) => {
            const isSelected = activeMaterial.id === mat.id;

            return (
              <motion.div
                key={mat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setActiveMaterial(mat)}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-lg ${
                  isSelected 
                    ? 'ring-2 ring-[#8B735B] border-[#8B735B]' 
                    : 'border-[#EAE2D5] hover:border-[#8B735B]'
                }`}
              >
                <div>
                  {/* Close-up Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F4EFE6]">
                    <img
                      src={mat.image}
                      alt={`${mat.name} Texture Close-Up`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#2D241E]/85 backdrop-blur-sm text-[#FDFBF7] text-[10px] font-semibold px-2.5 py-1 rounded-full">
                      {mat.origin}
                    </div>
                  </div>

                  {/* Text Description */}
                  <div className="p-6 space-y-2.5">
                    <h3 className="font-serif text-xl font-medium text-[#2D241E]">
                      {mat.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#8B735B]">
                      {mat.subtitle}
                    </div>
                    <p className="text-xs text-[#6B5D52] leading-relaxed">
                      {mat.description}
                    </p>
                  </div>
                </div>

                {/* Footer Metrics */}
                <div className="p-6 pt-0 border-t border-[#EAE2D5] mt-4 space-y-1.5 text-xs text-[#5A4F44]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#8B735B]">Endurance:</span>
                    <span className="font-medium text-[#2D241E]">{mat.durability}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8B735B]">Eco Standard:</span>
                    <span className="font-medium text-[#2D241E]">{mat.sustainability}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Material Swatch Inquiries Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-3xl border border-[#EAE2D5] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg font-medium text-[#2D241E]">
              Want to touch wood & fabric swatches in person?
            </h4>
            <p className="text-xs text-[#6B5D52]">
              Request a complimentary tactile swatch box delivered to your home or experience them at our Varanasi studio.
            </p>
          </div>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#2D241E] hover:bg-black text-[#FDFBF7] text-xs font-semibold rounded-full transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <span>Request Swatch Box on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E5C384]" />
          </a>
        </div>

      </div>
    </section>
  );
};
