import { combineReducers } from "redux";
import { usersReducer } from "./UsersReducer";

//Redux reducer combine

export default combineReducers({
  users: usersReducer
});
