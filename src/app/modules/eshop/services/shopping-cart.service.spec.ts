import { TestBed } from '@angular/core/testing';
import { Product } from '../models/product.model';
import { PromotionType } from '../types/promotion.type';

import { ShoppingCartService } from './shopping-cart.service';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;
  let product: Product;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartService);
    product = new Product(1, 'Test', 'Test', 5, PromotionType.BuyOneGetOne);

    const store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string => key in store ? store[key] : null,
      setItem: (key: string, value: any) => store[key] = `${value}`
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add product to localStorage', () => {
    service.add(product);

    const products = service.get();

    expect(products).toHaveSize(1);
    expect(products[0].quantity).toEqual(1);
  });

  it('should increase and decrease product quantity on localStorage', () => {
    service.add(product);
    service.add(product);

    let products = service.get();

    expect(products).toHaveSize(1);
    expect(products[0].quantity).toEqual(2);

    service.remove(product);
    products = service.get();

    expect(products).toHaveSize(1);
    expect(products[0].quantity).toEqual(1);
  });

  it('should remove product from localStorage', () => {
    service.add(product);

    let products = service.get();
    expect(products).toHaveSize(1);

    service.remove(product);
    products = service.get();
    expect(products).toHaveSize(0);
  });

  it('should emit event on add', () => {
    const emitSpy = spyOn(service.events, 'emit');

    service.add(product);

    expect(emitSpy).toHaveBeenCalledTimes(1);
  });

  it('should emit event on remove', () => {
    const emitSpy = spyOn(service.events, 'emit');

    service.remove(product);

    expect(emitSpy).toHaveBeenCalledTimes(1);
  });

});
