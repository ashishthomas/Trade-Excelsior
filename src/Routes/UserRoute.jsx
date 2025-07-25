import React from "react";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

const App2 = lazy(() => import("../App2"));
const CoreWatchlist = lazy(() => import("../User/CoreWatchlist/CoreWatchlist"));
const Onboarding = lazy(() => import("../User/OnBoardingChecklist/Onboarding"));
const MyBooks = lazy(() => import("../User/MyBooks/MyBooks"));
const SuccessStory = lazy(() => import("../User/SuccessStories/SuccessStory"));
const Support = lazy(() => import("../User/Support/Support"));
const References = lazy(() => import("../User/References/References"));

const MuiLoader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "40vh",
    }}
  >
    <CircularProgress color="primary" size={60} thickness={4} />
  </Box>
);

export const Userapproute = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<MuiLoader />}>
        <App2 />
      </Suspense>
    ),
    children: [
      {
        path: "core",
        element: (
          <Suspense fallback={<MuiLoader />}>
            <CoreWatchlist />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<MuiLoader />}>
            <Onboarding />
          </Suspense>
        ),
      },
      {
        path: "book",
        element: (
          <Suspense fallback={<MuiLoader />}>
            <MyBooks />
          </Suspense>
        ),
      },
      {
        path: "success",
        element: (
          <Suspense fallback={<MuiLoader />}>
            <SuccessStory />
          </Suspense>
        ),
      },
      {
        path: "support",
        element: (
          <Suspense fallback={<MuiLoader />}>
            <Support />
          </Suspense>
        ),
      },
      {
        path: "references",
        element: (
          <Suspense fallback={<MuiLoader />}>
            <References />
          </Suspense>
        ),
      },
    ],
  },
]);
