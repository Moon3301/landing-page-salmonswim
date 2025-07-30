import { PricingPlan } from "./swimming.models";

export interface ShoppingCart {
  id?: string;
  plan: PricingPlan;
  quantity: number;
  total?: number;
}

