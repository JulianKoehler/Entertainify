import { Suspense } from "react";
import { Await, defer, redirect, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import RecommendedContent from "../components/Content/RecommendedContent";
import TrendingContent from "../components/Content/TrendingContent";
import { firebaseConfig } from "../firebase";
import { Trending, Data as Recommended } from "../models/moviesAndSeries";
import PageContent from "../styles/Pages/PageContent";

const Home = () => {
  const { trending } = useLoaderData() as { trending: Promise<Trending[]> };
  const { recommended } = useLoaderData() as { recommended: Promise<Recommended[]> };

  return (
    <PageContent>
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
    </PageContent>
  );
};

export default Home;

export async function loader() {
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

const TrendingSection = styled.section``;
const RecommendedSection = styled.section``;
