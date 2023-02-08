import { ActionType, Product, AuthUser } from "../types";

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

export type Action =
  | FetchProducts
  | FetchProduct
  | FetchCategories
  | AppendProducts
  | LoginUser
  | LogoutUser;
