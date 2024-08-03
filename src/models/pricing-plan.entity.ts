import { PricingPlanFeature } from  "./pricing-plan-feature.entity"

export type PricingPlan = {
	id: string
	name: string
	en_name?: string
	price: number
	description: string
	cycle: string
	active: boolean
	pricing_plan_feature?: PricingPlanFeature[]
	sort: number
	extra_features: string
}
