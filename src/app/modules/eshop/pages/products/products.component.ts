import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { PromotionType } from '../../types/promotion.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  alerts: string[] = [];
  products: Product[] = [
    new Product(1, 'Product A', 'This is the product A. Buy one and get one free.', 20, PromotionType.BuyOneGetOne),
    new Product(2, 'Product B', 'This is the product B. Three for ten euro.', 4, PromotionType.ThreeForTenEuro),
    new Product(3, 'Product C', 'This is the product C.', 2),
    new Product(4, 'Product D', 'This is the product D. Three for ten euro.', 4, PromotionType.ThreeForTenEuro)
  ];

  constructor(private readonly shoppingCartService: ShoppingCartService) { }

  addToCart(p: Product): void {
    this.shoppingCartService.add(p);
    this.alerts.push(`${p.name} added successfully to cart.`);
  }

  removeAlert(alert: string) {
    const alertIndex = this.alerts.findIndex(a => a === alert);
    this.alerts.splice(alertIndex, 1)
  }

}
