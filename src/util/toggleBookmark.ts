import { firebaseConfig } from "../firebase";
import { MovieOrSeries, Trending } from "../models/moviesAndSeries";

async function toggleBookmark(item: Trending | MovieOrSeries, isBookmarked: boolean) {
  /* queryEndpoint is just removing the .json from the url so that I can put the id inbetween when sending the Patch request */
  const dbEndpoint = firebaseConfig.dbAll.slice(0, firebaseConfig.dbAll.length - 5);

  try {
    const res = await fetch(`${dbEndpoint}/${item.id}.json`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isBookmarked: !isBookmarked }),
    });

    if (!res.ok) {
      throw new Error();
    }
  } catch (err) {
    throw new Response(`Could not update bookmark for ${item.title}`);
  }
}

export default toggleBookmark;
