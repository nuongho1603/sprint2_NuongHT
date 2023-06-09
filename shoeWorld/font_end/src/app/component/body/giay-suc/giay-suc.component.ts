import { Component, OnInit } from '@angular/core';
import {Shoes} from "../../../enity/shoes";
import {ProjectJson} from "../../../enity/project-json";
import {Title} from "@angular/platform-browser";
import {ShoesService} from "../../../service/shoes.service";

@Component({
  selector: 'app-giay-suc',
  templateUrl: './giay-suc.component.html',
  styleUrls: ['./giay-suc.component.css']
})
export class GiaySucComponent implements OnInit {


  shoes: Shoes[] = [];
  teamPage!: ProjectJson;

  constructor(private  title: Title,private shoesService: ShoesService) {
  }

  ngOnInit(): void {
    this.getAllSuc(0);
    this.title.setTitle('Trang dép');
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

  changePage(page: number) {
    this.getAllSuc(page);
  }

}
