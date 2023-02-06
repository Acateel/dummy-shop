import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";

const reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
