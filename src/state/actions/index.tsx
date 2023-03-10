import {
  ActionType,
  Product,
  AuthUser,
  Cart,
  User,
  UnregCartProduct,
} from "../types";

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

interface FetchUser {
  type: ActionType.FETCH_USER;
  payload: User;
}

interface RemoveUser {
  type: ActionType.REMOVE_USER;
}

interface AddIntoUnregCart {
  type: ActionType.ADD_INTO_UNREG_CART;
  payload: UnregCartProduct;
}

interface FetchUnregCart {
  type: ActionType.FETCH_UNREG_CART;
  payload: Cart;
}

interface RemoveUnregCart {
  type: ActionType.REMOVE_UNREG_CART;
}

interface AddIntoUserCart {
  type: ActionType.ADD_INTO_USER_CART;
  payload: Cart;
}

export type Action =
  | FetchProducts
  | FetchProduct
  | FetchCategories
  | AppendProducts
  | LoginUser
  | LogoutUser
  | FetchUserCart
  | RemoveUserCart
  | FetchUser
  | RemoveUser
  | AddIntoUnregCart
  | FetchUnregCart
  | AddIntoUserCart
  | RemoveUnregCart;
