import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { postsOp, postsSel } from "../../store/posts";

export const Post = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const post = useAppSelector(postsSel.postSelector);

  useEffect(() => {
    dispatch(postsOp.getPostById(+(params.id as string)));
  }, [dispatch, params.id]);

  if (!+(params.id as string)) {
    return <>Please set valid ID</>;
  }

  return post ? (
    <div>{post.body}</div>
  ) : (
    <>Post with id: {params.id} not found</>
  );
};
