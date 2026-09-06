import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Ruler, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  Palette,
  Hammer
} from 'lucide-react';
import { getCustomFurnitureWhatsAppUrl, WHATSAPP_PHONE_DISPLAY } from '../utils/whatsapp';

export const CustomFurnitureSection: React.FC = () => {
  const [furnitureType, setFurnitureType] = useState('Dining Table');
  const [woodType, setWoodType] = useState('Solid Burmese Teak');
  const [finish, setFinish] = useState('Natural Matte Wax');
  const [length, setLength] = useState('84 inches');
  const [width, setWidth] = useState('40 inches');
  const [height, setHeight] = useState('30 inches');
  const [notes, setNotes] = useState('');

  const furnitureTypes = [
    'Dining Table',
    'Lounge Sofa',
    'Platform Bed',
    'Royale Wardrobe',
    'Executive Desk',
    'Media Console',
    'Bespoke Wall Unit'
  ];

  const woodOptions = [
    'Solid Burmese Teak',
    'Indian Seasoned Sheesham',
    'American White Oak',
    'Black American Walnut',
    'Himalayan Cedarwood'
  ];

  const finishOptions = [
    'Natural Matte Wax',
    'Smoked Espresso',
    'Golden Honey Teak',
    'Raw Nordic Sand',
    'Bleached Organic Finish'
  ];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dimensions = `${length} (L) × ${width} (W) × ${height} (H)`;
    const url = getCustomFurnitureWhatsAppUrl({
      furnitureType,
      woodType,
      finish,
      dimensions,
      notes: notes.trim() || undefined
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const simpleWhatsAppUrl = getCustomFurnitureWhatsAppUrl();

  return (
    <section id="custom-furniture" className="py-20 sm:py-28 bg-[#FDFBF7] text-[#2D241E] border-b border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B735B]">
            <Compass className="w-3.5 h-3.5 text-[#8B735B]" />
            <span>BESPOKE ATELIER</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2D241E]">
            Made For Your Space
          </h2>

          <p className="text-base sm:text-lg text-[#6B5D52] font-light leading-relaxed">
            Have something special in mind? Our custom furniture service brings your ideas to life with personalized dimensions, finishes and designs.
          </p>
        </div>

        {/* 2-Column Custom Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Process & Brand Promise */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border border-[#EAE2D5]">
              <img
                src="https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1000&q=80"
                alt="WOODORA Master Craftsman Shaping Custom Furniture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[11px] font-semibold text-[#E5C384] uppercase tracking-wider">
                  Millimeter Precision
                </span>
                <h4 className="font-serif text-xl text-white font-medium">
                  Hand-tailored for your room blueprint
                </h4>
              </div>
            </div>

            {/* Steps Workflow */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-[#F4EFE6] border border-[#EAE2D5]">
                <div className="w-9 h-9 rounded-full bg-[#8B735B] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-[#2D241E]">Share Dimensions & Reference</h5>
                  <p className="text-xs text-[#6B5D52] mt-0.5">
                    Send room measurements, sketches, or reference photos to our design consultants.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-[#F4EFE6] border border-[#EAE2D5]">
                <div className="w-9 h-9 rounded-full bg-[#2D241E] text-[#E5C384] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-[#2D241E]">Timber Selection & 3D Render</h5>
                  <p className="text-xs text-[#6B5D52] mt-0.5">
                    We create a 3D structural preview and select seasoned wood slabs with grain approval.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-[#F4EFE6] border border-[#EAE2D5]">
                <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-[#2D241E]">Crafted & White Glove Delivered</h5>
                  <p className="text-xs text-[#6B5D52] mt-0.5">
                    Handmade in 14-21 business days with live progress updates sent over WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Link fallback */}
            <div className="pt-2 text-center lg:text-left">
              <a
                href={simpleWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#2D241E] hover:text-[#8B735B] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Or message directly: "Hello WOODORA LIVING, I would like to discuss a custom furniture requirement."</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Custom Configurator Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE2D5] shadow-xl space-y-6">
            
            <div className="border-b border-[#EAE2D5] pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8B735B]">
                Bespoke Configuration Studio
              </span>
              <h3 className="font-serif text-2xl font-medium text-[#2D241E] mt-1">
                Design Your Custom Piece
              </h3>
              <p className="text-xs text-[#6B5D52] mt-1">
                Configure your preferred piece below and submit directly to our WhatsApp master design desk.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              
              {/* Furniture Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#2D241E] uppercase tracking-wider mb-2">
                  1. Select Furniture Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {furnitureTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFurnitureType(type)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all border cursor-pointer ${
                        furnitureType === type
                          ? 'bg-[#2D241E] text-[#FDFBF7] border-[#2D241E] shadow-sm'
                          : 'bg-[#FDFBF7] text-[#5A4F44] border-[#EAE2D5] hover:bg-[#F4EFE6]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wood Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#2D241E] uppercase tracking-wider mb-2">
                  2. Select Timber Variety
                </label>
                <select
                  value={woodType}
                  onChange={(e) => setWoodType(e.target.value)}
                  className="w-full bg-[#FDFBF7] border border-[#EAE2D5] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#2D241E] focus:outline-none focus:ring-2 focus:ring-[#8B735B]/40"
                >
                  {woodOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Finish Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#2D241E] uppercase tracking-wider mb-2">
                  3. Select Finish Aesthetic
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {finishOptions.map((f) => (
                    <button
                      type="button"
                      key={f}
                      onClick={() => setFinish(f)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium text-center transition-all border cursor-pointer ${
                        finish === f
                          ? 'bg-[#8B735B] text-white border-[#8B735B] font-semibold shadow-sm'
                          : 'bg-[#FDFBF7] text-[#5A4F44] border-[#EAE2D5] hover:bg-[#F4EFE6]'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dimension Inputs */}
              <div>
                <label className="block text-xs font-semibold text-[#2D241E] uppercase tracking-wider mb-2">
                  4. Custom Approximate Dimensions
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <span className="text-[11px] text-[#6B5D52] block mb-1">Length / Width</span>
                    <input
                      type="text"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      placeholder="e.g. 84 inches"
                      className="w-full bg-[#FDFBF7] border border-[#EAE2D5] rounded-xl px-3 py-2 text-xs text-[#2D241E] focus:outline-none focus:ring-1 focus:ring-[#8B735B]"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#6B5D52] block mb-1">Depth / Breadth</span>
                    <input
                      type="text"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="e.g. 40 inches"
                      className="w-full bg-[#FDFBF7] border border-[#EAE2D5] rounded-xl px-3 py-2 text-xs text-[#2D241E] focus:outline-none focus:ring-1 focus:ring-[#8B735B]"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#6B5D52] block mb-1">Height</span>
                    <input
                      type="text"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="e.g. 30 inches"
                      className="w-full bg-[#FDFBF7] border border-[#EAE2D5] rounded-xl px-3 py-2 text-xs text-[#2D241E] focus:outline-none focus:ring-1 focus:ring-[#8B735B]"
                    />
                  </div>
                </div>
              </div>

              {/* Custom Specific Requirements Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#2D241E] uppercase tracking-wider mb-2">
                  5. Additional Notes & Special Requests
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="e.g. Need wire management grommet on the left side; match honey tone with my existing floor..."
                  className="w-full bg-[#FDFBF7] border border-[#EAE2D5] rounded-xl px-4 py-2.5 text-xs text-[#2D241E] placeholder-[#9E9182] focus:outline-none focus:ring-2 focus:ring-[#8B735B]/40"
                />
              </div>

              {/* Submit to WhatsApp Button */}
              <button
                type="submit"
                id="request-custom-furniture-btn"
                className="w-full py-4 px-6 rounded-2xl bg-[#2D241E] hover:bg-black text-[#FDFBF7] font-bold text-sm shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <MessageSquare className="w-5 h-5 text-[#E7C77E]" />
                <span>Request Custom Furniture</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-center text-[11px] text-[#8B735B]">
                Opens WhatsApp with pre-filled specifications to concierge at <span className="font-semibold text-[#2D241E]">{WHATSAPP_PHONE_DISPLAY}</span>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
