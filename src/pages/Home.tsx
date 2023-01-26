import { defer, redirect } from "react-router-dom";
import styled from "styled-components";
import { firebaseConfig } from "../firebase";
import { getAuthToken, redirectIfNotAuthenticated } from "../util/auth";

const Home = () => {
  return (
    <HomePage>
      <Trending>
        <h1>Trending</h1>
      </Trending>
      <Recommended>
        <h1>Recommended for you</h1>
      </Recommended>
    </HomePage>
  );
};

export default Home;

export async function loader() {
  const isAuthenticated = getAuthToken(); // returns null if no token is stored in LocalStorage

  if (!isAuthenticated) {
    return redirect("/auth?mode=login");
  }

  return defer({
    trending: loadTrending(),
    recommended: loadRecommended(),
  });
}

async function loadTrending() {
  try {
    const res = await fetch(firebaseConfig.dbIsTrending);

    if (!res.ok) {
      throw new Error("Could not fetch trending movies and series");
    }

    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function loadRecommended() {}

const HomePage = styled.div`
  padding: 2.5rem;
`;

const Trending = styled.div``;
const Recommended = styled.div``;
