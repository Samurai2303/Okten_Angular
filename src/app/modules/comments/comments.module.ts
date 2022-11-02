import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';
import { SelectedCommentPageComponent } from './pages/selected-comment-page/selected-comment-page.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { SelectedCommentComponent } from './components/selected-comment/selected-comment.component';
import {CommentsService} from "./services";


@NgModule({
  declarations: [
    CommentsPageComponent,
    SelectedCommentPageComponent,
    CommentsComponent,
    CommentComponent,
    SelectedCommentComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ],
  providers:[CommentsService]
})
export class CommentsModule { }
