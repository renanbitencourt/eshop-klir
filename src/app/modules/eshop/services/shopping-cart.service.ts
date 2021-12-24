import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCartKey = 'KLIR_ESHOP_CART';
  events = new EventEmitter();

  constructor() { }

  add(p: Product): void {
    const cartProductsStorage = localStorage.getItem(this.shoppingCartKey);
    const cartProducts: Product[] = cartProductsStorage ? JSON.parse(cartProductsStorage) : [];

    const product = cartProducts.find(c => c.id === p.id);
    product ? product.quantity++ : cartProducts.push(p);

    localStorage.setItem(this.shoppingCartKey, JSON.stringify(cartProducts));
    this.events.emit();
  }

  remove(p: Product): void {
    const cartProductsStorage = localStorage.getItem(this.shoppingCartKey);
    const cartProducts: Product[] = cartProductsStorage ? JSON.parse(cartProductsStorage) : [];
    const productToRemove = cartProducts.find(c => c.id === p.id);

    if (productToRemove) {
      productToRemove.quantity--;

      if (productToRemove.quantity <= 0) {
        const productToRemoveIndex = cartProducts.findIndex(c => c.id === p.id);
        cartProducts.splice(productToRemoveIndex, 1);
      }

      localStorage.setItem(this.shoppingCartKey, JSON.stringify(cartProducts));
    }
    this.events.emit();
  }

  get(): Product[] {
    return JSON.parse(localStorage.getItem(this.shoppingCartKey)) ?? [];
  }
}
