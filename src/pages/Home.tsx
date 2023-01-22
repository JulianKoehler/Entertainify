import React from "react";
import styled from "styled-components";
import searchIcon from "../assets/icon-search.svg";

const Home = () => {

  return (
    <HomePage>
      <Search>
        <img
          src={searchIcon}
          alt="search"
        />
        <Searchbar
          type="search"
          placeholder="Search for movies or series"
        />
      </Search>
      <Trending>
        <h1>Trending</h1>

      </Trending>
      <Recommended>
        <h1>Recommended for you</h1>
      </Recommended>
    </HomePage>
  );
};

export default Home;

const HomePage = styled.div`
  padding: 2.5rem;
`;

const Searchbar = styled.input`
  background-color: transparent;
  border: none;
  padding: 1rem 1rem 1rem 0;
  color: white;
  font-size: 2rem;
  width: 100rem;
  max-width: 100%;

  -webkit-appearance: none;

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--greyish-blue);
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  max-height: 5rem;

  & img {
    max-width: 3.2rem;
    max-height: 3.2rem;
    margin-right: 1.2rem;
  }
`;

const Trending = styled.div``;
const Recommended = styled.div``;
