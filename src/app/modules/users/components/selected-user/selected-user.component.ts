import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent implements OnInit {

  @Input()
  user: IUser

  constructor() {
  }

  ngOnInit(): void {
  }

}
