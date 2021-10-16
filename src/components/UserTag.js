import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/users";

function UserTag({ user, dispatch }) {
  const logoutHandler = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="user-tag">
      <span>Hi, {user?.name}</span>
      <img
        src={user?.avatarURL}
        alt="user avatar"
        className="ui avatar image"
      />
      <button className="ui button success basic mini" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
}

export default connect()(UserTag);
