import { Component } from '@angular/core';


@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
   productName: string = 'Laptop';
   productDescription: string = 'A high-end laptop with a sleek design.';
   productPrice: number = 1200;
   productImage: string = 'https://tse3.mm.bing.net/th/id/OIP.dauQwoxT_rJzuTjmF3bdjQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
   quantity: number = 4;
   isAvailable: boolean = true;
   discountPercentage: number = 10;

   
}
