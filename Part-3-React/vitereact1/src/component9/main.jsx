import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppContextProvider } from "./Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,  
);
    