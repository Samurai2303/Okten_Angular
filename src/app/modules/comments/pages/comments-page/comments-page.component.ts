import { Component, OnInit } from '@angular/core';
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css']
})
export class CommentsPageComponent implements OnInit {

  selectedComment: IComment;

  constructor() { }

  ngOnInit(): void {
  }

  selectComment(comment: IComment): void {
    this.selectedComment = comment;
  }

}
