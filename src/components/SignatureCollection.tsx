import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  Eye, 
  Heart, 
  Search, 
  SlidersHorizontal, 
  Check, 
  Sparkles,
  ArrowUpDown,
  Layers
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { getProductOrderWhatsAppUrl } from '../utils/whatsapp';

interface SignatureCollectionProps {
  products?: Product[];
  onViewProduct: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const SignatureCollection: React.FC<SignatureCollectionProps> = ({
  products = PRODUCTS,
  onViewProduct,
  onToggleWishlist,
  wishlistIds,
  selectedCategory,
  onCategoryChange
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [activeFilterDrawer, setActiveFilterDrawer] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const categories = [
    'All Spaces',
    'Living Room',
    'Bedroom',
    'Dining Room',
    'Office Furniture',
    'Storage',
    'Outdoor Furniture'
  ];

  const materialsList = [
    { label: 'All Materials', value: 'all' },
    { label: 'Solid Teak & Sheesham', value: 'Teak' },
    { label: 'American Oak & Walnut', value: 'Oak' },
    { label: 'Natural Cane & Rattan', value: 'Rattan' },
    { label: 'Boucle & Leather', value: 'Leather' }
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category match
      const categoryMatch = 
        selectedCategory === 'All Spaces' || 
        selectedCategory === 'All' || 
        product.category === selectedCategory;

      // Search match
      const searchMatch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Material match
      const materialMatch = 
        selectedMaterial === 'all' || 
        product.material.toLowerCase().includes(selectedMaterial.toLowerCase());

      return categoryMatch && searchMatch && materialMatch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: featured first
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, selectedMaterial, sortBy]);

  return (
    <section id="shop" className="py-20 sm:py-28 bg-[#FDFBF7] text-[#2D241E] border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B735B]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>TIMELESS WOOD & NATURAL FIBER</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2D241E]">
              Explore Our Signature Collection
            </h2>
            <p className="text-sm sm:text-base text-[#6B5D52] font-light max-w-2xl">
              Each piece is individually seasoned, shaped by master artisans, and finished with organic bio-waxes for lasting generations.
            </p>
          </div>

          {/* Quick Search and Filter Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sofa, bed, teak..."
                className="w-48 sm:w-64 pl-9 pr-4 py-2.5 bg-white border border-[#EAE2D5] rounded-full text-xs sm:text-sm text-[#2D241E] placeholder-[#9E9182] focus:outline-none focus:ring-2 focus:ring-[#8B735B]/40 shadow-sm"
              />
              <Search className="w-4 h-4 text-[#8B735B] absolute left-3 top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-[#8B735B] hover:text-black cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={() => setActiveFilterDrawer(!activeFilterDrawer)}
              className={`p-2.5 rounded-full border transition-colors flex items-center justify-center cursor-pointer ${
                activeFilterDrawer 
                  ? 'bg-[#2D241E] text-white border-[#2D241E]' 
                  : 'bg-white text-[#4A3F35] border-[#EAE2D5] hover:bg-[#F4EFE6]'
              }`}
              title="Toggle filters"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none no-scrollbar">
          {categories.map((cat) => {
            const isActive = 
              (cat === 'All Spaces' && (selectedCategory === 'All Spaces' || selectedCategory === 'All')) ||
              selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#2D241E] text-[#FDFBF7] shadow-sm font-semibold'
                    : 'bg-white text-[#5A4F44] hover:bg-[#F4EFE6] hover:text-[#2D241E] border border-[#EAE2D5]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Expandable Filter & Sorting Bar */}
        {activeFilterDrawer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-3xl p-5 mb-8 border border-[#EAE2D5] shadow-sm space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Material Filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8B735B]">
                  Material:
                </span>
                {materialsList.map((mat) => (
                  <button
                    key={mat.value}
                    onClick={() => setSelectedMaterial(mat.value)}
                    className={`text-xs px-3.5 py-1.5 rounded-full border transition-colors cursor-pointer ${
                      selectedMaterial === mat.value
                        ? 'bg-[#8B735B] text-white border-[#8B735B] font-medium'
                        : 'bg-[#FDFBF7] text-[#4A3F35] border-[#EAE2D5] hover:bg-[#F4EFE6]'
                    }`}
                  >
                    {mat.label}
                  </button>
                ))}
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#8B735B]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8B735B]">
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#FDFBF7] border border-[#EAE2D5] rounded-xl px-3 py-1.5 text-xs text-[#2D241E] focus:outline-none focus:ring-1 focus:ring-[#8B735B]"
                >
                  <option value="featured">Featured Curations</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Customer Rated</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#EAE2D5] p-8">
            <Layers className="w-12 h-12 text-[#8B735B] mx-auto mb-3" />
            <h3 className="font-serif text-xl text-[#2D241E]">No pieces match your search</h3>
            <p className="text-xs text-[#6B5D52] mt-1 max-w-md mx-auto">
              Try adjusting your search keyword or selected category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedMaterial('all');
                onCategoryChange('All Spaces');
              }}
              className="mt-4 px-6 py-2.5 bg-[#2D241E] text-white rounded-full text-xs font-medium hover:bg-black transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#EAE2D5] shadow-sm hover:shadow-xl hover:border-[#8B735B] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Product Image Stage */}
                    <div className="relative aspect-[4/3] bg-[#F4EFE6] overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1">
                        {product.isBestSeller && (
                          <span className="bg-[#2D241E] text-[#FDFBF7] text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                            Best Seller
                          </span>
                        )}
                        {product.isNewArrival && (
                          <span className="bg-[#8B735B] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                            New Arrival
                          </span>
                        )}
                        {product.isSpecialOffer && product.discountPercentage && (
                          <span className="bg-[#A83D2A] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                            {product.discountPercentage}% OFF
                          </span>
                        )}
                      </div>

                      {/* Wishlist Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWishlist(product);
                        }}
                        className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer ${
                          isWishlisted
                            ? 'bg-[#8B735B] text-white shadow-md'
                            : 'bg-white/80 text-[#3A3228] hover:bg-white hover:text-[#8B735B]'
                        }`}
                        title="Save to Wishlist"
                        aria-label="Wishlist"
                      >
                        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
                      </button>

                      {/* Quick Details Hover Trigger */}
                      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                        <button
                          onClick={() => onViewProduct(product)}
                          className="bg-white/95 text-[#2D241E] hover:bg-[#FDFBF7] text-xs font-semibold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#8B735B]" />
                          <span>Quick Preview</span>
                        </button>
                      </div>
                    </div>

                    {/* Product Metadata */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center justify-between text-xs text-[#8B735B]">
                        <span className="font-medium">{product.category}</span>
                        <span className="text-[#2D241E] font-medium flex items-center gap-1">
                          <span className="text-[#D4AF37]">★</span> {product.rating} <span className="text-[#9E9182]">({product.reviewsCount})</span>
                        </span>
                      </div>

                      <h3 className="font-serif text-lg font-medium text-[#2D241E] group-hover:text-[#8B735B] transition-colors line-clamp-1">
                        {product.name}
                      </h3>

                      <p className="text-xs text-[#6B5D52] line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Material Specification */}
                      <div className="text-[11px] text-[#4A3F35] bg-[#F4EFE6] px-2.5 py-1.5 rounded-xl line-clamp-1 border border-[#EAE2D5]">
                        <span className="font-semibold text-[#2D241E]">Material:</span> {product.material}
                      </div>

                      {/* Finishes Badges */}
                      <div className="flex items-center gap-1 flex-wrap pt-1">
                        <span className="text-[10px] text-[#8B735B] mr-1">Finishes:</span>
                        {product.finishes.map((finish) => (
                          <span
                            key={finish}
                            className="text-[10px] bg-[#FDFBF7] border border-[#EAE2D5] px-2 py-0.5 rounded-full text-[#4A3F35]"
                          >
                            {finish}
                          </span>
                        ))}
                      </div>

                      {/* Price Section */}
                      <div className="pt-2 flex items-baseline gap-2">
                        <span className="font-bold text-lg text-[#2D241E]">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-[#9E9182] line-through">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                        <span className="text-[10px] text-[#25D366] font-semibold ml-auto">
                          In Stock
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dual Action Buttons: View Details & Order on WhatsApp */}
                  <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onViewProduct(product)}
                      className="w-full py-2.5 px-3 rounded-xl border border-[#EAE2D5] bg-[#FDFBF7] hover:bg-[#F4EFE6] text-xs font-semibold text-[#2D241E] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#8B735B]" />
                      <span>View Details</span>
                    </button>

                    <a
                      href={getProductOrderWhatsAppUrl(product.name, product.finishes[0], product.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-[#2D241E] hover:bg-black text-[#FDFBF7] text-xs font-semibold shadow-sm transition-colors flex items-center justify-center gap-1.5"
                      title="Order directly on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#E7C77E]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
