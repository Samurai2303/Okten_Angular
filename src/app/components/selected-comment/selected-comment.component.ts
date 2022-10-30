import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IComment} from "../../interfaces";
import {CommentsService} from "../../services";

@Component({
  selector: 'app-selected-comment',
  templateUrl: './selected-comment.component.html',
  styleUrls: ['./selected-comment.component.css']
})
export class SelectedCommentComponent implements OnInit {
  comment: IComment;

  constructor(private commentsService:CommentsService, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe(({id}) => {
      this.comment = this.router.getCurrentNavigation()?.extras.state?.['comment'];
      if (!this.comment) {
        this.commentsService.getById(id).subscribe(value => this.comment = value);
      }
    })
  }

  ngOnInit(): void {
  }

}
