import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private token: TokenService) { }

  ngOnInit(): void {
  }

  logout() {
    this.token.logout();
    location.href = ('http://localhost:4200');
  }
}
