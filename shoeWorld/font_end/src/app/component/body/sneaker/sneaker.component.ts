import { Component, OnInit } from '@angular/core';
import {Shoes} from "../../../enity/shoes";
import {ProjectJson} from "../../../enity/project-json";
import {Title} from "@angular/platform-browser";
import {ShoesService} from "../../../service/shoes.service";

@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.css']
})
export class SneakerComponent implements OnInit {

  shoes: Shoes[] = [];
  teamPage!: ProjectJson;

  constructor(private  title: Title,private shoesService: ShoesService) {
  }

  ngOnInit(): void {
    this.getAllSneaker(0);
    this.title.setTitle('Trang dép');
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

  changePage(page: number) {
    this.getAllSneaker(page);
  }

}
