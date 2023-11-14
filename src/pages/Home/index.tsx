import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="/posts">Posts</Link>
      <Link to="/Books">Books</Link>
    </div>
  );
};
