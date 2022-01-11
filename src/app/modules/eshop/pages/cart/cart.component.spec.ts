import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPriceCalculator } from '../../calculators/product-price.calculator';
import { Product } from '../../models/product.model';
import { Promotion } from '../../models/promotion.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  let shoppingCartService: ShoppingCartService;
  let product: Product;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    shoppingCartService = TestBed.inject(ShoppingCartService);
    product = new Product(1, 'Test', 'Test', 5, Promotion.All);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call shoppingCartService on add', () => {
    const addSpy = spyOn(shoppingCartService, 'add');

    component.addToCart(product);

    expect(addSpy).toHaveBeenCalledOnceWith(product);
  });

  it('should call shoppingCartService on updatePromotion', () => {
    const addSpy = spyOn(shoppingCartService, 'updatePromotion');

    component.updatePromotion(product);

    expect(addSpy).toHaveBeenCalledOnceWith(product);
  });

  it('should call shoppingCartService on remove', () => {
    const removeSpy = spyOn(shoppingCartService, 'remove');

    component.removeFromCart(product);

    expect(removeSpy).toHaveBeenCalledOnceWith(product);
  });

  it('should call ProductPriceCalculator on getPrice', () => {
    const calculatorSpy = spyOn(ProductPriceCalculator, 'calculate');

    component.getCalculatedPrice(product);

    expect(calculatorSpy).toHaveBeenCalledOnceWith(product);
  });

  it('should call shoppingCartService on eventEmission', () => {
    const getSpy = spyOn(shoppingCartService, 'get');
    shoppingCartService.events.emit();

    expect(getSpy).toHaveBeenCalledTimes(1);
  });
});
