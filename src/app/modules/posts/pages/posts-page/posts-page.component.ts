import {Component, EventEmitter, OnInit} from '@angular/core';
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {

  selectedPost: IPost;

  constructor() { }

  ngOnInit(): void {
  }

  selectPost(post: IPost):void {
    this.selectedPost = post;
  }
}
