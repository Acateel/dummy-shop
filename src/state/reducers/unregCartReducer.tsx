import { Action } from "../actions";
import { ActionType, UnregCart, UnregCartProduct } from "../types";

const initialState: UnregCart = {
  userId: 1, // this wrong but api need correct userId
  products: [],
};

/**
 * Create new Unreg Cart and add into new product
 * @param cart old unreg cart
 * @param newProduct prodact what will need add into cart
 * @returns newUnregCart
 */
const setNewUnregCart = (cart: UnregCart, newProduct: UnregCartProduct) => {
  let isFindSameId = false;
  const newState: UnregCart = {
    ...cart,
    products: cart.products.map((product) => {
      if (product.id === newProduct.id) {
        isFindSameId = true;
        return {
          ...product,
          quantity: product.quantity + newProduct.quantity,
        };
      } else {
        return product;
      }
    }),
  };
  if (!isFindSameId) {
    newState.products.push(newProduct);
  }
  return newState;
};

export default (state: UnregCart = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_INTO_UNREG_CART:
      return setNewUnregCart(state, action.payload);
    case ActionType.REMOVE_UNREG_CART:
      return initialState;
    default:
      return state;
  }
};
