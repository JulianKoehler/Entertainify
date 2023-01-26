import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../styles/UI/Button";
import { getAuthToken } from "../util/auth";

const Error = () => {
  const isAuthenticated = getAuthToken();

  return (
    <ErrorPage>
      <h1>An Error occured!</h1>
      <p>Something went wrong.</p>
      <section>
        {isAuthenticated && (
          <Link to="/home">
            <Button>Back Home</Button>
          </Link>
        )}
        {!isAuthenticated && (
          <Link to="/auth?mode=login">
            <Button>Login Page</Button>
          </Link>
        )}
      </section>
    </ErrorPage>
  );
};

export default Error;

const ErrorPage = styled.main`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -20%);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;

  & section {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`;
