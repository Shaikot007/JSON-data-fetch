import { FETCH_USERS_DATA } from "../Constant/UsersConstant";
import axios from "axios";
import config from "../../config";

//Redux action

export const fetchUsersAction = () => {
  return (dispatch) => {
    return axios.get(`${config.api_url}`)
      .then(response => {
        return response.data
      })
      .then(data => {
        dispatch({
          type: FETCH_USERS_DATA,
          payload: data
        })
      })
      .catch (error => {
        console.error(error);
        return { message: "something went wrong" };
      });
  };
};
