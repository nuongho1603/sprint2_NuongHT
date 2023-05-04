import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../enity/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('http://localhost:8080/api-shoes/category');
  }
}
