import React from "react";
// import PropTypes from 'prop-types';
import "./UserMenu.css";

const UserMenu = () => {
  return (
    <>
      <p>kyluk5@gmail.com</p>
      <button className="log-out">Log Out</button>
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
