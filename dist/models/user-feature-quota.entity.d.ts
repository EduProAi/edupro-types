import { Feature } from "./feature.entity";
export type UserFeatureQuota = Partial<Feature> & {
    feature_handle: string;
    quota: number;
    remaining_quota?: number;
    plan_quota?: number;
};
