import React, { useState } from "react";
import { navigation } from "../navigation";
import { NavLink } from "react-router-dom";
// import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import "./Login.css";
import { logIn } from "../../redux/operations/authOperations";

const initialState = { email: "", password: "" };

const Login = () => {
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
    dispatch(logIn(form));
    setForm(initialState);
  };

  return (
    <>
      <h1 className="log-in-title">Log In</h1>
      <form className="log-in-form" onSubmit={submitForm}>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="log-in-input"
          value={form.email}
          onChange={inputHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="log-in-input"
          value={form.password}
          onChange={inputHandler}
        />
        <button className="log-in-button">Sign In</button>
        <p className="log-in">
          If you dont have account, please folow{" "}
          <NavLink to={navigation.registration}>Registration</NavLink>
        </p>
      </form>
    </>
  );
};

Login.propTypes = {
  // bla: PropTypes.string,
};

Login.defaultProps = {
  // bla: 'test',
};

export default Login;
