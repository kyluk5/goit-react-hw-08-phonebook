import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactsSeccess,
  getContactsSeccess,
  deleteContactsSeccess,
  inputValue,
} from "../actions/contactsAction";
import { logOutSuccess } from "../actions/authAction";

const items = createReducer([], {
  [getContactsSeccess]: (state, { payload }) => payload,
  [addContactsSeccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSeccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
  [logOutSuccess]: () => [],
});

const filter = createReducer("", {
  [inputValue]: (state, { payload }) => (state = payload),
});

export default combineReducers({
  items,
  filter,
});
