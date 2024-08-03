import { Subscription } from  "./subscription.entity"

export type BuySubscriptionDto = {
	user_id?: string
	pricing_plan_id: string
}

// this is the Dto when getting user's own subscription, it returns subscription along with date calculations
export type UserSubscription = Subscription & {
	is_expired: boolean
}
