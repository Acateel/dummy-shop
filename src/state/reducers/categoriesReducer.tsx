import { Action } from "../actions";
import { ActionType } from "../types";

export default (state: string[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};
