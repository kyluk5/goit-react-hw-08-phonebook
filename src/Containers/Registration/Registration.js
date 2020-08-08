import React from "react";
import { navigation } from "../navigation";
// import PropTypes from 'prop-types';
import "./Registration.css";
import { NavLink } from "react-router-dom";

const Registration = (props) => (
  <>
    <h1 className="registration-title">Registration</h1>
    <form className="registration-form">
      <input type="name" placeholder="name" className="reginstration-input" />
      <input type="email" placeholder="email" className="reginstration-input" />
      <input
        type="password"
        placeholder="password"
        className="reginstration-input"
      />
    </form>
    <button className="registaration-button">Registration</button>
    <p className="log-in">
      If you alredy have account, please{" "}
      <NavLink to={navigation.login}>Log In</NavLink>
    </p>
  </>
);

Registration.propTypes = {
  // bla: PropTypes.string,
};

Registration.defaultProps = {
  // bla: 'test',
};

export default Registration;
