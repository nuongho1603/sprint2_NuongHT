import {Category} from "./category";
import {Size} from "./size";

export interface Shoes {
  idShoes?: number;
  code?: string;
  nameProduct?: string;
  description?: string;
  price?: number;
  promotionalPrice?: string;
  image?: string;
  flagDelete?: boolean;
  origin?: string;
  category?: Category;
  size?: Size;
}
