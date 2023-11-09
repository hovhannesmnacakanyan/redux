import { Provider } from "react-redux";
import { BookForm } from "./components/BookForm";
import { Books } from "./components/Books";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BookForm />
      <Books />
    </Provider>
  );
};

export default App;
