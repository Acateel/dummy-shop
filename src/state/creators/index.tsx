import { AxiosError } from "axios";
import _ from "lodash";
import { Dispatch } from "react";
import dummyJSON from "../../api/dummyJSON";
import { Action } from "../actions";
import { RootState } from "../store";
import { ActionType } from "../types";

export const fetchProducts = () => async (dispatch: Dispatch<Action>) => {
  const products = await dummyJSON
    .get("/products")
    .then((response) => response.data.products);
  dispatch({
    type: ActionType.FETCH_PRODUCTS,
    payload: products,
  });
};

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

export const fetchCategories = () => async (dispatch: Dispatch<Action>) => {
  const categories = await dummyJSON
    .get("/products/categories")
    .then((response) => response.data);
  dispatch({
    type: ActionType.FETCH_CATEGORIES,
    payload: categories,
  });
};

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

export const logoutAuthUser = () => ({
  type: ActionType.LOGOUT_USER,
});

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

export const removeUserCart = () => ({
  type: ActionType.REMOVE_USER_CART,
});

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

export const removeUser = () => ({
  type: ActionType.REMOVE_USER,
});

export const addIntoCart =
  (productId: number, quantity: number) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const isLogged = _.hasIn(getState().auth, "id");
    if (isLogged) {
      // add into user cart, dont realise now
    } else {
      dispatch({
        type: ActionType.ADD_INTO_ONREG_CART,
        payload: { id: productId, quantity: quantity },
      });
    }
  };
