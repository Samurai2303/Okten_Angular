import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { SelectedPostPageComponent } from './pages/selected-post-page/selected-post-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { SelectedPostComponent } from './components/selected-post/selected-post.component';
import {PostsService} from "./services/posts.service";


@NgModule({
  declarations: [
    PostsPageComponent,
    SelectedPostPageComponent,
    PostsComponent,
    PostComponent,
    SelectedPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }
