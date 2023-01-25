import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomePage>
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

const Trending = styled.div``;
const Recommended = styled.div``;
