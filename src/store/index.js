// get these method from redux library
// using combine because I want to use more than one reducer and redux does not except more than one so I will combine them in one reducer
import { createStore, combineReducers } from "redux";

// This dependency enables the Redux Dev Tools in your chrome browser
import { composeWithDevTools } from 'redux-devtools-extension';

//Import the reducers 
import productsReducer from "./products";
import categoriesReducer from "./categories";
import cartReducer from './cart'

// combine them 
let reducers = combineReducers({
  productsReducer,
  categoriesReducer,
  cartReducer
})


// create store 
const store = () => {
  return createStore(reducers, composeWithDevTools())//composeWithDevTools()):=> optional
}

export default store();