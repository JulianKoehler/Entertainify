import { Suspense } from "react";
import { Await, defer, redirect, useLoaderData } from "react-router-dom";
import { firebaseConfig } from "../firebase";
import { Movie } from "../models/moviesAndSeries";
import PageContent from "../styles/Pages/PageContent";
import { getAuthToken } from "../util/auth";

const Movies = () => {
  const { movies } = useLoaderData() as { movies: Promise<Movie[]> };

  return (
    <PageContent>
      <section>
        <h1>Movies</h1>
        <Suspense>
          <Await resolve={movies}>{loadedMovies => <p>{JSON.stringify(loadedMovies)}</p>}</Await>
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
    const response = await fetch(firebaseConfig.dbMovies);

    if (!response.ok) {
      throw new Error("Could not fetch movies");
    }

    const resData = await response.json();
    return resData;
  } catch (err) {
    console.log(err);
  }
}
