import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PostsService} from "../../services";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:IPost[]

  @Output()
  selectedPost = new EventEmitter<IPost>();

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.postsService.getAll().subscribe(value => this.posts = value);
  }

  selectPost(post: IPost):void {
    this.selectedPost.emit(post);
  }
}
