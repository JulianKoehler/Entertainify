import { Form, Link, useSearchParams } from "react-router-dom";
import Button from "../../styles/UI/Button";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const isLogin = mode === "login";

  if (mode !== "login" && mode !== "signup") {
    throw new Error("Unsupported auth mode. Use either login or singup");
  }

  return (
    <Form
      action="/auth"
      method="post">
      <h1>{isLogin ? "Login" : "Sign up"}</h1>
      <input
        type="email"
        name="email"
        placeholder="Email address"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      {!isLogin && (
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm password"
          required
        />
      )}
      <Button>{isLogin ? "Login to your account" : "Create an account"}</Button>
      {isLogin && (
        <p>
          Don't have an account? <Link to="?mode=signup">Sign Up</Link>
        </p>
      )}
      {!isLogin && (
        <p>
          Already have an account? <Link to="?mode=login">Login</Link>
        </p>
      )}
    </Form>
  );
};

export default AuthForm;
