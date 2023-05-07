import { Component, OnInit } from '@angular/core';
import {ShoesService} from "../../service/shoes.service";
import {ActivatedRoute} from "@angular/router";
import {TokenService} from "../../service/token.service";
import {LoginService} from "../../service/login.service";
import {Title} from "@angular/platform-browser";
import {OrderService} from "../../service/order.service";
import {Shoes} from "../../enity/shoes";
import Swal from "sweetalert2";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  idOrder = 0;
  product: Shoes = {idShoes: 0, price: 0, nameProduct: '', image: '', description: ''};


  constructor(private productService: ShoesService,
              private activatedRoute: ActivatedRoute,
              private tokenStorageService: TokenService,
              private shareService: LoginService,
              private title: Title,
              private orderService: OrderService) {
    this.title.setTitle('Chi tiết sản phẩm');
    this.orderService.getOrderByIdAccount(parseInt(this.tokenStorageService.getId())).subscribe(next => {
      this.idOrder = next.idOrder;
    })
    this.activatedRoute.paramMap.subscribe(next => {
      const id = parseInt(<string> next.get('id'));
      console.log(id);
      this.productService.getShoesDetail(id).subscribe(next => {
        this.product = next;
      });
    });

  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }


  addToCart(idProduct: number, nameProduct: string, qty: string){
    if (this.tokenStorageService.isLogger()){
      this.orderService.addOrderDetailByIdOrder(this.idOrder, idProduct, parseInt(qty)).subscribe(data =>{
        this.shareService.sendClickEvent();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Đã thêm sản phẩm ' + nameProduct + ' vào giỏ hàng',
          showConfirmButton: false,
          timer: 1000
        })
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Vui lòng đăng nhập để mua hàng!',
        showConfirmButton: false,
        timer: 1000
      })
    }
  }
}
