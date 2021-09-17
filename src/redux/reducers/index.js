import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { combineReducers } from "redux";
import peopleReducer from "./people";
const initialState = {
  blog: {},
};

export const history = createBrowserHistory();

export function apprReducer(state = initialState, action) {
  switch (action.type) {
    case "BLOG_LOADED":
      return {
        ...state,
        blog: action.payload,
      };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  app: apprReducer,
  people: peopleReducer,
  router: connectRouter(history),
});
export default rootReducer;
