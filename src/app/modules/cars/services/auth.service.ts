import {Injectable} from '@angular/core';
import {ICreatedUser, ITokens, IUser} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../configs";
import {BehaviorSubject, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _accessTokenVariable = 'access';
  private readonly _refreshTokenVariable = 'refresh';
  username = new BehaviorSubject<string | null>(null);

  constructor(private httpClient: HttpClient) {
  }

  login(user: IUser): Observable<ITokens> {
    return this.httpClient.post<ITokens>(urls.login, user).pipe(
      tap((tokens) => {
        this.username.next(user.username);
        this.setTokens(tokens);
      })
    );
  }

  register(user: IUser): void {
    this.httpClient.post<ICreatedUser>(urls.register, user).subscribe((createdUser) => {
      this.login({username: createdUser.username, password: createdUser.password});
    });
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this._accessTokenVariable);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this._refreshTokenVariable);
  }

  setTokens(tokens: ITokens): void {
    localStorage.setItem(this._accessTokenVariable, tokens.access);
    localStorage.setItem(this._refreshTokenVariable, tokens.refresh);
  }

  deleteTokens(): void {
    localStorage.removeItem(this._accessTokenVariable);
    localStorage.removeItem(this._refreshTokenVariable);
  }

  isAuthorizated(): boolean {
    if (this.getAccessToken()) {
      return true;
    } else {
      this.username.next(null);
      return false;
    }
  }

  getUsername(): Observable<string | null> {
    return this.username.asObservable();
  }

}
