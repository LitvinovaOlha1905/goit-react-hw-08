import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";
import { selectFilter } from "./selectors";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
