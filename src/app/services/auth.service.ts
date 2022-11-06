import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAuth, ITokens} from "../interfaces";
import {urls} from "../configs";
import {BehaviorSubject, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _accessToken = 'access';
  private readonly _refreshToken = 'refresh';

  user = new BehaviorSubject<string | null>(null);

  constructor(private httpClient:HttpClient) { }

  login(user: IAuth): Observable<ITokens> {
    return this.httpClient.post<ITokens>(urls.login.login, user).pipe(
      tap((tokens) => {
        this.user.next(user.username);
        this.setTokens(tokens);
      })
    );
  }

  refresh(refresh: string): Observable<ITokens> {
    return this.httpClient.post<ITokens>(urls.login.refresh, {refresh}).pipe(
      tap((tokens) => {
        this.setTokens(tokens);
      })
    );
  }

  isAuthoristed(): boolean {
    return !!this._getAccessToken();
  }

  getUsername(): Observable<string|null> {
    return this.user.asObservable();
  }

  private setTokens({access, refresh}: ITokens): void {
    localStorage.setItem(this._accessToken, access);
    localStorage.setItem(this._refreshToken, refresh);
  }

   _getAccessToken():string {
     return localStorage.getItem(this._accessToken) || '';
  }

  _getRefreshToken(): string {
    return localStorage.getItem(this._refreshToken) || '';
  }

  deleteTokens(): void {
    localStorage.removeItem(this._accessToken);
    localStorage.removeItem(this._refreshToken);
    this.user.next(null);
  }

}
