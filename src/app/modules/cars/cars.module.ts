import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { SelectedCarPageComponent } from './pages/selected-car-page/selected-car-page.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { HeaderComponent } from './components/header/header.component';
import { CarsLayoutComponent } from './layouts/cars-layout/cars-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CarsService} from "./services";


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent,
    CarsPageComponent,
    SelectedCarPageComponent,
    CarFormComponent,
    HeaderComponent,
    CarsLayoutComponent,
    HomePageComponent
  ],
  exports: [
    CarComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    CarsService
  ]
})
export class CarsModule { }
