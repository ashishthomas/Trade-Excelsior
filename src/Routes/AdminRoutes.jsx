import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";

const App = lazy(() => import("../App"));
const Dashboard = lazy(() => import("../Admin/Dashboard/Dashboard"));
const Users = lazy(() => import("../Admin/Users/Users"));
const CoreWatchlist = lazy(() =>
  import("../Admin/CoreWatchlist/CoreWatchlist")
);
const Onboarding = lazy(() =>
  import("../Admin/OnBoardingChecklist/Onboarding")
);

const SuccessStory = lazy(() => import("../Admin/SuccessStories/SuccessStory"));
const Support = lazy(() => import("../Admin/Support/Support"));
const References = lazy(() => import("../Admin/References/References"));
const Profilemain = lazy(() => import("../Admin/Profile/Profilemain"));
const Login = lazy(() => import("../Admin/Profile/Login"));
const ChangePassword = lazy(() => import("../Admin/Profile/ChangePassword"));

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

const MyBooks = lazy(() => import("../Admin/Books/MyBooks"));

export const Adminapproute = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<MuiLoader />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<MuiLoader />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<MuiLoader />}>
            <Users />
          </Suspense>
        ),
      },
      {
        path: "core",
        element: (
          <Suspense fallback={<MuiLoader />}>
            <CoreWatchlist />
          </Suspense>
        ),
      },
      {
        path: "onboarding",
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
  {
    path: "profilemain",
    element: (
      <Suspense fallback={<MuiLoader />}>
        <Profilemain />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<MuiLoader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "changepassword",
    element: (
      <Suspense fallback={<MuiLoader />}>
        <ChangePassword />
      </Suspense>
    ),
  },
]);
