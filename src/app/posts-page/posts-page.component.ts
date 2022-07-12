import { Component, Input, OnInit} from '@angular/core';
import {Post} from "../interfaces/interfaces";
import {PostsService} from "../posts.service";


@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css'],
})
export class PostsPageComponent implements OnInit {

  searchTitle = '';
  posts !: Post[];


  constructor(private postsService: PostsService) { }

  ngOnInit(){
    this.postsService.getAll().subscribe(posts => {
      setTimeout(() => {
        this.posts = posts;
        this.posts.reverse()
      },3000)

    })
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id);
    })
  }
}
