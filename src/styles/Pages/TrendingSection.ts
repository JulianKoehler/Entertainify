import styled from "styled-components";

const TrendingSection = styled.section`
  overflow-x: auto;
  max-width: 100%;
  padding-bottom: 2rem;

  &::-webkit-scrollbar {
    height: 1.7rem;
    background-color: var(--greyish-blue);
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--semi-dark-blue);
    border-radius: 1rem;
    border: 0.4rem solid var(--greyish-blue);
    width: 1rem;
  }

  & h1 {
    margin-bottom: 4rem;

    @media (max-width: 450px) {
      margin-bottom: 1.6rem;
    }
  }
`;

export default TrendingSection;
