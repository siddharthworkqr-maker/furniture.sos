import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCategories } from './components/FeaturedCategories';
import { SignatureCollection } from './components/SignatureCollection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SpecialOfferBanner } from './components/SpecialOfferBanner';
import { CustomFurnitureSection } from './components/CustomFurnitureSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MaterialsSection } from './components/MaterialsSection';
import { AboutBrand } from './components/AboutBrand';
import { CustomerReviews } from './components/CustomerReviews';
import { ShowroomSection } from './components/ShowroomSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { StickyWhatsAppButton } from './components/StickyWhatsAppButton';
import { BackToTop } from './components/BackToTop';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { AdminPortal } from './components/AdminPortal';
import { Product } from './types';
import { PRODUCTS } from './data/products';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Spaces');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [currentSection, setCurrentSection] = useState<string>('hero');
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  // Products state loaded from localStorage or default PRODUCTS
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('woodora_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading products from localStorage', e);
    }
    return PRODUCTS;
  });

  // Sync products to local storage on change
  useEffect(() => {
    try {
      localStorage.setItem('woodora_products', JSON.stringify(products));
    } catch (e) {
      console.error('Error saving products to localStorage', e);
    }
  }, [products]);

  // Load wishlist from local storage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('woodora_wishlist');
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error loading wishlist', e);
    }

    // Smooth subtle initial loading intro
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Sync wishlist to local storage
  useEffect(() => {
    try {
      localStorage.setItem('woodora_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Error saving wishlist', e);
    }
  }, [wishlist]);

  // Handle product update (from Admin Portal)
  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setSelectedProduct((current) =>
      current && current.id === updatedProduct.id ? updatedProduct : current
    );
  };

  // Handle add product (from Admin Portal)
  const handleAddProduct = (newProduct: Product) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  // Handle delete product (from Admin Portal)
  const handleDeleteProduct = (productId: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
    setWishlist((prev) => prev.filter((p) => p.id !== productId));
    setSelectedProduct((current) => (current?.id === productId ? null : current));
  };

  // Handle reset to default catalog
  const handleResetCatalog = () => {
    setProducts(PRODUCTS);
    try {
      localStorage.removeItem('woodora_products');
    } catch (e) {
      console.error('Error clearing localStorage products', e);
    }
  };

  // Handle wishlist toggle
  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearWishlist = () => {
    setWishlist([]);
  };

  // Smooth navigation handler
  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductById = (productId: string) => {
    const found = products.find((p) => p.id === productId);
    if (found) {
      setSelectedProduct(found);
    }
  };

  const handleExploreOffers = () => {
    setSelectedCategory('All Spaces');
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (initialLoading) {
    return (
      <div className="fixed inset-0 bg-[#201915] flex flex-col items-center justify-center text-white z-50">
        <div className="text-center space-y-3 animate-pulse">
          <span className="font-display font-bold text-3xl sm:text-4xl tracking-[0.25em] text-[#FDFBF7]">
            WOODORA
          </span>
          <div className="text-xs font-sans tracking-[0.4em] text-[#8B735B] uppercase font-semibold">
            L I V I N G
          </div>
          <div className="text-[11px] text-[#A6998A] pt-2 font-serif italic">
            Crafted for Comfort. Designed for Life.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D241E] flex flex-col selection:bg-[#8B735B]/30 selection:text-[#2D241E]">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        wishlistCount={wishlist.length}
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        
        {/* Full-width Hero Section with Entrance Animations */}
        <Hero
          onExploreClick={() => handleNavigate('shop')}
          onSelectProduct={handleSelectProductById}
        />

        {/* Featured 6 Living Room, Bedroom, Dining, Office, Storage, Outdoor Categories */}
        <FeaturedCategories
          onSelectCategory={handleSelectCategory}
        />

        {/* Signature Collection & Shop with Filtering, Search, Price Sorting & WhatsApp Actions */}
        <SignatureCollection
          products={products}
          onViewProduct={(product) => setSelectedProduct(product)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlist.map((w) => w.id)}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => setSelectedCategory(cat)}
        />

        {/* Special Offer Banner with WhatsApp Deal Inquiries */}
        <SpecialOfferBanner
          onExploreOffers={handleExploreOffers}
        />

        {/* Custom Furniture "Made For Your Space" Interactive Configurator */}
        <CustomFurnitureSection />

        {/* Why Choose Us - 6 Craftsmanship Pillars */}
        <WhyChooseUs />

        {/* Materials & Finishes Close-Up Explorer */}
        <MaterialsSection />

        {/* About the Brand - Fictional Story & Heritage */}
        <AboutBrand />

        {/* Customer Testimonials & Reviews */}
        <CustomerReviews />

        {/* Experience Studio Showroom (Varanasi Address & Hours) */}
        <ShowroomSection />

        {/* Contact Form & WhatsApp Concierge */}
        <ContactSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Newsletter Subscription */}
        <NewsletterSection />

      </main>

      {/* Footer with Bottom Admin Portal Access */}
      <Footer
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Floating Sticky WhatsApp Button */}
      <StickyWhatsAppButton />

      {/* Back to Top Floating Button */}
      <BackToTop />

      {/* Live Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct ? wishlist.some((w) => w.id === selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        products={products}
      />

      {/* Wishlist / Inquiry Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlist}
        onRemoveItem={handleRemoveFromWishlist}
        onClearWishlist={handleClearWishlist}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      {/* Studio Admin Portal (Credentials: username "siddharth8787", password "animesh8787") */}
      <AdminPortal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        products={products}
        onUpdateProduct={handleUpdateProduct}
        onAddProduct={handleAddProduct}
        onDeleteProduct={handleDeleteProduct}
        onResetCatalog={handleResetCatalog}
        onViewProductOnStore={(prod) => {
          setSelectedProduct(prod);
          setIsAdminOpen(false);
        }}
      />

    </div>
  );
}
