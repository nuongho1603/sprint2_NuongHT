import {Account} from "./account";

export interface Orders {
idOrder?: number;
codeOrder?: string;
dateOrder?: string;
paymentStatus?: boolean;
flagDelete?: boolean;
account?: Account;
}
