import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}
