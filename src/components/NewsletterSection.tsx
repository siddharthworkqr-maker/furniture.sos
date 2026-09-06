import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-16 bg-[#2D241E] text-[#FDFBF7] border-t border-[#483B2E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E5C384]">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>JOIN OUR INNER CIRCLE</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#FDFBF7]">
          Receive Our Seasonal Design Lookbook
        </h2>

        <p className="text-sm text-[#CDC1B0] max-w-xl mx-auto leading-relaxed font-light">
          Get exclusive early access to private capsule collections, archival woodwork releases, and interior styling monographs.
        </p>

        {subscribed ? (
          <div className="p-4 bg-[#3D3228] rounded-2xl border border-[#8B735B]/50 max-w-md mx-auto flex items-center justify-center gap-2 text-xs text-[#FDFBF7]">
            <CheckCircle className="w-4 h-4 text-[#25D366]" />
            <span>Thank you! The 2026 Collection Lookbook has been sent to {email}.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <div className="relative w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-[#201915] border border-[#483B2E] rounded-full px-5 py-3.5 text-xs text-white placeholder-[#8F8171] focus:outline-none focus:ring-2 focus:ring-[#8B735B]"
              />
              <Mail className="w-4 h-4 text-[#8F8171] absolute right-4 top-3.5" />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#8B735B] hover:bg-[#735D48] text-white font-bold text-xs rounded-full whitespace-nowrap transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <div className="text-[11px] text-[#8C7D6B]">
          We respect your privacy. Zero spam. Unsubscribe at any time.
        </div>
      </div>
    </section>
  );
};
