import axios from "axios";
import {
  addContactsReguest,
  addContactsSeccess,
  addContactsError,
  getContactsReguest,
  getContactsSeccess,
  getContactsError,
  deleteContactsReguest,
  deleteContactsSeccess,
  deleteContactsError,
} from "../actions/contactsAction";

export const getContact = () => (dispatch, getState) => {
  const {
    auth: { token },
  } = getState();

  dispatch(getContactsReguest());
  axios({
    url: "/contacts",
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response.data);
      dispatch(getContactsSeccess(response.data));
    })
    .catch((error) => dispatch(getContactsError(error)));
};

export const addContact = (name, number) => (dispatch, getState) => {
  const {
    auth: { token },
  } = getState();

  dispatch(addContactsReguest());
  axios({
    url: "/contacts",
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { name, number },
  })
    .then((response) => {
      dispatch(addContactsSeccess(response.data));
    })
    .catch((error) => dispatch(addContactsError(error)));
};

export const deleteContact = (id) => (dispatch, getState) => {
  const {
    auth: { token },
  } = getState();

  dispatch(deleteContactsReguest());
  axios({
    url: `/contacts/${id}`,
    method: "delete",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(() => {
      dispatch(deleteContactsSeccess(id));
    })
    .catch((error) => dispatch(deleteContactsError(error)));
};
