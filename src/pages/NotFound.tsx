import React from "react";
import ErrorPage from "../styles/Pages/ErrorPageLayout";
import notFoundCat from "../assets/404.png";
import { NavLink } from "react-router-dom";
import Button from "../styles/UI/Button";

const NotFound = () => {
  return (
    <ErrorPage>
      <h1>
        <i>404 not found</i>
      </h1>
      <h2>Ooops, looks like you are lost!</h2>
      <NavLink to="/home">
        <Button>Back Home</Button>
      </NavLink>
      <img
        width="800"
        src={notFoundCat}
        alt="A cheeky looking cat tossing a vase from a shelf"
      />
    </ErrorPage>
  );
};

export default NotFound;
