import { NavLink } from "react-router-dom";
import NavbarLayout from "../../styles/Navbar/Navbar";
import Logo from "../UI/Logo";
import NavBookmarked from "../UI/NavBookmarked";
import NavHome from "../UI/NavHome";
import NavMovies from "../UI/NavMovies";
import NavSeries from "../UI/NavSeries";
import NavUserProfile from "../UI/NavUserProfile";

function Navbar() {
  return (
    <NavbarLayout>
      <div className="content">
        <Logo />
        <nav>
          <li>
            <NavLink to="/home">
              <NavHome />
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies">
              <NavMovies />
            </NavLink>
          </li>
          <li>
            <NavLink to="/series">
              <NavSeries />
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookmarked">
              <NavBookmarked />
            </NavLink>
          </li>
        </nav>
        <NavUserProfile />
      </div>
    </NavbarLayout>
  );
}

export default Navbar;
