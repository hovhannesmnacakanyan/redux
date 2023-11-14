import { useState, ChangeEvent, Dispatch } from "react";
import { useDispatch } from "react-redux";
import { booksSlice } from "../../store/books";

export const BookForm = () => {
  const dispatch = useDispatch();
  const { setBooks } = booksSlice.actions;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    setCb: Dispatch<React.SetStateAction<string>>
  ) => {
    setCb(event.target.value);
  };

  const handleAddBook = () => {
    dispatch(setBooks({ title, author, description, id: Date.now() }));
  };

  return (
    <div>
      <input
        value={title}
        onChange={(event) => handleChange(event, setTitle)}
      />
      <input
        value={author}
        onChange={(event) => handleChange(event, setAuthor)}
      />
      <input
        value={description}
        onChange={(event) => handleChange(event, setDescription)}
      />
      <button onClick={handleAddBook}>Add</button>
    </div>
  );
};
