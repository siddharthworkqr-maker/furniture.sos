import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Search, 
  Heart, 
  Menu, 
  X, 
  PhoneCall, 
  MapPin, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { WHATSAPP_PHONE_DISPLAY, getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  wishlistCount: number;
  currentSection: string;
  onNavigate: (sectionId: string) => void;
  onSelectCategory?: (categoryName: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenWishlist,
  wishlistCount,
  currentSection,
  onNavigate,
  onSelectCategory
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Shop', id: 'shop' },
    { name: 'Categories', id: 'categories', hasDropdown: true },
    { name: 'Materials', id: 'materials' },
    { name: 'Custom Furniture', id: 'custom-furniture' },
    { name: 'About Us', id: 'about' },
    { name: 'Experience Studio', id: 'showroom' },
    { name: 'Contact', id: 'contact' },
  ];

  const categoryItems = [
    'Living Room',
    'Bedroom',
    'Dining Room',
    'Office Furniture',
    'Storage',
    'Outdoor Furniture'
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setCategoriesDropdownOpen(false);
  };

  const handleCategoryClick = (cat: string) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    onNavigate('shop');
    setMobileMenuOpen(false);
    setCategoriesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#2D241E] text-[#EDE7DC] text-xs py-2 px-4 border-b border-[#3D322A]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#8B735B] text-white tracking-wider">
              NEW 2026 ARCHITECTURAL LINE
            </span>
            <span className="hidden sm:inline text-[#DDD3C2] font-light">
              Complimentary White Glove Delivery on all solid wood designs
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#DDD3C2] text-[11px]">
            <a 
              href="tel:+919000012345" 
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3 h-3 text-[#D4AF37]" />
              <span className="hidden md:inline">+91 90000 12345</span>
            </a>
            <button 
              onClick={() => handleLinkClick('showroom')}
              className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              <span className="hidden md:inline">Varanasi Experience Studio</span>
            </button>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E7C77E] hover:text-white flex items-center gap-1 font-medium transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp: {WHATSAPP_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm py-3.5 border-b border-[#EAE2D5]' 
            : 'bg-[#FDFBF7] py-4.5 border-b border-[#EAE2D5]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleLinkClick('hero')} 
            className="flex flex-col text-left group cursor-pointer focus:outline-none"
            id="brand-logo-btn"
          >
            <span className="font-display font-bold text-2xl sm:text-3xl tracking-[0.22em] text-[#2D241E] group-hover:text-[#8B735B] transition-colors leading-none">
              WOODORA
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.4em] text-[#8B735B] font-semibold uppercase mt-1 pl-0.5 group-hover:text-[#2D241E] transition-colors">
              L I V I N G
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.id} 
                    className="relative group"
                    onMouseEnter={() => setCategoriesDropdownOpen(true)}
                    onMouseLeave={() => setCategoriesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleLinkClick('categories')}
                      className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-lg cursor-pointer flex items-center gap-1.5 ${
                        currentSection === 'categories'
                          ? 'text-[#2D241E] font-semibold bg-[#F4EFE6]'
                          : 'text-[#5A4F44] hover:text-[#2D241E] hover:bg-[#F4EFE6]'
                      }`}
                    >
                      {link.name}
                      <span className="text-xs opacity-60 group-hover:rotate-180 transition-transform duration-200">▼</span>
                    </button>

                    {/* Dropdown Menu */}
                    {categoriesDropdownOpen && (
                      <div className="absolute left-0 mt-1 w-60 rounded-2xl bg-[#FDFBF7] shadow-xl border border-[#EAE2D5] py-2.5 z-50 animate-fadeIn">
                        <div className="px-4 py-1 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase border-b border-[#EAE2D5] mb-1">
                          Curated Living Spaces
                        </div>
                        {categoryItems.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => handleCategoryClick(cat)}
                            className="w-full text-left px-4 py-2.5 text-sm text-[#3D332A] hover:bg-[#F4EFE6] hover:text-[#2D241E] transition-colors flex items-center justify-between"
                          >
                            <span>{cat}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-[#8B735B]" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-lg cursor-pointer ${
                    currentSection === link.id
                      ? 'text-[#2D241E] font-semibold bg-[#F4EFE6]'
                      : 'text-[#5A4F44] hover:text-[#2D241E] hover:bg-[#F4EFE6]'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Right Action Icons & WhatsApp CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              id="navbar-search-btn"
              className="p-2.5 text-[#4D4238] hover:text-[#2D241E] hover:bg-[#F4EFE6] rounded-full transition-colors cursor-pointer"
              title="Search furniture collection"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Saved Wishlist / Inquiries */}
            <button
              onClick={onOpenWishlist}
              id="navbar-wishlist-btn"
              className="p-2.5 text-[#4D4238] hover:text-[#2D241E] hover:bg-[#F4EFE6] rounded-full transition-colors relative cursor-pointer"
              title="Saved Furniture Pieces"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#8B735B] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Primary WhatsApp Order Button */}
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-whatsapp-order-btn"
              className="hidden sm:inline-flex items-center gap-2 bg-[#2D241E] hover:bg-black text-[#FDFBF7] px-5 py-2.5 rounded-full text-xs font-semibold shadow-sm hover:shadow-md transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 text-[#E7C77E]" />
              <span>WhatsApp Order</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="lg:hidden p-2 text-[#2D241E] hover:bg-[#F4EFE6] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FDFBF7] border-b border-[#EAE2D5] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 text-base font-medium rounded-xl transition-colors ${
                    currentSection === link.id
                      ? 'bg-[#F4EFE6] text-[#2D241E] font-semibold'
                      : 'text-[#5A4F44] hover:bg-[#F4EFE6]'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Quick Categories Bar on Mobile */}
            <div className="pt-3 border-t border-[#EAE2D5]">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8B735B] px-4 mb-2">
                Featured Spaces
              </div>
              <div className="grid grid-cols-2 gap-2 px-2">
                {categoryItems.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className="text-left text-xs px-3.5 py-2.5 bg-white border border-[#EAE2D5] rounded-xl text-[#4A3F35] hover:bg-[#F4EFE6] transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile WhatsApp Action Button */}
            <div className="pt-4 px-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#2D241E] hover:bg-black text-[#FDFBF7] py-3.5 rounded-2xl font-semibold shadow-md transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-[#E7C77E]" />
                <span>Order on WhatsApp ({WHATSAPP_PHONE_DISPLAY})</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
