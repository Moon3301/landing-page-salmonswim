import { PricingPlan } from "./swimming.models";

// Represents a single entry in the shopping cart (a pricing plan and its quantity)
export interface ShoppingCartItem {
  plan: PricingPlan;
  quantity: number;
  total?: number;
}

// Container for the whole cart
export interface ShoppingCartContainer {
  id?: string;
  items: ShoppingCartItem[];
  /** Overall subtotal (without taxes) */
  subtotal?: number;
  /** Taxes (e.g. IVA) applied to subtotal */
  taxes?: number;
  /** Grand total including taxes / discounts */
  total?: number;
}

// Keep backward-compatibility – a `ShoppingCart` represents a single line item
export type ShoppingCart = ShoppingCartItem;

