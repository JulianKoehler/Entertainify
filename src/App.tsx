import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAppSelector } from "./store/hooks";
import { selectAuth } from "./store/auth-slice";
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

// import data from "../../starter-code/starter-code/data.json";
// import { firebaseConfig } from "./firebase";

// const movies = data.filter(item => item.category === "Movie");
// const series = data.filter(item => item.category === "TV Series");
// const bookmarked = data.filter(item => item.isBookmarked === true);
// const isTrending = data.filter(item => item.isTrending === true);
// const recommended = data.filter(item => item.isTrending === false);

function App() {
  const clientIsAuthenticated = useAppSelector(selectAuth);

  // useEffect(() => {
  //   async function sendData() {
  //     const response = fetch(firebaseConfig.dbRecommended, {
  //       method: "put",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(recommended),
  //     });
  //     console.log(response);
  //   }
  //   sendData();
  // }, []);

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
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
