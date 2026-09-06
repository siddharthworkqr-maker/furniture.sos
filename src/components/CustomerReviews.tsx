import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2, Quote, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS } from '../data/content';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FDFBF7] text-[#2D241E] border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B735B]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>WORDS FROM HOMEOWNERS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2D241E]">
            Cherished In Homes Across India
          </h2>

          <p className="text-base text-[#6B5D52] font-light leading-relaxed">
            Read firsthand experiences from customers who furnished their sanctuaries with WOODORA solid wood designs.
          </p>

          <div className="flex items-center justify-center gap-2 pt-2 text-xs text-[#5A4F44]">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
              ))}
            </div>
            <span className="font-bold text-[#2D241E]">4.9 / 5.0 Rating</span>
            <span className="text-[#8B735B]">across 150+ bespoke home deliveries</span>
          </div>
        </div>

        {/* 6 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white p-7 rounded-3xl border border-[#EAE2D5] shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#8B735B] transition-all relative group"
            >
              <div className="space-y-4">
                {/* Top Row: Stars and Product */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[11px] bg-[#FDFBF7] border border-[#EAE2D5] px-2.5 py-0.5 rounded-full text-[#6B5D52] font-medium">
                    {rev.productName}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#2D241E] leading-relaxed italic font-serif">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-5 mt-5 border-t border-[#EAE2D5] flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#EAE2D5]"
                />
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-xs text-[#2D241E]">{rev.author}</span>
                    {rev.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" title="Verified Owner" />
                    )}
                  </div>
                  <span className="text-[10px] text-[#8B735B] block">
                    {rev.location} • {rev.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fictional Disclaimer */}
        <div className="text-center mt-10 text-[11px] text-[#9E9182] italic">
          *Note: All customer reviews, ratings, and testimonials are presented strictly as fictional website portfolio sample data.
        </div>

      </div>
    </section>
  );
};
