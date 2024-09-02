import { Component } from '@angular/core';
import { ICart } from '../interfaces';


// este componente va a leer la informacion del localstorage
/*
                                  Explicación del CartComponent

cart Property:
Este array de tipo ICart[] almacenará los elementos que se carguen desde el localStorage.

ngOnInit() Lifecycle Hook:
Este método se ejecuta automáticamente cuando el componente se inicializa. Aquí se llama al método loadCart() para 
cargar los datos del carrito.

loadCart() Method:
Similar al método add() en ProductComponent, este método obtiene los datos del carrito desde el localStorage y los parsea 
de JSON a un array de objetos ICart. Si no hay datos en localStorage, el carrito se inicializa como un array vacío.

getTotal() Method (Opcional):
Este método es opcional y se utiliza para calcular el total del carrito, multiplicando el precio de cada ítem por su 
cantidad y sumando los resultados.
*/


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart : ICart[] = []

  constructor(){}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    const cartString = localStorage.getItem('cart');
      if (cartString) {
        this.cart = JSON.parse(cartString);
      } else {
        this.cart = []; //si no hay nada en el localStorage inicia el carrito vacio
      }  
  }

   // Método opcional para calcular el total
   getTotal(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

}
