import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  // addContactRequest,
  addContactSuccess,
  // addContactError,
  // deleteContactRequest,
  deleteContactSuccess,
  // deleteContactError,
  changeFilter,
  // fetchContactRequest,
  fetchContactSuccess,
  // fetchContactError,
} from "./phonebook-actions";

const contacts = createReducer([], {
  [fetchContactSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  contacts,
  filter,
  error,
});
