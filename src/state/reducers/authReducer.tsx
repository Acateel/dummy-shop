import { Action } from "../actions";
import { ActionType, AuthUser } from "../types";

export default (state: AuthUser | null = null, action: Action) => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
      return action.payload;
    case ActionType.LOGOUT_USER:
      return null;
    default:
      return state;
  }
};
