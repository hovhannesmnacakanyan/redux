import { Book } from "./Book";
import { useSelector } from "react-redux";
import { BookForm } from "./BookForm";
import { booksSel } from "../../store/books";
import { Link } from "react-router-dom";

export const Books = () => {
  const books = useSelector(booksSel.booksSelector);

  console.log(books);

  return (
    <>
      <Link to="/">Home</Link>
      <BookForm />
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </>
  );
};
