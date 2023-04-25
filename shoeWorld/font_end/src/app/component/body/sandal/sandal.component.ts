import { Component, OnInit } from '@angular/core';
import {Shoes} from "../../../enity/shoes";
import {ProjectJson} from "../../../enity/project-json";
import {Title} from "@angular/platform-browser";
import {ShoesService} from "../../../service/shoes.service";

@Component({
  selector: 'app-sandal',
  templateUrl: './sandal.component.html',
  styleUrls: ['./sandal.component.css']
})
export class SandalComponent implements OnInit {


  shoes: Shoes[] = [];
  teamPage!: ProjectJson;

  constructor(private  title: Title,private shoesService: ShoesService) {
  }

  ngOnInit(): void {
    this.getAllShoes();
    this.title.setTitle('Trang Sandal');
  }

  getAllShoes() {
    this.shoesService.getAllSandal().subscribe(data => {
      // @ts-ignore
      this.shoes = data.content;
      // @ts-ignore
      this.teamPage = data;
      console.log(this.shoes);
    })
  }

}
