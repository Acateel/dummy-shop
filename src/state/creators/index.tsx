import { AxiosError } from "axios";
import _ from "lodash";
import { Dispatch } from "react";
import dummyJSON from "../../api/dummyJSON";
import { Action } from "../actions";
import { RootState } from "../store";
import { ActionType, Cart } from "../types";

/**
 * Fetch Products list from api
 * @returns Action FETCH_PRODUCTS in redux dispatch
 */
export const fetchProducts = () => async (dispatch: Dispatch<Action>) => {
  const products = await dummyJSON
    .get("/products")
    .then((response) => response.data.products);
  dispatch({
    type: ActionType.FETCH_PRODUCTS,
    payload: products,
  });
};

/**
 * Search product in api by term
 * @param term term for search
 * @returns Action FETCH_PRODUCTS in redux dispatch
 */
export const searchProducts =
  (term: string) => async (dispatch: Dispatch<Action>) => {
    const products = await dummyJSON
      .get("/products/search", {
        params: {
          q: term,
        },
      })
      .then((response) => response.data.products);
    dispatch({
      type: ActionType.FETCH_PRODUCTS,
      payload: products,
    });
  };

/**
 * Fetch product from api by product Id
 * @param id product id
 * @returns Action FETCH_PRODUCT with product in redux dispatch
 */
export const fetchProduct =
  (id: number) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const product =
      getState().products[id] ??
      (await dummyJSON
        .get(`/products/${id}`)
        .then((response) => response.data));
    dispatch({
      type: ActionType.FETCH_PRODUCT,
      payload: product,
    });
  };

/**
 * Fetch categories array from api
 * @returns Action FETCH_CATEGORIES with array in redux dispath
 */
export const fetchCategories = () => async (dispatch: Dispatch<Action>) => {
  const categories = await dummyJSON
    .get("/products/categories")
    .then((response) => response.data);
  dispatch({
    type: ActionType.FETCH_CATEGORIES,
    payload: categories,
  });
};

/**
 * Fetch products by category
 * @param category category from categories array
 * @returns Action FETCH_PRODUCTS with Products list in redux dispath
 */
export const fetchProductsByCategory =
  (category: string) => async (dispatch: Dispatch<Action>) => {
    const products = await dummyJSON
      .get(`/products/category/${category}`)
      .then((response) => response.data.products);
    dispatch({
      type: ActionType.FETCH_PRODUCTS,
      payload: products,
    });
  };

/**
 * Fetch more Products from api
 * @param limit how many products takes. use limit=0 to get all items
 * @param skip skip first N elements
 * @returns Action APPEND_PRODUCTS with products for redux dispath
 */
export const appendProductsByLimit =
  (limit: number, skip: number) => async (dispatch: Dispatch<Action>) => {
    const products = await dummyJSON
      .get("/products", { params: { limit, skip } })
      .then((response) => response.data.products);
    dispatch({
      type: ActionType.APPEND_PRODUCTS,
      payload: products,
    });
  };

/**
 * Login user in api
 * @param username
 * @param password
 * @returns Action LOGIN_USER with data or with error if login dont access
 */
export const loginAuthUser =
  (username: string, password: string) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const authUser = await dummyJSON
        .post("/auth/login", { username, password })
        .then((response) => response.data);
      dispatch({
        type: ActionType.LOGIN_USER,
        payload: authUser,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({
          type: ActionType.LOGIN_USER,
          payload: { error: true },
        });
      } else {
        throw error;
      }
    }
  };

/**
 * Logout User (remove user from Redux store)
 * @returns Action LOGOUT_USER
 */
export const logoutAuthUser = () => ({
  type: ActionType.LOGOUT_USER,
});

/**
 * Take User Cart from api
 * @param userId UserId for find user cart
 * @returns Action FETCH_USER_CART with cart
 */
export const fetchUserCart =
  (userId: number) => async (dispatch: Dispatch<Action>) => {
    const cart = await dummyJSON
      .get(`/carts/user/${userId}`)
      .then((response) => response.data.carts);

    dispatch({
      type: ActionType.FETCH_USER_CART,
      payload: cart,
    });
  };

/**
 * Remove User Cart
 * @returns Action REMOVE_USER_CART
 */
export const removeUserCart = () => ({
  type: ActionType.REMOVE_USER_CART,
});

/**
 * Take all information about user
 * @param userId user id for search
 * @returns Action FETCH_USER with user data
 */
export const fetchUser =
  (userId: number) => async (dispatch: Dispatch<Action>) => {
    const user = await dummyJSON
      .get(`/users/${userId}`)
      .then((response) => response.data);

    dispatch({
      type: ActionType.FETCH_USER,
      payload: user,
    });
  };

/**
 * Remove User in Redux store
 * @returns Action REMOVE_USER
 */
export const removeUser = () => ({
  type: ActionType.REMOVE_USER,
});

/**
 * Add product in Cart
 * @param productId product's Id
 * @param quantity product's quantity
 * @returns Action ADD_INTO_USER_CART if user logged or ADD_INTO_UNREG_CART if doesn't
 */
export const addIntoCart =
  (productId: number, quantity: number) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const isLogged = _.hasIn(getState().auth, "id");
    if (isLogged) {
      const oldCart: Cart = getState().cart[0];
      if (_.hasIn(oldCart, "id")) {
        const newCart = await dummyJSON
          .put(`/carts/${oldCart.id}`, {
            merge: true,
            products: [
              {
                id: productId,
                quantity: quantity,
              },
            ],
          })
          .then((response) => response.data);
        dispatch({
          type: ActionType.ADD_INTO_USER_CART,
          payload: newCart,
        });
      }
    } else {
      dispatch({
        type: ActionType.ADD_INTO_UNREG_CART,
        payload: { id: productId, quantity: quantity },
      });
    }
  };

/**
 * Add Unreg Cart in Api
 * @returns Action FETCH_UNREG_CART with Cart
 */
export const fetchUnregCart =
  () => async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const unregCart = getState().unregCart;
    const cart: Cart = await dummyJSON
      .post("/carts/add", unregCart)
      .then((response) => response.data);
    dispatch({
      type: ActionType.FETCH_UNREG_CART,
      payload: cart,
    });
  };

/**
 * Remove unreg Cart in Redux store
 * @returns Action REMOVE_UNREG_CART
 */
export const removeUnregCart = () => ({
  type: ActionType.REMOVE_UNREG_CART,
});
