import axios from "axios";
import {
  registerReguest,
  registerSuccess,
  registerError,
  loginReguest,
  loginSuccess,
  loginError,
  logOutReguest,
  logOutSuccess,
  logOutError,
} from "../actions/authAction";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

export const register = (user) => async (dispatch) => {
  dispatch(registerReguest());
  await axios
    .post("/users/signup", user)
    .then((response) => dispatch(registerSuccess(response.data)))
    .catch((error) => dispatch(registerError(error)));
};

export const logIn = (user) => async (dispatch) => {
  dispatch(loginReguest());
  await axios
    .post("/users/login", user)
    .then((response) => dispatch(loginSuccess(response.data)))
    .catch((error) => dispatch(loginError(error)));
};

export const logOut = (token) => async (dispatch) => {
  dispatch(logOutReguest());
  await axios({
    url: "/users/logout",
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(() => dispatch(logOutSuccess()))
    .catch((error) => dispatch(logOutError(error)));
};
