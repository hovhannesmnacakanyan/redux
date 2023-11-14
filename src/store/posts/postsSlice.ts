import { IPost } from "../../types/posts";
import { initialState } from "./initialState";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "postsStore",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.postsList = action.payload;
    },

    setPost: (state, action: PayloadAction<IPost>) => {
      state.post = action.payload;
    },
  },
});
