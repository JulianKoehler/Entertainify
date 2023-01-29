import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import Content from "../components/Content/Content";
import { firebaseConfig } from "../firebase";
import { MovieOrSeries, IBookmarked } from "../models/moviesAndSeries";
import PageContent from "../styles/Pages/PageContent";

const Bookmarked = () => {
  const { bookmarked } = useLoaderData() as { bookmarked: Promise<IBookmarked[]> };

  return (
    <PageContent>
      <section>
        <Suspense>
          <Await resolve={bookmarked}>
            {loadedBookmarked => (
              <>
                <Content
                  content={loadedBookmarked.filter((item: MovieOrSeries) => item.category === "Movie")}
                  headline="Bookmarked Movies"
                />
                <Content
                  content={loadedBookmarked.filter((item: MovieOrSeries) => item.category === "TV Series")}
                  headline="Bookmarked Series"
                />
              </>
            )}
          </Await>
        </Suspense>
      </section>
    </PageContent>
  );
};

export default Bookmarked;

export async function loader() {
  return defer({
    bookmarked: loadBookmarked(),
  });
}

async function loadBookmarked() {
  try {
    const response = await fetch(firebaseConfig.dbAll);

    if (!response.ok) {
      throw new Error("Could not fetch bookmarked");
    }

    const resData = await response.json();
    return resData.filter((item: MovieOrSeries) => item.isBookmarked === true);
  } catch (err) {
    console.log(err);
  }
}
