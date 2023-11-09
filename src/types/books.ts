export interface IBook {
  id: number;
  title: string;
  author: string;
  description: string;
}

export interface IBooksInitialState {
  books: IBook[];
}
