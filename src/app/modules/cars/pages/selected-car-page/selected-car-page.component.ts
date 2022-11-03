import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICar} from "../../interfaces";

@Component({
  selector: 'app-selected-car-page',
  templateUrl: './selected-car-page.component.html',
  styleUrls: ['./selected-car-page.component.css']
})
export class SelectedCarPageComponent implements OnInit {
  car: ICar;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({car}) => this.car = car);
  }

}
