import { Suspense } from "react";
import { Await, defer, redirect, useLoaderData } from "react-router-dom";
import Content from "../components/Content/Content";
import { firebaseConfig } from "../firebase";
import { ISeries } from "../models/moviesAndSeries";
import PageContent from "../styles/Pages/PageContent";

const Series = () => {
  const { series } = useLoaderData() as { series: Promise<ISeries[]> };

  return (
    <PageContent>
      <section>
        <Suspense>
          <Await resolve={series}>
            {loadedSeries => (
              <Content
                content={loadedSeries}
                headline="Series"
              />
            )}
          </Await>
        </Suspense>
      </section>
    </PageContent>
  );
};

export default Series;

export async function loader() {
  return defer({
    series: loadSeries(),
  });
}

async function loadSeries() {
  try {
    const response = await fetch(firebaseConfig.dbSeries);

    if (!response.ok) {
      throw new Error("Could not fetch series");
    }

    const resData = await response.json();
    return resData;
  } catch (err) {
    console.log(err);
  }
}
