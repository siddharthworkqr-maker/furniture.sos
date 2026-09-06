import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  Unlock, 
  X, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  RotateCcw, 
  Check, 
  AlertCircle, 
  Search, 
  Sparkles, 
  Image as ImageIcon, 
  DollarSign, 
  Tag, 
  Layers, 
  LogOut,
  ExternalLink
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS as DEFAULT_PRODUCTS } from '../data/products';

interface AdminPortalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onUpdateProduct: (product: Product) => void;
  onAddProduct: (product: Product) => void;
  onDeleteProduct: (productId: string) => void;
  onResetCatalog: () => void;
  onViewProductOnStore: (product: Product) => void;
}

// Curated high quality furniture image presets for easy 1-click addition
const PRESET_IMAGES = [
  {
    category: 'Living Room',
    label: 'Warm Oak Boucle Sofa',
    url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Living Room',
    label: 'Mid-Century Teak Armchair',
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Bedroom',
    label: 'Solid Sheesham Platform Bed',
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Bedroom',
    label: 'Fluted Walnut Nightstand',
    url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Dining Room',
    label: 'Monolithic Teak Dining Table',
    url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Dining Room',
    label: 'Curved Spindle Dining Chair',
    url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Office Furniture',
    label: 'Minimalist Walnut Executive Desk',
    url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Storage',
    label: 'Brutalist Slatted Credenza',
    url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Outdoor Furniture',
    label: 'Weatherproof Teak Lounger',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  }
];

const CATEGORIES: Array<Product['category']> = [
  'Living Room',
  'Bedroom',
  'Dining Room',
  'Office Furniture',
  'Storage',
  'Outdoor Furniture'
];

function getCategorySlug(category: Product['category']): Product['categorySlug'] {
  switch (category) {
    case 'Living Room':
      return 'living-room';
    case 'Bedroom':
      return 'bedroom';
    case 'Dining Room':
      return 'dining-room';
    case 'Office Furniture':
      return 'office';
    case 'Storage':
      return 'storage';
    case 'Outdoor Furniture':
      return 'outdoor';
    default:
      return 'living-room';
  }
}

