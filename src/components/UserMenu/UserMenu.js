import React from "react";
// import PropTypes from 'prop-types';
import "./UserMenu.css";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/operations/authOperations";

const UserMenu = () => {
  const email = useSelector((state) => state.auth.user.email);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const logOutfromPage = () => {
    dispatch(logOut(token));
  };

  return (
    <>
      <p>{email}</p>
      <button className="log-out" onClick={logOutfromPage}>
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
