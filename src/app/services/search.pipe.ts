import {Pipe, PipeTransform} from "@angular/core";
import {Post} from "../interfaces/interfaces";

@Pipe({
  name: 'searchPost'
})

export class SearchPipe implements PipeTransform {
  // @ts-ignore
  transform(posts: Post[], search = ''): Post[] {
    if (!search.trim()){
      return posts;
    }
    return posts.filter(post => {
      return post.title.toLowerCase().includes(search.toLowerCase())
    })
  }

}
