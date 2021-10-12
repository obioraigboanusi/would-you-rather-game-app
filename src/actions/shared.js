import { batch } from "react-redux";
import { _getQuestions, _getUsers } from "../_DATA";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

export const handleInitialData = () => async (dispatch) => {
  const questions = await _getQuestions();
  const users = await _getUsers();
  return batch(() => {
    dispatch(receiveQuestions(questions));
    dispatch(receiveUsers(users));
  });
};
