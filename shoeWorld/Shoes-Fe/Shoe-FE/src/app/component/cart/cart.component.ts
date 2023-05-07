import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login.service";
import {OrderService} from "../../service/order.service";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  idAccount = 0;
  idOrder = 0;
  total = 0;
  quantity = 0;
  nameCustomer: String = "";
  address: String = "";
  phoneNumber: String = "";
  email: String = "";
  role: String = "";

  constructor(private shareService: LoginService,private tokenStorageService: TokenService,
              private router: Router,
              private title: Title,
              private orderService: OrderService,
              // private securityService: SecurityService
  ) {
    this.title.setTitle("Giỏ hàng");
    this.idAccount = parseInt(this.tokenStorageService.getId());
    this.shareService.getClickEvent().subscribe(next => {
      this.orderService.getOrderByIdAccount(parseInt(this.tokenStorageService.getId())).subscribe(next => {
        this.idOrder = next.idOrder;
        this.getTotalPay(this.idOrder);

      })
      this.getAllCart(this.idAccount);
      this.role = this.getRole();
      this.getInfoCustomer(this.idAccount);
    })
  }

  ngOnInit(): void {
  }

  getTotalPay(idOrder: number) {
    this.orderService.getTotalPay(idOrder).subscribe(data => {
      if (data) {
        // this.total = data.totalPay;
        this.quantity = data.totalQuantity;
      }
    })
    return this.quantity;
  }

  getRole() {
    let roles = '';
    if (this.tokenStorageService.getRole()) {
      roles = this.tokenStorageService.getRole()[0];
    }
    return roles;
  }

  getAllCart(idAccount: number) {
    this.orderService.getOrderDetailByIdAccount(idAccount).subscribe(data => {
      // @ts-ignore
      this.cart = data;
      this.getInfoCustomer(idAccount);
    })
  }

  getInfoCustomer(idAccount: number) {
    this.shareService.getInfoCustomer(idAccount).subscribe(data => {
      if (data) {
        // @ts-ignore
        this.account = data;
        this.nameCustomer = data.name;
        // @ts-ignore
        this.address = data.address;
        // @ts-ignore
        this.phoneNumber = data.phoneNumber;
        // @ts-ignore
        this.email= data.email;
      }
    })
  }
}
