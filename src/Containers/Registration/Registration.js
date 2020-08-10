import React, { useState } from "react";
import { navigation } from "../navigation";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/operations/authOperations";
// import PropTypes from 'prop-types';
import "./Registration.css";

const initialState = { name: "", email: "", password: "" };

const Registration = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(register(form));
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
        <button className="registaration-button">Registration</button>
        <p className="log-in">
          If you alredy have account, please{" "}
          <NavLink to={navigation.login}>Log In</NavLink>
        </p>
      </form>
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
