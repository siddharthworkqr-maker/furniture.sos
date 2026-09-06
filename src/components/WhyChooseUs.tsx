import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Hammer, 
  Compass, 
  CheckCircle, 
  PackageCheck, 
  Truck, 
  ShieldCheck 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Premium Materials',
      description: 'Grade-A Burmese teak, seasoned Indian Sheesham, European oak, and Belgian linen chosen for heirloom durability.'
    },
    {
      icon: Hammer,
      title: 'Skilled Craftsmanship',
      description: 'Traditional mortise-and-tenon joinery and hand-planed curved contours executed by generational master carpenters.'
    },
    {
      icon: Compass,
      title: 'Custom Designs',
      description: 'Bespoke dimensions, grain selection, and custom finishes tailored to match your specific interior blueprint.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Checked',
      description: 'Rigorous 24-point moisture, load, and surface inspection before any piece leaves our master workshop.'
    },
    {
      icon: PackageCheck,
      title: 'Secure Packaging',
      description: 'Heavy-duty honeycomb crating, corner edge protectors, and climate-safe moisture-barrier wraps.'
    },
    {
      icon: Truck,
      title: 'Reliable Delivery',
      description: 'Dedicated air-suspension logistics with complimentary white glove in-home placement and setup.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FDFBF7] text-[#2D241E] border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#8B735B]">
            THE WOODORA STANDARD
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2D241E]">
            Why Discerning Homeowners Choose Us
          </h2>
          <p className="text-base text-[#6B5D52] font-light leading-relaxed">
            We reject mass production shortcuts. Every wooden joint, cushion curve, and wax coat is treated as a lasting investment in your home.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white p-8 rounded-3xl border border-[#EAE2D5] shadow-sm hover:shadow-md hover:border-[#8B735B] transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F4EFE6] group-hover:bg-[#2D241E] flex items-center justify-center text-[#2D241E] group-hover:text-[#FDFBF7] transition-all duration-300 mb-6 border border-[#EAE2D5]">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-xl font-medium text-[#2D241E] mb-2 group-hover:text-[#8B735B] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6B5D52] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
