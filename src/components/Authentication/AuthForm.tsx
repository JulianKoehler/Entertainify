import { useEffect, useRef, useState } from "react";
import { Form, Link, useActionData, useNavigation, useSearchParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import Button from "../../styles/UI/Button";
import { emailRegex } from "../../util/regex";

const loadingSpinner = (
  <TailSpin
    height="22"
    width="22"
    color="var(--semi-dark-blue)"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
);

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const isLogin = mode === "login";

  if (mode !== "login" && mode !== "signup") {
    throw new Error("Unsupported auth mode. Use either login or singup");
  }

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmedPasswordRef = useRef<HTMLInputElement>(null);

  const authData = useActionData();
  const isEmailInvalid = authData === "INVALID_EMAIL";
  const isPasswordInvalid = authData === "INVALID_PASSWORD";
  const isPasswordTooShort = authData === "WEAK_PASSWORD : Password should be at least 6 characters";
  const isMissingPassword = authData === "MISSING_PASSWORD";
  const emailNotFound = authData === "EMAIL_NOT_FOUND";

  const [isFormValid, setIsFormValid] = useState(false);

  function clientSideValidation() {
    const isEmailOK = emailRef.current?.value.match(emailRegex);
    const isPasswordOK = passwordRef.current!.value.length >= 6;
    const doPasswordsMatch = passwordRef.current?.value === confirmedPasswordRef.current?.value;

    if (isLogin) {
      if (isEmailOK && isPasswordOK) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    } else {
      if (isEmailOK && isPasswordOK && doPasswordsMatch) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    }
  }

  /* If the form becomes valid while being in login mode, the user could change to signup mode and the
  button would still be enabled, allthough the confirm password field is empty at that time. With this
  useEffect, the formValidity gets checked also when changing auth mode. */
  useEffect(() => {
    clientSideValidation();
  }, [mode]);

  console.log(authData);

  return (
    <Form method="post">
      <h1>{isLogin ? "Login" : "Sign up"}</h1>
      <input
        ref={emailRef}
        className={isEmailInvalid || emailNotFound ? "invalid" : ""}
        type="email"
        name="email"
        placeholder="Email address"
        onChange={clientSideValidation}
      />
      {isEmailInvalid && <p className="invalid-email">Invalid email address</p>}
      {emailNotFound && <p className="invalid-email">Email not found</p>}
      <input
        className={isPasswordInvalid ? "invalid" : ""}
        ref={passwordRef}
        type="password"
        name="password"
        placeholder="Password"
        onChange={clientSideValidation}
      />
      {isPasswordInvalid && <p className="invalid-password">Invalid password</p>}
      {isPasswordTooShort && <p className="invalid-password">Should be at least 6 characters</p>}
      {isMissingPassword && <p className="invalid-password">Missing password</p>}
      {!isLogin && (
        <input
          ref={confirmedPasswordRef}
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm password"
          onChange={clientSideValidation}
        />
      )}
      {isLogin && (
        <Button disabled={isSubmitting || !isFormValid}>
          {isSubmitting ? loadingSpinner : "Login to your account"}
        </Button>
      )}
      {!isLogin && (
        <Button disabled={isSubmitting || !isFormValid}>
          {isSubmitting ? loadingSpinner : "Create an account"}
        </Button>
      )}
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
