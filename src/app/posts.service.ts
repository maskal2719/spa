import { Injectable } from '@angular/core';
import {Post} from "./interfaces/interfaces";
import {POSTS} from "./post";
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  posts = POSTS;

  create(post: Post) : Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/posts',post)
    console.log(post)
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/posts/${id}`)
  }

  getById(id: string | null) : Observable<Post>{
    return this.http.get<Post>(`http://localhost:3000/posts/${id}`)
  }

  update(post?: Post){
    alert('Post update!')
    return this.http.put<void>(`http://localhost:3000/posts/${post!.id}`,post)

  }
}
