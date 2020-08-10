import { createAction } from "@reduxjs/toolkit";
import {
  REGISTER_REGUEST,
  REGISTER_REGUEST_SUCCESS,
  REGISTER_REGUEST_ERROR,
  LOGIN_REGUEST,
  LOGIN_REGUEST_SUCCESS,
  LOGIN_REGUEST_ERROR,
  LOGOUT_REGUEST,
  LOGOUT_REGUEST_SUCCESS,
  LOGOUT_REGUEST_ERROR,
  CURRENT_USER_REGUEST,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_ERROR,
} from "../constants/authConst";

export const registerReguest = createAction(REGISTER_REGUEST);
export const registerSuccess = createAction(REGISTER_REGUEST_SUCCESS);
export const registerError = createAction(REGISTER_REGUEST_ERROR);

export const loginReguest = createAction(LOGIN_REGUEST);
export const loginSuccess = createAction(LOGIN_REGUEST_SUCCESS);
export const loginError = createAction(LOGIN_REGUEST_ERROR);

export const logOutReguest = createAction(LOGOUT_REGUEST);
export const logOutSuccess = createAction(LOGOUT_REGUEST_SUCCESS);
export const logOutError = createAction(LOGOUT_REGUEST_ERROR);

export const getCurrentUserReguest = createAction(CURRENT_USER_REGUEST);
export const getCurrentUserSuccess = createAction(CURRENT_USER_SUCCESS);
export const getCurrentUserError = createAction(CURRENT_USER_ERROR);
