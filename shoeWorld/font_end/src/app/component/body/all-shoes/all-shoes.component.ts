import {Component, OnInit} from '@angular/core';
import {Shoes} from "../../../enity/shoes";
import {ShoesService} from "../../../service/shoes.service";
import {ProjectJson} from "../../../enity/project-json";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-all-shoes',
  templateUrl: './all-shoes.component.html',
  styleUrls: ['./all-shoes.component.css']
})
export class AllShoesComponent implements OnInit {

  shoes: Shoes[] = [];
  teamPage!: ProjectJson;

  constructor(private  title: Title,private shoesService: ShoesService) {
  }

  ngOnInit(): void {
    this.getAllShoes(0);
    this.title.setTitle('Trang dép');
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

  changePage(page: number) {
    this.getAllShoes(page);
  }
}
