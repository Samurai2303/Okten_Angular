import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsLayoutComponent} from "./layouts/cars-layout/cars-layout.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CarsPageComponent} from "./pages/cars-page/cars-page.component";
import {SelectedCarPageComponent} from "./pages/selected-car-page/selected-car-page.component";
import {CarResolver, CarsResolver} from "./services";

const routes: Routes = [
  {path:'', component:CarsLayoutComponent, children:[
      {path:'', redirectTo:'home', pathMatch:"full"},
      {path:'home', component:HomePageComponent},
      {path:'cars', component:CarsPageComponent, resolve:{cars: CarsResolver}},
      {path:'cars/:id', component:SelectedCarPageComponent, resolve:{car:CarResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
