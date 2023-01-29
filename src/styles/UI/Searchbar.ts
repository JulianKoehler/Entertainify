import styled from "styled-components";

const Searchbar = styled.div`
  display: flex;
  align-items: center;
  max-height: 5rem;
  margin: 4rem 0 0 2rem;

  @media (max-width: 450px) {
    margin: 2.4rem 0 0 1.6rem;
  }

  & img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 2.4rem;

    @media (max-width: 450px) {
      margin-right: 1.6rem;
    }
  }

  & input {
    background-color: transparent;
    border: none;
    padding: 1rem 1rem 1rem 0;
    color: var(--white);
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 3rem;
    width: 100rem;
    max-width: 100%;
    -webkit-appearance: none;

    &:focus {
      outline: none;
      border-bottom: 0.1rem solid var(--greyish-blue);

      @media (max-width: 900px) {
        border-bottom: none;
      }
    }

    @media (max-width: 450px) {
      font-size: 1.6rem;
      padding: 0 2rem 0 0;
    }
  }
`;

export default Searchbar;
