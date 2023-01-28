import { Suspense } from "react";
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Content from "../components/Content/Content";
import TrendingContent from "../components/Content/TrendingContent";
import ContentLoaderSpinner from "../components/UI/ContentLoaderSpinner";
import { firebaseConfig } from "../firebase";
import useDebounce from "../hooks/useDebounce";
import { Trending, Data as Recommended } from "../models/moviesAndSeries";
import PageContent from "../styles/Pages/PageContent";

const Home = () => {
  const { trending } = useLoaderData() as { trending: Promise<Trending[]> };
  const { recommended } = useLoaderData() as { recommended: Promise<Recommended[]> };

  const [searchParams] = useSearchParams();
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
  const idToken = localStorage.getItem("entertainify_token");

  try {
    const res = await fetch(`${firebaseConfig.dbIsTrending}?auth=${idToken}`);

    if (!res.ok) {
      throw new Error(`Could not fetch trending movies and series, ${res.statusText}`);
    }

    const resData = await res.json();

    return resData;
  } catch (err) {
    console.log(err);
  }
}

async function loadRecommended() {
  const idToken = localStorage.getItem("entertainify_token");

  try {
    const res = await fetch(`${firebaseConfig.dbRecommended}?auth=${idToken}`);

    if (!res.ok) {
      throw new Error(`Could not fetch recommended movies and series, ${res.statusText}`);
    }

    const resData = await res.json();

    return resData;
  } catch (err) {
    console.log(err);
  }
}

const TrendingSection = styled.section`
  overflow-x: auto;
  max-width: 100%;
  padding-bottom: 2rem;

  &::-webkit-scrollbar {
    height: 1.7rem;
    background-color: var(--greyish-blue);
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--semi-dark-blue);
    border-radius: 1rem;
    border: 0.4rem solid var(--greyish-blue);
    width: 1rem;
  }

  & h1 {
    margin-bottom: 4rem;
  }
`;

const RecommendedSection = styled.section`
  width: 100%;

  & h1 {
    margin: 3rem 0;
  }
`;
