import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from '../models/product.model';
import { PromotionType } from '../types/promotion.type';
import { ProductPriceCalculator } from './product-price.calculator';

describe('ProductPriceCalculator', () => {

    it('should calculate default price if no promotion found', () => {
        const product = new Product(1, 'Test product', 'Test', 5);
        product.quantity = 5;

        const calculatedPrice = ProductPriceCalculator.calculate(product);

        expect(calculatedPrice).toEqual(25);
    });

    it('should apply promotion buy one get one', () => {
        const product = new Product(1, 'Test product', 'Test', 5, PromotionType.BuyOneGetOne);
        product.quantity = 4;

        const calculatedPrice = ProductPriceCalculator.calculate(product);

        expect(calculatedPrice).toEqual(10);
    });

    it('should apply promotion three for ten euro', () => {
        const product = new Product(1, 'Test product', 'Test', 4, PromotionType.ThreeForTenEuro);
        product.quantity = 3;

        const calculatedPrice = ProductPriceCalculator.calculate(product);

        expect(calculatedPrice).toEqual(10);
    });

});
