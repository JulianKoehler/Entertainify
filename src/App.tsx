import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/Auth";
import Home, { loader as homeLoader } from "./pages/Home";
import RootLayout from "./pages/Root";
import Movies, { loader as moviesLoader } from "./pages/Movies";
import Series, { loader as seriesLoader } from "./pages/Series";
import Bookmarked, { loader as bookmarkedLoader } from "./pages/Bookmarked";
import GlobalStyles from "./styles/Global";
import { action as authAction } from "./pages/Auth";
import { loader as tokenLoader } from "./util/auth";
import { action as logoutAction } from "./pages/Logout";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      loader: tokenLoader,
      children: [
        { path: "home", element: <Home />, loader: homeLoader },
        { path: "movies", element: <Movies />, loader: moviesLoader },
        { path: "series", element: <Series />, loader: seriesLoader },
        { path: "bookmarked", element: <Bookmarked />, loader: bookmarkedLoader },
      ],
    },
    { path: "auth", element: <AuthPage />, action: authAction },
    { path: "logout", action: logoutAction },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
