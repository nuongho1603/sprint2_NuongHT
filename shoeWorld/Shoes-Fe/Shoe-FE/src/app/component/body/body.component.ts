import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../enity/category";
import {ShoesService} from "../../service/shoes.service";
import {Shoes} from "../../enity/shoes";
import Swal from "sweetalert2";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  cate: Category[] = [];
  shoes: Shoes[] = [];
  idCategory: number;
  nameSearch: '';
  idShoes: number;
  s: any;

  totalElement = 4;
  maxElement = 0;
  flagHidden = true;
  flagMore = false;

  constructor(private categoryService: CategoryService, private shoesService: ShoesService) {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getAllShoes(0)
    // @ts-ignore
    this.getAllCategory(this.totalElement);
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

  getCateById(idCategory: number, totalElement: number, nameSearch: any) {
    this.idCategory = idCategory;
    console.log(idCategory)
    this.nameSearch = nameSearch;

    this.shoesService.getShoesByID(this.idCategory, this.totalElement, this.nameSearch).subscribe(data => {
      // @ts-ignore
      this.nameSearch = data.nameSearch;
      // console.log(nameSearch)
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
        timer: 1500,
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

    this.getCateById(this.idCategory, this.totalElement, this.nameSearch);
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

    this.getCateById(this.idCategory, this.totalElement, this.nameSearch);
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

  search() {
    this.ngOnInit();
  }
}
