import { Provider } from "react-redux";
import { Books, Home, Posts } from "./pages";
import { store } from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Post } from "./pages/Posts/Post";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/books", element: <Books /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:id", element: <Post /> },
  { path: "*", element: <>not found</> },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
};

export default App;
