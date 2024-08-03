import { Subscription } from "./subscription.entity";
export type BuySubscriptionDto = {
    user_id?: string;
    pricing_plan_id: string;
};
export type UserSubscription = Subscription & {
    is_expired: boolean;
};
