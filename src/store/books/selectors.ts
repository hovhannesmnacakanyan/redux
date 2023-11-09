import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IBooksInitialState } from "../../types/books";

const booksStoreSelector = (state: RootState) => state.booksStore;

const booksSelector = createSelector(
  [booksStoreSelector],
  (booksStore: IBooksInitialState) => booksStore.books
);

export const booksSel = {
  booksStoreSelector,
  booksSelector,
};
