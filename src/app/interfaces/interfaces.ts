export interface Post {
  id?: number;
  urlPict: string;
  title: string;
  body: string;
  author: string;
  date: Date;
}

export interface User {
  email: string;
  password: string;
}
