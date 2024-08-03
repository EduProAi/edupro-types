import { PricingPlan } from "./pricing-plan.entity";
export type Subscription = {
    user_id: string;
    pricing_plan_id: string;
    cycle_begin: Date;
    cycle_end: Date;
    plan: PricingPlan;
    next_plan: PricingPlan;
};
