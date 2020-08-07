import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { navigation } from "../../../../BC_21_React/src/constants";

const Header = (props) => (
  <heade>
    <nav>
      <NavLink to={navigation.login} className="nav-link">
        Login
      </NavLink>
      <NavLink to={navigation.registration} className="nav-link">
        Register
      </NavLink>
      <NavLink to={navigation.home} className="nav-link">
        Home
      </NavLink>
    </nav>
  </heade>
);

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
