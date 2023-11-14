import { configureStore, Middleware } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { booksSlice } from "./books";
import { postsSlice } from "./posts";

const middleware = [ReduxThunk] as Array<Middleware>;

export const store = configureStore({
  reducer: {
    booksStore: booksSlice.reducer,
    postsStore: postsSlice.reducer,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch | any;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
