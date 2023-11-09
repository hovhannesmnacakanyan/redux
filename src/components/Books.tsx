import { booksSel } from "../store/books";
import { Book } from "./Book";
import { useSelector } from "react-redux";

export const Books = () => {
  const books = useSelector(booksSel.booksSelector);

  console.log(books);

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </>
  );
};
