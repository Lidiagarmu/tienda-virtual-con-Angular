import { Component } from '@angular/core';

import {IProduct} from './interfaces/product.interface';
import { ICart } from './interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';
  products: IProduct[] = [];
  //cart: ICart[] = [];
  show: boolean;

  constructor() {
    /*
    asi lo tenia el PROFE
    localStorage.setItem('cart', JSON.stringify([this.cart]));
    this.show = false;
    */
    this.show= false;
    const cartString = localStorage.getItem('cart');
      if (!cartString) {
        localStorage.setItem('cart', JSON.stringify([])); // Inicializa como un array vacío
  }
  }

  ngOnInit() {
    this.products = [
      { id: 1, name: 'samsung note 10', description: 'Cámara de 20 mpx, resistente al agua 10m profundidad', price: 560, img: '' },
      { id: 2, name: 'iphone 12', description: 'Pantalla OLED de 6.1 pulgadas, chip A14 Bionic', price: 799, img: '' },
      { id: 3, name: 'google pixel 5', description: 'Cámara trasera dual, pantalla de 90 Hz. Bateria de larga duración', price: 699, img: '' },
      { id: 4, name: 'oneplus 8', description: 'Cámara de 48 MP, batería de larga duración', price: 499, img: '' },
      { id: 5, name: 'xiaomi mi 10', description: 'Pantalla AMOLED, procesador Snapdragon 865', price: 599, img: '' },
      { id: 6, name: 'huawei p40', description: 'Cámara Leica, batería de 4200 mAh, resistente al agua 10m', price: 650, img: '' }
    ];
  }

  toogleCart() {
    this.show = !this.show;
  }
}
