import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: "full"},
      {path: 'home', component: HomePageComponent}
    ]
  },
  {
    path: 'jsonplaceholder',
    loadChildren: () => import('./modules/jsonplaceholder/jsonplaceholder.module').then(value => value.JsonplaceholderModule)
  },
  {path: 'cars', loadChildren: () => import('./modules/cars/cars.module').then(value => value.CarsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
