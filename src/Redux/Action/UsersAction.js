import {
  FETCH_USERS_DATA,
  FETCH_USER_DETAILS_DATA,
  DELETE_USER_DATA
} from "../Constant/UsersConstant";
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

export const fetchUserDetailsAction = (id) => {
  return (dispatch) => {
    const host = `${config.api_url}`;
    const path = "/" + id;

    let url = host + path;

    axios.get(url)
      .then(response => {
        return response.data
      })
      .then(data => {
        dispatch({
          type: FETCH_USER_DETAILS_DATA,
          payload: data
        })
      })
      .catch (error => {
        console.error(error);
        return { message: "something went wrong" };
      });
  };
};

export const deleteUserAction = (id) => {
  return (dispatch) => {
    const host = `${config.api_url}`;
    const path = "/" + id;

    let url = host + path;

    axios.delete(url)
      .then(response => {
        return response.data
      })
      .then(data => {
        dispatch({
          type: DELETE_USER_DATA,
          payload: data
        })
      })
      .catch (error => {
        console.error(error);
        return { message: "something went wrong" };
      });
  };
};
