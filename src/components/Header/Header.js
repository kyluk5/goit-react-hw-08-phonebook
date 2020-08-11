import React from "react";
// import PropTypes from "prop-types";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { navigation } from "../../Containers/navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";

const Header = () => {
  const token = useSelector((state) => state.auth.token);
  return (
    <header>
      <nav className="main-nav">
        {token ? (
          <NavLink to={navigation.contacts} exact className="nav-link">
            Contacts
          </NavLink>
        ) : (
          <NavLink to={navigation.home} exact className="nav-link">
            Home
          </NavLink>
        )}

        {token ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};
Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
