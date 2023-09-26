//file này để quản lý jwt
// Interceptor để thêm JWT vào header của tất cả các request
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Lấy JWT từ localStorage
    const token = localStorage.getItem('token');

    // Nếu có token, thêm token vào header của request
    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    // Gửi request đến server
    return next.handle(request);
  }
}
