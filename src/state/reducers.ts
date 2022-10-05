import { combineReducers } from "redux";
import { reducer as todo } from "./ducks/todo";

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
