import { combineReducers } from "redux";
import assessmnetsReducer from "./assessmnetsReducer";

export default combineReducers({
  assessment: assessmnetsReducer,
});
