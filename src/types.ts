export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'Living Room' | 'Bedroom' | 'Dining Room' | 'Office Furniture' | 'Storage' | 'Outdoor Furniture';
  categorySlug: 'living-room' | 'bedroom' | 'dining-room' | 'office' | 'storage' | 'outdoor';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  description: string;
  fullDescription: string;
  material: string;
  finishes: string[];
  dimensions: {
    width: string;
    depth: string;
    height: string;
    weight?: string;
  };
  features: string[];
  deliveryInfo: string;
  careInstructions: string;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isSpecialOffer?: boolean;
  discountPercentage?: number;
  leadTime: string;
  warranty: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  slug: 'living-room' | 'bedroom' | 'dining-room' | 'office' | 'storage' | 'outdoor';
  tagline: string;
  description: string;
  itemCount: number;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  productName: string;
  verified: boolean;
  avatar: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  durability: string;
  origin: string;
  image: string;
  sustainability: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Orders & Shipping' | 'Customization' | 'Materials & Care' | 'Warranty & Returns';
}

export interface CustomFurnitureForm {
  furnitureType: string;
  woodType: string;
  finish: string;
  length: string;
  width: string;
  height: string;
  budgetRange: string;
  roomType: string;
  additionalNotes: string;
  customerName: string;
  customerPhone: string;
}
