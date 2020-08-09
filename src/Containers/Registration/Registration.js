import React, { useState } from "react";
import { navigation } from "../navigation";
import { NavLink } from "react-router-dom";
// import PropTypes from 'prop-types';
import "./Registration.css";

const initialState = { name: "", email: "", password: "" };

const Registration = () => {
  const [form, setForm] = useState(initialState);
  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
    // console.log(form);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <h1 className="registration-title">Registration</h1>
      <form className="registration-form" onSubmit={submitForm}>
        <input
          type="name"
          name="name"
          placeholder="name"
          className="reginstration-input"
          onChange={inputHandler}
          value={form.name}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="reginstration-input"
          onChange={inputHandler}
          value={form.email}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="reginstration-input"
          onChange={inputHandler}
          value={form.password}
        />
      </form>
      <button className="registaration-button">Registration</button>
      <p className="log-in">
        If you alredy have account, please{" "}
        <NavLink to={navigation.login}>Log In</NavLink>
      </p>
    </>
  );
};

Registration.propTypes = {
  // bla: PropTypes.string,
};

Registration.defaultProps = {
  // bla: 'test',
};

export default Registration;
