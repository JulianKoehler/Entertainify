import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useAppSelector } from "./store/hooks";
import { selectAuth } from "./store/auth-slice";
import AuthPage from "./pages/Auth";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmarked from "./pages/Bookmarked";
import GlobalStyles from "./styles/Global";
import data from "../../starter-code/starter-code/data.json";

const url = `https://entertainify-e4d16-default-rtdb.europe-west1.firebasedatabase.app/movies.json`;

function App() {
  const clientIsAuthenticated = useAppSelector(selectAuth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "movies", element: <Movies /> },
        { path: "series", element: <Series /> },
        { path: "bookmarked", element: <Bookmarked /> },
      ],
    },
    { path: "/auth", element: <AuthPage /> },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
