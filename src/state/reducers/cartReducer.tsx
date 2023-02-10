import { Action } from "../actions";
import { ActionType, Cart } from "../types";

export default (state: Cart[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_USER_CART:
      return action.payload;
    case ActionType.REMOVE_USER_CART:
      return [];
    default:
      return state;
  }
};
