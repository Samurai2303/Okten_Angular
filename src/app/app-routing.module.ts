import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

let routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path:'', redirectTo:'home', pathMatch:"full"},
      {path:'home', loadChildren: () => import('./modules/home/home.module').then((value => value.HomeModule))},
      {path: 'users', loadChildren: () => import('./modules/users/users.module').then(value => value.UsersModule)},
      {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(value => value.PostsModule)},
      {path: 'comments', loadChildren: () => import('./modules/comments/comments.module').then(value => value.CommentsModule)}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
