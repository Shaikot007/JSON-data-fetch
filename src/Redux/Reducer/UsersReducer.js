import {
  FETCH_USERS_DATA,
  FETCH_USER_DETAILS_DATA,
  POST_USER_DATA,
  DELETE_USER_DATA
} from "../Constant/UsersConstant";

//Redux reducer

const defaultState = {
  users_list: [],
  user_details: {},
  post_user: {},
  delete_user: {}
};

export const usersReducer = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_USERS_DATA:
      return { ...state, users_list: [...action.payload] };
    case FETCH_USER_DETAILS_DATA:
      return { ...state, user_details: {...action.payload} };
    case POST_USER_DATA:
      return { ...state, post_user: {...action.payload} };
    case DELETE_USER_DATA:
      return { ...state, delete_user: {...action.payload} };
    default:
      return state;
  }
};
