import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthInterceptorService {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let accessToken = '';
    const headers: any = {
      'Content-Type': 'application/json; charset=UTF-8', 
      Authorization: 'Bearer ' + accessToken
    };
    const clonedRequest = request.clone({
      setHeaders: headers
    });
    return next.handle(clonedRequest).catch(error => {
      if (error instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse> error).status) {
              case 401:
                return this.handle401(request, next);
              default:
                return next.handle(clonedRequest);
          }
      } else {
          return Observable.throw(error);
      }
    });
  }

  handle401(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request);
  }

}
