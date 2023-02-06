import { Dispatch } from "react";
import dummyJSON from "../../api/dummyJSON";
import { Action } from "../actions";
import { RootState } from "../reducers";
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
