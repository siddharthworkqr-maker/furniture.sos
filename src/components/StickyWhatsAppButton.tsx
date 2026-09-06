import React, { useState } from 'react';
import { MessageSquare, X, ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_PHONE_DISPLAY, getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const StickyWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#201915] text-[#FDFBF7] p-3 rounded-2xl shadow-xl border border-[#3D3228] text-xs max-w-xs animate-fadeIn relative">
          <div className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <div className="flex-1">
            <span className="font-semibold text-[#D4AF37] block">Need Assistance?</span>
            <span className="text-[#CDC1B0] text-[11px]">Chat with our furniture studio on WhatsApp</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8B735B] hover:text-white p-1 cursor-pointer"
            title="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>
          
          {/* Arrow pointing down */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#201915] rotate-45 border-r border-b border-[#3D3228]" />
        </div>
      )}

      {/* Main WhatsApp Floating Action Button */}
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        id="sticky-whatsapp-fab-btn"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-2xl hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-110 active:scale-95 animate-soft-pulse cursor-pointer"
        title="Order or Inquire on WhatsApp"
        aria-label="Order on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white text-white" />
        
        {/* Subtle Online Dot */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-[#8B735B] border-2 border-white rounded-full flex items-center justify-center text-[8px] font-bold text-white" />
      </a>
    </div>
  );
};
