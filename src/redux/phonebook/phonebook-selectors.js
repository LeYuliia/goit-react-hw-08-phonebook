import { createSelector } from "reselect";

const getContacts = (state) => state.phonebook.contacts;
const getFilter = (state) => state.phonebook.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export default {
  getContacts,
  getFilter,
  getVisibleContacts,
};
