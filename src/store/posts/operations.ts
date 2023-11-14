import { AppDispatch } from "..";
import { postsSlice } from "./postsSlice";

const getPosts = () => {
  const { setPosts } = postsSlice.actions;

  return async (dispatch: AppDispatch) => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => dispatch(setPosts(data)));
  };
};

const getPostById = (id: number) => {
  const { setPost } = postsSlice.actions;

  return async (dispatch: AppDispatch) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((data) => data.json())
      .then((data) => dispatch(setPost(data)));
  };
};

export const postsOp = {
  getPosts,
  getPostById,
};
