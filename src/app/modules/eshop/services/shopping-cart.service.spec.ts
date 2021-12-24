import { TestBed } from '@angular/core/testing';
import { Product } from '../models/product.model';
import { PromotionType } from '../types/promotion.type';

import { ShoppingCartService } from './shopping-cart.service';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartService);

    let store: any = {};
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
    const product = new Product(1, 'Test', 'Test', 5, PromotionType.BuyOneGetOne);
    service.add(product);

    expect(service.get()).toHaveSize(1);
  });
});
