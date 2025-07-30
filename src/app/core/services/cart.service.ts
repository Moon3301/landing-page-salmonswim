import { Injectable } from "@angular/core";
import { ShoppingCart } from "../models/shopping-cart.models";
import { PricingPlan } from "../models/swimming.models";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CartService {

  shoppingCart: ShoppingCart[] = [];

  private readonly STORAGE_KEY = 'shoppingCart';

  private cartSubject = new BehaviorSubject<ShoppingCart[]>(this.load());
  cart$ = this.cartSubject.asObservable();

  constructor() {
    // this.getShoppingCart();
  }

  get cart(): ReadonlyArray<ShoppingCart>{
    return this.cartSubject.value;
  }

  add(plan: PricingPlan, quantity = 1): void {
    const cart = [...this.cart]; // copia inmutable
    const item = cart.find(i => i.plan.id === plan.id);
    if (item) item.quantity += quantity;
    else cart.push({ plan, quantity: quantity });
    this.persistAndEmit(cart);
    

  }

  remove(planId: string): void {
    const cart = this.cart.filter(i => i.plan.id !== planId);
    this.persistAndEmit(cart);
  }

  clear(): void {
    this.persistAndEmit([]);
  }

  get totalQuantity(): number {
    return this.cart.reduce((t, i) => t + i.quantity, 0);
  }

  private persistAndEmit(cart: ShoppingCart[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Persistencia fallida', e);
    }
    this.cartSubject.next(cart);
  }

  private load(): ShoppingCart[] {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.plan.price * item.quantity, 0);
  }

  increaseQuantity(planId: string): void {
    const cart = [...this.cart];
    const item = cart.find(i => i.plan.id === planId);
    if (item) {
      item.quantity += 1;
      this.persistAndEmit(cart);
    }
  }

  decreaseQuantity(planId: string): void {
    const cart = [...this.cart];
    const item = cart.find(i => i.plan.id === planId);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        this.persistAndEmit(cart);
      } else {
        // If quantity is 1, remove the item
        this.remove(planId);
      }
    }
  }

  // addToCart(plan: PricingPlan) {
  //   const existingPlan = this.shoppingCart.find((item) => item.plan.id === plan.id);
  //   if (existingPlan) {
  //     existingPlan.quantity++;
  //     existingPlan.total += plan.price;

  //     // persistir la data
  //     localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
  //   } else {
  //     this.shoppingCart.push({ plan, quantity: 1, total: plan.price });
  //     this.updateBadge();

  //     // persistir la data
  //     localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
  //   }
  // }

  // updateBadge() {
  //   const badge = document.querySelector('.badge');
  //   if (badge) {
  //     badge.textContent = this.shoppingCart.length.toString();
  //   }
  // }

  // getShoppingCart() {
  //   this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
  //   return this.shoppingCart;
  // }

  // clearCart() {
  //   this.shoppingCart = [];
  //   this.updateBadge();

  //   // persistir la data
  //   localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
  // }

  // removePlan(planId: string) {
  //   this.shoppingCart = this.shoppingCart.filter((item) => item.plan.id !== planId);
  //   this.updateBadge();

  //   // persistir la data
  //   localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
  // }

  // updatePlanQuantity(planId: string, quantity: number) {
  //   const plan = this.shoppingCart.find((item) => item.plan.id === planId);
  //   if (plan) {
  //     plan.quantity = quantity;
  //     plan.total = plan.plan.price * quantity;

  //     // persistir la data
  //     localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
  //   }
  // }

  // getTotal() {
  //   return this.shoppingCart.reduce((total, item) => total + item.total, 0);
  // }


}
