import React from "react";
// import PropTypes from "prop-types";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { navigation } from "../../Containers/navigation";

const Header = (props) => (
  <header>
    <nav className="main-nav">
      <NavLink to={navigation.login} className="nav-link">
        Login
      </NavLink>
      <NavLink to={navigation.registration} className="nav-link">
        Registration
      </NavLink>
      <NavLink to={navigation.home} className="nav-link">
        Home
      </NavLink>
    </nav>
  </header>
);

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
