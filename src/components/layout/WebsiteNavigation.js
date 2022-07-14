import { Link } from "react-router-dom";
import classes from "./WebsiteNavigation.module.css";

function WebsiteNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> Movie App </div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/movies">Add Movie</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default WebsiteNavigation;
