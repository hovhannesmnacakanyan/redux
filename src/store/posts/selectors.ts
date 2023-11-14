import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IPostsInitialState } from "../../types/posts";

const postsStoreSelector = (state: RootState) => state.postsStore;

const postsSelector = createSelector(
  [postsStoreSelector],
  (postsStore: IPostsInitialState) => postsStore.postsList
);

const postSelector = createSelector(
  [postsStoreSelector],
  (postsStore: IPostsInitialState) => postsStore.post
);

export const postsSel = {
  postsStoreSelector,
  postSelector,
  postsSelector,
};
