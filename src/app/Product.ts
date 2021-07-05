export interface IProduct {
    productId: number;
    productName: string;
    productImageLink: string;
    manufacturer: string;
    categoryName: string;
    price: number;
    isDeleted: boolean;
   
  }

  export const InitialIproduct = [{
    productId: 0,
    productName: 'name',
    manufacturer: 'manufacturer',
    categoryName: 'categoryName',
    price: 0,
    description: 'description',
    productImageLink: 'image',
    isDeleted: false
}]
  
