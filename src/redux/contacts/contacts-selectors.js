import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.isLoading;

export const getContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
