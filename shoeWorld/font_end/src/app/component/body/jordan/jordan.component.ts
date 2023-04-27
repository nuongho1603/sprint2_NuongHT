import {Component, OnInit} from '@angular/core';
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
  idShoes: number;
  s: Shoes = {};

  constructor(private  title: Title, private shoesService: ShoesService) {
  }

  ngOnInit(): void {
    this.getAllJordan(0);
    this.title.setTitle('Trang dép');
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

  changePage(page: number) {
    this.getAllJordan(page);
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
}
