import { HIDE_LOADING, SHOW_LOADING } from "../actions/loading";

export function loading(state = null, action) {
  switch (action.type) {
    case SHOW_LOADING:
      return (loading = true);
    case HIDE_LOADING:
      return (loading = false);
    default:
      return state;
  }
}
