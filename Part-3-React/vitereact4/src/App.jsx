// installed two dependencies "react-redux"  and  "redux"
import React from "react";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store} >
      <Home />
    </Provider>
  );
};

export default App;
