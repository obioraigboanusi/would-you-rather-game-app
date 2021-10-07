import { combineReducers } from "redux";
import { authedUser, questions, users } from "./authedUser";
export default combineReducers({
  authedUser,
  questions,
  users
});
