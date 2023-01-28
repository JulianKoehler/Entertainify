import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import Content from "../components/Content/Content";
import { firebaseConfig } from "../firebase";
import { IBookmarked } from "../models/moviesAndSeries";
import PageContent from "../styles/Pages/PageContent";

const Bookmarked = () => {
  const { bookmarked } = useLoaderData() as { bookmarked: Promise<IBookmarked[]> };

  return (
    <PageContent>
      <section>
        <Suspense>
          <Await resolve={bookmarked}>
            {loadedBookmarked => (
              <Content
                content={loadedBookmarked}
                headline="Bookmarked"
              />
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
    const response = await fetch(firebaseConfig.dbBookmarked);

    if (!response.ok) {
      throw new Error("Could not fetch bookmarked");
    }

    const resData = await response.json();
    return resData;
  } catch (err) {
    console.log(err);
  }
}
