import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from "./app.component";
import {
  CommentComponent,
  CommentsComponent,
  HeaderComponent,
  PostComponent,
  PostsComponent, SelectedCommentComponent, SelectedPostComponent, SelectedUserComponent,
  UserComponent,
  UsersComponent
} from "./components";
import {CommentsPageComponent, HomePageComponent, PostsPageComponent, UsersPageComponent} from "./pages";
import {MainLayoutComponent} from "./layouts";
import {RouterModule, Routes} from "@angular/router";

let routes:Routes = [
  {path:'', component:MainLayoutComponent, children: [
      {path: '', redirectTo: '/home', pathMatch:"full"},
      {path: 'home', component: HomePageComponent},
      {path: 'users', component: UsersPageComponent, children:[
          {path:':id', component:SelectedUserComponent}
        ]},
      {path: 'posts', component: PostsPageComponent, children:[
          {path:':id', component: SelectedPostComponent}
        ]},
      {path: 'comments', component: CommentsPageComponent, children:[
          {path:':id', component: SelectedCommentComponent}
        ]}
    ]}
];

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        PostsComponent,
        PostComponent,
        CommentsComponent,
        CommentComponent,
        UserComponent,
        UsersPageComponent,
        PostsPageComponent,
        CommentsPageComponent,
        MainLayoutComponent,
        UsersComponent,
        HeaderComponent,
        HomePageComponent,
        SelectedUserComponent,
        SelectedCommentComponent,
        SelectedPostComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
