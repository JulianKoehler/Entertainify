import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppSelector } from "./store/hooks";
import { selectAuth } from "./store/auth-slice";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SharedContent from "./pages/SharedContent";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmarked from "./pages/Bookmarked";
import GlobalStyles from "./styles/Global";
import data from "../../starter-code/starter-code/data.json";

const url = `https://entertainify-e4d16-default-rtdb.europe-west1.firebasedatabase.app/movies.json`;
const PUT_OPTIONS = {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
};

function App() {
  const clientIsAuthenticated = useAppSelector(selectAuth);

  useEffect(() => {
    async function sendData() {
      await fetch(url, PUT_OPTIONS);
    }
    // sendData();
  }, []);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route
            path="/"
            element={<SharedContent />}>
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
