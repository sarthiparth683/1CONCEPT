// import { createStore } from "redux";
// import counterReducer from "./counterReducer.js";

// const store = createStore(counterReducer);

// export default store;


import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";

// Combine Reducers
const rootReducer = combineReducers({
  counter: counterReducer, // Add other reducers here
});

// Create Store
const store = createStore(rootReducer);

export default store;