import {Component, OnInit} from '@angular/core';
import {Shoes} from "../../../enity/shoes";
import {ShoesService} from "../../../service/shoes.service";
import {ProjectJson} from "../../../enity/project-json";

@Component({
  selector: 'app-all-shoes',
  templateUrl: './all-shoes.component.html',
  styleUrls: ['./all-shoes.component.css']
})
export class AllShoesComponent implements OnInit {
  shoes: Shoes[] = [];
  teamPage!: ProjectJson;

  constructor(private shoesService: ShoesService) {
  }

  ngOnInit(): void {
    this.getAllShoes();
  }

  getAllShoes() {
    this.shoesService.getAllShoes().subscribe(data => {
      // @ts-ignore
      this.shoes = data.content;
      // @ts-ignore
      this.teamPage = data;
      console.log(this.shoes);
    })
  }
}
