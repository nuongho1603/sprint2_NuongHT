import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../enity/category";
import {ShoesService} from "../../service/shoes.service";
import {Shoes} from "../../enity/shoes";
import Swal from "sweetalert2";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenService} from "../../service/token.service";
import {LoginService} from "../../service/login.service";
import {Title} from "@angular/platform-browser";
import {OrderService} from "../../service/order.service";
import {ShareService} from "../../service/share.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  cate: Category[] = [];
  shoes: Shoes[] = [];
  idCategory: number;
  nameSearch: string = '';
  idShoes: number;
  s: any;
  isLogin = false;

  totalElement = 6;
  maxElement = 0;
  flagHidden = true;
  flagMore = false;
  formGroup: FormGroup;

  idOrder = 0;
  idUser = 0;
  product: Shoes = {idShoes: 0, price: 0, nameProduct: '', image: '', description: ''};
  role: string = '';


  constructor(private categoryService: CategoryService, private shoesService: ShoesService,
              // private productService: ShoesService,
              private activatedRoute: ActivatedRoute,
              private tokenStorageService: TokenService,
              private shareService: LoginService,
              private title: Title,
              private orderService: OrderService,
              private router: Router,
              private share: ShareService) {
    this.formGroup = new FormGroup({
      nameSearch: new FormControl(''),
    });

    this.title.setTitle('Chi tiết sản phẩm');
    this.isLogin = this.tokenStorageService.isLogger();
    this.idUser = Number(this.tokenStorageService.getId());


    // this.orderService.getOrderByIdAccount(parseInt(this.tokenStorageService.getId())).subscribe(next => {
    //   this.idOrder = next.idOrder;
    // })
    // this.shoesService.getNameUser(parseInt(this.tokenStorageService.getId())).subscribe(next => {
    //   // @ts-ignore
    //   this.idOrder = next.idOrder;
    //
    //   console.log(this.idOrder)
    // })
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.isLogin = this.tokenStorageService.isLogger();
    if (this.isLogin) {
      this.role = this.tokenStorageService.getRole();
      // console.log(this.role)
    }
    this.getAllShoes(0)
    // @ts-ignore
    this.getAllCategory(this.totalElement);


    this.getOrderID();
    this.changeQuantity();
  }

  getOrderID() {
    if (this.role == 'ROLE_USER'){
      this.orderService.getOrderByIdAccount(this.idUser).subscribe(next => {
        if (next) {
          this.idOrder = next.idOrder;
        } else {
          this.orderService.addOrderByIdAccount(this.idUser).subscribe(next => {
            this.orderService.getOrderByIdAccount(this.idUser).subscribe(next => {
              this.idOrder = next.idOrder;
            })
          })
        }

      })
    }

  }

  changeQuantity() {
    this.isLogin = this.tokenStorageService.isLogger();
    if (this.isLogin) {
      this.idUser = Number(this.tokenStorageService.getId());
      this.orderService.getTotalQuantity(this.idUser).subscribe(data => {
        if (data) {
          console.log(data.totalQuantity + "hiiiilo")
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

  getAllCategory() {
    this.categoryService.getCategory().subscribe(data => {
      this.cate = data;

    })
  }

  getAllShoes(page: number) {
    this.shoesService.getAllShoes(page).subscribe(data => {
      // @ts-ignore
      this.shoes = data.content;

    })
  }

  // getCateById(idCategory: number) {
  // this.idCategory = idCategory;
  // console.log(this.idCategory);
  // this.shoesService.getShoesByID(this.idCategory).subscribe(next => {
  //   // @ts-ignore
  //   this.shoes = next.content;
  //   console.log(next);
  // });
  // }

  // getCateById(idCategory: number, totalElement: number) {
  //   this.idCategory = idCategory;
  //   console.log(idCategory)
  //
  //
  //   this.shoesService.getShoesByID(this.idCategory, this.totalElement).subscribe(data => {
  //     // @ts-ignore
  //     this.shoes = data.content;
  //     console.log(data)
  //     // @ts-ignore
  //     this.maxElement = data.totalElements;
  //   }, error => {
  //     Swal.fire({
  //       position: 'center',
  //       icon: 'error',
  //       title: 'Danh sách rỗng',
  //       showConfirmButton: true,
  //       timer: 1500,
  //     },)
  //   });
  //
  // }


  getShoesSearch(idCategory: number, totalElement: number, nameSearch: any) {
    this.idCategory = idCategory;
    console.log(idCategory)
    this.nameSearch = nameSearch;
    console.log(nameSearch)
    if (this.nameSearch === undefined) {
      this.nameSearch = '';
    }
    this.shoesService.getShoesByID(this.idCategory, this.totalElement, this.nameSearch).subscribe(data => {

      // @ts-ignore
      this.shoes = data.content;
      console.log(data)
      // @ts-ignore
      this.maxElement = data.totalElements;
    }, error => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Danh sách rỗng',
        showConfirmButton: true,
        timer: 1200,
      },)
    });

  }

  hidden() {
    if (this.totalElement <= 4) {
      this.flagMore = false;
      this.flagHidden = true;
    } else {
      this.totalElement -= 4;
      this.flagHidden = this.totalElement === 4;
      this.flagMore = false;
    }
    console.log(this.flagHidden + 'aa');
    console.log(this.totalElement + 'aa');

    this.getShoesSearch(this.idCategory, this.totalElement, this.nameSearch);
  }

  loadMore() {
    if (this.totalElement < this.maxElement) {
      this.flagMore = false;
      this.totalElement += 4;
      this.flagHidden = false;
    }
    if (this.totalElement > this.maxElement) {
      this.flagMore = true;
      this.flagHidden = false;
    }
    console.log(this.flagMore + 'a');

    this.getShoesSearch(this.idCategory, this.totalElement, this.nameSearch);
  }

  getShoesById(idShoes: number) {
    this.idShoes = idShoes;
    console.log(this.idShoes);
    this.shoesService.getShoesDetail(this.idShoes).subscribe(next => {
      // @ts-ignore
      this.s = next;
      console.log(next);
    });
  }

  searchNameProduct() {
    this.shoes = [];
    if (this.nameSearch === undefined) {
      this.nameSearch = '';
    }
    console.log(this.nameSearch + "namesearch")
    this.shoesService.getShoesByID(this.idCategory, this.totalElement, this.formGroup.value.nameSearch.trim()).subscribe(data => {
      if (data == null  || this.nameSearch == '@' || this.nameSearch == '#') {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Danh sách rỗng',
          showConfirmButton: true,
          timer: 1500,
        },)


      }
      // @ts-ignore
      this.shoes = data.content;
      console.log(data)
      // @ts-ignore
      this.maxElement = data.totalElements;


    }, error => {

    });
  }

  addToCart(idShoes: any, nameProduct: any, qty: any) {
    // console.log(idShoes + '123/' + nameProduct)
    if (this.isLogin) {
      this.orderService.addOrderDetailByIdOrder(this.idOrder, idShoes, parseInt(qty)).subscribe(data => {
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
      this.router.navigateByUrl('/login')

    }
  }

}
