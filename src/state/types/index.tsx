export enum ActionType {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  APPEND_PRODUCTS = "APPEND_PRODUCTS",
  FETCH_PRODUCT = "FETCH_PRODUCT",
  FETCH_CATEGORIES = "FETCH_CATEGORIES",
  LOGIN_USER = "LOGIN_USER",
  LOGOUT_USER = "LOGOUT_USER",
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

export interface AuthUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "none";
  image: string;
  token: string;
}
