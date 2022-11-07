import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar, IPaginatedData} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<IPaginatedData<ICar>> {
    return this.httpClient.get<IPaginatedData<ICar>>(urls.cars);
  }

  getById(id: number): Observable<ICar> {
    return this.httpClient.get<ICar>(`${urls.cars}/${id}`);
  }

  create(car:ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(urls.cars, car);
  }

  update(id:number, car:ICar): Observable<ICar> {
    return this.httpClient.put<ICar>(`${urls.cars}/${id}`, car);
  }

  delete(id:number): Observable<void> {
    return this.httpClient.delete<void>(`${urls.cars}/${id}`);
  }

}
