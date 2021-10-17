import { batch } from "react-redux";
import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";
import { hideLoading, showLoading } from "./loading";
import { addQuestion, receiveQuestions, answerQuestion } from "./questions";
import { receiveUsers, updateUserAnswers, updateUserQuestions } from "./users";

export const handleInitialData = () => async (dispatch) => {
  dispatch(showLoading());
  const questions = await _getQuestions();
  const users = await _getUsers();
  return batch(() => {
    dispatch(receiveQuestions(questions));
    dispatch(receiveUsers(users));
    dispatch(hideLoading());
  });
};

export function handleAddQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading());
    return _saveQuestion(question)
      .then((res) => {
        batch(() => {
          dispatch(addQuestion(res));
          dispatch(updateUserQuestions(res.id, res.author));
        });
        dispatch(hideLoading());
      })
      .catch((e) => {
        dispatch(hideLoading());
        console.warn("Error in creating poll...", e);
        alert("There was an error creating the poll, Please try again");
      });
  };
}
export function handleAnswerQuestion(info) {
  return (dispatch) => {
    dispatch(showLoading());
    batch(() => {
      dispatch(answerQuestion(info));
      dispatch(updateUserAnswers(info));
    });
    return _saveQuestionAnswer(info)
      .then(() => {
        dispatch(hideLoading());
      })
      .catch((e) => {
        console.warn("Error in submitting poll...", e);
        batch(() => {
          dispatch(answerQuestion(info));
          dispatch(updateUserAnswers(info));
        });
        dispatch(hideLoading());
        alert("There was an error submitting the poll, Please try again");
      });
  };
}
