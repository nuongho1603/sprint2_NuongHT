import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Orders} from "../enity/orders";
import {Cart} from "../enity/cart";
import {TotalPay} from "../dto/total-pay";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  URL_ORDER = "http://localhost:8080/api-order"

  constructor(private httpClient: HttpClient) { }


  getOrderDetailByIdAccount(idAccount: number): Observable<Cart> {
    return this.httpClient.get<Cart>(this.URL_ORDER + '/list-order-detail/' + idAccount);
  }

  addOrderByIdAccount(idAccount: number) {
    return this.httpClient.post(this.URL_ORDER + '/add', {idAccount: idAccount});
  }

  getOrderByIdAccount(idAccount: number): Observable<Orders>{
    return this.httpClient.get<Orders>(this.URL_ORDER + '/' + idAccount);
  }

  getTotalPay(idOrder: number): Observable<TotalPay>{
    return this.httpClient.get<TotalPay>(this.URL_ORDER+'/total-pay/'+ idOrder);
  }

  addOrderDetailByIdOrder(idOrder: number, idShoes: number, qty: number) {
    return this.httpClient.post(this.URL_ORDER + '/add-order-detail', {idOrder: idOrder, idShoes: idShoes, quantity: qty});
  }

  getTotalQuantity(idUser: number): Observable<TotalPay>{
    return this.httpClient.get<TotalPay>(this.URL_ORDER+'/total/'+ idUser);
  }
}
