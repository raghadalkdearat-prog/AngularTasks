import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  products : { name: string; price: number; description: string ;Image: string;Availability: boolean;}[] = [
    { name: 'Smartphone', price: 750, description: 'A high-end smartphone with a sleek design.',  Image: 'https://tse1.mm.bing.net/th/id/OIP.t_n2Vf_U8WmgoyXbwuDa2QHaHa?r=0&w=679&h=679&rs=1&pid=ImgDetMain&o=7&rm=3', Availability: true },
    { name: 'Laptop', price: 450, description: 'A powerful laptop for work and play.', Image: 'https://tse3.mm.bing.net/th/id/OIP.dauQwoxT_rJzuTjmF3bdjQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', Availability: true },
    { name: 'Headphones', price: 80, description: 'Noise-cancelling headphones for immersive sound.',  Image: 'https://tse4.mm.bing.net/th/id/OIP.nE_uoT22bff3E1QQdXdeTgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', Availability: true },
    { name: 'Smartwatch', price: 120, description: 'A stylish smartwatch with fitness tracking features.',  Image: 'https://manuals.plus/wp-content/uploads/2023/08/fitbit-Sense-2-Smart-Watch.png', Availability: true },
    { name: 'Keyboard', price: 45, description: 'Keyboard	Mechanical keyboard	45	Unavailable',  Image: 'https://p.globalsources.com/IMAGES/PDT/B5914229117/Mechanical-keyboard.jpg', Availability: false },
  ]

alertMessage(name: string) {
  alert(name + ' added to cart!');
}

  
}
