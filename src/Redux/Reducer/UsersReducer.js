import { FETCH_USERS_DATA } from "../Constant/UsersConstant";

//Redux reducer

export const usersReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_USERS_DATA:
      return [...action.payload];
    default:
      return state;
  }
};
