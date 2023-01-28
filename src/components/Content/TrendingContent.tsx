import styled from "styled-components";
import { Data, Trending } from "../../models/moviesAndSeries";
import Card from "../UI/Card";
import PlayButton from "../UI/PlayButton";
import { firebaseConfig } from "../../firebase";

import Bookmark from "../UI/Bookmark";

type TrendingContentProps = {
  content: Trending[];
};

const TrendingContent = ({ content }: TrendingContentProps) => {
  return (
    <ContentRow>
      {content.map((item, index) => {
        return (
          <Card
            key={item.title}
            trending={true}>
            <img
              src={item.thumbnail.trending.large}
              alt={item.title}
            />
            <PlayButton yOffset="50%" />
            <InfoOverlay>
              <div className="top-row">
                <span> {item.year}</span>
                <span>&middot;</span>
                <span>{item.category}</span>
                <span>&middot;</span>
                <span>{item.rating}</span>
              </div>
              <h3>{item.title}</h3>
            </InfoOverlay>
            <Bookmark
              bookmarked={item.isBookmarked}
              sendPatchRequest={isBookmarked => toggleBookmark(index, item, isBookmarked)}
            />
          </Card>
        );
      })}
    </ContentRow>
  );
};

export default TrendingContent;

const ContentRow = styled.div`
  max-width: 100%;
  display: flex;
  gap: 4rem;
`;

const InfoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2rem;

  & .top-row {
    display: flex;
    gap: 0.78rem;
    opacity: 0.75;
  }
`;

async function toggleBookmark(index: number, item: Data, isBookmarked: boolean) {
  /* queryEndpoint is just removing the .json from the url so that I can put my index inbetween when sending the Patch request */
  const queryEndpoint = firebaseConfig.dbIsTrending.slice(0, firebaseConfig.dbIsTrending.length - 5);

  try {
    const res = await fetch(`${queryEndpoint}/${index}.json`, {
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
