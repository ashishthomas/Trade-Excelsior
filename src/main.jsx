import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Users from "./Admin/Users.jsx";
import CoreWatchlist from "./Admin/CoreWatchlist.jsx";
import Onboarding from "./Admin/Onboarding.jsx";
import MyBooks from "./Admin/MyBooks.jsx";
import SuccessStory from "./Admin/SuccessStory.jsx";
import Support from "./Admin/Support.jsx";
import Dashboard from "./Admin/Dashboard/Dashboard.jsx";
import References from "./Admin/References.jsx";

const approute = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        // index: true, 
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "core",
        element: <CoreWatchlist />,
      },
      {
        path: "onboarding",
        element: <Onboarding />,
      },
      {
        path: "book",
        element: <MyBooks />,
      },
      {
        path: "success",
        element: <SuccessStory />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path:"references",
        element:<References/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={approute} />
  </StrictMode>
);
