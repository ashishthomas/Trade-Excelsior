import React from 'react'
import CoreWatchlist from '../User/CoreWatchlist/CoreWatchlist'
import Onboarding from '../User/OnBoardingChecklist/Onboarding';
import MyBooks from '../User/MyBooks/MyBooks';
import SuccessStory from '../User/SuccessStories/SuccessStory';
import Support from '../User/Support/Support';
import References from '../User/References/References';
import { createBrowserRouter } from 'react-router-dom';
import App2 from '../App2';



export const Userapproute = createBrowserRouter([
    {
      path: "/",
      element: <App2 />,
      children: [
        {
          path: "core",
          element: <CoreWatchlist />,
        },
        {
          path: "/",
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
          path : "references",
          element: <References />, 
        }
      ],
    },
  ]);