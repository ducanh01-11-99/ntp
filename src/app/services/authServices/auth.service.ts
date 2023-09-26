import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {LocalStorageService} from "ngx-webstorage";
import {NzMessageService} from "ng-zorro-antd/message";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, public router: Router, private message: NzMessageService) {}
  signin(username: string, password: string, remember: boolean) {
    return this.http.post<any>(
      'http://192.168.14.217:8991/auth/signin',
      {
        username,
        password,
      },
      { observe: 'response' }
    ).subscribe((response: any) => {
      if(response.body.status === 200) {
        console.log(response)
        window.localStorage.setItem('access_token', response.body.data.access_token);
        this.message.create('success', response.body.message);
        this.router.navigate(['dau-hieu-nhan-dang']);
      }if(response === 'err') {
        this.message.create('error', 'Tên đăng nhập hoặc mật khẩu không đúng');
      }
      // console.log(response.status)
    }, (error) => {
      // Nếu xảy ra lỗi
      this.message.create('error', 'Tên đăng nhập hoặc mật khẩu không đúng');
      console.log('err')
    });
  }

  logout() {
    this.router.navigate(['login']);
    return {};
  }
}
