import { Component, OnInit } from '@angular/core';
import {ICar} from "../../interfaces";

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {
  editedCar: ICar;
  cars: ICar[];

  constructor() { }

  ngOnInit(): void {

  }

  editCar(car: ICar) {
    this.editedCar = car;
  }

  carsF(cars: ICar[]) {
    this.cars = cars;
  }
}
