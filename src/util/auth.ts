import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("entertainify_token");
  const tokenDuration = getTokenDuration();

  if (!token || token.length < 680) {
    return null;
  }

  if (tokenDuration <= 6000) {
    return "EXPIRED";
  }

  return token;
}

export function loader() {
  const token = getAuthToken();
  console.log(token);

  if (!token) {
    console.log("!token, redirect to auth");

    return redirect("/auth?mode=login");
  }

  return token;
}

export function getTokenDuration() {
  const storedExpirationTime = localStorage.getItem("entertainify_expiration");
  const expirationDate = new Date(storedExpirationTime || "");
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();

  return duration;
}
