import styled from "styled-components";
import { Trending } from "../../models/moviesAndSeries";
import Card from "../UI/Card";

interface TrendingContentProps {
  content: Trending[];
}

const TrendingContent = ({ content }: TrendingContentProps) => {
  return (
    <ContentRow>
      {content.map(item => (
        <Card
          key={item.title}
          trending={true}>
          <img
            src={item.thumbnail.trending.large}
            alt={item.title}
          />
          <InfoOverlay>
            <div className="top-row">
              <span> {item?.year}</span>
              <span>&middot;</span>
              <span>{item?.category}</span>
              <span>&middot;</span>
              <span>{item?.rating}</span>
            </div>
            <h3>{item.title}</h3>
          </InfoOverlay>
        </Card>
      ))}
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
