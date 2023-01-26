import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("entertainify_token");
  return token;
}

export function loader() {
  return getAuthToken();
}

export function redirectIfNotAuthenticated() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth?mode=login");
  }
}
