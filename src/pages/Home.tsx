import { Suspense } from "react";
import { Await, defer, redirect, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import RecommendedContent from "../components/Content/RecommendedContent";
import TrendingContent from "../components/Content/TrendingContent";
import { firebaseConfig } from "../firebase";
import { Trending, Data as Recommended } from "../models/moviesAndSeries";
import { getAuthToken } from "../util/auth";

const Home = () => {
  const { trending } = useLoaderData() as { trending: Promise<Trending[]> };
  const { recommended } = useLoaderData() as { recommended: Promise<Recommended[]> };

  return (
    <HomePage>
      <TrendingSection>
        <h1>Trending</h1>
        <Suspense>
          <Await resolve={trending}>{loadedContent => <TrendingContent content={loadedContent} />}</Await>
        </Suspense>
      </TrendingSection>
      <RecommendedSection>
        <h1>Recommended for you</h1>
        <Suspense>
          <Await resolve={recommended}>
            {loadedContent => <RecommendedContent content={loadedContent} />}
          </Await>
        </Suspense>
      </RecommendedSection>
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
    const resData = await res.json();

    return resData;
  } catch (err) {
    console.log(err);
  }
}

async function loadRecommended() {
  try {
    const res = await fetch(firebaseConfig.dbRecommended);

    if (!res.ok) {
      throw new Error("Could not fetch recommended movies and series");
    }

    const resData = await res.json();

    return resData;
  } catch (err) {
    console.log(err);
  }
}

const HomePage = styled.div`
  padding: 2.5rem;
`;

const TrendingSection = styled.section``;
const RecommendedSection = styled.section``;
