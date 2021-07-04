import { ICartProduct } from "./CartProduct";

export interface ICart {
  cartId: number;
  userId: number;
  cartProduct: ICartProduct;
  grandTotal: number;
  isDeleted: boolean;
   
}