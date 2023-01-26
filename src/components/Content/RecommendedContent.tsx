import styled from "styled-components";
import { Data as Recommended } from "../../models/moviesAndSeries";
import Card from "../UI/Card";
import movieIcon from "../../assets/icon-category-movie.svg";
import seriesIcon from "../../assets/icon-category-tv.svg";

interface RecommendedContentProps {
  content: Recommended[];
}

const RecommendedContent = ({ content }: RecommendedContentProps) => {
  return (
    <ContentGrid>
      {content.map(item => {
        const categoryIcon = item.category === "Movie" ? movieIcon : seriesIcon;
        return (
          <Card key={item?.title}>
            <img
              src={item?.thumbnail.regular.large}
              alt={item?.title}
            />
            <div className="item-information">
              <span> {item?.year}</span>
              <span>&middot;</span>
              <img
                className="category-icon"
                src={categoryIcon}
                alt={item?.category}
              />
              <span>{item?.category}</span>
              <span>&middot;</span>
              <span>{item?.rating}</span>
            </div>
          </Card>
        );
      })}
    </ContentGrid>
  );
};

export default RecommendedContent;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 3.2rem;
  padding-bottom: 4rem;

  & .item-information {
    display: flex;
    align-items: center;
    gap: 0.7rem;

    & span {
      font-size: 1.3rem;
      font-weight: 300;
    }
  }
`;
