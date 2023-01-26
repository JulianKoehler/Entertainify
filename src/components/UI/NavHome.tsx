import { useLocation } from "react-router-dom";
import NavIconWraper from "./NavIconWrapper";

const NavHome = () => {
  const location = useLocation();

  const fillColor = location.pathname === "/home" ? "var(--white)" : "var(--active-nav-link)";

  return (
    <NavIconWraper>
      <svg
        className="navLink"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          className={location.pathname === "/home" ? "" : "navLink__cell"}
          d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
          fill={fillColor}
        />
      </svg>
    </NavIconWraper>
  );
};

export default NavHome;
