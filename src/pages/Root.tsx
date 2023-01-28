import { Outlet, useLoaderData, useNavigate, useSearchParams, useSubmit } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import searchIcon from "../assets/icon-search.svg";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";
import Searchbar from "../styles/UI/Searchbar";

const RootLayout = () => {
  const navigate = useNavigate();
  const submit = useSubmit();
  const token = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

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
        <Searchbar>
          <img
            src={searchIcon}
            alt="search"
          />
          <input
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
`;
