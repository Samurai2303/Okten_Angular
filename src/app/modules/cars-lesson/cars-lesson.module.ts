import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsLessonRoutingModule } from './cars-lesson-routing.module';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarsLessonLayoutComponent } from './layouts/cars-lesson-layout/cars-lesson-layout.component';
import { HeaderComponent } from './components/header/header.component';
import {CarsService} from "./services";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    CarComponent,
    CarsComponent,
    CarsLessonLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CarsLessonRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    CarsService
  ]
})
export class CarsLessonModule { }
