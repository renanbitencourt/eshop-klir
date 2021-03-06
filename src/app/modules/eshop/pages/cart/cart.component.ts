import { Component, OnInit } from '@angular/core';
import { ProductPriceCalculator } from '../../calculators/product-price.calculator';
import { Product } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[];

  constructor(private readonly shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.products = this.shoppingCartService.get();
    this.shoppingCartService.events.subscribe(() => this.products = this.shoppingCartService.get());
  }

  addToCart(p: Product): void {
    this.shoppingCartService.add(p);
  }

  removeFromCart(p: Product): void {
    this.shoppingCartService.remove(p);
  }

  getCalculatedPrice(product: Product): number {
    return ProductPriceCalculator.calculate(product);
  }

  updatePromotion(product: Product) {
    this.shoppingCartService.updatePromotion(product);
  }

}
