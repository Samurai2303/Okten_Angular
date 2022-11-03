import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users);
  }

  getById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${urls.users}/${id}`);
  }

  create(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user);
  }

  update(id: number, user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(`${urls.users}/${id}`, user);
  }

  delete(id: number): Observable<IUser> {
    return this.httpClient.delete<IUser>(`${urls.users}/${id}`);
  }

}
