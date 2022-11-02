import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-selected-user-page',
  templateUrl: './selected-user-page.component.html',
  styleUrls: ['./selected-user-page.component.css']
})
export class SelectedUserPageComponent implements OnInit {

  user: IUser;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.user = this.router.getCurrentNavigation()?.extras.state?.['user'];
      if (!this.user) {
        this.usersService.getById(id).subscribe(value => this.user = value);
      }
    })
  }

  ngOnInit(): void {
  }

}
