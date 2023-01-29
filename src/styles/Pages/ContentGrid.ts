import styled from "styled-components";

const ContentGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 28rem);
  grid-gap: 3.2rem;
  margin: 4rem 0;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, 22rem);
  }

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

export default ContentGrid;
