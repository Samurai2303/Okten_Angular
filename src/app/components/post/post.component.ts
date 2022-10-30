import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;

  @Output()
  selectedPost = new EventEmitter<IPost>();

  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  selectPost():void {
    this.selectedPost.emit(this.post);
  }

  showDetails():void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute, state: {post: this.post}});
  }
}
