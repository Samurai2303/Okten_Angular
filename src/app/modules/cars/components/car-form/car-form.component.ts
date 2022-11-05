import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ICar} from "../../interfaces";
import {CarsService} from "../../services";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  @Input()
  editedCar: ICar|null;
  @Input()
  cars: ICar[];

  form: FormGroup;

  constructor(private carsService:CarsService) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      price: new FormControl(null, [Validators.required, Validators.min(500), Validators.max(1000000)]),
      year: new FormControl(null, [Validators.required, Validators.min(1990), Validators.max(new Date().getFullYear())]),
    });
    if (this.editedCar) {
      this.form.setValue({
        model: this.editedCar.model,
        price: this.editedCar.price,
        year: this.editedCar.year
      });
    }
  }

  save():void {
    if (!this.editedCar) {
      this.carsService.create(this.form.value).subscribe(value => this.cars.push(value));
    } else {
      this.carsService.update(this.editedCar.id, this.form.value).subscribe(value => {
        let car = this.cars.find(car => car.id === this.editedCar?.id);
        Object.assign(car!, value);
      })
    }
    this.form.reset();
    this.editedCar = null;
  }

}
