import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareService {
private data = new BehaviorSubject<any>({
  quantity: 0
});

getData = this.data.asObservable();


  constructor() { }

  changeData(data: any){
    this.data.next(data);
  }
}
