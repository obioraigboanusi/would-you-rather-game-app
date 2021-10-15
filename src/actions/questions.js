import { _saveQuestion, _saveQuestionAnswer } from "../_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SET_ANSWERED_QUESTIONS = "SET_ANSWERED_QUESTIONS";
export const ANSWER_QUESTIONS = "ANSWER_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
export function setAnsweredQuestions(uid) {
  return {
    type: SET_ANSWERED_QUESTIONS,
    uid,
  };
}

export function answerQuestion({ qid, authedUser, answer }) {
  return {
    type: ANSWER_QUESTIONS,
    qid,
    authedUser,
    answer,
  };
}

export function handleAnswerQuestion(info) {
  return (dispatch) => {
    dispatch(answerQuestion(info));
    return _saveQuestionAnswer(info).catch((e) => {
      console.warn("Error in submitting poll...", e);
      dispatch(answerQuestion(info));
      alert("There was an error submitting the poll, Please try again");
    });
  };
}
export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {

  return (dispatch) => {
    return _saveQuestion(question)
      .then((res) => {
        console.log("res", res);
        dispatch(addQuestion(res));
      })
      .catch((e) => {
        console.warn("Error in creating poll...", e);
        alert("There was an error creating the poll, Please try again");
      });
  };
}
