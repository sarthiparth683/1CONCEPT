import { createRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./comp/store.jsx";
import App from "./App.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
