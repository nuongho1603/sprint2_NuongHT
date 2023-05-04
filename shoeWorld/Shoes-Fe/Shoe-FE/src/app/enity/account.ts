import {AccountRole} from "./account-role";

export interface Account {
  idAccount?: number;
  username?: string;
  name?: string;
  password?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  gender?: boolean;
  flagDelete?: boolean;
  avatar?: string;

  accountRoleList?: AccountRole[];
}
