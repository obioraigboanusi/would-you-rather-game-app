import {
  RECEIVE_USERS,
  UPDATE_USER_ANSWERS,
  UPDATE_USER_QUESTIONS,
} from "../actions/users";

export function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case UPDATE_USER_QUESTIONS:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: [...state[action.authedUser].questions, action.qid],
        },
      };
    case UPDATE_USER_ANSWERS:
      console.log(action.authedUser)
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };

    default:
      return state;
  }
}
