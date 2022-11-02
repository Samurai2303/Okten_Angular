import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UsersService} from "./services";
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { SelectedUserComponent } from './components/selected-user/selected-user.component';
import {SelectedUserPageComponent} from "./pages/selected-user-page/selected-user-page.component";


@NgModule({
  declarations: [
    UsersPageComponent,
    SelectedUserPageComponent,
    UsersComponent,
    UserComponent,
    SelectedUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
