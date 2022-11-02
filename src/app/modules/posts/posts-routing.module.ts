import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsPageComponent} from "./pages/posts-page/posts-page.component";
import {SelectedPostPageComponent} from "./pages/selected-post-page/selected-post-page.component";

const routes: Routes = [
  {path:'', component: PostsPageComponent},
  {path:':id', component:SelectedPostPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
