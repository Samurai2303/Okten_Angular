import { Component, OnInit } from '@angular/core';
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  selectedUser: IUser;

  constructor() { }

  ngOnInit(): void {
  }

  selectUser(user: IUser): void {
    this.selectedUser = user;
  }

}
