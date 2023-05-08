import { Component, OnInit } from '@angular/core';
import {ShoesService} from "../../service/shoes.service";
import {ActivatedRoute} from "@angular/router";
import {TokenService} from "../../service/token.service";
import {LoginService} from "../../service/login.service";
import {Title} from "@angular/platform-browser";
import {OrderService} from "../../service/order.service";
import {Shoes} from "../../enity/shoes";
import Swal from "sweetalert2";
import {ShareService} from "../../service/share.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  idOrder = 0;
  product: Shoes = {idShoes: 0, price: 0, nameProduct: '', image: '', description: ''};
  idUser = 0;
  isLogin = false;

  constructor(private productService: ShoesService,
              private activatedRoute: ActivatedRoute,
              private tokenStorageService: TokenService,
              private shareService: LoginService,
              private title: Title,
              private orderService: OrderService,
              private share: ShareService) {
    this.title.setTitle('Chi tiết sản phẩm');
    // this.orderService.getOrderByIdAccount(parseInt(this.tokenStorageService.getId())).subscribe(next => {
    //   this.idOrder = next.idOrder;
    // })

    this.title.setTitle('Chi tiet san pham');
    this.isLogin = this.tokenStorageService.isLogger();
    this.idUser = Number(this.tokenStorageService.getId());


    this.activatedRoute.paramMap.subscribe(next => {
      const idShoes = parseInt(<string> next.get('idShoes'));
      console.log(idShoes + "idShoes neee");
      this.productService.getShoesDetail(idShoes).subscribe(next => {
        this.product = next;
      });
    });

  }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.getOrderID();
      // this.changeQuantity();
  }


  addToCart(idProduct: number, nameProduct: string, qty: string){
    if (this.isLogin) {
      this.orderService.addOrderDetailByIdOrder(this.idOrder, idProduct, parseInt(qty)).subscribe(data => {
        this.shareService.sendClickEvent();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Đã thêm sản phẩm ' + nameProduct + ' vào giỏ hàng',
          showConfirmButton: false,
          timer: 1500
        })

        this.changeQuantity();
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Vui lòng đăng nhập để mua hàng!',
        showConfirmButton: false,
        timer: 1500
      })
      // this.router.navigateByUrl('/login')

    }
  }

  getOrderID() {
    this.orderService.getOrderByIdAccount(this.idUser).subscribe(next => {
      if (next) {
        this.idOrder = next.idOrder;
        // this.changeQuantity();
        // console.log(this.idOrder)
      } else {
        this.orderService.addOrderByIdAccount(this.idUser).subscribe(next => {
          this.orderService.getOrderByIdAccount(this.idUser).subscribe(next => {
            this.idOrder = next.idOrder;
            // console.log(this.idOrder)
            //   this.changeQuantity();
          })
        })
      }

    })
  }

  changeQuantity() {
    this.isLogin = this.tokenStorageService.isLogger();
    if (this.isLogin) {
      this.idUser = Number(this.tokenStorageService.getId());
      this.orderService.getTotalQuantity(this.idUser).subscribe(data => {
        if (data) {
          console.log(data.totalQuantity + "hiiiil")
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
