import {Component, OnInit} from '@angular/core';
import {CarsService} from "../../services";
import {ICar} from "../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[];
  form: FormGroup;
  editedCar: ICar | null;

  constructor(private carsService: CarsService) {
    this._initForm();
  }

  ngOnInit(): void {
    this.carsService.getAll().subscribe(value => this.cars = value);
  }

  _initForm(): void {
    this.form = new FormGroup({
        model: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
        price: new FormControl(null, [Validators.required, Validators.min(1000), Validators.max(1000000)]),
        year: new FormControl(null, [Validators.required, Validators.min(1990), Validators.max(new Date().getFullYear())]),
      }
    );
  }

  save() {
    if (this.editedCar) {
      this.carsService.updateById(this.form.value, this.editedCar.id).subscribe(value => {
        let car = this.cars.find(car => car.id === value.id);
        Object.assign(car!, value);
        this.editedCar = null;
      });
    } else {
      this.carsService.create(this.form.value).subscribe(value => this.cars.push(value));
    }
    this.form.reset();
  }

  editCar(car: ICar) {
    this.editedCar = car;
    this.form.setValue({
      model: car.model,
      price: car.price,
      year: car.year
    });
  }

  deleteCar(id: number) {
    this.carsService.delete(id).subscribe(() => {
      let index = this.cars.findIndex(value => value.id === id);
      this.cars.splice(index, 1);
    })
  }
}




