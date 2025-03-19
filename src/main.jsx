import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./Users/Users.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import CoreWatchlist from "./Admin/CoreWatchlist.jsx";
<<<<<<< Updated upstream
import Onboarding from "./Admin/Onboarding.jsx";
<<<<<<< Updated upstream
import MyBooks from "./Admin/Books/MyBooks.jsx";
=======
import Onboarding from "./Admin/OnBoardingChecklist/Onboarding.jsx";
import MyBooks from "./Admin/MyBooks.jsx";
>>>>>>> Stashed changes
import SuccessStory from "./Admin/SuccessStory.jsx";
=======
import MyBooks from "./Admin/MyBooks.jsx";
import SuccessStory from "./SuccessStories/SuccessStory.jsx";
>>>>>>> Stashed changes
import Support from "./Admin/Support.jsx";
import Dashboard from "./Admin/Dashboard/Dashboard.jsx";
import References from "./Admin/References.jsx";
import AddCoreWatchList from "./Admin/Dashboard/AddCoreWatchList.jsx";
import AddReferences from "./Admin/Dashboard/AddReferences.jsx";
import AddSuccess from "./Admin/Dashboard/AddSuccess.jsx";


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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={approute} />
    {/* <AddSuccess/> */}
  </StrictMode>
);
