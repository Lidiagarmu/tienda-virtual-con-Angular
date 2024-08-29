import { Component, Input, OnInit } from '@angular/core';
import { IProduct, ICart } from '../interfaces';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  
  @Input() product: IProduct = { id: 0, name: '', description: '', price: 0, img: '' }; //inicializamos con valor por defecto, sino da error

  cart: ICart[] = [];

  constructor(){}

  ngOnInit(): void {
      
  }


  add(): void {

   
  }
}
