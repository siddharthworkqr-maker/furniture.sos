import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/content';

interface FeaturedCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-20 sm:py-28 bg-[#FDFBF7] text-[#2D241E] border-b border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#8B735B]">
            CURATED LIVING ENVIRONMENTS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2D241E]">
            Shop By Room & Sanctuary
          </h2>
          <p className="text-base text-[#6B5D52] font-light leading-relaxed">
            Every room tells a story. Explore our specialized furniture collections crafted with tactile natural woods and thoughtful proportions.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onSelectCategory(cat.name)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-[#F4EFE6] border border-[#EAE2D5] hover:border-[#8B735B]"
            >
              {/* Category Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={`${cat.name} Collection`}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1612]/85 via-[#1C1612]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FDFBF7]/90 backdrop-blur-sm text-[#2D241E] text-xs font-semibold px-3.5 py-1 rounded-full border border-[#EAE2D5] shadow-sm">
                    {cat.itemCount} Designs
                  </span>
                </div>

                {/* Arrow Action Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#8B735B] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Text Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-1.5">
                  <h3 className="font-serif text-2xl font-normal tracking-wide text-[#FDFBF7] group-hover:text-[#E8D4A8] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#DDD3C2] line-clamp-1 font-light">
                    {cat.tagline}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
