import {Component, OnInit} from '@angular/core';
import {IUser} from 'src/app/interfaces';
import {UsersService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:IUser[]

  selectedUser:IUser

  constructor(private usersService:UsersService) {

  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(value => this.users = value);
  }

  selectUser(user: IUser):void {
    this.selectedUser = user;
  }
}
