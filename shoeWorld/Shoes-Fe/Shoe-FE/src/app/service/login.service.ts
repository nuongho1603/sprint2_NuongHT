import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username = '';
  private subject = new Subject<any>();

  constructor(private http: HttpClient,private tokenService:TokenService) { }

  login(obj: { username: any; password: any; }): Observable<any> {
    return this.http.post('http://localhost:8080/api/login',{username: obj.username,password: obj.password})
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
