import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../interfaces";
import {UsersService} from "../../services";

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent implements OnInit {

  user: IUser

  constructor(private router: Router,private activatedRoute: ActivatedRoute, private usersService: UsersService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.user = this.router.getCurrentNavigation()?.extras.state ?.['user'];
      console.log(this.user);
      if (!this.user) {
        this.usersService.getById(id).subscribe(value => this.user = value);
      }
    })
  }

  ngOnInit(): void {
  }

}
