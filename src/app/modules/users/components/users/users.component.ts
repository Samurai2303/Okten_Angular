import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  @Output()
  selectedUser = new EventEmitter<IUser>();

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(value => this.users = value);
  }

  selectUser(user:IUser):void {
    this.selectedUser.emit(user);
  }

}
