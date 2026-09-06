import React from 'react';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Pin as Pinterest, 
  ShieldCheck, 
  ArrowUpRight,
  Lock
} from 'lucide-react';
import { WHATSAPP_PHONE_DISPLAY, getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory?: (category: string) => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory, onOpenAdmin }) => {
  const handleCatClick = (cat: string) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    onNavigate('shop');
  };

  return (
    <footer className="bg-[#201915] text-[#FDFBF7] pt-16 pb-12 border-t border-[#382E25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & WhatsApp CTA */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-2xl sm:text-3xl tracking-[0.2em] text-[#FDFBF7]">
                WOODORA
              </span>
              <span className="text-[10px] font-sans tracking-[0.38em] text-[#BCAE9B] font-semibold uppercase mt-0.5">
                L I V I N G
              </span>
            </div>

            <p className="text-sm font-serif italic text-[#CDC1B0] leading-relaxed">
              "Crafted for Comfort. Designed for Life."
            </p>

            <p className="text-xs text-[#A6998A] font-light leading-relaxed max-w-sm">
              Contemporary architectural furniture handcrafted with sustainably harvested solid wood, honest joinery, and organic bio-waxes.
            </p>

            {/* Direct WhatsApp Pill */}
            <div className="pt-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-2.5 rounded-full text-xs font-semibold shadow-md transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white text-white" />
                <span>WhatsApp: {WHATSAPP_PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B735B]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A795]">
              <li>
                <button 
                  onClick={() => onNavigate('hero')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shop
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('categories')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Collections
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('custom-furniture')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Custom Furniture
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B735B]">
              Categories
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A795]">
              <li>
                <button 
                  onClick={() => handleCatClick('Living Room')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Living Room
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCatClick('Bedroom')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Bedroom
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCatClick('Dining Room')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Dining
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCatClick('Office Furniture')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Office
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCatClick('Storage')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Storage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCatClick('Outdoor Furniture')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Outdoor Furniture
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Customer Support & Social */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B735B]">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A795]">
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  White Glove Shipping
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('materials')} className="hover:text-white transition-colors cursor-pointer">
                  Wood Care & Maintenance Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  10-Year Craftsmanship Warranty
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Return & Exchange Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('showroom')} className="hover:text-white transition-colors cursor-pointer">
                  Varanasi Experience Studio
                </button>
              </li>
              {onOpenAdmin && (
                <li className="pt-1">
                  <button 
                    onClick={onOpenAdmin} 
                    className="inline-flex items-center gap-1.5 text-[#D4AF37] hover:text-white transition-colors cursor-pointer font-medium"
                  >
                    <Lock className="w-3 h-3 text-[#D4AF37]" />
                    <span>Admin Portal (Studio Login)</span>
                  </button>
                </li>
              )}
            </ul>

            {/* Social Icons */}
            <div className="pt-3">
              <span className="text-[11px] text-[#8A7C6E] block mb-2 font-medium">Follow Our Journal</span>
              <div className="flex items-center gap-3">
                <a
                  href="#instagram"
                  onClick={(e) => e.preventDefault()}
                  className="w-8 h-8 rounded-full bg-[#2D241E] hover:bg-[#8B735B] text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Instagram (fictional)"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#facebook"
                  onClick={(e) => e.preventDefault()}
                  className="w-8 h-8 rounded-full bg-[#2D241E] hover:bg-[#8B735B] text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Facebook (fictional)"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#pinterest"
                  onClick={(e) => e.preventDefault()}
                  className="w-8 h-8 rounded-full bg-[#2D241E] hover:bg-[#8B735B] text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Pinterest (fictional)"
                >
                  <Pinterest className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Fictional Notice Bar with Admin Portal Button */}
        <div className="pt-8 border-t border-[#382E25] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8A7B6B]">
          <div className="flex flex-wrap items-center gap-3">
            <span>© 2026 WOODORA LIVING. All Rights Reserved.</span>
            {onOpenAdmin && (
              <>
                <span className="text-[#4D3F32]">•</span>
                <button
                  onClick={onOpenAdmin}
                  id="bottom-admin-portal-btn"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#2D241E] hover:bg-[#8B735B] text-[#FDFBF7] font-semibold text-xs border border-[#483B2E] transition-all cursor-pointer shadow-sm"
                  title="Studio Admin Portal - Manage, Add and Remove Products"
                >
                  <Lock className="w-3 h-3 text-[#D4AF37]" />
                  <span>Admin Portal</span>
                </button>
              </>
            )}
          </div>

          <div className="text-center md:text-right text-[11px] text-[#8A7B6B] italic">
            *All business information, addresses, product names, reviews, and stories are completely fictional. WhatsApp Order Hotline: 8695767656.
          </div>
        </div>

      </div>
    </footer>
  );
};
