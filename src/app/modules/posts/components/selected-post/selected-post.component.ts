import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-selected-post',
  templateUrl: './selected-post.component.html',
  styleUrls: ['./selected-post.component.css']
})
export class SelectedPostComponent implements OnInit {
  @Input()
  post: IPost;

  constructor() {
  }

  ngOnInit(): void {
  }

}
