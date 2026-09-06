import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      id="back-to-top-btn"
      className="fixed bottom-6 left-6 z-30 p-3 bg-white text-[#2D241E] hover:bg-[#8B735B] hover:text-white border border-[#EAE2D5] rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
      title="Back to Top"
      aria-label="Back to Top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
