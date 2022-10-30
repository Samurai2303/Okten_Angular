import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IComment} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: IComment;

  @Output()
  selectedComment = new EventEmitter<IComment>()

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  selectComment():void {
    this.selectedComment.emit(this.comment);
  }

  showDetails(): void {
    this.router.navigate([this.comment.id], {relativeTo: this.activatedRoute, state: {comment: this.comment}});
  }

}
