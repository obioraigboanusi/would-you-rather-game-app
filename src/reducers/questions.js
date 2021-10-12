import {
  ANSWER_QUESTIONS,
  RECEIVE_QUESTIONS,
  SET_ANSWERED_QUESTIONS,
} from "../actions/questions";

export function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SET_ANSWERED_QUESTIONS:
      let obj = {};
      Object.keys(state).map((item) => {
        obj[item] = {
          ...state[item],
          isAnswered:
            state[item].optionOne.votes.includes(action.uid) ||
            state[item].optionTwo.votes.includes(action.uid),
        };
      });

      return {
        ...obj,
      };
    case ANSWER_QUESTIONS:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.includes(
              action.authedUser
            )
              ? state[action.qid][action.answer].votes.filter(
                  (item) => item !== action.autherdUser
                )
              : state[action.qid][action.answer].votes.concat([
                  action.authedUser,
                ]),
          },
          isAnswered: state[action.qid][action.answer].votes.includes(
            action.authedUser
          )
            ? false
            : true,
        },
      };

    default:
      return state;
  }
}
