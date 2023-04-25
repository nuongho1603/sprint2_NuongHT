import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Shoes} from "../enity/shoes";

@Injectable({
  providedIn: 'root'
})
export class ShoesService {


  constructor(private httpClient: HttpClient) { }

  getAllShoes(): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/all-shoes');
  }

  getAllJordan(): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/jordan');
  }

  getAllDior(): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/dior');
  }

  getAllSneaker(): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/sneaker');
  }

  getAllSandal(): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/sandal');
  }

  getAllDep(): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/dep');
  }

  getAllSuc(): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>('http://localhost:8080/api-shoes/giay-suc');
  }

  getNameUser(idAccount: any): Observable<Account> {
    return this.httpClient.get<Account>('http://localhost:8080/api-shoes/name-user/' + idAccount);
  }


}
