import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from '../../models/product.model';
import { Promotion } from '../../models/promotion.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  let shoppingCartService: ShoppingCartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    shoppingCartService = TestBed.inject(ShoppingCartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call shoppingCartService on add', () => {
    const product = new Product(1, 'Test', 'Test', 5, Promotion.All);
    const addSpy = spyOn(shoppingCartService, 'add');

    component.addToCart(product);

    expect(addSpy).toHaveBeenCalledOnceWith(product);
  });

  it('should remove alert', () => {
    const alert = 'alert';
    component.alerts.push(alert);

    expect(component.alerts).toHaveSize(1);

    component.removeAlert(alert);
    expect(component.alerts).toHaveSize(0);
  });
});
