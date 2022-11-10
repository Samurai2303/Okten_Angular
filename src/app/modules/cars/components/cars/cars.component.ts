import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ICar, IPaginatedData} from "../../interfaces";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: IPaginatedData<ICar>;

  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

}
