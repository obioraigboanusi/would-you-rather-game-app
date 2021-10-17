import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

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

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}
