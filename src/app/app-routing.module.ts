import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {CarsPageComponent} from "./pages/cars-page/cars-page.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CarsGuard} from "./guards";

let routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: "full"},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'cars', component: CarsPageComponent, canActivate:[CarsGuard]}
    ]
  }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
