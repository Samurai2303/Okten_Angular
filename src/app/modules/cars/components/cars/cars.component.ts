import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ICar} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {CarsService} from "../../services";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[];
  @Output()
  carsV = new EventEmitter<ICar[]>();
  @Output()
  editedCar = new EventEmitter<ICar>();

  constructor(private activatedRoute:ActivatedRoute, private carsService:CarsService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({cars}) => {
      this.cars = cars;
      this.carsV.emit(cars);
    });
  }

  editCar(car:ICar) {
    this.editedCar.emit(car);
  }

  deleteCar(car: ICar) {
    this.carsService.delete(car.id).subscribe(() => {
      let index = this.cars.findIndex(value1 => value1.id === car.id);
      this.cars.splice(index, 1);
    })
  }
}
