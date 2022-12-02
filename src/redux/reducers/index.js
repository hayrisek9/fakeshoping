

import { combineReducers } from "redux";
// import { productsReducer, selectedProductsReducer } from "./productsReducer";
import { productsReducer, selectedProductsReducer } from "./productReducers";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;
