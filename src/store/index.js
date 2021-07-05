

  import { createStore, combineReducers } from "redux";
import productsReducer from "./products";
import categoriesReducer from "./categories";

let reducers = combineReducers({
  productsReducer,
  categoriesReducer
})

const store = () => {
  return createStore(reducers)
}

export default store();