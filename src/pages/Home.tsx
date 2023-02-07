import { Suspense } from "react";
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Content from "../components/Content/Content";
import TrendingContent from "../components/Content/TrendingContent";
import { firebaseConfig } from "../firebase";
import useDebounce from "../hooks/useDebounce";
import { Trending, MovieOrSeries as Recommended, MovieOrSeries } from "../models/moviesAndSeries";
import PageContent from "../styles/Pages/PageContent";
import RecommendedSection from "../styles/Pages/RecommendedSection";
import TrendingSection from "../styles/Pages/TrendingSection";

const Home = () => {
  const { trending } = useLoaderData() as { trending: Promise<Trending[]> };
  const { recommended } = useLoaderData() as { recommended: Promise<Recommended[]> };

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search_query")!;
  const debouncedQuery = useDebounce<string>(query, 350);

  return (
    <PageContent>
      {!debouncedQuery && (
        <TrendingSection>
          <h1>Trending</h1>
          <Suspense>
            <Await resolve={trending}>{loadedContent => <TrendingContent content={loadedContent} />}</Await>
          </Suspense>
        </TrendingSection>
      )}
      <RecommendedSection>
        <Suspense>
          <Await resolve={recommended}>
            {loadedContent => (
              <Content
                content={loadedContent}
                headline="Recommended for you"
              />
            )}
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
    const res = await fetch(firebaseConfig.dbAll);

    if (!res.ok) {
      throw new Error(`Could not fetch trending movies and series, ${res.statusText}`);
    }

    const resData = await res.json();

    return resData.filter((item: MovieOrSeries) => item.isTrending === true);
  } catch (err) {
    console.log(err);
  }
}

async function loadRecommended() {
  try {
    const res = await fetch(firebaseConfig.dbAll);

    if (!res.ok) {
      throw new Error(`Could not fetch recommended movies and series, ${res.statusText}`);
    }

    const resData = await res.json();

    return resData.filter((item: MovieOrSeries) => item.isTrending === false);
  } catch (err) {
    console.log(err);
  }
}
