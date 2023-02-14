import { Action } from "../actions";
import { ActionType, UnregCart } from "../types";

const initialState: UnregCart = {
  userId: 0,
  products: [],
};

export default (state: UnregCart = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_INTO_ONREG_CART:
      let isFindSameId = false;
      const newState: UnregCart = {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            isFindSameId = true;
            return {
              ...product,
              quantity: product.quantity + action.payload.quantity,
            };
          } else {
            return product;
          }
        }),
      };
      if (!isFindSameId) {
        newState.products.push(action.payload);
      }
      return newState;
    default:
      return state;
  }
};
