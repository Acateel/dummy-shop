export enum ActionType {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  APPEND_PRODUCTS = "APPEND_PRODUCTS",
  FETCH_PRODUCT = "FETCH_PRODUCT",
  FETCH_CATEGORIES = "FETCH_CATEGORIES",
  LOGIN_USER = "LOGIN_USER",
  LOGOUT_USER = "LOGOUT_USER",
  FETCH_USER_CART = "FETCH_USER_CART",
  REMOVE_USER_CART = "REMOVE_USER_CART",
  FETCH_USER = "FETCH_USER",
  REMOVE_USER = "REMOVE_USER",
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

export interface BuyProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
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

export interface Cart {
  id: number;
  products: BuyProduct[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: "male" | "female" | "none";
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  domain: string;
  ip: string;
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    department: string;
    name: "Blanda-O'Keefe";
    title: string;
  };
  ein: string;
  ssn: string;
  userAgent: string;
}
