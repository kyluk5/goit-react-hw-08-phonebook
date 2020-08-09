import React from "react";
import { navigation } from "../navigation";
import { NavLink } from "react-router-dom";
// import PropTypes from 'prop-types';
import "./Login.css";

const Login = (props) => (
  <>
    <h1 className="registration-title">Log In</h1>
    <form className="registration-form">
      <input type="email" placeholder="email" className="reginstration-input" />
      <input
        type="password"
        placeholder="password"
        className="reginstration-input"
      />
    </form>
    <button className="registaration-button">Registration</button>
    <p className="log-in">
      If you dont have account, please folow{" "}
      <NavLink to={navigation.registration}>Registration</NavLink>
    </p>
  </>
);

Login.propTypes = {
  // bla: PropTypes.string,
};

Login.defaultProps = {
  // bla: 'test',
};

export default Login;
