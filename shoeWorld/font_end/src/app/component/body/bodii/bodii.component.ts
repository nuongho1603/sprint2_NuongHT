import { Component, OnInit } from '@angular/core';
import {Shoes} from "../../../enity/shoes";
import {ProjectJson} from "../../../enity/project-json";
import {Title} from "@angular/platform-browser";
import {ShoesService} from "../../../service/shoes.service";
import Swal from "sweetalert2";
import {Category} from "../../../enity/category";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-bodii',
  templateUrl: './bodii.component.html',
  styleUrls: ['./bodii.component.css']
})
export class BodiiComponent implements OnInit {

  shoes: Shoes[] = [];
  category: Category[] = [];
  teamPage!: ProjectJson;
  idShoes: number;
  s: Shoes = {};
  search = '';
  page: any;
  pageProduct: Shoes[] = [];
  numberPage: number = 0;
  size: number = 6;
  first: any;
  last: any;
  totalPages = 0;

  totalElement = 4;
  maxElement = 0;
  flagHidden = true;
  flagMore = false;

  constructor(private  title: Title, private shoesService: ShoesService,private  categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategory();
    // this.getAllShoes(0);
    this.title.setTitle('Trang chủ');

  }

  getCategory(){
    this.categoryService.getCategory().subscribe(data => {
      this.category = data;
      console.log(data);
    })
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
    this.getAllJordan(this.totalElement);
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
    this.getAllJordan(this.totalElement);
  }


  searchProductByName(size: number) {
    // this.shoesService.getAllSearchJordan(this.search.trim(), size).subscribe(data => {
    //   this.page = data;
    //   console.log(data);
    //   if(data){
    //     // @ts-ignore
    //     this.pageProduct = data.content;
    //     // @ts-ignore
    //     this.numberPage = data.number;
    //     // @ts-ignore
    //     this.size = data.size;
    //     // @ts-ignore
    //     this.totalPages = data.totalPages;
    //     // @ts-ignore
    //     this.first = data.first;
    //     // @ts-ignore
    //     this.last = data.last;
    //   }
    // }, error => {
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'error',
    //     title: 'Danh sách rỗng',
    //     showConfirmButton: true,
    //     timer: 1500,
    //   }, )
    // })
  }

  getTeacherById(idShoes: number) {
    this.idShoes = idShoes;
    console.log(this.idShoes);
    this.shoesService.getShoesByID(this.idShoes).subscribe(next => {
      this.s = next;
      console.log(next);
    });
  }

  reloadPage() {
    window.location.reload();
  }

  getAllShoes(page : number) {
    // this.shoesService.getAllShoes(page).subscribe(data => {
    //   // @ts-ignore
    //   this.shoes = data.content;
    //   // @ts-ignore
    //   this.teamPage = data;
    //   console.log(this.shoes);
    // })
  }
  getAllJordan(page: number) {
    // this.shoesService.getAllJordan(page).subscribe(data => {
    //   // @ts-ignore
    //   this.shoes = data.content;
    //   // @ts-ignore
    //   this.teamPage = data;
    //   console.log(this.shoes);
    // })
  }

  getAllDior(page : number) {
    // this.shoesService.getAllDior(page).subscribe(data => {
    //   // @ts-ignore
    //   this.shoes = data.content;
    //   // @ts-ignore
    //   this.teamPage = data;
    //   console.log(this.shoes);
    // })
  }


  getAllSuc(page : number) {
    // this.shoesService.getAllSuc(page).subscribe(data => {
    //   // @ts-ignore
    //   this.shoes = data.content;
    //   // @ts-ignore
    //   this.teamPage = data;
    //   console.log(this.shoes);
    // })
  }

  getAllSandal(page : number) {
    // this.shoesService.getAllSandal(page).subscribe(data => {
    //   // @ts-ignore
    //   this.shoes = data.content;
    //   // @ts-ignore
    //   this.teamPage = data;
    //   console.log(this.shoes);
    // })
  }

  getAllSneaker(page : number) {
    // this.shoesService.getAllSneaker(page).subscribe(data => {
    //   // @ts-ignore
    //   this.shoes = data.content;
    //   // @ts-ignore
    //   this.teamPage = data;
    //   console.log(this.shoes);
    // })
  }

   getAllDep(page : number) {
    // this.shoesService.getAllDep(page).subscribe(data => {
    //   // @ts-ignore
    //   this.shoes = data.content;
    //   // @ts-ignore
    //   this.teamPage = data;
    //   console.log(this.shoes);
    // })
  }

  changePage(page: number) {
    this.getAllShoes(page);
  }
  changePage_1(page: number) {
    this.getAllDior(page);
  }
}
