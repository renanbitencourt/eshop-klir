import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private readonly shoppingCartKey = 'KLIR_ESHOP_CART';
  events = new EventEmitter();

  add(p: Product): void {
    const cartProducts: Product[] = this.get();

    const product = cartProducts.find(c => c.id === p.id);
    product ? product.quantity++ : cartProducts.push(p);

    this.setShoppingCart(cartProducts);
    this.events.emit();
  }

  updatePromotion(p: Product): void {
    const cartProducts: Product[] = this.get();
    const product = cartProducts.find(c => c.id === p.id);

    if (product) {
      product.promotion = p.promotion;
      this.setShoppingCart(cartProducts);
    }

    this.events.emit();
  }

  remove(p: Product): void {
    const cartProducts: Product[] = this.get();
    const productToRemove = cartProducts.find(c => c.id === p.id);

    if (productToRemove) {
      this.removeProduct(productToRemove, cartProducts);
    }
    this.events.emit();
  }

  get(): Product[] {
    return JSON.parse(localStorage.getItem(this.shoppingCartKey)) ?? [];
  }

  private removeProduct(productToRemove: Product, cartProducts: Product[]) {
    productToRemove.quantity--;

    if (productToRemove.quantity <= 0) {
      const index = cartProducts.findIndex(c => c.id === productToRemove.id);
      cartProducts.splice(index, 1);
    }

    this.setShoppingCart(cartProducts);
  }

  private setShoppingCart(products: Product[]) {
    localStorage.setItem(this.shoppingCartKey, JSON.stringify(products));
  }

}
