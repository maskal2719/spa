import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Post} from "../../interfaces/interfaces";
import {POSTS} from "../../post";
import {last, Subscription} from "rxjs";
import {PostsService} from "../../posts.service";


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit,OnDestroy {

  @Output() onAdd : EventEmitter<Post> = new EventEmitter<Post>();

  title = '';
  body = '';
  author = '';
  urlPict = '';
  uSub !: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {

  }

  addPost() {
    if(this.title.trim() && this.body.trim() && this.author.trim()) {
      let post: Post = {
        title: this.title,
        urlPict: this.urlPict,
        body: this.body,
        author: this.author,
        date: new Date()
      }

      this.uSub = this.postsService.create(post).subscribe(() => {
        this.title = this.urlPict = this.body = this.author = '';
        alert('New post created');
      })
    }
  }

}
