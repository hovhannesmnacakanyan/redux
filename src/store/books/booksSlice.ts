import { IBook } from "../../types/books";
import { initialState } from "./initialState";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "booksStore",
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IBook>) => {
      state.books = [...state.books, action.payload];
    },
  },
});
