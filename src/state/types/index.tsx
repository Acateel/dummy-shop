export enum ActionType {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCT = "FETCH_PRODUCT",
  FETCH_CATEGORIES = "FETCH_CATEGORIES"
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
