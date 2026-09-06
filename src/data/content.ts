import { CategoryInfo, MaterialItem, Review, FaqItem } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'cat-living',
    name: 'Living Room',
    slug: 'living-room',
    tagline: 'Lounge sofas, armchairs, consoles & accent tables',
    description: 'Create an inviting space for gatherings and restful evenings with our sculpted seating and warm wood centerpieces.',
    itemCount: 14,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cat-bedroom',
    name: 'Bedroom',
    slug: 'bedroom',
    tagline: 'Solid wood platform beds, nightstands & chests',
    description: 'Transform your bedroom into a quiet retreat with handcrafted floating beds and serene timber grain textures.',
    itemCount: 9,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cat-dining',
    name: 'Dining Room',
    slug: 'dining-room',
    tagline: 'Expansive dining tables, benches & artisan chairs',
    description: 'Celebrate shared meals and timeless moments around solid teak tables designed for generational memories.',
    itemCount: 8,
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cat-office',
    name: 'Office Furniture',
    slug: 'office',
    tagline: 'Minimalist executive desks, storage & study chairs',
    description: 'Elevate your daily focus with ergonomic timber desks with integrated cable channels and tactile drawer pulls.',
    itemCount: 6,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cat-storage',
    name: 'Storage',
    slug: 'storage',
    tagline: 'Wardrobes, open bookcases, sideboards & credenzas',
    description: 'Intelligent storage solutions that bring visual calm through fluted cane doors, brass accents, and solid partitions.',
    itemCount: 7,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cat-outdoor',
    name: 'Outdoor Furniture',
    slug: 'outdoor',
    tagline: 'Weatherproof teak loungers, patio tables & chairs',
    description: 'All-season outdoor sanctuaries sculpted in high-oil natural plantation teak and marine-grade fabrics.',
    itemCount: 5,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80'
  }
];

