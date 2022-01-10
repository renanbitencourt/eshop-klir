import { PromotionType } from "../types/promotion.type";

export class Promotion {
    static All = [PromotionType.None, PromotionType.BuyOneGetOne, PromotionType.ThreeForTenEuro];
    static PriceGreaterThanFive = [PromotionType.None, PromotionType.BuyOneGetOne];
    static PriceLesserThanFour = [PromotionType.None, PromotionType.BuyOneGetOne];
}
