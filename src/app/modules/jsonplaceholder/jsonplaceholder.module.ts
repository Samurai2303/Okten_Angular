import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonplaceholderRoutingModule } from './jsonplaceholder-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';
import { SelectedUserPageComponent } from './pages/selected-user-page/selected-user-page.component';
import { SelectedPostPageComponent } from './pages/selected-post-page/selected-post-page.component';
import { SelectedCommentPageComponent } from './pages/selected-comment-page/selected-comment-page.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { JsonplaceholderLayoutComponent } from './layouts/jsonplaceholder-layout/jsonplaceholder-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {CommentsService, PostsService, UsersService} from "./services";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    UsersPageComponent,
    PostsPageComponent,
    CommentsPageComponent,
    SelectedUserPageComponent,
    SelectedPostPageComponent,
    SelectedCommentPageComponent,
    UserFormComponent,
    PostFormComponent,
    CommentFormComponent,
    JsonplaceholderLayoutComponent,
    HeaderComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    JsonplaceholderRoutingModule
  ],
  providers: [
    PostsService, UsersService, CommentsService
  ]
})
export class JsonplaceholderModule { }
