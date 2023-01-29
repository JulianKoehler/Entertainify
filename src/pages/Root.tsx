import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
  useSearchParams,
  useSubmit,
} from "react-router-dom";
import styled from "styled-components";
import NavbarLayout from "../components/Navbar/Navbar";
import searchIcon from "../assets/icon-search.svg";
import { useEffect, useRef } from "react";
import { getTokenDuration } from "../util/auth";
import Searchbar from "../styles/UI/Searchbar";

const RootLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const submit = useSubmit();
  const token = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchbarRef = useRef<HTMLInputElement>(null);

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
    if (location.pathname === "/") {
      navigate("/home");
    }

    if (location.search === "") {
      searchbarRef.current!.value = "";
    }
  }, [location.pathname]);

  return (
    <>
      <NavbarLayout />
      <Main>
        <Searchbar>
          <img
            src={searchIcon}
            alt="search"
          />
          <input
            ref={searchbarRef}
            type="search"
            placeholder="Search for movies or series"
            onChange={e => setSearchParams({ search_query: e.target.value })}
          />
        </Searchbar>
        <Outlet />
      </Main>
    </>
  );
};

export default RootLayout;

const Main = styled.main`
  width: calc(100% - 13.6rem);

  @media (max-width: 900px) {
    width: 100%;
  }
`;
