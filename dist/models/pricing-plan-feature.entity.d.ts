import { Feature } from "./feature.entity";
export type PricingPlanFeature = {
    id: string;
    pricing_plan_id: string;
    feature_id: string;
    quota: number;
    sort?: number;
    unit_price: number;
    feature: Feature;
};
