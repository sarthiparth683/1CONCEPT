import React from "react";
import { Provider } from "react-redux";
import store from './redux/store'
import Counter from "./Counter";

const Comp12 = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}; 

export default Comp12;
