<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
=======
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
>>>>>>> 9a10321b6ea1a23151ebefe99c4fb7bc0258f7a7
);
