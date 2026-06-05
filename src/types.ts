/**
 * Types & Interfaces for Éclat Wear Premium prototype
 */

export interface ProductShade {
  id: string;
  name: string;
  hex: string;
  className: string; /* Tailwind border/background combinations */
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  tag?: string;
  technology: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  shades: ProductShade[];
}

export interface CartItem {
  product: Product;
  selectedShade: ProductShade;
  quantity: number;
}
