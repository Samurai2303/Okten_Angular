import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

let routes: Routes = [
  {path: '', component: MainLayoutComponent, children:[
      {path:'', redirectTo:''}
    ]}
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
