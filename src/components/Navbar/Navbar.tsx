import { NavLink } from "react-router-dom";
import Sidebar from "../../styles/Navbar/Sidebar";
import Logo from "../UI/Logo";
import NavBookmarked from "../UI/NavBookmarked";
import NavHome from "../UI/NavHome";
import NavMovies from "../UI/NavMovies";
import NavSeries from "../UI/NavSeries";
import NavUserProfile from "../UI/NavUserProfile";

function Navbar() {
  return (
    <Sidebar>
      <div className="content">
        <Logo />
        <nav>
          <NavLink to="/home">
            <NavHome />
          </NavLink>
          <NavLink to="/movies">
            <NavMovies />
          </NavLink>
          <NavLink to="/series">
            <NavSeries />
          </NavLink>
          <NavLink to="/bookmarked">
            <NavBookmarked />
          </NavLink>
        </nav>
        <NavUserProfile />
      </div>
    </Sidebar>
  );
}

export default Navbar;
