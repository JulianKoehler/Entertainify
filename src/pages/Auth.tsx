import AuthPageWrapper from "../styles/UI/AuthForm";
import AuthForm from "../components/Authentication/AuthForm";
import Logo from "../components/UI/Logo";
import { json, redirect } from "react-router-dom";
import { firebaseConfig } from "../firebase";

const AuthPage = () => {
  return (
    <AuthPageWrapper>
      <Logo />
      <AuthForm />
    </AuthPageWrapper>
  );
};

export default AuthPage;

export async function action({ request }: { request: Request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode");
  const authEndpoint = authMode === "login" ? firebaseConfig.signInWithPassword : firebaseConfig.signUp;

  if (authMode !== "login" && authMode !== "signup") {
    throw json({ message: "Unsupported auth mode. Use either login or singup" }, { status: 422 });
  }

  const formData = await request.formData();
  const authData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const response = await fetch(authEndpoint, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    });

    if (!response.ok) {
      const resData = await response.json();
      let errorMessage = "Authentication failed.";
      if (resData) {
        errorMessage = resData.error.message;
      }

      throw new Error(errorMessage);
    }

    const resData = await response.json();
    console.log(resData);

    const token = resData.idToken;
    localStorage.setItem("entertainify_token", token);

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("entertainify_expiration", expiration.toISOString());

    console.log(resData);

    return redirect("/home");
  } catch (err) {
    let errorMessage = "Authentication failed";
    if (err instanceof Error) errorMessage = err.message;

    return errorMessage;
  }
}
