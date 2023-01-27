import styled from "styled-components";
import { Data as Recommended, IBookmarked, ISeries, Movie } from "../../models/moviesAndSeries";
import Card from "../UI/Card";
import movieIcon from "../../assets/icon-category-movie.svg";
import seriesIcon from "../../assets/icon-category-tv.svg";
import PlayButton from "../UI/PlayButton";
import Bookmark from "../../styles/UI/Bookmark";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

interface ContentProps {
  content: Recommended[] | ISeries[] | Movie[] | IBookmarked[];
}

const Content = ({ content }: ContentProps) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  useEffect(() => {
    console.log(query);
  }, [searchParams]);

  const filteredContent = query
    ? content.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    : content;

  return (
    <ContentGrid>
      {filteredContent.map(item => {
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
            <h3>{item.title}</h3>
            <PlayButton yOffset="40%" />
            <Bookmark bookmarked={item.isBookmarked} />
          </Card>
        );
      })}
    </ContentGrid>
  );
};

export default Content;

const ContentGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 28rem);
  grid-gap: 3.2rem;
  margin: 4rem 0;

  & .item-information {
    display: flex;
    align-items: center;
    gap: 0.7rem;

    & span {
      font-size: 1.3rem;
      font-weight: 300;
      opacity: 0.75;
    }
  }

  & h3 {
    font-size: 1.8rem;
  }
`;
