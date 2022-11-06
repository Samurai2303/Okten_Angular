import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {AuthService} from "./services";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  isRefreshing = false;

  constructor(private authService: AuthService, private router:Router, private matDialog:MatDialog) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let isAuthorizated = this.authService.isAuthoristed();

    if (isAuthorizated) {
      request = this.setToken(request, this.authService._getAccessToken());
    }
    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) => {

        if (res && res.error && res.status === 401) {
          this.handle401(request, next);
        }

        return throwError(() => res);

      })
    );
  }

  setToken(request: any, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    });
  }

  handle401(request: HttpRequest<any>, next: HttpHandler): any {
    let token = this.authService._getRefreshToken();

    if (token && !this.isRefreshing) {
      this.isRefreshing = true;
      this.authService.refresh(token).pipe(
        switchMap((tokens) => {
          this.isRefreshing = false;
          return next.handle(this.setToken(request, tokens.access));
        }),
      catchError(() => {
        this.authService.deleteTokens();
        this.isRefreshing = false;
        this.matDialog.closeAll();
        this.router.navigate(['login']);
        return throwError(() => new Error('token invalid or expired'));
      })
      )
    }
  }

}
