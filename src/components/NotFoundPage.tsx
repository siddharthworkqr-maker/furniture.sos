import React from 'react';
import { Compass, ArrowLeft, MessageSquare } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface NotFoundPageProps {
  onReturnHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-[#FAF7F2] text-[#24211D]">
      <div className="w-20 h-20 rounded-full bg-[#EFE7D8] border border-[#DDD0BD] flex items-center justify-center text-[#B48528] mb-6 shadow-sm">
        <Compass className="w-10 h-10" />
      </div>

      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9E7324] mb-2">
        PAGE NOT FOUND
      </span>

      <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#1F1B17] mb-3">
        404 — Lost in the Woods?
      </h1>

      <p className="text-sm text-[#736554] max-w-md mb-8 leading-relaxed">
        The design blueprint you are looking for has been relocated or archived. Return to our signature showroom or connect with our concierge.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={onReturnHome}
          className="px-6 py-3.5 bg-[#2E2822] hover:bg-[#453C33] text-white text-xs font-semibold rounded-full shadow transition-colors flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Showroom</span>
        </button>

        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold rounded-full shadow transition-colors flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4 fill-white text-white" />
          <span>Inquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
