import { IBook } from "../types/books";

interface IBookProps {
  book: IBook;
}

export const Book = ({ book }: IBookProps) => {
  return <div>{book.author}</div>;
};
