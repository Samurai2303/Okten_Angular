import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services";

@Component({
  selector: 'app-cars-header',
  templateUrl: './cars-header.component.html',
  styleUrls: ['./cars-header.component.css']
})
export class CarsHeaderComponent implements OnInit {
  username: string | null;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getUsername().subscribe(value => this.username = value);
  }

}
