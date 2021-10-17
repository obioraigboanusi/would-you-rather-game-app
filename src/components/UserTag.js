import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authedUsers";
import PropTypes from "prop-types";

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
UserTag.propTypes = {
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default connect()(UserTag);
