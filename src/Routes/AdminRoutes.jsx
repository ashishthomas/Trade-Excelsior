import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../Admin/Dashboard/Dashboard';
import Users from '../Admin/Users/Users';
import CoreWatchlist from '../Admin/CoreWatchlist/CoreWatchlist';
import Onboarding from '../Admin/OnBoardingChecklist/Onboarding';
import MyBooks from '../Admin/Books/MyBooks';
import SuccessStory from '../Admin/SuccessStories/SuccessStory';
import Support from '../Admin/Support/Support';
import References from '../Admin/References/References';
import Profilemain from "../Admin/Profile/Profilemain";
import ChangePassword from "../Admin/Profile/ChangePassword";

export const Adminapproute = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
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
  