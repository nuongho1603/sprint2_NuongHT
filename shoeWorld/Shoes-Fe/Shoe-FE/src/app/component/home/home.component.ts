import { Component, OnInit } from '@angular/core';
import {Shoes} from "../../enity/shoes";
import {ShoesService} from "../../service/shoes.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sneakers: Shoes[] = [];

  constructor(private shoesService: ShoesService) { }

  ngOnInit(): void {
    this.getAllSneakers()
  }

  getAllSneakers(){
    this.shoesService.getAllSneaker().subscribe(data => {
      this.sneakers = data;
      console.log(data)
    })
  }

}
