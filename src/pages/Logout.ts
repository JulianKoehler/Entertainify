import { redirect } from "react-router-dom";

export function action() {
  localStorage.removeItem("entertainify_token");
  localStorage.removeItem("entertainify_expiration");

  return redirect("/auth?mode=login");
}
