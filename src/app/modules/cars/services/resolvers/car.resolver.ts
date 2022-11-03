import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import {ICar} from "../../interfaces";
import {CarsService} from "../cars.service";

@Injectable({
  providedIn: 'root'
})
export class CarResolver implements Resolve<ICar> {

  constructor(private carsService:CarsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICar> {
    let {id} = route.params;
    return this.carsService.getById(id);
  }
}
