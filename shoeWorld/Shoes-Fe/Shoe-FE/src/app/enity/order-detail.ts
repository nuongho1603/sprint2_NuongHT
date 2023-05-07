import {Shoes} from "./shoes";
import {Orders} from "./orders";

export interface OrderDetail {
  idOrderDetail?: number;
  orders?: Orders;
  shoes?: Shoes;
  quantity?: number;
  flagDelete?: boolean;


}
