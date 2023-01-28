import styled from "styled-components";

const Searchbar = styled.div`
  display: flex;
  align-items: center;
  max-height: 5rem;
  margin: 4rem 0 0 2rem;

  & img {
    max-width: 2.4rem;
    max-height: 2.4rem;
    margin-right: 2.4rem;
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
      border-bottom: 1px solid var(--greyish-blue);
    }
  }
`;

export default Searchbar;
