import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces/interfaces";
import {ActivatedRoute, Params} from "@angular/router";
import {PostsService} from "../../posts.service";



@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post!: Post | undefined;
  toggle!: boolean;
  currentPost !: Post;

  constructor(
    private route : ActivatedRoute,
    private postsService : PostsService
  ) { }

  ngOnInit(): void {
    this.postsService.getById(this.route.snapshot.paramMap.get('id'))
      .subscribe(post => {
        this.currentPost = post;
      })
  }

  editPost() {
    this.postsService.update({
      ...this.currentPost,
      title: this.currentPost.title,
      body: this.currentPost.body,
      author : this.currentPost.author,
      urlPict: this.currentPost.urlPict,
      date: this.currentPost.date
    }).subscribe()

  }
}


