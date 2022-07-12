import {Component, EventEmitter, Input, OnDestroy, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Post} from "../../interfaces/interfaces";
import {PostsService} from "../../posts.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,OnDestroy {

  @Input() post! : Post;
  @Output() onRemove = new EventEmitter<number>();

  posts !: Post[];
  uSub !: Subscription;

  removePost(id: MouseEvent) {
    this.onRemove.emit(this.post.id)
  }
  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
    this.uSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    })
    console.log('ngOnInit')
  }

  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe()
    }
    console.log('ngOnDestroy', this.posts)
  }

}
