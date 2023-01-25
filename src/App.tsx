import { useEffect } from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter, Navigate } from "react-router-dom";
import { useAppSelector } from "./store/hooks";
import { selectAuth } from "./store/auth-slice";
import Login from "./pages/Login";
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

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route
            path="/"
            element={<RootLayout />}>
            <Route
              index
              path="home"
              element={<Home />}
            />
            <Route
              path="movies"
              element={<Movies />}
            />
            <Route
              path="series"
              element={<Series />}
            />
            <Route
              path="bookmarked"
              element={<Bookmarked />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
