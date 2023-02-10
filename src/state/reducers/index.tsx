import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  auth: authReducer,
  cart: cartReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
