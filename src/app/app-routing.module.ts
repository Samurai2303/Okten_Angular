import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {MainHomePageComponent} from "./pages/main-home-page/main-home-page.component";

const routes: Routes = [
  {path:'', component:MainLayoutComponent, children:[
      {path:'', redirectTo:'home', pathMatch: "full"},
      {path:'home', component:MainHomePageComponent},
      {path:'cars', loadChildren:() => import('./modules/cars/cars.module').then(value => value.CarsModule)}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
