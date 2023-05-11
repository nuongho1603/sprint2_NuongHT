import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";
import {Shoes} from "../../enity/shoes";
import {ShoesService} from "../../service/shoes.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  sneakers: Shoes[] = [];

  constructor(private shoesService: ShoesService) { }

  ngOnInit(): void {
    this.getAllSneakers()
    window.scroll(0,0)
  }

  getAllSneakers(){
    this.shoesService.getAllSneaker().subscribe(data => {
      // @ts-ignore
      this.sneakers = data.content;
      console.log(data)
    })
  }
}
