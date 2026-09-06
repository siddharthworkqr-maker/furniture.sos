import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { createWhatsAppUrl, WHATSAPP_PHONE_DISPLAY, getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    category: 'Living Room',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Living Room',
    'Bedroom',
    'Dining Room',
    'Office Furniture',
    'Storage',
    'Outdoor Furniture',
    'Full Home Custom Interior'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const text = `Hello WOODORA LIVING, my name is ${formData.fullName || 'a customer'}. I would like to inquire about ${formData.category}.\n\nMessage: ${formData.message || 'Please share product catalogue and price estimates.'}\n\nPhone: ${formData.phone || 'N/A'}\nEmail: ${formData.email || 'N/A'}`;
    const url = createWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FDFBF7] text-[#2D241E] border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B735B]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>LET'S CONNECT</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2D241E]">
            Begin Your Furniture Conversation
          </h2>

          <p className="text-base text-[#6B5D52] font-light leading-relaxed">
            Whether you are furnishing a new residence or looking for a single statement piece, our team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: WhatsApp Priority Banner & Direct Hotline */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Callout Box */}
            <div className="bg-[#F2FAF4] border-2 border-[#25D366]/40 rounded-3xl p-8 space-y-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
                  <MessageSquare className="w-6 h-6 fill-white text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F7A3E]">
                    Fastest Response
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#145C2D]">
                    Prefer WhatsApp?
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#246337] leading-relaxed">
                Connect directly with our senior furniture consultants on WhatsApp for instant catalog PDFs, custom wood samples, finish suggestions, and order status.
              </p>

              <div className="p-4 bg-white rounded-2xl border border-[#C5E8CF] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#6A8C74] font-medium block">Dedicated Order Hotline</span>
                  <span className="font-bold text-base text-[#145C2D]">{WHATSAPP_PHONE_DISPLAY}</span>
                </div>
                <span className="px-2.5 py-1 bg-[#25D366]/15 text-[#136630] font-bold text-xs rounded-full">
                  Online Now
                </span>
              </div>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-chat-btn"
                className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-4 px-6 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white text-white" />
                <span>Chat With Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Studio Info Quick Card */}
            <div className="bg-[#F4EFE6] rounded-3xl p-7 border border-[#EAE2D5] space-y-4 text-xs text-[#5A4F44]">
              <h4 className="font-semibold text-sm text-[#2D241E] uppercase tracking-wider">
                WOODORA Customer Care
              </h4>

              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#8B735B]" />
                  <span>+91 90000 12345 (10:00 AM – 8:00 PM IST)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#8B735B]" />
                  <span>hello@woodoraliving.example</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#8B735B]" />
                  <span>42 Harmony Avenue, Green Park, Varanasi, UP — 221010</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#EAE2D5] shadow-xl space-y-6">
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#E5F6EB] text-[#25D366] flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#2D241E]">
                  Thank You, {formData.fullName || 'Valued Guest'}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5D52] max-w-md mx-auto leading-relaxed">
                  Your furniture enquiry for <span className="font-semibold">{formData.category}</span> has been logged. Our design concierge will reach out via email / phone shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppForward}
                    className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-white font-bold text-xs rounded-xl shadow hover:bg-[#1EBE5D] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white text-white" />
                    <span>Send this enquiry over WhatsApp now</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', phone: '', email: '', category: 'Living Room', message: '' });
                    }}
                    className="w-full sm:w-auto px-5 py-3 bg-[#F4EFE6] text-[#2D241E] font-semibold text-xs rounded-xl hover:bg-[#EAE2D5] transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="border-b border-[#EAE2D5] pb-4">
                  <h3 className="font-serif text-2xl font-medium text-[#2D241E]">
                    Send An Enquiry
                  </h3>
                  <p className="text-xs text-[#6B5D52] mt-1">
                    Fill in your requirements and our furniture specialists will prepare tailored suggestions.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D241E] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Siddharth Verma"
                      className="w-full bg-[#FDFBF7] border border-[#EAE2D5] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#2D241E] focus:outline-none focus:ring-2 focus:ring-[#8B735B]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D241E] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#FDFBF7] border border-[#EAE2D5] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#2D241E] focus:outline-none focus:ring-2 focus:ring-[#8B735B]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D241E] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className="w-full bg-[#FDFBF7] border border-[#EAE2D5] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#2D241E] focus:outline-none focus:ring-2 focus:ring-[#8B735B]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D241E] uppercase tracking-wider mb-1.5">
                      Furniture Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[#FDFBF7] border border-[#EAE2D5] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#2D241E] focus:outline-none focus:ring-2 focus:ring-[#8B735B]/40"
                    >
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D241E] uppercase tracking-wider mb-1.5">
                    Your Message & Design Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the room size, desired aesthetic, or specific pieces you're interested in..."
                    className="w-full bg-[#FDFBF7] border border-[#EAE2D5] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#2D241E] placeholder-[#9E9182] focus:outline-none focus:ring-2 focus:ring-[#8B735B]/40"
                  />
                </div>

                <button
                  type="submit"
                  id="send-enquiry-btn"
                  className="w-full py-4 px-6 rounded-xl bg-[#2D241E] hover:bg-black text-[#FDFBF7] font-semibold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#E7C77E]" />
                  <span>Send Enquiry</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
