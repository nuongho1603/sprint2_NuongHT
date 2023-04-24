import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Shoes} from "../enity/shoes";

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor(private httpClient: HttpClient) { }

  getAllShoes(): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/all-shoes');
  }
}
