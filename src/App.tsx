import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAppSelector } from "./store/hooks";
import { selectAuth } from "./store/auth-slice";
import AuthPage from "./pages/Auth";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmarked from "./pages/Bookmarked";
import GlobalStyles from "./styles/Global";
import { action as authAction } from "./pages/Auth";
import { loader as tokenLoader } from "./util/auth";

import data from "../../starter-code/starter-code/data.json";

const url = `https://entertainify-e4d16-default-rtdb.europe-west1.firebasedatabase.app/recommended.json`;

const movies = data.filter(item => item.category === "Movie");
const series = data.filter(item => item.category === "TV Series");
const bookmarked = data.filter(item => item.isBookmarked === true);
const isTrending = data.filter(item => item.isTrending === true);

function App() {
  const clientIsAuthenticated = useAppSelector(selectAuth);

  // useEffect(() => {
  //   async function sendData() {
  //     const response = fetch(url, {
  //       method: "put",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     console.log(response);
  //   }
  //   sendData();
  // }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      loader: tokenLoader,
      children: [
        { path: "home", element: <Home /> },
        { path: "movies", element: <Movies /> },
        { path: "series", element: <Series /> },
        { path: "bookmarked", element: <Bookmarked /> },
      ],
    },
    { path: "auth", element: <AuthPage />, action: authAction },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
