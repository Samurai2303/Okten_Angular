import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginFormComponent} from "../../components/login-form/login-form.component";

@Component({
  selector: 'app-login-page',
  template: ''
})
export class LoginPageComponent implements OnInit {

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.matDialog.open(LoginFormComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      disableClose: true,
      hasBackdrop: false
    });
  }

}