export const MATERIALS: MaterialItem[] = [
  {
    id: 'mat-solid-wood',
    name: 'Solid Wood',
    subtitle: 'Sustainably Harvested Teak, Sheesham & White Oak',
    description: 'Carefully seasoned in precision kilns to achieve 8-10% equilibrium moisture content, preventing warping or cracking over decades.',
    durability: 'Generational Endurance (50+ Years)',
    origin: 'Certified Renewable Forestry',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80',
    sustainability: '100% FSC Certified & Traceable'
  },
  {
    id: 'mat-eng-wood',
    name: 'Engineered Wood',
    subtitle: 'High-Density Architectural Core',
    description: 'Multi-ply cross-laminated hardwood substrates engineered for ultra-dimensional stability in moisture-heavy climates.',
    durability: 'High Structural Rigidity',
    origin: 'Precision European Mills',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    sustainability: 'Zero Formaldehyde Emissions (E0 Standard)'
  },
  {
    id: 'mat-veneer',
    name: 'Natural Veneer',
    subtitle: 'Bookmatched Walnut & Teak Slices',
    description: 'Ultra-thin architectural wood cuts hand-arranged in continuous ripple grain patterns that celebrate nature’s organic symmetry.',
    durability: 'Scratch & UV Protected',
    origin: 'Heritage American & Asian Forests',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    sustainability: 'Optimizes timber yield by 300%'
  },
  {
    id: 'mat-fabrics',
    name: 'Premium Fabrics',
    subtitle: 'Belgian Linen, Wool-Boucle & Italian Leather',
    description: 'High Martindale wear-tested weaves treated with PFC-free stain-guard barriers for effortless everyday living.',
    durability: '45,000+ Double Rubs',
    origin: 'Kortrijk, Belgium & Tuscany, Italy',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    sustainability: 'OEKO-TEX® Standard 100 Certified'
  },
  {
    id: 'mat-metal',
    name: 'Metal Accents',
    subtitle: 'Brushed Pure Brass & Matte Steel',
    description: 'Hand-turned solid brass ferrules, flush drawer pulls, and powder-coated steel undercarriages that develop a warm natural patina.',
    durability: 'Corrosion-Resistant PVD Coating',
    origin: 'Artisanal Metal Forges',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80',
    sustainability: '100% Recyclable Alloys'
  },
  {
    id: 'mat-finishes',
    name: 'Sustainable Finishes',
    subtitle: 'Organic Beeswax & Low-VOC Bio-Oils',
    description: 'Food-safe botanical oil formulas that penetrate deep into the grain pores, allowing the wood to breathe and age gracefully.',
    durability: 'Water-Repellent & Matte Natural Touch',
    origin: 'Plant-Based Formulations',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    sustainability: 'Non-toxic, safe for children and pets'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Riya Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    date: 'February 2026',
    comment: 'Absolutely loved the finish and overall quality. The sofa completely changed the look of our living room.',
    productName: 'Arlo Lounge Sofa',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-2',
    author: 'Vikramaditya Mehta',
    location: 'New Delhi',
    rating: 5,
    date: 'January 2026',
    comment: 'The craftsmanship on the Verona bed is unparalleled. The floating frame is completely silent, and the Sheesham grain patterns are breathtaking in natural light.',
    productName: 'Verona Wooden Bed',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-3',
    author: 'Ananya & Kabir Sen',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    date: 'February 2026',
    comment: 'Ordering through WhatsApp was remarkably effortless. The team shared live workshop photos of our Haven Dining Table before dispatch. It seats 8 comfortably!',
    productName: 'Haven Dining Table',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-4',
    author: 'Devendra Singhania',
    location: 'Varanasi, Uttar Pradesh',
    rating: 5,
    date: 'January 2026',
    comment: 'Visited the Experience Studio in Green Park. The Royale Wardrobe cane work is authentic and pristine. The white-glove installation team was extremely courteous.',
    productName: 'Royale Wardrobe',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-5',
    author: 'Pooja Kashyap',
    location: 'Hyderabad, Telangana',
    rating: 5,
    date: 'December 2025',
    comment: 'The Oslo accent chair in Cognac leather is pure luxury. Support for the lower back is perfect for reading hours. Will definitely furnish our guest suite next.',
    productName: 'Oslo Accent Chair',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-6',
    author: 'Arjun Deshmukh',
    location: 'Pune, Maharashtra',
    rating: 5,
    date: 'November 2025',
    comment: 'We commissioned custom dimensions for our study desk. WOODORA executed the exact millimeter specifications and finished it in warm walnut. Outstanding value.',
    productName: 'Custom Study Workstation',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Orders & Shipping',
    question: 'How does WhatsApp ordering work?',
    answer: 'Simply click any "Order on WhatsApp" button across the store. This immediately launches a direct WhatsApp conversation with our customer studio at +91 8695767656 with your chosen product, finish, and price pre-loaded. Our concierge will confirm availability, delivery slot, and payment link within minutes.'
  },
  {
    category: 'Orders & Shipping',
    question: 'What does Complimentary White Glove Delivery include?',
    answer: 'Every piece is transported in temperature-controlled, air-suspension vehicles. Our certified WOODORA installation specialists will bring the furniture into your room of choice, assemble all components, level the pieces, and remove all packing material.'
  },
  {
    category: 'Customization',
    question: 'Can I request custom dimensions or specific wood varieties?',
    answer: 'Yes! Through our "Made For Your Space" service, you can tailor width, length, seat depth, wood species (Teak, Sheesham, Oak, Walnut), and upholstery fabrics. Click "Request Custom Furniture" or message us on WhatsApp to discuss your bespoke blueprint.'
  },
  {
    category: 'Materials & Care',
    question: 'How do you ensure the wood doesn’t warp or crack over time?',
    answer: 'All our timber undergoes a 45-day computerized kiln drying schedule to balance moisture levels between 8-10%. We also use traditional mortise-and-tenon floating joinery that accommodates natural micro-expansion without joint failure.'
  },
  {
    category: 'Warranty & Returns',
    question: 'What is covered under the 10-Year Warranty?',
    answer: 'Our 10-year comprehensive structural warranty covers solid wood integrity, internal joinery, frame stability, and hardware mechanisms. We also provide lifetime repair and refinishing support at subsidized rates.'
  },
  {
    category: 'Warranty & Returns',
    question: 'Can I visit the physical showroom before making a purchase?',
    answer: 'We welcome you to visit our WOODORA LIVING Experience Studio located at 42 Harmony Avenue, Green Park, Varanasi, UP (221010). You can also request a private live video walkthrough on WhatsApp to inspect textures and proportions in real time.'
  }
];

export const SHOWROOM_INFO = {
  name: 'WOODORA LIVING Experience Studio',
  address: '42 Harmony Avenue, Green Park, Varanasi, Uttar Pradesh — 221010',
  phone: '+91 90000 12345',
  whatsappNumber: '8695767656',
  email: 'hello@woodoraliving.example',
  hours: [
    { days: 'Monday – Saturday', time: '10:00 AM – 08:30 PM' },
    { days: 'Sunday', time: '11:00 AM – 07:00 PM' }
  ],
  amenities: [
    'Private Interior Consultation Lounge',
    'Tactile Material & Finish Library (50+ Wood & Fabric Swatches)',
    'Full Room Architecture Vignettes',
    'Complimentary Valet Parking & Espresso Bar'
  ]
};
