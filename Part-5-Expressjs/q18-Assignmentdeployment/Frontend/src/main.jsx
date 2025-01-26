import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <createBrowserRouter>
//     <StrictMode>
//       <App />
//     </StrictMode>
//   </createBrowserRouter>
// );
//----------------------------------------------------

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // Add more routes here if needed
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
