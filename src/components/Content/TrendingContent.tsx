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
        <Card trending={true}>
          <img
            src={item.thumbnail.trending.large}
            alt={item.title}
          />
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
