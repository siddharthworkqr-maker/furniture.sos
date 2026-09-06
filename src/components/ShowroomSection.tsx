import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Compass, 
  Sparkles, 
  Coffee, 
  Video, 
  Calendar 
} from 'lucide-react';
import { SHOWROOM_INFO } from '../data/content';
import { getShowroomVisitWhatsAppUrl, WHATSAPP_PHONE_DISPLAY } from '../utils/whatsapp';

export const ShowroomSection: React.FC = () => {
  return (
    <section id="showroom" className="py-20 sm:py-28 bg-[#2D241E] text-[#FDFBF7] relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B735B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E5C384]">
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>PHYSICAL FLAGSHIP STUDIO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FDFBF7]">
            WOODORA LIVING Experience Studio
          </h2>

          <p className="text-base text-[#DDD0BE] font-light leading-relaxed">
            Step into an immersive tactile showroom where natural daylight showcases our organic wood grains, hand-planed finishes, and bespoke seating ergonomics.
          </p>
        </div>

        {/* 2-Column Showroom Experience Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#241D18] rounded-3xl p-6 sm:p-10 border border-[#483B2E] shadow-2xl">
          
          {/* Left Column: Visual Photography Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-[#483B2E]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                alt="WOODORA Living Experience Studio Varanasi"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#1A1713]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-[#E8D6B2] border border-[#8B735B]/40 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Green Park Studio Vignettes</span>
              </div>
            </div>

            {/* Studio Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs text-[#DDD2C2]">
              <div className="p-3.5 bg-[#2D241E] rounded-xl border border-[#483B2E] flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#E5C384] flex-shrink-0" />
                <span>Artisanal Espresso & Lounge</span>
              </div>
              <div className="p-3.5 bg-[#2D241E] rounded-xl border border-[#483B2E] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E5C384] flex-shrink-0" />
                <span>50+ Live Swatch Library</span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Contact & Booking Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#8B735B] text-white flex items-center justify-center flex-shrink-0 font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-[#FDFBF7] uppercase tracking-wider">Studio Address</h4>
                <p className="text-sm text-[#D1C4B2] mt-0.5 leading-relaxed">
                  {SHOWROOM_INFO.address}
                </p>
                <span className="text-[11px] text-[#A69581] italic block mt-0.5">
                  (Fictional studio address for demonstration purposes)
                </span>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#3D3228] text-[#E5C384] flex items-center justify-center flex-shrink-0 border border-[#5A4D3E]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-[#FDFBF7] uppercase tracking-wider">Showroom Hours</h4>
                <div className="text-xs sm:text-sm text-[#D1C4B2] mt-0.5 space-y-0.5">
                  {SHOWROOM_INFO.hours.map((h, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-[#A89885]">{h.days}:</span>
                      <span className="font-medium text-white">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#463A2E] text-xs">
              <div className="flex items-center gap-2 text-[#DDD0BE]">
                <Phone className="w-4 h-4 text-[#8B735B]" />
                <span>{SHOWROOM_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-[#DDD0BE]">
                <Mail className="w-4 h-4 text-[#8B735B]" />
                <span>{SHOWROOM_INFO.email}</span>
              </div>
            </div>

            {/* Action Buttons for Booking on WhatsApp */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={getShowroomVisitWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 bg-[#FDFBF7] hover:bg-[#EAE2D5] text-[#2D241E] py-3.5 px-5 rounded-2xl font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#8B735B]" />
                <span>Book Walkthrough via WhatsApp</span>
              </a>

              <a
                href={`https://wa.me/91${WHATSAPP_PHONE_DISPLAY}?text=${encodeURIComponent("Hello WOODORA LIVING, I would like to request a live video walkthrough of your showroom collection.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-[#8B735B] hover:bg-[#735D48] text-white font-semibold text-xs border border-[#A68F77] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Video className="w-4 h-4 text-[#FDFBF7]" />
                <span>Request Video Call</span>
              </a>
            </div>

          </div>

        </div>

        {/* Mandatory Fictional Clarification */}
        <div className="text-center mt-6 text-[11px] text-[#A69581] italic">
          IMPORTANT: These showroom location and contact details are completely fictional and part of the creative brand showcase experience.
        </div>

      </div>
    </section>
  );
};
