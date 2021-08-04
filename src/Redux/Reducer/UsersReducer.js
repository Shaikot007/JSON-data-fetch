import { FETCH_USERS_DATA, FETCH_USER_DETAILS_DATA } from "../Constant/UsersConstant";

//Redux reducer

const defaultState = {
  users_list: [],
  user_details: {}
};

export const usersReducer = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_USERS_DATA:
      return { ...state, users_list: [...action.payload] };
    case FETCH_USER_DETAILS_DATA:
      return { ...state, user_details: {...action.payload} };
    default:
      return state;
  }
};
