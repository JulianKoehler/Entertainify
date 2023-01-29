import styled from "styled-components";
import Card from "../UI/Card";
import { Trending } from "../../models/moviesAndSeries";
import PlayButton from "../UI/PlayButton";
import Bookmark from "../UI/Bookmark";
import toggleBookmark from "../../util/toggleBookmark";

type TrendingContentProps = {
  content: Trending[];
};

const TrendingContent = ({ content }: TrendingContentProps) => {
  return (
    <ContentRow>
      {content.map((item: Trending) => {
        return (
          <Card
            key={item.title}
            trending={true}>
            <img
              srcSet={`${item.thumbnail.trending.large} 460w`}
              src={item.thumbnail.trending.small}
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
              sendPatchRequest={isBookmarked => toggleBookmark(item, isBookmarked)}
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

  @media (max-width: 450px) {
    gap: 1.6rem;
  }
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

    & span {
      @media (max-width: 450px) {
        font-size: 1.2rem;
      }
    }
  }
`;
