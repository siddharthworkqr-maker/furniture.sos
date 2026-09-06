import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-arlo-sofa',
    name: 'Arlo Lounge Sofa',
    tagline: 'Deep seating silhouette wrapped in tactile boucle & solid oak framing',
    category: 'Living Room',
    categorySlug: 'living-room',
    price: 68500,
    originalPrice: 78000,
    rating: 4.9,
    reviewsCount: 38,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493663284028-a28efbc2c0c7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'An architectural lounge statement with relaxed plush proportions, kiln-dried solid oak underframe, and cloud-density high-resilience foam cushioning.',
    fullDescription: 'The Arlo Lounge Sofa is designed as the grounding centerpiece for the contemporary sanctuary. Handcrafted with an exposed solid oak base and dual-density down-blend cushions, it offers the perfect balance of structured support and sink-in relaxation. Every joinery seam is reinforced with mortise-and-tenon craftsmanship to withstand generations of shared moments.',
    material: 'Kiln-Dried White Oak & Belgian Wool-Boucle Blend',
    finishes: ['Warm Oatmeal', 'Charcoal Sand', 'Burnt Ochre', 'Raw Linen'],
    dimensions: {
      width: '88 inches (224 cm)',
      depth: '38 inches (96 cm)',
      height: '31 inches (79 cm)',
      weight: '64 kg'
    },
    features: [
      'Hand-finished solid American White Oak perimeter platform',
      'Feather-and-down topped high-resiliency core cushions',
      'Stain-resistant performance fabric weave with 45,000 Rub Martindale rating',
      'Removable, dry-cleanable cushion slips',
      'Non-marring brass foot cap levelers'
    ],
    deliveryInfo: 'Complimentary White Glove Delivery & In-Room Placement within 5-7 business days across major metros.',
    careInstructions: 'Vacuum weekly using an upholstery attachment. Blot spills immediately with a clean, dry absorbent cloth. Treat wood base with beeswax polish annually.',
    isFeatured: true,
    isBestSeller: true,
    leadTime: 'Ready to Dispatch (48 Hours)',
    warranty: '10-Year Structural Frame & Wood Warranty'
  },
  {
    id: 'prod-verona-bed',
    name: 'Verona Wooden Bed',
    tagline: 'Floating platform bed carved from single-source Indian Sheesham wood',
    category: 'Bedroom',
    categorySlug: 'bedroom',
    price: 54900,
    originalPrice: 62000,
    rating: 4.8,
    reviewsCount: 29,
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A sanctuary piece showcasing live-edge natural grain patterns, inset bevel headboard, and hidden recessed support for a gentle floating aesthetic.',
    fullDescription: 'Drawing inspiration from Nordic minimalism and heritage Indian joinery, the Verona Wooden Bed elevates the master suite. Its substantial angled headboard showcases continuous woodgrain ripples, providing ergonomic back support for late-night reading. Engineered solid pine slats ensure optimal mattress aeration and silent, squeak-free longevity.',
    material: '100% Solid Seasoned Sheesham & Plantation Teak',
    finishes: ['Natural Honey Walnut', 'Smoked Espresso', 'Aged Teak'],
    dimensions: {
      width: '76 inches (193 cm) - King Size',
      depth: '84 inches (213 cm)',
      height: '42 inches (107 cm)',
      weight: '82 kg'
    },
    features: [
      'Seamless floating plinth design with 6-point internal reinforcement',
      'Solid hardwood slat system with central spine beam (no box spring required)',
      'Hand-applied matte bio-wax finish that allows wood to breathe',
      'Integrated soft-beveled corners to prevent shin knocks'
    ],
    deliveryInfo: 'Includes complete on-site assembly and positioning by certified WOODORA craftsmen.',
    careInstructions: 'Wipe with a soft micro-fiber cloth dampened with water. Keep away from direct unbuffered sun rays. Avoid silicone-based aerosol polishes.',
    isFeatured: true,
    isBestSeller: true,
    isSpecialOffer: true,
    discountPercentage: 15,
    leadTime: '3-5 Business Days',
    warranty: '10-Year Craftsmanship Guarantee'
  },
  {
    id: 'prod-haven-dining-table',
    name: 'Haven Dining Table',
    tagline: 'Sculptural 8-seater oval dining table with monolithic fluted pedestal base',
    category: 'Dining Room',
    categorySlug: 'dining-room',
    price: 62000,
    originalPrice: 72000,
    rating: 5.0,
    reviewsCount: 42,
    images: [
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'An expansive dining table sculpted with a soft bullnose bevel top and twin fluted pillar bases designed to foster fluid conversations.',
    fullDescription: 'The Haven Dining Table is a celebration of communal dining. Crafted from sustainably harvested Burmese teak wood, the tabletop displays undulating golden amber tones protected by a food-safe ceramicized lacquer. Its central dual-pedestal configuration maximizes knee room and allows seamless placement of dining chairs without leg obstruction.',
    material: 'Burmese Golden Teak & Core Architectural Hardwood',
    finishes: ['Golden Teak Matte', 'Smoked Walnut', 'Nordic Raw Ash'],
    dimensions: {
      width: '86 inches (218 cm)',
      depth: '42 inches (107 cm)',
      height: '30 inches (76 cm)',
      weight: '78 kg'
    },
    features: [
      'Comfortably seats 6 to 8 guests with unobstructed perimeter seating',
      'Hand-carved fluted cylindrical twin bases with weighted interior balance',
      'Heat-resistant, water-resistant matte micro-ceramic polyurethane finish',
      'Micro-chamfered edge profile crafted by master wood turners'
    ],
    deliveryInfo: 'Dispatched via air-ride freight. Assembled in under 20 minutes by our dedicated installation team.',
    careInstructions: 'Use coasters and heat-resistant placemats for hot pans. Clean daily with lukewarm water and a drop of neutral olive-oil soap.',
    isFeatured: true,
    isNewArrival: true,
    leadTime: 'Made to Order / In Stock Batches Available',
    warranty: '10-Year Warranty on Structural Joinery'
  },
  {
    id: 'prod-oslo-accent-chair',
    name: 'Oslo Accent Chair',
    tagline: 'Ergonomic sculptured lounge armchair in Italian full-grain leather & walnut',
    category: 'Living Room',
    categorySlug: 'living-room',
    price: 32500,
    originalPrice: 38000,
    rating: 4.9,
    reviewsCount: 51,
    images: [
      'https://images.unsplash.com/photo-1580481077195-c93d937a075e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'An iconic silhouette combining organic curved arms, pitch-angled seat geometry, and supple vegetable-tanned leather upholstery.',
    fullDescription: 'The Oslo Accent Chair pairs classic mid-century lines with tactile luxury. Curved walnut armrests flow seamlessly into tapered splayed legs, creating a dynamic visual stance. The ergonomic 105-degree recline angle cradles the lumbar naturally, making it the supreme reading chair for study nooks and living rooms alike.',
    material: 'Solid American Walnut & Semi-Aniline Vintage Leather',
    finishes: ['Cognac Saddle Leather', 'Olive Velvet', 'Ivory Cashmere-Boucle'],
    dimensions: {
      width: '32 inches (81 cm)',
      depth: '34 inches (86 cm)',
      height: '33 inches (84 cm)',
      weight: '19 kg'
    },
    features: [
      'Steam-bent solid walnut backrest spine and organic armrests',
      'High-resilience foam core with memory foam lumbar pocket',
      'Double saddle-stitched borders for heirloom endurance',
      'Felt glide pads under all legs to protect hardwood and marble floors'
    ],
    deliveryInfo: 'Pre-assembled in custom reinforced wooden crate. Ready to unbox and enjoy.',
    careInstructions: 'Nourish leather once every 6 months with natural leather cream. Dust wood with a dry lint-free cloth.',
    isFeatured: true,
    isBestSeller: true,
    leadTime: 'Immediate Dispatch',
    warranty: '5-Year Frame & Leather Warranty'
  },
  {
    id: 'prod-nova-tv-console',
    name: 'Nova TV Console',
    tagline: 'Slatted tambour sliding doors with hidden acoustic ventilation channels',
    category: 'Living Room',
    categorySlug: 'living-room',
    price: 38900,
    originalPrice: 44000,
    rating: 4.7,
    reviewsCount: 22,
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Low-profile media credenza featuring smooth slatted tambour tracks, acoustic mesh-lined compartments, and concealed cable passages.',
    fullDescription: 'Keep entertainment clutter discreetly organized with the Nova TV Console. Its precision-milled wooden slatted doors glide effortlessly on recessed brass tracks, allowing infrared remote signals to pass through uninterrupted. Inside, adjustable shelving and rear cutaways accommodate soundbars, gaming rigs, and high-fidelity amplifiers.',
    material: 'Natural Walnut Veneer on Kiln-Dried Hardwood Core with Brass Inlays',
    finishes: ['Warm Walnut', 'Muted Teak', 'Blackened Ash'],
    dimensions: {
      width: '74 inches (188 cm)',
      depth: '18 inches (46 cm)',
      height: '21 inches (53 cm)',
      weight: '48 kg'
    },
    features: [
      'IR-friendly slatted door tracks that hide media peripherals',
      'Rear ventilation louvers prevent component overheating',
      'Internal cord organization spine with magnetic access panel',
      'Solid turned wood legs with solid brushed brass ferrules'
    ],
    deliveryInfo: 'Delivered fully assembled. Our technicians assist in initial component cable routing.',
    careInstructions: 'Dust tambour slats with soft feather duster or vacuum brush. Wipe surfaces with dry cotton cloth.',
    isFeatured: true,
    isNewArrival: false,
    leadTime: '3-4 Business Days',
    warranty: '5-Year Warranty'
  },
  {
    id: 'prod-milano-coffee-table',
    name: 'Milano Coffee Table',
    tagline: 'Dual-tiered nesting tables featuring solid travertine stone and oak',
    category: 'Living Room',
    categorySlug: 'living-room',
    price: 27900,
    originalPrice: 32000,
    rating: 4.9,
    reviewsCount: 34,
    images: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A harmonious pairing of organic honed travertine and circular solid oak pedestal base that slide gracefully to expand table surface.',
    fullDescription: 'The Milano Coffee Table set redefines living room versatility. The primary table features a softly honed slab of natural Roman travertine with unique geological sediment patterns, nested over a secondary tiered disc crafted from brushed American White Oak.',
    material: 'Natural Honed Travertine & Solid American White Oak',
    finishes: ['Ivory Travertine & Natural Oak', 'Walnut & Sand Stone'],
    dimensions: {
      width: '38 inches (96 cm) primary / 28 inches (71 cm) secondary',
      depth: '38 inches (96 cm)',
      height: '16.5 inches (42 cm)',
      weight: '52 kg'
    },
    features: [
      'Set of two independent multi-height nesting tables',
      'Sealed matte travertine surface impervious to water rings and oil stains',
      'Under-table felt glides for effortless rearrangement without floor scratching'
    ],
    deliveryInfo: 'Packed in shock-resistant styrofoam crate with white glove unboxing included.',
    careInstructions: 'Wipe spills immediately. Use stone-safe pH neutral cleaner for travertine top.',
    isFeatured: true,
    isSpecialOffer: true,
    discountPercentage: 12,
    leadTime: 'Immediate Dispatch',
    warranty: '5-Year Warranty'
  },
  {
    id: 'prod-cedar-bookshelf',
    name: 'Cedar Bookshelf',
    tagline: 'Architectural open-shelf display unit with staggered geometric dividers',
    category: 'Storage',
    categorySlug: 'storage',
    price: 46500,
    originalPrice: 53000,
    rating: 4.8,
    reviewsCount: 19,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'An expansive open-air partition library crafted with solid cedar and oak uprights, perfect for literature collections, ceramics, and botanicals.',
    fullDescription: 'The Cedar Bookshelf brings rhythm and spatial poetry to any room. Its asymmetrical compartment grid allows you to showcase treasured monographs, sculpture pieces, and lush trailing plants. Can be positioned against a wall or used as an elegant open-plan room divider.',
    material: 'Himalayan Cedarwood & European White Oak',
    finishes: ['Natural Cedar Honey', 'Smoked Espresso Oak', 'Nordic Raw Sand'],
    dimensions: {
      width: '56 inches (142 cm)',
      depth: '16 inches (41 cm)',
      height: '76 inches (193 cm)',
      weight: '62 kg'
    },
    features: [
      'Double-sided finished construction enables use as open space divider',
      'Reinforced shelf capacity supports up to 45 kg per tier without sagging',
      'Includes concealed anti-tip wall anchor hardware kit',
      'Naturally aromatic cedar backplate repels pests and moth damage'
    ],
    deliveryInfo: 'Professional in-home assembly and wall-safety anchoring included.',
    careInstructions: 'Dust regularly with a dry soft cloth. Avoid chemical solvent polishes.',
    isFeatured: true,
    leadTime: '4-6 Business Days',
    warranty: '10-Year Craftsmanship Guarantee'
  },
  {
    id: 'prod-royale-wardrobe',
    name: 'Royale Wardrobe',
    tagline: 'Master wardrobe with fluted cane door inlays and solid brass hardware',
    category: 'Storage',
    categorySlug: 'storage',
    price: 89000,
    originalPrice: 102000,
    rating: 4.9,
    reviewsCount: 31,
    images: [
      'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A grand 3-door wardrobe combining natural woven rattan ventilation weave, soft-close velvet-lined drawers, and integrated LED sensor lighting.',
    fullDescription: 'The Royale Wardrobe is an heirloom masterwork. Hand-woven rattan door panels maintain fresh internal air circulation for fine fabrics while delivering timeless tropical elegance. The interior features solid cedar hanging rails, dedicated jewelry organizer trays, and soft-closing Blum hardware.',
    material: 'Grade-A Solid Teak, Natural Indonesian Rattan & Solid Brass',
    finishes: ['Aged Teak & Natural Cane', 'Dark Walnut & Bleached Cane'],
    dimensions: {
      width: '68 inches (173 cm)',
      depth: '24 inches (61 cm)',
      height: '84 inches (213 cm)',
      weight: '115 kg'
    },
    features: [
      'Breathable natural woven cane door panels prevent mustiness',
      'Internal warm-white LED motion sensor illumination bars',
      'Velvet-lined soft-close organizer drawers for watches and jewelry',
      'Full-length internal dressing mirror with beveled edge'
    ],
    deliveryInfo: 'Delivered in custom modular sections and assembled in your bedroom by master installers.',
    careInstructions: 'Gently mist rattan panels once a year to maintain flexibility. Polish brass handles with dry micro-cloth.',
    isFeatured: true,
    isBestSeller: true,
    leadTime: '7-10 Business Days',
    warranty: '10-Year Solid Wood Warranty'
  },
  {
    id: 'prod-kanso-desk',
    name: 'Kanso Minimalist Desk',
    tagline: 'Executive home office desk with integrated cable management & solid oak drawers',
    category: 'Office Furniture',
    categorySlug: 'office',
    price: 36000,
    originalPrice: 42000,
    rating: 4.9,
    reviewsCount: 27,
    images: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A clean Japandi workstation featuring chamfered edges, dual soft-close drawers with leather pulls, and a hidden power bay.',
    fullDescription: 'Designed for deep focus, the Kanso Desk removes visual noise from your workspace. A discreet flip-top timber channel conceals power strips, chargers, and monitor cables, while slim dovetail-jointed drawers keep notebook essentials right at your fingertips.',
    material: 'Solid American White Oak & Vegetable-Tanned Saddle Leather',
    finishes: ['Nordic White Oak', 'Deep Smoked Oak'],
    dimensions: {
      width: '58 inches (147 cm)',
      depth: '28 inches (71 cm)',
      height: '30 inches (76 cm)',
      weight: '44 kg'
    },
    features: [
      'Built-in rear power dock cover with brush grommet for clean cable routing',
      'Dovetail joinery drawers with hand-stitched leather pull tabs',
      'Beveled ergonomic wrist edge reduces forearm fatigue during long work sessions'
    ],
    deliveryInfo: 'Includes assembly and leveling in your home office.',
    careInstructions: 'Clean desk mat and surface with damp microfiber cloth. Treat oak with wax balm twice yearly.',
    isFeatured: false,
    isNewArrival: true,
    leadTime: '3-5 Business Days',
    warranty: '5-Year Warranty'
  },
  {
    id: 'prod-solara-lounger',
    name: 'Solara Teak Lounger',
    tagline: 'Weatherproof all-season teak lounger with quick-dry marine upholstery',
    category: 'Outdoor Furniture',
    categorySlug: 'outdoor',
    price: 34500,
    originalPrice: 39000,
    rating: 4.8,
    reviewsCount: 16,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Luxury outdoor sunbed made from high-oil Indonesian plantation teak with 5-position adjustable backrest and Sunbrella canvas.',
    fullDescription: 'Crafted to withstand direct monsoon showers and summer sun, the Solara Lounger pairs naturally weather-resistant Indonesian teak with reticulated quick-dry foam. Over time, the teak will develop a silver-grey patina, or can be oiled to preserve its golden honey richness.',
    material: 'Grade-A Plantation Teakwood & Sunbrella Marine-Grade Fabric',
    finishes: ['Natural Sand', 'Charcoal Heather', 'Terracotta'],
    dimensions: {
      width: '78 inches (198 cm)',
      depth: '28 inches (71 cm)',
      height: '14 inches (36 cm)',
      weight: '28 kg'
    },
    features: [
      'Marine-grade stainless steel adjustment hardware with 5 recline stops',
      'Recessed rear timber wheels for effortless poolside repositioning',
      'Water-repellent, UV-resistant fabric with 5-year color fastness'
    ],
    deliveryInfo: 'Delivered in weatherproof protective cover directly to your terrace or garden.',
    careInstructions: 'Hose down with fresh water. Apply teak protector oil before rainy seasons.',
    isFeatured: false,
    leadTime: '3-4 Business Days',
    warranty: '5-Year All-Weather Guarantee'
  },
  {
    id: 'prod-elysian-dining-bench',
    name: 'Elysian Dining Bench',
    tagline: 'Solid slab dining bench with soft upholstered cushion & bridle leather straps',
    category: 'Dining Room',
    categorySlug: 'dining-room',
    price: 24500,
    originalPrice: 28000,
    rating: 4.9,
    reviewsCount: 18,
    images: [
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'The companion seating piece to modern dining spaces, featuring contoured timber seat rails and removable linen cushion straps.',
    fullDescription: 'Crafted from matching solid teak, the Elysian Bench provides flexible dining seating for up to 3 adults or 4 children. Its secure leather straps anchor a plush linen cushion that can be removed for an all-wood look.',
    material: 'Solid Indian Teakwood & Belgian Textured Linen',
    finishes: ['Golden Teak & Oatmeal', 'Smoked Walnut & Grey Linen'],
    dimensions: {
      width: '64 inches (163 cm)',
      depth: '16 inches (41 cm)',
      height: '18 inches (46 cm)',
      weight: '22 kg'
    },
    features: [
      'Seamless companion fit for the Haven Dining Table',
      'Heavy-duty brass buckle straps for quick cushion removal and cleaning',
      'Hand-rounded comfort edges'
    ],
    deliveryInfo: 'Dispatched with protective wrapping; fully assembled.',
    careInstructions: 'Spot clean linen fabric with damp cloth. Dry immediately.',
    isFeatured: false,
    leadTime: '2-3 Business Days',
    warranty: '5-Year Warranty'
  },
  {
    id: 'prod-artisan-nightstand',
    name: 'Artisan Bedside Nightstand',
    tagline: 'Floating drawer bedside companion with brass handle & hidden charging slot',
    category: 'Bedroom',
    categorySlug: 'bedroom',
    price: 18500,
    originalPrice: 21000,
    rating: 4.8,
    reviewsCount: 33,
    images: [
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Compact bedroom bedside table showcasing solid joinery, smooth soft-close drawer, and lower display shelf for books.',
    fullDescription: 'The Artisan Nightstand brings quiet elegance to the bedside. Features a discreet rear cable channel allowing phones and reading lamps to be charged without wire mess.',
    material: 'Solid Seasoned Sheesham & Brushed Solid Brass',
    finishes: ['Natural Honey Walnut', 'Smoked Espresso'],
    dimensions: {
      width: '20 inches (51 cm)',
      depth: '17 inches (43 cm)',
      height: '22 inches (56 cm)',
      weight: '14 kg'
    },
    features: [
      'Soft-close undermount ball-bearing drawer slide',
      'Integrated rear charging notch for clutter-free device cords',
      'Open bottom niche sized for art magazines and water carafes'
    ],
    deliveryInfo: 'Pre-assembled in shock-absorbent carton.',
    careInstructions: 'Dust with soft dry cloth weekly. Avoid abrasive pads.',
    isFeatured: false,
    leadTime: 'Immediate Dispatch',
    warranty: '5-Year Warranty'
  }
];
