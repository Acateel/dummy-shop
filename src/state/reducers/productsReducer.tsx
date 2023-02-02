import _ from "lodash";
import { Action } from "../actions";
import { ActionType, Product } from "../types";


export default (state: {[key:number]:Product} = {}, action: Action) => {
    switch(action.type) {
        case ActionType.FETCH_PRODUCTS:
            return  {...state, ..._.mapKeys(action.payload, "id")}
        case ActionType.FETCH_PRODUCT:
            return {...state, [action.payload.id]:action.payload}
        default:
            return state
    }
}