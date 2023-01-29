import styled from "styled-components";
import { MovieOrSeries as Recommended, IBookmarked, ISeries, Movie } from "../../models/moviesAndSeries";
import Card from "../UI/Card";
import movieIcon from "../../assets/icon-category-movie.svg";
import seriesIcon from "../../assets/icon-category-tv.svg";
import PlayButton from "../UI/PlayButton";
import Bookmark from "../UI/Bookmark";
import { useSearchParams } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import toggleBookmark from "../../util/toggleBookmark";
import ContentGrid from "../../styles/Pages/ContentGrid";

type ContentProps = {
  content: Recommended[] | ISeries[] | Movie[] | IBookmarked[];
  headline: string;
};

const Content = ({ content, headline }: ContentProps) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query")!;
  const debouncedQuery = useDebounce<string>(query, 300);

  const filteredContent = debouncedQuery
    ? content.filter(item => item.title.toLowerCase().includes(debouncedQuery.toLowerCase()))
    : content || [];

  const amountOfSearchResults = filteredContent.length;

  const resultHeadline = `Found ${amountOfSearchResults} ${
    amountOfSearchResults === 1 ? "result" : "results"
  } for '${debouncedQuery}'`;

  return (
    <>
      <h1>{debouncedQuery ? resultHeadline : headline}</h1>
      <ContentGrid>
        {filteredContent.map(item => {
          const categoryIcon = item.category === "Movie" ? movieIcon : seriesIcon;
          return (
            <Card key={item.title}>
              <img
                src={item.thumbnail.regular.large}
                alt={item.title}
              />
              <PlayButton yOffset="40%" />
              <div className="item-information">
                <span> {item.year}</span>
                <span>&middot;</span>
                <img
                  className="category-icon"
                  src={categoryIcon}
                  alt={item.category}
                />
                <span>{item.category}</span>
                <span>&middot;</span>
                <span>{item.rating}</span>
              </div>
              <h3>{item.title}</h3>
              <Bookmark
                bookmarked={item.isBookmarked}
                sendPatchRequest={isBookmarked => toggleBookmark(item, isBookmarked)}
              />{" "}
            </Card>
          );
        })}
      </ContentGrid>
    </>
  );
};

export default Content;
