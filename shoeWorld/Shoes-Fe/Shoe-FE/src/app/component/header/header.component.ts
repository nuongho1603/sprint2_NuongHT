import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {LoginService} from "../../service/login.service";
import {TokenService} from "../../service/token.service";
import {ShoesService} from "../../service/shoes.service";
import {ActivatedRoute} from "@angular/router";
import {ViewportScroller} from "@angular/common";
import {Account} from "../../enity/account";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  role = '';
  account: Account;
  idAccount: any;


  constructor(private  title: Title, private loginService: LoginService,
              private token: TokenService, private shoesService: ShoesService,
              private activatedRoute: ActivatedRoute, private scroll: ViewportScroller) {
    // this.activatedRoute.paramMap.subscribe(data=>{
    //   const idAccount = data;
    //   if (idAccount != null){
    //     this.shoesService.getNameUser(this.idAccount).subscribe(data =>{
    //       this.account = data;
    //     })
    //   }
    // })

    this.activatedRoute.paramMap.subscribe(data => {
      if (data != null) {
        this.idAccount = data.get('idAccount');
        console.log(this.idAccount);
      }
    });
    console.log(this.idAccount);
    this.shoesService.getNameUser(this.idAccount).subscribe(next => {
      this.account = next;
      console.log(next);
    });

  }

  ngOnInit(): void {
    this.isLogged = this.token.isLogger();
    this.loadUser()
    this.loginService.getClickEvent().subscribe(next => {
      this.isLogged = this.token.isLogger();
      this.loadUser()
    })

    this.isLogged = this.token.isLogger();
    this.title.setTitle('Trang chủ');

    if (this.isLogged) {
      this.role = this.token.getRole();
    }
    // window.onload;
    // this.getNameUser(this.idAccount);

  }



  loadUser() {
    if (this.isLogged) {
      this.shoesService.getNameUser(this.token.getId()).subscribe(
        next => {
          this.account = next;
          console.log(this.token.getId());
        }
      )
    }


  }
}
