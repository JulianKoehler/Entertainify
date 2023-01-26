import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import searchIcon from "../assets/icon-search.svg";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Search>
          <img
            src={searchIcon}
            alt="search"
          />
          <input
            type="search"
            placeholder="Search for movies or series"
          />
        </Search>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

const Search = styled.div`
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
