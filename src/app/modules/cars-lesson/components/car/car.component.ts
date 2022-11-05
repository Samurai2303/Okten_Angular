import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICar} from "../../interfaces";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input()
  car: ICar;

  @Output()
  editedCar = new EventEmitter<ICar>();
  @Output()
  deleteCarId = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  updateCar():void {
    this.editedCar.emit(this.car);
  }

  deleteCar():void {
    this.deleteCarId.emit(this.car.id);
  }
}
