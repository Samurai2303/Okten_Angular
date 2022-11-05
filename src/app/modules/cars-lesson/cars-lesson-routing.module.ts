import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from "./components/cars/cars.component";
import {CarsLessonLayoutComponent} from "./layouts/cars-lesson-layout/cars-lesson-layout.component";

const routes: Routes = [
  {
    path: '', component: CarsLessonLayoutComponent, children: [
      {path: '', redirectTo: 'cars', pathMatch: "full"},
      {path: 'cars', component: CarsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsLessonRoutingModule {
}
