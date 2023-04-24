import {Orders} from "./orders";
import {Shoes} from "./shoes";

export interface OrderDetail {
idOrderDetail?: number;
orders?: Orders;
shoes?: Shoes;
quantity?: number;
flagDelete?: boolean;
}
