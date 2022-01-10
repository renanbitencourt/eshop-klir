import { PromotionType } from '../types/promotion.type';

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    promotion: PromotionType = PromotionType.None;
    quantity = 1;
    eligiblePromotions: PromotionType[];

    constructor(id: number, name: string, description: string, price: number, eligiblePromotions: PromotionType[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.eligiblePromotions = eligiblePromotions;
    }
}
