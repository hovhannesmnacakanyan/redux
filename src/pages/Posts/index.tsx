import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postsOp, postsSel } from "../../store/posts";
import { useAppDispatch, useAppSelector } from "../../store";

export const Posts = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const postsList = useAppSelector(postsSel.postsSelector);

  useEffect(() => {
    dispatch(postsOp.getPosts());
  }, [dispatch]);

  return (
    <div>
      <Link to="/">Home</Link>
      {postsList.map((post) => {
        return (
          <div
            key={post.id}
            style={{ border: "1px solid #000", padding: "8px" }}
            onClick={() => navigate(`${post.id}`)}
          >
            {post.title}
          </div>
        );
      })}
    </div>
  );
};
