export type CreatePricingPlanDto = {
    id: string;
    name: string;
    en_name?: string;
    price: number;
    description: string;
    cycle: "monthly" | "annually";
    active?: boolean;
    sort?: number;
};
export type AddPricingPlanFeatureDto = {
    pricing_plan_id: string;
    feature_id: string;
    quota: number;
    sort?: number;
    unit_price: number;
};
