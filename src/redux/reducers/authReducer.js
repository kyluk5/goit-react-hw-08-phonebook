import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { registerSuccess, registerError } from "../actions/authAction";

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [registerSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
