import { PromotionType } from "../types/promotion.type";

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    promotion?: PromotionType;
    quantity = 1;

    constructor(id: number, name: string, description: string, price: number, promotion?: PromotionType) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.promotion = promotion;
    }
}
