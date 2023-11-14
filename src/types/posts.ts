export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostsInitialState {
  postsList: IPost[];
  post: IPost | null;
}
