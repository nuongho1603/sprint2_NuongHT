import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login.service";
import {OrderService} from "../../service/order.service";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {TokenService} from "../../service/token.service";
import {Cart} from "../../enity/cart";
import {render} from 'creditcardpayments/creditCardPayments';
import Swal from "sweetalert2";
import {ShareService} from "../../service/share.service";

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
  account: Account[] = [];
  nameCustomer: String = "";
  address: String = "";
  phoneNumber: String = "";
  email: String = "";
  roles: string[] = [];
  role = '';
  cart: Cart[] = [];
  name = '';

  isLogin = false;

  constructor(private shareService: LoginService, private tokenStorageService: TokenService,
              private router: Router,
              private title: Title,
              private orderService: OrderService,
              private share: ShareService
  ) {
    this.title.setTitle("Giỏ hàng");
    this.idAccount = Number(this.tokenStorageService.getId());
    // this.role = this.getRole();
    // this.shareService.getClickEvent().subscribe(next => {
    // this.orderService.getOrderByIdAccount(this.idAccount).subscribe(next => {
    //   if (next) {
    //     this.idOrder = next.idOrder;
    //     this.getTotalPay(this.idOrder);
    //   }
    // })
    // this.role = this.getRole();
    // this.getInfoCustomer(this.idAccount);
    // })
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.isLogin = this.tokenStorageService.isLogger();
    if (this.isLogin) {
      this.role = this.tokenStorageService.getRole();
    }
    if (this.role == 'ROLE_USER') {
      this.orderService.getOrderByIdAccount(parseInt(this.tokenStorageService.getId())).subscribe(next => {
        this.idOrder = next.idOrder;
        this.getTotalPay(this.idOrder);
      })
    }


    if (this.tokenStorageService.getCart() == undefined) {
      this.cart.length = 0;
    } else {
      this.cart = this.tokenStorageService.getCart();
    }
    this.getAllCart(this.idAccount);
    this.changeQuantity();

  }

  getTotalPay(idOrder: number) {
    this.orderService.getTotalPay(this.idOrder).subscribe(data => {
      if (data) {
        this.total = data.totalPay;
        this.quantity = data.totalQuantity;
      }
    })
    return this.quantity;
  }


  getAllCart(idAccount: number) {
    this.orderService.getOrderDetailByIdAccount(idAccount).subscribe(data => {
      // @ts-ignore
      this.cart = data;
      this.getInfoCustomer(idAccount);
      this.orderService.getTotalPay(this.idOrder).subscribe(data => {
        if (data) {
          this.total = data.totalPay;
          this.quantity = data.totalQuantity;
          const a = Number(this.total / 23000).toFixed();


          render({
            id: "#myPaypalButtons",
            currency: "USD",
            value: a.toString(),
            onApprove: (details) => {
              // alert("Transaction successful");
              // console.log(this.idAccount+"sddddddd")
              this.orderService.updateCart(this.idAccount).subscribe(data => {
                  // if (this.roles[0] != 'ROLE_ADMIN') {
                  //   this.orderService.addOrderByIdAccount(parseInt(this.tokenStorageService.getId())).subscribe(
                  //     next => {
                  //       this.shareService.sendClickEvent();
                  //     }
                  //   );
                  // }
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Mua hàng thành công!',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  window.location.reload();
                }
              )


            }
          });
        }
      })
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
        this.email = data.email;
      }
    })
  }

  updateQuatity(idProduct: number, nameProduct: string, qty: string) {
    if (this.isLogin) {
      this.orderService.addOrderDetailByIdOrder(this.idOrder, idProduct, parseInt(qty)).subscribe(data => {
      })
    }
  }

  // getOrderID() {
  //   this.orderService.getOrderByIdAccount(this.idAccount).subscribe(next => {
  //     if (next) {
  //       this.idOrder = next.idOrder;
  // console.log(this.idOrder + "99999999999999999999999999999")
  //  }
  // else {
  //   this.orderService.addOrderByIdAccount(this.idAccount).subscribe(next => {
  //     this.orderService.getOrderByIdAccount(this.idAccount).subscribe(next => {
  //       this.idOrder = next.idOrder;
  //       console.log(this.idOrder + "99999999999999999999999999999")
  //       //   this.changeQuantity();
  //     })
  //   })
  // }

  //   })
  // }

  getRole() {
    let roles = '';
    if (this.tokenStorageService.getRole()) {
      roles = this.tokenStorageService.getRole()[0];
    }
    return roles;
  }


  removeOrderDetail(idOrder: number, idShoes: number) {
    this.orderService.removeOrderDetail(this.idOrder, idShoes).subscribe(data => {
      this.shareService.sendClickEvent();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Đã xóa sản phẩm khỏi giỏ hàng!',
        showConfirmButton: false,
        timer: 1000
      })
      this.ngOnInit();
      // this.clear();
    })
  }

  // clear() {
  //   this.cart = [];
  //   this.total = 0;
  // }

  changeQuantity() {
    this.isLogin = this.tokenStorageService.isLogger();
    if (this.isLogin) {
      this.idAccount = Number(this.tokenStorageService.getId());
      this.orderService.getTotalQuantity(this.idAccount).subscribe(data => {
        if (data) {
          // console.log(data.totalQuantity + "hiiiilo")
          this.share.changeData({
            quantity: data.totalQuantity,
          });
        } else {
          this.share.changeData({
            quantity: 0,
          });
        }
      }, error => {
      });
    } else {
      this.share.changeData({
        quantity: this.tokenStorageService.getTotalQuantity(),
      });
    }
  }
}
