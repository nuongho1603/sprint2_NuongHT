import { Component, OnInit } from '@angular/core';
import {Shoes} from "../../../enity/shoes";
import {ProjectJson} from "../../../enity/project-json";
import {Title} from "@angular/platform-browser";
import {ShoesService} from "../../../service/shoes.service";

@Component({
  selector: 'app-bodii',
  templateUrl: './bodii.component.html',
  styleUrls: ['./bodii.component.css']
})
export class BodiiComponent implements OnInit {

  shoes: Shoes[] = [];
  teamPage!: ProjectJson;
  idShoes: number;
  s: Shoes = {};

  constructor(private  title: Title, private shoesService: ShoesService) {
  }

  ngOnInit(): void {
    // this.getAllShoes(0);
    this.title.setTitle('Trang chủ nè');
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
    this.shoesService.getAllShoes(page).subscribe(data => {
      // @ts-ignore
      this.shoes = data.content;
      // @ts-ignore
      this.teamPage = data;
      console.log(this.shoes);
    })
  }
  getAllJordan(page: number) {
    this.shoesService.getAllJordan(page).subscribe(data => {
      // @ts-ignore
      this.shoes = data.content;
      // @ts-ignore
      this.teamPage = data;
      console.log(this.shoes);
    })
  }

  getAllDior(page : number) {
    this.shoesService.getAllDior(page).subscribe(data => {
      // @ts-ignore
      this.shoes = data.content;
      // @ts-ignore
      this.teamPage = data;
      console.log(this.shoes);
    })
  }


  getAllSuc(page : number) {
    this.shoesService.getAllSuc(page).subscribe(data => {
      // @ts-ignore
      this.shoes = data.content;
      // @ts-ignore
      this.teamPage = data;
      console.log(this.shoes);
    })
  }

  getAllSandal(page : number) {
    this.shoesService.getAllSandal(page).subscribe(data => {
      // @ts-ignore
      this.shoes = data.content;
      // @ts-ignore
      this.teamPage = data;
      console.log(this.shoes);
    })
  }

  getAllSneaker(page : number) {
    this.shoesService.getAllSneaker(page).subscribe(data => {
      // @ts-ignore
      this.shoes = data.content;
      // @ts-ignore
      this.teamPage = data;
      console.log(this.shoes);
    })
  }

   getAllDep(page : number) {
    this.shoesService.getAllDep(page).subscribe(data => {
      // @ts-ignore
      this.shoes = data.content;
      // @ts-ignore
      this.teamPage = data;
      console.log(this.shoes);
    })
  }

  changePage(page: number) {
    this.getAllShoes(page);
  }
  changePage_1(page: number) {
    this.getAllDior(page);
  }
}
