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
          <Searchbar
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