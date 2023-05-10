import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {TokenService} from "../../service/token.service";
import {OrderService} from "../../service/order.service";
import {PurchaseHistoryDto} from "../../dto/purchase-history-dto";
import {HistoryJson} from "../../dto/history-json";

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
  idAccount = 0;
  page = 0;
  purchaseHistoryList: PurchaseHistoryDto[] = [];
  purchaseHistoryJson!: HistoryJson;
  dateOder: number;

  constructor(private title: Title,
              private tokenStorageService: TokenService,
              private orderService: OrderService) {

    this.title.setTitle("Lịch sử mua hàng");
    this.dateOder = Date.now();
  }

  ngOnInit(): void {

    window.scroll(0, 0);
    this.getPurcharseHistory();
  }

  getPurcharseHistory(): void {
    this.idAccount = parseInt(this.tokenStorageService.getId());
    this.orderService.getPurchaseHistory(this.idAccount, this.page).subscribe(data => {
      // @ts-ignore
      this.purchaseHistoryList = data.content;
      console.log(this.purchaseHistoryList);

      // @ts-ignore
      this.purchaseHistoryJson = data;
    })
  }

  gotoPage(pageNumber: number): void {
    this.page = pageNumber;
    this.ngOnInit();
  }

}
