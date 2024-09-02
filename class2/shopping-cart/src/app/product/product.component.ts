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


  /* PROFE METODO
  
  add(): void {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.cart.push(name: this.product.name, price: this.product.price, quantity: 1 );
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  */
  

                                           //EXPLICACION METODO ADD()
/*
OBTENEMOS EL CARRITO DEL LOCALSTORAGE
o
localStorage.getItem('cart') intenta obtener un valor almacenado bajo la clave 'cart' en localStorage.
cartString será una cadena de texto que representa el carrito en formato JSON o null si no hay ningún 
carrito guardado en localStorage.

VERIFICAMOS SI EL CARRITO EXISTE

Si cartString no es null, se asume que hay un carrito almacenado. Entonces, usamos JSON.parse(cartString) para convertir 
esa cadena JSON en un array de objetos ICart, y lo asignamos a this.cart.
Si cartString es null, significa que no hay ningún carrito guardado, por lo que inicializamos this.cart como un array vacío.
*/ 

  add(): void {
    const cartString = localStorage.getItem('cart'); 
    if (cartString) {
      this.cart = JSON.parse(cartString);
    } else {
      this.cart = []; // Inicializa el carrito vacío si no hay nada en localStorage
    }

    

  /*
  CREAMOS UN NUEVO ITEM DE CARRITO
  Aquí, se crea un nuevo objeto cartItem que sigue la estructura definida en la interfaz ICart.
Este objeto contiene el nombre del producto (this.product.name), su precio (this.product.price), y la cantidad 
inicial (que se establece en 1).
  */ 
   const cartItem: ICart = {
      name: this.product.name,
      price: this.product.price,
      quantity: 1
    };
    
  
    /*

    AGREGAMOS EL NUEVO ITEM AL CARRITO

    Una vez creado el objeto cartItem, se agrega al array this.cart utilizando el método push(). Esto significa que
     el producto seleccionado por el usuario se añade al final del carrito.
    */
    this.cart.push(cartItem);

    /*
    GUARDAMOS CARRITO ACTUALIZADO EN LOCALSTORAGE
    
    Después de añadir el nuevo ítem al carrito, el array this.cart se convierte nuevamente en una cadena JSON
     utilizando JSON.stringify(this.cart).
    Esta cadena se guarda en localStorage bajo la clave 'cart', sobrescribiendo cualquier valor anterior. Esto 
    asegura que el carrito actualizado se mantenga para futuras sesiones del usuario.*/
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  
}
