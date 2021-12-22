import { PromotionType } from "../types/promotion.type";

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    promotion?: PromotionType;
}
