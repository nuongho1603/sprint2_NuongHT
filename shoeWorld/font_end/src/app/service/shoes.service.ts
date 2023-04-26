import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Shoes} from "../enity/shoes";

@Injectable({
  providedIn: 'root'
})
export class ShoesService {


  constructor(private httpClient: HttpClient) { }

  getAllShoes(page: number): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/all-shoes' + '?page=' + page);
  }

  getAllJordan(page: number): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/jordan' + '?page=' + page);
  }

  getAllDior(page: number): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/dior' + '?page=' + page);
  }

  getAllSneaker(page: number): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/sneaker' + '?page=' + page);
  }

  getAllSandal(page: number): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/sandal' + '?page=' + page);
  }

  getAllDep(page: number): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/dep' + '?page=' + page);
  }

  getAllSuc(page: number): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/giay-suc' + '?page=' + page);
  }

  getNameUser(idAccount: any): Observable<Account> {
    return this.httpClient.get<Account>('http://localhost:8080/api-shoes/name-user/' + idAccount);
  }


}
