import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const API_KEY = '123456';
    return next.handle(httpRequest.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 15136997c2760eb50d3713f830d45af7367dda82ed5731a2c7db9535e39409b6',
      },
    }));
  }
}
