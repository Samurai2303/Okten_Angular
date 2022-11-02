import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-selected-comment',
  templateUrl: './selected-comment.component.html',
  styleUrls: ['./selected-comment.component.css']
})
export class SelectedCommentComponent implements OnInit {

  @Input()
  comment: IComment;

  constructor() { }

  ngOnInit(): void {
  }

}
