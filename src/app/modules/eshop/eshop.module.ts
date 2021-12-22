import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EshopRoutingModule } from './eshop-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    EshopRoutingModule
  ]
})
export class EshopModule { }
