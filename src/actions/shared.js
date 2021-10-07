import { batch } from "react-redux";
import { _getQuestions, _getUsers } from "../_DATA";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

export const handleInitialData = () => (dispatch) => {
  return Promise.all([_getUsers(), _getQuestions]).then(
    ([users, questions]) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    }
  );
};
