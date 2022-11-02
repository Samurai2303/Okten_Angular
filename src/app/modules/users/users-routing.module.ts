import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersPageComponent} from "./pages/users-page/users-page.component";
import {SelectedUserPageComponent} from "./pages/selected-user-page/selected-user-page.component";

const routes: Routes = [
  {path: '', component: UsersPageComponent},
  {path: ':id', component: SelectedUserPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
