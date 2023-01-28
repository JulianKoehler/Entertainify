import { Link, useRouteError } from "react-router-dom";
import ErrorPage from "../styles/Pages/ErrorPageLayout";
import Button from "../styles/UI/Button";
import { getAuthToken } from "../util/auth";

const Error = () => {
  const isAuthenticated = getAuthToken();
  const error = useRouteError() as Response;

  console.log(error);

  return (
    <ErrorPage>
      <h1>An Error occured!</h1>
      <p>{error.statusText}</p>
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
