import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { PromotionType } from '../../types/promotion.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    { id: 1, name: 'Product A', description: 'This is the product A. Buy one and get one free.', price: 20, promotion: PromotionType.BuyOneGetOne },
    { id: 2, name: 'Product B', description: 'This is the product B. Three for ten euro.', price: 4, promotion: PromotionType.ThreeForTenEuro },
    { id: 3, name: 'Product C', description: 'This is the product C.', price: 2 },
    { id: 4, name: 'Product D', description: 'This is the product D. Three for ten euro.', price: 4, promotion: PromotionType.ThreeForTenEuro }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(p: Product) {
    
  }

}
