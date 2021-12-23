import { Product } from "../models/product.model";
import { PromotionType } from "../types/promotion.type";

// This calculator should be in the backend project
export class ProductPriceCalculator {

    static calculate(p: Product): number {
        switch (p.promotion) {
            case PromotionType.BuyOneGetOne: return this.calculateB1G1(p);
            case PromotionType.ThreeForTenEuro: return this.calculateTFT(p);
            default: return p.price * p.quantity;
        }
    }

    private static calculateTFT(p: Product): number {
        const mod = p.quantity % 3;

        if (mod === 0) {
            return (10 * (p.quantity / 3));
        }

        return (10 * ((p.quantity - mod) / 3)) + (p.price * mod);
    }

    private static calculateB1G1(p: Product): number {
        if (p.quantity % 2 === 0) {
            return (p.price * p.quantity) / 2;
        }

        if (p.quantity === 1) {
            return p.price;
        }

        return (p.price * (p.quantity - 1) / 2) + p.price;
    }
}