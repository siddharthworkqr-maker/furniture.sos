import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, TreePine, Award, Clock } from 'lucide-react';

export const AboutBrand: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FDFBF7] text-[#2D241E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-[#EAE2D5]">
                <img
                  src="https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80"
                  alt="Raw Timber Planing Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#2D241E] text-[#FDFBF7] p-6 rounded-3xl space-y-2 border border-[#483B2E]">
                <div className="text-2xl font-serif font-bold text-[#E5C384]">Est. 2018</div>
                <div className="text-xs text-[#B5A795]">
                  Dedicated to modern heirloom joinery & sustainable luxury
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="bg-[#F4EFE6] p-6 rounded-3xl space-y-2 border border-[#EAE2D5]">
                <div className="text-2xl font-serif font-bold text-[#8B735B]">100%</div>
                <div className="text-xs text-[#6B5D52]">
                  Sustainably Sourced FSC-Certified Renewable Timber
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-[#EAE2D5]">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                  alt="Contemporary Living Room Suite"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B735B]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>THE WOODORA PHILOSOPHY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2D241E] leading-tight">
              Crafted for Comfort. <br />
              <span className="italic text-[#8B735B]">Designed for Life.</span>
            </h2>

            {/* Fictional Core Story Quote */}
            <div className="p-6 bg-[#F4EFE6] rounded-2xl border-l-4 border-[#8B735B] text-sm sm:text-base font-serif italic text-[#2D241E] leading-relaxed">
              "Born from a passion for timeless craftsmanship and contemporary design, WOODORA LIVING creates furniture that balances functionality, comfort and character."
            </div>

            <p className="text-sm sm:text-base text-[#6B5D52] font-light leading-relaxed">
              We believe great furniture is never disposable. Founded in 2018 as a dedicated artisanal studio, WOODORA LIVING reimagines authentic Indian hardwood heritage through Scandinavian minimalism and Japandi stillness.
            </p>

            <p className="text-sm sm:text-base text-[#6B5D52] font-light leading-relaxed">
              From our timber kiln-drying facilities to our master carving benches, each sofa rail, bed frame, and dining slab is cured and checked by hand. No fast flat-pack materials, no synthetic chemical varnishes — only honest, tactile solid wood that deepens in warmth as your family grows.
            </p>

            {/* Fictional Transparency Notice */}
            <div className="text-[11px] text-[#9E9182] border-t border-[#EAE2D5] pt-4 italic">
              *Note: All brand stories, dates (est. 2018), and creative descriptions are presented strictly as fictional luxury portfolio brand content.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
