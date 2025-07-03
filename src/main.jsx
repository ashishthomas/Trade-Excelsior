import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Userapproute } from "./Routes/UserRoute.jsx";
import { Adminapproute } from "./Routes/AdminRoutes.jsx";

const role = localStorage.getItem("role") || "admin";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={role === "admin" ? Adminapproute : Userapproute} />
  </StrictMode>
);
