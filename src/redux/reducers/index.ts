import { combineReducers } from "redux";
import { editorReducer } from "./editorReducer";
import { fileTreeReducer } from "./fileTreeReducer";

export const rootReducer = combineReducers({
  editorReducer,
  fileTreeReducer,
});
