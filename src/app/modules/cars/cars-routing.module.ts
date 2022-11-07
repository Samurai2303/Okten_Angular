import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainCarsLayoutComponent} from "./layouts/main-cars-layout/main-cars-layout.component";
import {CarsHomePageComponent} from "./pages/cars-home-page/cars-home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {CarsPageComponent} from "./pages/cars-page/cars-page.component";
import {SelectedCarPageComponent} from "./pages/selected-car-page/selected-car-page.component";
import {CarResolver, CarsResolver} from "./services";
import {CarsGuard} from "./guards";

const routes: Routes = [
  {
    path: '', component: MainCarsLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: "full"},
      {path: 'home', component: CarsHomePageComponent},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent},
      {path: 'cars', component: CarsPageComponent, resolve:{cars:CarsResolver}, canActivate:[CarsGuard]},
      {path: 'cars/:id', component: SelectedCarPageComponent, resolve:{car:CarResolver}, canActivate:[CarsGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {
}
