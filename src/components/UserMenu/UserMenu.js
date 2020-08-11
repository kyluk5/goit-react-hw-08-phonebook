import React from "react";
// import PropTypes from 'prop-types';
import "./UserMenu.css";
import { useSelector } from "react-redux";
import { logOut } from "../../redux/operations/authOperations";

const UserMenu = () => {
  const email = useSelector((state) => state.auth.user.email);
  return (
    <>
      <p>{email}</p>
      <button className="log-out" onClick={logOut}>
        Log Out
      </button>
    </>
  );
};

UserMenu.propTypes = {
  // bla: PropTypes.string,
};

UserMenu.defaultProps = {
  // bla: 'test',
};

export default UserMenu;
