import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommentsService} from "../../services";
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  @Output()
  selectedComment = new EventEmitter<IComment>();

  constructor(private commentsService:CommentsService) { }

  ngOnInit(): void {
    this.commentsService.getAll().subscribe(value => this.comments = value);
  }

  selectComment(comment: IComment):void {
    this.selectedComment.emit(comment);
  }
}
