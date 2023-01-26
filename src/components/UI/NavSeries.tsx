import { useLocation } from "react-router-dom";
import NavIconWraper from "./NavIconWrapper";

const NavSeries = () => {
  const location = useLocation();

  const fillColor = location.pathname === "/series" ? "var(--white)" : "var(--active-nav-link)";

  return (
    <NavIconWraper>
      <svg
        className="navLink"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          className={location.pathname === "/series" ? "" : "navLink__cell"}
          d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
          fill={fillColor}
        />
      </svg>
    </NavIconWraper>
  );
};

export default NavSeries;
