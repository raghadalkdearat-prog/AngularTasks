import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  storeName: string = 'ElectroShop';
  storeSlogan: string = 'Everything You Need in One Place';
  message: string = 'Welcome to ElectroShop! Your one-stop destination for all your electronic needs.';
}

