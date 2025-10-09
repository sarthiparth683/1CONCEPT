import React from "react";
import App from "./App";
import { ThemeProvider } from "./Context/Theme";
import { UserProvider } from "./Context/User";

const Context1 = () => {
  return (
    <div>
      <ThemeProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
};

export default Context1;  
