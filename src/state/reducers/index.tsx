import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import unregCartReducer from "./unregCartReducer";

const reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  auth: authReducer,
  cart: cartReducer,
  user: userReducer,
  unregCart: unregCartReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
