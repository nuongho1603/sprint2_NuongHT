import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  role = 'none';

  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    rememberMe: new FormControl(false)
  });

  constructor(private loginService: LoginService, private token: TokenService) {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }


  login() {
    this.loginService.login(this.form.value).subscribe(next => {
        if (this.form.controls.rememberMe.value) {
          this.token.rememberMe(next.token, next.id, next.roles, 'local');
          this.ngOnInit();
        } else {
          this.token.rememberMe(next.token, next.id, next.roles, 'session');
          this.ngOnInit();

        }
        this.form.reset();
        this.role = this.token.getRole();

        let _this = this;
        setTimeout(function () {

          if (_this.role == 'ROLE_ADMIN') {
            location.href = ('http://localhost:4200');
          }

          if (_this.role == 'ROLE_USER') {
            location.href = ('http://localhost:4200');
          }
        }, 500);

        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Đăng nhập thành công!',
          showConfirmButton: false,
          timer: 2500
        },);


      }, error => {
        Swal.fire({
          position: 'top',
          icon: 'warning',
          title: 'Đăng nhập không thành công!',
          showConfirmButton: false,
          timer: 1500
        },);
      }
    );
  }
}
