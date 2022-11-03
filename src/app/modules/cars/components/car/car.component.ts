import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICar} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {CarsService} from "../../services";

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
  deletedCar = new EventEmitter<ICar>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  selectCar():void {
    this.router.navigate([this.car.id], {relativeTo: this.activatedRoute});
  }

  editCar():void {
    this.editedCar.emit(this.car);
  }

  deleteCar() {
    this.deletedCar.emit(this.car);
  }
}
