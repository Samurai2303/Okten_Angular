import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JsonplaceholderLayoutComponent} from "./layouts/jsonplaceholder-layout/jsonplaceholder-layout.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {UsersPageComponent} from "./pages/users-page/users-page.component";
import {PostsPageComponent} from "./pages/posts-page/posts-page.component";
import {CommentsPageComponent} from "./pages/comments-page/comments-page.component";
import {SelectedUserPageComponent} from "./pages/selected-user-page/selected-user-page.component";
import {SelectedPostPageComponent} from "./pages/selected-post-page/selected-post-page.component";
import {SelectedCommentPageComponent} from "./pages/selected-comment-page/selected-comment-page.component";
import {UsersResolver} from "./services";

const routes: Routes = [
  {path:'', component:JsonplaceholderLayoutComponent, children:[
      {path:'', redirectTo: 'home', pathMatch: "full"},
      {path:'home', component:HomePageComponent},
      {path:'users', component:UsersPageComponent, resolve:{users:UsersResolver}},
      {path:'posts', component:PostsPageComponent},
      {path:'comments', component:CommentsPageComponent},
      {path:'users/:id', component:SelectedUserPageComponent},
      {path:'posts/:id', component:SelectedPostPageComponent},
      {path:'comments/:id', component:SelectedCommentPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsonplaceholderRoutingModule { }
