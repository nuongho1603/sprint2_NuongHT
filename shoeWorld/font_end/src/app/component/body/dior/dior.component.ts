import { Component, OnInit } from '@angular/core';
import {Shoes} from "../../../enity/shoes";
import {ProjectJson} from "../../../enity/project-json";
import {Title} from "@angular/platform-browser";
import {ShoesService} from "../../../service/shoes.service";

@Component({
  selector: 'app-dior',
  templateUrl: './dior.component.html',
  styleUrls: ['./dior.component.css']
})
export class DiorComponent implements OnInit {

  shoes: Shoes[] = [];
  teamPage!: ProjectJson;

  constructor(private  title: Title,private shoesService: ShoesService) {
  }

  ngOnInit(): void {
    this.getAllDior(0);
    this.title.setTitle('Trang dép');
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

  changePage(page: number) {
    this.getAllDior(page);
  }


}