export const AdminPortal: React.FC<AdminPortalProps> = ({
  isOpen,
  onClose,
  products,
  onUpdateProduct,
  onAddProduct,
  onDeleteProduct,
  onResetCatalog,
  onViewProductOnStore
}) => {
  // Authentication states - credentials: username 'siddharth8787', password 'animesh8787'
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('woodora_admin_auth') === 'true';
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Dashboard states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingNew, setIsAddingNew] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Form State for Adding / Editing Product
  const [formName, setFormName] = useState('');
  const [formTagline, setFormTagline] = useState('');
  const [formCategory, setFormCategory] = useState<Product['category']>('Living Room');
  const [formPrice, setFormPrice] = useState<number>(45000);
  const [formOriginalPrice, setFormOriginalPrice] = useState<number | undefined>(undefined);
  const [formMaterial, setFormMaterial] = useState('');
  const [formFinishes, setFormFinishes] = useState('');
  const [formImageUrl, setFormImageUrl] = useState('');
  const [formAdditionalImages, setFormAdditionalImages] = useState('');
  const [formWidth, setFormWidth] = useState('');
  const [formDepth, setFormDepth] = useState('');
  const [formHeight, setFormHeight] = useState('');
  const [formWeight, setFormWeight] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formFullDescription, setFormFullDescription] = useState('');
  const [formFeatures, setFormFeatures] = useState('');
  const [formDeliveryInfo, setFormDeliveryInfo] = useState('');
  const [formCareInstructions, setFormCareInstructions] = useState('');
  const [formLeadTime, setFormLeadTime] = useState('Ready to Dispatch (48 Hours)');
  const [formWarranty, setFormWarranty] = useState('10-Year Structural Frame & Wood Warranty');
  const [formIsBestSeller, setFormIsBestSeller] = useState(false);
  const [formIsNewArrival, setFormIsNewArrival] = useState(false);
  const [formIsSpecialOffer, setFormIsSpecialOffer] = useState(false);
  const [formIsFeatured, setFormIsFeatured] = useState(false);
  const [formError, setFormError] = useState('');

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    const trimmedUser = username.trim();
    const trimmedPass = password.trim();

    if (trimmedUser === 'siddharth8787' && trimmedPass === 'animesh8787') {
      setIsAuthenticated(true);
      sessionStorage.setItem('woodora_admin_auth', 'true');
      setLoginError('');
      triggerNotification('Welcome to Woodora Studio Admin Portal!');
    } else {
      setLoginError('Invalid credentials. Expected username "siddharth8787" and password "animesh8787".');
    }
  };

  const handleQuickDemoFill = () => {
    setUsername('siddharth8787');
    setPassword('animesh8787');
    setLoginError('');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('woodora_admin_auth');
    setUsername('');
    setPassword('');
  };

  // Open Edit Form
  const handleStartEdit = (prod: Product) => {
    setEditingProduct(prod);
    setIsAddingNew(false);
    setFormError('');

    setFormName(prod.name);
    setFormTagline(prod.tagline || '');
    setFormCategory(prod.category);
    setFormPrice(prod.price);
    setFormOriginalPrice(prod.originalPrice);
    setFormMaterial(prod.material);
    setFormFinishes(prod.finishes ? prod.finishes.join(', ') : '');
    setFormImageUrl(prod.images[0] || '');
    setFormAdditionalImages(prod.images.slice(1).join(', '));
    setFormWidth(prod.dimensions?.width || '');
    setFormDepth(prod.dimensions?.depth || '');
    setFormHeight(prod.dimensions?.height || '');
    setFormWeight(prod.dimensions?.weight || '');
    setFormDescription(prod.description || '');
    setFormFullDescription(prod.fullDescription || '');
    setFormFeatures(prod.features ? prod.features.join('\n') : '');
    setFormDeliveryInfo(prod.deliveryInfo || 'Complimentary White Glove Delivery & In-Room Placement.');
    setFormCareInstructions(prod.careInstructions || 'Wipe with soft damp cloth. Polish annually with beeswax.');
    setFormLeadTime(prod.leadTime || 'Ready to Dispatch (48 Hours)');
    setFormWarranty(prod.warranty || '10-Year Structural Frame & Wood Warranty');
    setFormIsBestSeller(Boolean(prod.isBestSeller));
    setFormIsNewArrival(Boolean(prod.isNewArrival));
    setFormIsSpecialOffer(Boolean(prod.isSpecialOffer));
    setFormIsFeatured(Boolean(prod.isFeatured));
  };

  // Open Add New Form
  const handleStartAdd = () => {
    setEditingProduct(null);
    setIsAddingNew(true);
    setFormError('');

    setFormName('');
    setFormTagline('');
    setFormCategory('Living Room');
    setFormPrice(48000);
    setFormOriginalPrice(56000);
    setFormMaterial('Kiln-Dried Solid Indian Teak & Organic Bio-Wax Finish');
    setFormFinishes('Honey Teak, Natural Smoked Teak, Raw Matte');
    setFormImageUrl(PRESET_IMAGES[0].url);
    setFormAdditionalImages('');
    setFormWidth('82 inches (208 cm)');
    setFormDepth('36 inches (91 cm)');
    setFormHeight('32 inches (81 cm)');
    setFormWeight('58 kg');
    setFormDescription('Contemporary architectural silhouette sculpted with mortise-and-tenon solid wood joinery.');
    setFormFullDescription('Designed for high-traffic elegance and quiet structural beauty. Handcrafted using sustainably harvested timber, dried to optimal 8-10% moisture content for perpetual structural stability.');
    setFormFeatures('Hand-turned solid timber framing\nTraditional mortise-and-tenon structural joints\nZero-VOC organic beeswax finish\nWhite-glove unboxing and placement');
    setFormDeliveryInfo('Complimentary White Glove Delivery & In-Room Placement within 5-7 business days.');
    setFormCareInstructions('Dust gently with a microfiber cloth. Reapply organic wood wax every 12 months to preserve luster.');
    setFormLeadTime('Ready to Dispatch (48 Hours)');
    setFormWarranty('10-Year Structural Frame & Wood Warranty');
    setFormIsBestSeller(false);
    setFormIsNewArrival(true);
    setFormIsSpecialOffer(false);
    setFormIsFeatured(true);
  };

  // Save Add/Edit Form
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formName.trim()) {
      setFormError('Product Name is required.');
      return;
    }
    if (!formPrice || formPrice <= 0) {
      setFormError('Valid Price in ₹ is required.');
      return;
    }
    if (!formImageUrl.trim()) {
      setFormError('Primary Image URL is required.');
      return;
    }

    const imagesList = [formImageUrl.trim()];
    if (formAdditionalImages.trim()) {
      formAdditionalImages
        .split(',')
        .map((img) => img.trim())
        .filter(Boolean)
        .forEach((img) => {
          if (!imagesList.includes(img)) {
            imagesList.push(img);
          }
        });
    }

    const finishesArray = formFinishes
      .split(',')
      .map((f) => f.trim())
      .filter(Boolean);

    const featuresArray = formFeatures
      .split('\n')
      .map((feat) => feat.trim())
      .filter(Boolean);

    if (isAddingNew) {
      const newId = `prod-${Date.now()}`;
      const newProduct: Product = {
        id: newId,
        name: formName.trim(),
        tagline: formTagline.trim() || 'Handcrafted architectural timber furniture',
        category: formCategory,
        categorySlug: getCategorySlug(formCategory),
        price: Number(formPrice),
        originalPrice: formOriginalPrice ? Number(formOriginalPrice) : undefined,
        rating: 4.9,
        reviewsCount: 1,
        images: imagesList,
        description: formDescription.trim() || 'Solid wood architectural furniture.',
        fullDescription: formFullDescription.trim() || formDescription.trim() || 'Solid wood architectural furniture.',
        material: formMaterial.trim() || 'Solid Wood',
        finishes: finishesArray.length > 0 ? finishesArray : ['Natural Wood'],
        dimensions: {
          width: formWidth.trim() || '72 inches',
          depth: formDepth.trim() || '36 inches',
          height: formHeight.trim() || '30 inches',
          weight: formWeight.trim() || '40 kg'
        },
        features: featuresArray.length > 0 ? featuresArray : ['Solid wood frame', 'Handmade joinery'],
        deliveryInfo: formDeliveryInfo.trim(),
        careInstructions: formCareInstructions.trim(),
        leadTime: formLeadTime.trim(),
        warranty: formWarranty.trim(),
        isBestSeller: formIsBestSeller,
        isNewArrival: formIsNewArrival,
        isSpecialOffer: formIsSpecialOffer,
        isFeatured: formIsFeatured
      };

      onAddProduct(newProduct);
      setIsAddingNew(false);
      triggerNotification(`Added "${newProduct.name}" to live catalog!`);
    } else if (editingProduct) {
      const updatedProduct: Product = {
        ...editingProduct,
        name: formName.trim(),
        tagline: formTagline.trim(),
        category: formCategory,
        categorySlug: getCategorySlug(formCategory),
        price: Number(formPrice),
        originalPrice: formOriginalPrice ? Number(formOriginalPrice) : undefined,
        images: imagesList,
        description: formDescription.trim(),
        fullDescription: formFullDescription.trim(),
        material: formMaterial.trim(),
        finishes: finishesArray.length > 0 ? finishesArray : editingProduct.finishes,
        dimensions: {
          width: formWidth.trim() || editingProduct.dimensions.width,
          depth: formDepth.trim() || editingProduct.dimensions.depth,
          height: formHeight.trim() || editingProduct.dimensions.height,
          weight: formWeight.trim() || editingProduct.dimensions.weight
        },
        features: featuresArray.length > 0 ? featuresArray : editingProduct.features,
        deliveryInfo: formDeliveryInfo.trim(),
        careInstructions: formCareInstructions.trim(),
        leadTime: formLeadTime.trim(),
        warranty: formWarranty.trim(),
        isBestSeller: formIsBestSeller,
        isNewArrival: formIsNewArrival,
        isSpecialOffer: formIsSpecialOffer,
        isFeatured: formIsFeatured
      };

      onUpdateProduct(updatedProduct);
      setEditingProduct(null);
      triggerNotification(`Updated "${updatedProduct.name}" successfully!`);
    }
  };

  const handleConfirmDelete = () => {
    if (!productToDelete) return;
    const name = productToDelete.name;
    onDeleteProduct(productToDelete.id);
    setProductToDelete(null);
    triggerNotification(`Removed "${name}" from store catalog.`);
  };

  const handleConfirmReset = () => {
    onResetCatalog();
    setShowResetConfirm(false);
    triggerNotification('Catalog restored to original 12 signature pieces.');
  };

  // Filter products for the admin table
  const displayedProducts = products.filter((p) => {
    const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchQuery =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 z-60 bg-[#2D241E] text-white px-5 py-3 rounded-2xl shadow-2xl border border-[#8B735B] flex items-center gap-3 text-xs font-medium"
          >
            <Check className="w-4 h-4 text-[#25D366]" />
            <span>{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="w-full max-w-6xl bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#EAE2D5] overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-[#EAE2D5] bg-[#F4EFE6] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2D241E] text-[#D4AF37] flex items-center justify-center shadow-sm">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base sm:text-lg tracking-[0.15em] text-[#2D241E]">
                  WOODORA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest bg-[#8B735B] text-white px-2 py-0.5 rounded-full">
                  Admin Portal
                </span>
              </div>
              <p className="text-[11px] text-[#6B5D52]">
                Product Inventory & Catalog Management Studio
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#6B5D52] hover:text-[#A83D2A] hover:bg-white rounded-xl border border-[#EAE2D5] transition-colors cursor-pointer"
                title="Log Out"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-[#6B5D52] hover:text-[#2D241E] hover:bg-[#EAE2D5] rounded-full transition-colors cursor-pointer"
              aria-label="Close portal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body: Login View OR Dashboard */}
        {!isAuthenticated ? (
          /* ========================================================
             LOGIN SCREEN (Username: siddharth8787, Pass: animesh8787)
             ======================================================== */
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center max-w-md mx-auto my-auto w-full">
            <div className="w-16 h-16 rounded-3xl bg-[#F4EFE6] border border-[#EAE2D5] flex items-center justify-center mb-6 text-[#8B735B] shadow-inner">
              <Lock className="w-8 h-8" />
            </div>

            <h2 className="font-serif text-2xl font-normal text-[#2D241E] text-center mb-2">
              Studio Admin Authentication
            </h2>
            <p className="text-xs text-[#6B5D52] text-center mb-6 leading-relaxed">
              Enter authorized administrator credentials to manage products, modify pricing, and update live collections.
            </p>

            {loginError && (
              <div className="w-full mb-4 p-3 bg-[#A83D2A]/10 border border-[#A83D2A]/30 rounded-2xl flex items-start gap-2.5 text-xs text-[#A83D2A]">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D241E] mb-1.5">
                  Admin Username
                </label>
                <input
                  type="text"
                  id="admin-username-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. siddharth8787"
                  className="w-full px-4 py-3 rounded-xl border border-[#EAE2D5] bg-white text-sm text-[#2D241E] focus:outline-none focus:ring-2 focus:ring-[#8B735B]"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D241E] mb-1.5">
                  Admin Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="admin-password-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="e.g. animesh8787"
                    className="w-full px-4 py-3 rounded-xl border border-[#EAE2D5] bg-white text-sm text-[#2D241E] focus:outline-none focus:ring-2 focus:ring-[#8B735B] pr-16"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-xs text-[#8B735B] hover:text-[#2D241E] font-medium cursor-pointer select-none"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                id="admin-login-submit-btn"
                className="w-full py-3.5 px-6 rounded-xl bg-[#2D241E] hover:bg-[#8B735B] text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Unlock className="w-4 h-4" />
                <span>Sign In to Admin Portal</span>
              </button>
            </form>

            {/* Helper quick credential autofill hint */}
            <div className="mt-6 pt-6 border-t border-[#EAE2D5] w-full text-center">
              <button
                type="button"
                onClick={handleQuickDemoFill}
                className="text-xs text-[#8B735B] hover:text-[#2D241E] underline cursor-pointer inline-flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Autofill Studio Credentials (siddharth8787 / animesh8787)</span>
              </button>
            </div>
          </div>
        ) : (
          /* ========================================================
             ADMIN DASHBOARD (Manage / Add / Edit / Remove Products)
             ======================================================== */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            
            {/* Action & Stats Banner */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAE2D5] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <div className="px-3 py-1.5 bg-[#F4EFE6] rounded-xl border border-[#EAE2D5] text-xs">
                  <span className="text-[#6B5D52]">Active Catalog: </span>
                  <span className="font-bold text-[#2D241E]">{products.length} Products</span>
                </div>
                <div className="px-3 py-1.5 bg-[#F4EFE6] rounded-xl border border-[#EAE2D5] text-xs">
                  <span className="text-[#6B5D52]">Admin User: </span>
                  <span className="font-bold text-[#8B735B]">siddharth8787</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleStartAdd}
                  id="admin-add-product-btn"
                  className="px-4 py-2.5 bg-[#2D241E] hover:bg-[#8B735B] text-white text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Product</span>
                </button>

                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="px-3.5 py-2.5 bg-[#F4EFE6] hover:bg-[#EAE2D5] text-[#6B5D52] hover:text-[#2D241E] text-xs font-medium rounded-xl border border-[#EAE2D5] flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Reset to default original catalog"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset Default Catalog</span>
                </button>
              </div>
            </div>

            {/* Filter & Search Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-[#8B735B] absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products by name or wood..."
                  className="w-full pl-10 pr-4 py-2 bg-white rounded-xl border border-[#EAE2D5] text-xs text-[#2D241E] placeholder-[#9E9182] focus:outline-none focus:ring-1 focus:ring-[#8B735B]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-[#8B735B] hover:text-black text-xs"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                {['All', ...CATEGORIES].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#2D241E] text-white font-medium'
                        : 'bg-white text-[#6B5D52] border border-[#EAE2D5] hover:bg-[#F4EFE6]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Products List Table / Grid */}
            <div className="bg-white rounded-2xl border border-[#EAE2D5] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-[#2D241E]">
                  <thead className="bg-[#F4EFE6] text-[#6B5D52] uppercase font-semibold text-[10px] tracking-wider border-b border-[#EAE2D5]">
                    <tr>
                      <th className="p-3.5">Piece</th>
                      <th className="p-3.5">Category</th>
                      <th className="p-3.5">Price</th>
                      <th className="p-3.5">Material & Finishes</th>
                      <th className="p-3.5">Badges</th>
                      <th className="p-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE2D5]">
                    {displayedProducts.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="p-8 text-center text-[#6B5D52]">
                          No products found matching your search.
                        </td>
                      </tr>
                    ) : (
                      displayedProducts.map((p) => (
                        <tr key={p.id} className="hover:bg-[#FDFBF7] transition-colors">
                          <td className="p-3.5">
                            <div className="flex items-center gap-3">
                              <img
                                src={p.images[0]}
                                alt={p.name}
                                className="w-12 h-12 rounded-xl object-cover border border-[#EAE2D5] flex-shrink-0"
                              />
                              <div>
                                <div className="font-serif font-medium text-sm text-[#2D241E]">
                                  {p.name}
                                </div>
                                <div className="text-[11px] text-[#6B5D52] line-clamp-1 max-w-xs">
                                  {p.tagline}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="p-3.5">
                            <span className="inline-block px-2.5 py-1 rounded-full bg-[#F4EFE6] text-[#8B735B] font-medium text-[11px]">
                              {p.category}
                            </span>
                          </td>

                          <td className="p-3.5">
                            <div className="font-bold text-sm text-[#2D241E]">
                              ₹{p.price.toLocaleString('en-IN')}
                            </div>
                            {p.originalPrice && (
                              <div className="text-[10px] text-[#9E9182] line-through">
                                ₹{p.originalPrice.toLocaleString('en-IN')}
                              </div>
                            )}
                          </td>

                          <td className="p-3.5 max-w-[200px]">
                            <div className="font-medium truncate text-[#2D241E]">{p.material}</div>
                            <div className="text-[10px] text-[#6B5D52] truncate">
                              Finishes: {p.finishes.join(', ')}
                            </div>
                          </td>

                          <td className="p-3.5">
                            <div className="flex flex-wrap gap-1">
                              {p.isBestSeller && (
                                <span className="bg-[#2D241E] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                  Best Seller
                                </span>
                              )}
                              {p.isNewArrival && (
                                <span className="bg-[#8B735B] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                  New
                                </span>
                              )}
                              {p.isSpecialOffer && (
                                <span className="bg-[#A83D2A] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                  Deal
                                </span>
                              )}
                            </div>
                          </td>

                          <td className="p-3.5 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => {
                                  onViewProductOnStore(p);
                                  onClose();
                                }}
                                className="p-2 text-[#6B5D52] hover:text-[#2D241E] hover:bg-[#F4EFE6] rounded-lg transition-colors cursor-pointer"
                                title="View on Storefront"
                              >
                                <Eye className="w-4 h-4" />
                              </button>

                              <button
                                onClick={() => handleStartEdit(p)}
                                className="p-2 text-[#8B735B] hover:text-white hover:bg-[#8B735B] rounded-lg transition-colors cursor-pointer"
                                title="Edit Product"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>

                              <button
                                onClick={() => setProductToDelete(p)}
                                className="p-2 text-[#A83D2A] hover:text-white hover:bg-[#A83D2A] rounded-lg transition-colors cursor-pointer"
                                title="Remove Product"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Footer info bar */}
        <div className="px-6 py-3 border-t border-[#EAE2D5] bg-[#F4EFE6] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8B735B] gap-2">
          <span>WOODORA LIVING — Catalog Management System</span>
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="text-[#2D241E] hover:underline font-medium cursor-pointer"
            >
              Return to Public Storefront →
            </button>
          </div>
        </div>

      </motion.div>

      {/* ========================================================
          ADD / EDIT PRODUCT MODAL
          ======================================================== */}
      <AnimatePresence>
        {(isAddingNew || editingProduct) && (
          <div className="fixed inset-0 z-60 bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-3xl bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#EAE2D5] overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-[#EAE2D5] bg-[#F4EFE6] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#8B735B] text-white flex items-center justify-center">
                    {isAddingNew ? <Plus className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#2D241E]">
                      {isAddingNew ? 'Add New Furniture Piece' : `Edit "${formName || editingProduct?.name}"`}
                    </h3>
                    <p className="text-[11px] text-[#6B5D52]">
                      Fill details below. Changes are saved immediately to the store catalog.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsAddingNew(false);
                    setEditingProduct(null);
                  }}
                  className="p-2 text-[#6B5D52] hover:text-[#2D241E] rounded-full cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSaveProduct} className="flex-1 overflow-y-auto p-6 space-y-6">
                {formError && (
                  <div className="p-3 bg-[#A83D2A]/10 border border-[#A83D2A]/30 rounded-xl flex items-center gap-2 text-xs text-[#A83D2A]">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Section 1: Basic Details */}
                <div className="space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8B735B] border-b border-[#EAE2D5] pb-1">
                    1. Primary Information
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#2D241E] mb-1">
                        Product Name *
                      </label>
                      <input
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Kyoto Platform Bed"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-white text-xs text-[#2D241E] focus:ring-2 focus:ring-[#8B735B] focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#2D241E] mb-1">
                        Category *
                      </label>
                      <select
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value as Product['category'])}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-white text-xs text-[#2D241E] focus:ring-2 focus:ring-[#8B735B] focus:outline-none cursor-pointer"
                      >
                        {CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2D241E] mb-1">
                      Poetic Tagline
                    </label>
                    <input
                      type="text"
                      value={formTagline}
                      onChange={(e) => setFormTagline(e.target.value)}
                      placeholder="e.g. Deep seating silhouette wrapped in tactile boucle & solid oak"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-white text-xs text-[#2D241E] focus:ring-2 focus:ring-[#8B735B] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#2D241E] mb-1">
                        Selling Price (₹) *
                      </label>
                      <input
                        type="number"
                        value={formPrice}
                        onChange={(e) => setFormPrice(Number(e.target.value))}
                        placeholder="48000"
                        min="1000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-white text-xs text-[#2D241E] focus:ring-2 focus:ring-[#8B735B] focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#2D241E] mb-1">
                        Original / MRP Price (₹) <span className="text-[#9E9182]">(optional discount)</span>
                      </label>
                      <input
                        type="number"
                        value={formOriginalPrice || ''}
                        onChange={(e) => setFormOriginalPrice(e.target.value ? Number(e.target.value) : undefined)}
                        placeholder="55000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-white text-xs text-[#2D241E] focus:ring-2 focus:ring-[#8B735B] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Imagery */}
                <div className="space-y-4 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8B735B] border-b border-[#EAE2D5] pb-1">
                    2. Photography & Imagery
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2D241E] mb-1">
                      Primary Image URL *
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        value={formImageUrl}
                        onChange={(e) => setFormImageUrl(e.target.value)}
                        placeholder="https://images.unsplash.com/..."
                        className="flex-1 px-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-white text-xs text-[#2D241E] focus:ring-2 focus:ring-[#8B735B] focus:outline-none"
                        required
                      />
                      {formImageUrl && (
                        <img
                          src={formImageUrl}
                          alt="Preview"
                          className="w-10 h-10 rounded-xl object-cover border border-[#EAE2D5]"
                        />
                      )}
                    </div>
                  </div>

                  {/* Preset Suggestions for quick 1-click photo choice */}
                  <div>
                    <label className="block text-[11px] font-medium text-[#6B5D52] mb-1.5">
                      Or pick from Studio Photography Presets:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PRESET_IMAGES.map((preset, idx) => (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setFormImageUrl(preset.url)}
                          className="px-2.5 py-1 bg-white hover:bg-[#F4EFE6] border border-[#EAE2D5] rounded-lg text-[10px] text-[#2D241E] flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <ImageIcon className="w-3 h-3 text-[#8B735B]" />
                          <span>{preset.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2D241E] mb-1">
                      Additional Image URLs <span className="text-[#9E9182]">(comma separated)</span>
                    </label>
                    <input
                      type="text"
                      value={formAdditionalImages}
                      onChange={(e) => setFormAdditionalImages(e.target.value)}
                      placeholder="https://image2.jpg, https://image3.jpg"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-white text-xs text-[#2D241E] focus:ring-2 focus:ring-[#8B735B] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Section 3: Craftsmanship & Specs */}
                <div className="space-y-4 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8B735B] border-b border-[#EAE2D5] pb-1">
                    3. Wood, Finishes & Dimensions
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#2D241E] mb-1">
                        Material & Wood Species
                      </label>
                      <input
                        type="text"
                        value={formMaterial}
                        onChange={(e) => setFormMaterial(e.target.value)}
                        placeholder="e.g. Solid Indian Teak & Kiln-Dried Oak"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-white text-xs text-[#2D241E] focus:ring-2 focus:ring-[#8B735B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#2D241E] mb-1">
                        Available Finishes <span className="text-[#9E9182]">(comma separated)</span>
                      </label>
                      <input
                        type="text"
                        value={formFinishes}
                        onChange={(e) => setFormFinishes(e.target.value)}
                        placeholder="Honey Teak, Natural Walnut, Smoked Matte"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-white text-xs text-[#2D241E] focus:ring-2 focus:ring-[#8B735B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-[#2D241E] mb-1">
                        Width
                      </label>
                      <input
                        type="text"
                        value={formWidth}
                        onChange={(e) => setFormWidth(e.target.value)}
                        placeholder="78 inches (198 cm)"
                        className="w-full px-3 py-2 rounded-xl border border-[#EAE2D5] bg-white text-xs text-[#2D241E]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-[#2D241E] mb-1">
                        Depth
                      </label>
                      <input
                        type="text"
                        value={formDepth}
                        onChange={(e) => setFormDepth(e.target.value)}
                        placeholder="36 inches (91 cm)"
                        className="w-full px-3 py-2 rounded-xl border border-[#EAE2D5] bg-white text-xs text-[#2D241E]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-[#2D241E] mb-1">
                        Height
                      </label>
                      <input
                        type="text"
                        value={formHeight}
                        onChange={(e) => setFormHeight(e.target.value)}
                        placeholder="30 inches (76 cm)"
                        className="w-full px-3 py-2 rounded-xl border border-[#EAE2D5] bg-white text-xs text-[#2D241E]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-[#2D241E] mb-1">
                        Weight
                      </label>
                      <input
                        type="text"
                        value={formWeight}
                        onChange={(e) => setFormWeight(e.target.value)}
                        placeholder="45 kg"
                        className="w-full px-3 py-2 rounded-xl border border-[#EAE2D5] bg-white text-xs text-[#2D241E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2D241E] mb-1">
                      Architectural Overview (Description)
                    </label>
                    <textarea
                      rows={2}
                      value={formDescription}
                      onChange={(e) => setFormDescription(e.target.value)}
                      placeholder="Concise overview of proportions, joinery, and comfort..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-white text-xs text-[#2D241E] focus:ring-2 focus:ring-[#8B735B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2D241E] mb-1">
                      Key Highlights & Joinery <span className="text-[#9E9182]">(1 feature per line)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formFeatures}
                      onChange={(e) => setFormFeatures(e.target.value)}
                      placeholder="Traditional mortise-and-tenon structural joints&#10;Zero-VOC organic beeswax finish&#10;Hand-turned solid timber framing"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-white text-xs text-[#2D241E] focus:ring-2 focus:ring-[#8B735B] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Section 4: Visibility & Badges */}
                <div className="space-y-4 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8B735B] border-b border-[#EAE2D5] pb-1">
                    4. Storefront Badges
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <label className="flex items-center gap-2 p-3 bg-white rounded-xl border border-[#EAE2D5] cursor-pointer hover:bg-[#F4EFE6] transition-colors">
                      <input
                        type="checkbox"
                        checked={formIsBestSeller}
                        onChange={(e) => setFormIsBestSeller(e.target.checked)}
                        className="rounded border-[#EAE2D5] text-[#8B735B] focus:ring-[#8B735B]"
                      />
                      <span className="text-xs font-medium text-[#2D241E]">Best Seller</span>
                    </label>

                    <label className="flex items-center gap-2 p-3 bg-white rounded-xl border border-[#EAE2D5] cursor-pointer hover:bg-[#F4EFE6] transition-colors">
                      <input
                        type="checkbox"
                        checked={formIsNewArrival}
                        onChange={(e) => setFormIsNewArrival(e.target.checked)}
                        className="rounded border-[#EAE2D5] text-[#8B735B] focus:ring-[#8B735B]"
                      />
                      <span className="text-xs font-medium text-[#2D241E]">New Arrival</span>
                    </label>

                    <label className="flex items-center gap-2 p-3 bg-white rounded-xl border border-[#EAE2D5] cursor-pointer hover:bg-[#F4EFE6] transition-colors">
                      <input
                        type="checkbox"
                        checked={formIsSpecialOffer}
                        onChange={(e) => setFormIsSpecialOffer(e.target.checked)}
                        className="rounded border-[#EAE2D5] text-[#8B735B] focus:ring-[#8B735B]"
                      />
                      <span className="text-xs font-medium text-[#2D241E]">Special Offer</span>
                    </label>

                    <label className="flex items-center gap-2 p-3 bg-white rounded-xl border border-[#EAE2D5] cursor-pointer hover:bg-[#F4EFE6] transition-colors">
                      <input
                        type="checkbox"
                        checked={formIsFeatured}
                        onChange={(e) => setFormIsFeatured(e.target.checked)}
                        className="rounded border-[#EAE2D5] text-[#8B735B] focus:ring-[#8B735B]"
                      />
                      <span className="text-xs font-medium text-[#2D241E]">Featured</span>
                    </label>
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="pt-4 border-t border-[#EAE2D5] flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingNew(false);
                      setEditingProduct(null);
                    }}
                    className="px-5 py-2.5 rounded-xl border border-[#EAE2D5] text-xs font-semibold text-[#6B5D52] hover:bg-[#EAE2D5] transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    id="save-product-submit-btn"
                    className="px-6 py-2.5 rounded-xl bg-[#2D241E] hover:bg-[#8B735B] text-white text-xs font-semibold transition-colors shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                    <span>{isAddingNew ? 'Add to Catalog' : 'Save Changes'}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================
          DELETE CONFIRMATION MODAL
          ======================================================== */}
      <AnimatePresence>
        {productToDelete && (
          <div className="fixed inset-0 z-70 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#FDFBF7] p-6 rounded-3xl border border-[#EAE2D5] shadow-2xl max-w-sm w-full text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#A83D2A]/10 text-[#A83D2A] flex items-center justify-center mx-auto">
                <Trash2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-medium text-[#2D241E]">
                Remove Furniture Piece?
              </h4>
              <p className="text-xs text-[#6B5D52]">
                Are you sure you want to remove <span className="font-semibold text-[#2D241E]">"{productToDelete.name}"</span>? This will immediately remove it from your live storefront catalog.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setProductToDelete(null)}
                  className="px-4 py-2 rounded-xl border border-[#EAE2D5] text-xs text-[#6B5D52] hover:bg-[#EAE2D5] font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDelete}
                  id="confirm-delete-product-btn"
                  className="px-5 py-2 rounded-xl bg-[#A83D2A] hover:bg-[#8F3323] text-white text-xs font-semibold cursor-pointer shadow-sm"
                >
                  Yes, Remove
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================
          RESET CATALOG CONFIRMATION MODAL
          ======================================================== */}
      <AnimatePresence>
        {showResetConfirm && (
          <div className="fixed inset-0 z-70 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#FDFBF7] p-6 rounded-3xl border border-[#EAE2D5] shadow-2xl max-w-sm w-full text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#8B735B]/10 text-[#8B735B] flex items-center justify-center mx-auto">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-medium text-[#2D241E]">
                Reset to Default Catalog?
              </h4>
              <p className="text-xs text-[#6B5D52]">
                This will restore the original 12 signature handcrafted furniture pieces and remove any custom added or deleted pieces.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-4 py-2 rounded-xl border border-[#EAE2D5] text-xs text-[#6B5D52] hover:bg-[#EAE2D5] font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmReset}
                  className="px-5 py-2 rounded-xl bg-[#8B735B] hover:bg-[#735D48] text-white text-xs font-semibold cursor-pointer shadow-sm"
                >
                  Restore Defaults
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
