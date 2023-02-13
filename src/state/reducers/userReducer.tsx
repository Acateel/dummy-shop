import { Action } from "../actions";
import { ActionType, User } from "../types";

export default (state: User | {} = {}, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_USER:
      return action.payload;
    case ActionType.REMOVE_USER:
      return {};
    default:
      return state;
  }
};
