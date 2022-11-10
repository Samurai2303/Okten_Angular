import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsHeaderComponent } from './components/cars-header/cars-header.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { MainCarsLayoutComponent } from './layouts/main-cars-layout/main-cars-layout.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SelectedCarPageComponent } from './pages/selected-car-page/selected-car-page.component';
import { SelectedCarComponent } from './components/selected-car/selected-car.component';
import { CarsHomePageComponent } from './pages/cars-home-page/cars-home-page.component';
import {AuthService} from "./services/auth.service";
import {CarsService} from "./services/cars.service";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    CarsHeaderComponent,
    CarsComponent,
    CarComponent,
    CarFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    MainCarsLayoutComponent,
    CarsPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    SelectedCarPageComponent,
    SelectedCarComponent,
    CarsHomePageComponent
  ],
    imports: [
        CommonModule,
        CarsRoutingModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatToolbarModule,
        MatDialogModule,
        MatExpansionModule,
        MatPaginatorModule
    ],
  providers: [
    AuthService,
    CarsService
  ]
})
export class CarsModule { }
