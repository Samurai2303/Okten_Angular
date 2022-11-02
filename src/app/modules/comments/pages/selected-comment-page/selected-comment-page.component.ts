import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommentsService} from "../../services";
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-selected-comment-page',
  templateUrl: './selected-comment-page.component.html',
  styleUrls: ['./selected-comment-page.component.css']
})
export class SelectedCommentPageComponent implements OnInit {

  comment: IComment;

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private commentsService:CommentsService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.comment = this.router.getCurrentNavigation()?.extras.state?.['comment'];
      if (!this.comment) {
        this.commentsService.getById(id).subscribe(value => this.comment = value);
      }
    })
  }

  ngOnInit(): void {
  }

}
