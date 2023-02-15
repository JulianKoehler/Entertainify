import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import Content from "../components/Content/Content";
import { firebaseConfig } from "../firebase";
import { Movie } from "../models/moviesAndSeries";
import PageContent from "../styles/Pages/PageContent";
import { MovieOrSeries } from "../models/moviesAndSeries";

const Movies = () => {
  const { movies } = useLoaderData() as { movies: Promise<Movie[]> };

  return (
    <PageContent>
      <section>
        <Suspense>
          <Await resolve={movies}>
            {loadedMovies => (
              <Content
                content={loadedMovies}
                headline="Movies"
              />
            )}
          </Await>
        </Suspense>
      </section>
    </PageContent>
  );
};

export default Movies;

export async function loader() {
  return defer({
    movies: loadMovies(),
  });
}

async function loadMovies() {
  try {
    const response = await fetch(firebaseConfig.dbAll);

    if (!response.ok) {
      throw new Error();
    }

    const resData = await response.json();
    return resData.filter((item: MovieOrSeries) => item.category === "Movie");
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
}
