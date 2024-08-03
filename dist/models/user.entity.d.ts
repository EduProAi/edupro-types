import { UserRole } from "./role.entity";
import { UserCashBalance } from "./user-cash.entity";
import { Subscription } from "./subscription.entity";
import { UserFeatureQuota } from "./user-feature-quota.entity";
import { AffiliateReferral } from "./affiliate-referral.entity";
import { Client } from "./client.entity";
export type User = {
    id?: string;
    username?: string;
    mobile_country_code?: string;
    mobile_number?: string;
    password: string;
    email?: string;
    nickname?: string;
    gender?: number;
    parent_uid?: string;
    create_time: Date;
    update_time: Date;
    user_role: Partial<UserRole>;
    email_verified?: boolean;
    internal_note?: string;
    user_cash_balance?: UserCashBalance;
    subscription?: Subscription;
    user_feature_quota?: UserFeatureQuota[];
    affiliate?: AffiliateReferral[];
    prev_month_commission?: number;
    prev_month_transaction?: number;
    current_month_transaction?: number;
    current_month_commission?: number;
    usage_sum?: number;
    client?: Client[];
};
