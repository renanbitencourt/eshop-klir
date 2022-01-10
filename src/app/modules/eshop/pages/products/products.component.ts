import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { Promotion } from '../../models/promotion.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  alerts: string[] = [];
  products: Product[] = [
    new Product(1, 'Product A', 'This is the product A.', 20, Promotion.PriceGreaterThanFive),
    new Product(2, 'Product B', 'This is the product B.', 4, Promotion.All),
    new Product(3, 'Product C', 'This is the product C.', 2, Promotion.PriceLesserThanFour),
    new Product(4, 'Product D', 'This is the product D.', 4, Promotion.All)
  ];

  constructor(private readonly shoppingCartService: ShoppingCartService) { }

  addToCart(p: Product): void {
    this.shoppingCartService.add(p);
    this.alerts.push(`${p.name} added successfully.`);
  }

  removeAlert(alert: string): void {
    const alertIndex = this.alerts.findIndex(a => a === alert);
    this.alerts.splice(alertIndex, 1);
  }

}
