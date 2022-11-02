import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentsPageComponent} from "./pages/comments-page/comments-page.component";
import {SelectedCommentPageComponent} from "./pages/selected-comment-page/selected-comment-page.component";

const routes: Routes = [
  {path: '', component: CommentsPageComponent},
  {path: ':id', component: SelectedCommentPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
