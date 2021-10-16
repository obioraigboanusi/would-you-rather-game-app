import { LOGOUT_USER, SET_AUTHED_USER } from "../actions/authedUsers";

export function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    case LOGOUT_USER:
      return (authedUser = null);

    default:
      return state;
  }
}
