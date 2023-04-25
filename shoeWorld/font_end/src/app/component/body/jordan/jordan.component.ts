import { Component, OnInit } from '@angular/core';
import {Shoes} from "../../../enity/shoes";
import {ProjectJson} from "../../../enity/project-json";
import {ShoesService} from "../../../service/shoes.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-jordan',
  templateUrl: './jordan.component.html',
  styleUrls: ['./jordan.component.css']
})
export class JordanComponent implements OnInit {

  shoes: Shoes[] = [];
  teamPage!: ProjectJson;

  constructor(private  title: Title,private shoesService: ShoesService) {
  }

  ngOnInit(): void {
    this.getAllShoes();
    this.title.setTitle('Trang giày jordan');
  }

  getAllShoes() {
    this.shoesService.getAllJordan().subscribe(data => {
      // @ts-ignore
      this.shoes = data.content;
      // @ts-ignore
      this.teamPage = data;
      console.log(this.shoes);
    })
  }

}
