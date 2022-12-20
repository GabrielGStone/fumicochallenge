import { combineReducers } from "redux";
import { reducer as todo } from "./ducks/todo";
import { reducer as auth } from "./ducks/auth";
const rootReducer = combineReducers({
  todo,
  auth,
});

export default rootReducer;
