import { Outlet, useLoaderData, useNavigate, useSubmit } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import searchIcon from "../assets/icon-search.svg";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";

const RootLayout = () => {
  const navigate = useNavigate();
  const submit = useSubmit();
  const token = useLoaderData();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <>
      <Navbar />
      <Main>
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
      </Main>
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

const Main = styled.main`
  max-width: calc(100% - 13.6rem);
`;
