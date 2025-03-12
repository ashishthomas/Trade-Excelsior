import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Admin/Users/Users.jsx";
import "./index.css";
import App from "./App.jsx";
import CoreWatchlist from "./Admin/CoreWatchlist/CoreWatchlist.jsx";
import MyBooks from "./Admin/Books/MyBooks.jsx";
import Onboarding from "./Admin/OnBoardingChecklist/Onboarding.jsx";

import SuccessStory from "./Admin/SuccessStories/SuccessStory.jsx";

import Dashboard from "./Admin/Dashboard/Dashboard.jsx";

import Profilemain from "./Admin/Profile/Profilemain.jsx";
import ChangePassword from "./Admin/Profile/ChangePassword.jsx";

import References from "./Admin/References/References.jsx";
import Support from "./Admin/Support/Support.jsx";

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
        path: "references",
        element: <References />,
      },
    ],
  },
  {
    path: "profilemain",
    element: <Profilemain />,
  },
  {
    path: "changepassword",
    element: <ChangePassword></ChangePassword>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={approute} />
  </StrictMode>
);
