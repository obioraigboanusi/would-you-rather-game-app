import { batch } from "react-redux";
import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../_DATA";
import { addQuestion, receiveQuestions, answerQuestion } from "./questions";
import { receiveUsers, updateUserAnswers, updateUserQuestions } from "./users";

export const handleInitialData = () => async (dispatch) => {
  const questions = await _getQuestions();
  const users = await _getUsers();
  return batch(() => {
    dispatch(receiveQuestions(questions));
    dispatch(receiveUsers(users));
  });
};

export function handleAddQuestion(question) {
  return (dispatch) => {
    return _saveQuestion(question)
      .then((res) => {
        console.log("res", res);
        batch(() => {
          dispatch(addQuestion(res));
          dispatch(updateUserQuestions(res.id, res.author));
        });
      })
      .catch((e) => {
        console.warn("Error in creating poll...", e);
        alert("There was an error creating the poll, Please try again");
      });
  };
}
export function handleAnswerQuestion(info) {
  return (dispatch) => {
    batch(() => {
      dispatch(answerQuestion(info));
      dispatch(updateUserAnswers(info));
    });
    return _saveQuestionAnswer(info).catch((e) => {
      console.warn("Error in submitting poll...", e);
      batch(() => {
        dispatch(answerQuestion(info));
        dispatch(updateUserAnswers(info));
      });
      alert("There was an error submitting the poll, Please try again");
    });
  };
}
