import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  role = '';

  constructor(private  title: Title,private token: TokenService) { }

  ngOnInit(): void {
    this.isLogged = this.token.isLogger();
    this.title.setTitle('Trang chủ');

    if (this.isLogged){
      this.role = this.token.getRole();
    }
  }

}
