import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private token: TokenService) { }

  ngOnInit(): void {

  }

  logout() {
    this.token.logout();
    location.href = ('http://localhost:4200');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Đã đăng xuất thành công',
      showConfirmButton: false,
      timer: 2000
    })

  }

}
