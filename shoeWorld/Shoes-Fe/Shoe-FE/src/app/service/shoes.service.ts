import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Shoes} from "../enity/shoes";
import {Page} from "../enity/page";

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor(private httpClient: HttpClient) { }

  getNameUser(idAccount: any): Observable<Account> {
    return this.httpClient.get<Account>('http://localhost:8080/api-shoes/name-user/' + idAccount);
  }

  // getShoesByID(idCategory: number,totalElement: number): Observable<Page<Shoes[]>> {
  //   return this.httpClient.get<Page<Shoes[]>>('http://localhost:8080/api-shoes/s/' + idCategory + '?totalElement=' + totalElement );
  // }

  getShoesByID(idCategory: number,totalElement: number,nameSearch: string): Observable<Page<Shoes[]>> {
    return this.httpClient.get<Page<Shoes[]>>('http://localhost:8080/api-shoes/s/' + idCategory + '?totalElement=' + totalElement +'&nameSearch=' + nameSearch);
  }

  // getShoesByID(idCategory: number): Observable<Shoes[]> {
  //   return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/s/' + idCategory );
  // }

  getShoesDetail(idShoes: number): Observable<Shoes> {
    return this.httpClient.get<Shoes>('http://localhost:8080/api-shoes/' + idShoes);
  }

  getAllShoes(page: number): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/all-shoes' + '?page=' + page);
  }
}
