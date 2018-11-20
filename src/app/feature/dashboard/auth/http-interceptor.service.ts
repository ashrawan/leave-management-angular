import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private _auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let apiRequest;
    if (localStorage.getItem('token') != null) {
      apiRequest = this.tokenizeReq(request);
    } else { apiRequest = this.normalReq(request); }

    return next
      .handle(apiRequest)
      .pipe(
        // tap((ev: HttpEvent<any>) => {

        // }),
        catchError(response => {
          if (response instanceof HttpErrorResponse) {
            switch (response.status) {
              case 401:
              // console.log('call refresh token');
              this._auth.refreshToken(apiRequest, next);
              break;
            }
            // console.log('Processing http error', response);
          }

          return throwError(response);
        })
      );
  }

  tokenizeReq(request: HttpRequest<any>) {
    return request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    });
  }

  normalReq(request: HttpRequest<any>) {
    return request.clone({});
  }

}
