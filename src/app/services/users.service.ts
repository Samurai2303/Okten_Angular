import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../interfaces";
import {Observable} from "rxjs";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users);
  }

  getById(id:number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${urls.users}/${id}`);
  }

}
