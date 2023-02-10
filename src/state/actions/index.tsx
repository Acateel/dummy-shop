import { ActionType, Product, AuthUser, Cart } from "../types";

interface FetchProducts {
  type: ActionType.FETCH_PRODUCTS;
  payload: Product[];
}

interface AppendProducts {
  type: ActionType.APPEND_PRODUCTS;
  payload: Product[];
}

interface FetchProduct {
  type: ActionType.FETCH_PRODUCT;
  payload: Product;
}

interface FetchCategories {
  type: ActionType.FETCH_CATEGORIES;
  payload: string[];
}

interface LoginUser {
  type: ActionType.LOGIN_USER;
  payload: AuthUser | { error: boolean };
}

interface LogoutUser {
  type: ActionType.LOGOUT_USER;
}

interface FetchUserCart {
  type: ActionType.FETCH_USER_CART;
  payload: Cart;
}

interface RemoveUserCart {
  type: ActionType.REMOVE_USER_CART;
}

export type Action =
  | FetchProducts
  | FetchProduct
  | FetchCategories
  | AppendProducts
  | LoginUser
  | LogoutUser
  | FetchUserCart
  | RemoveUserCart;
