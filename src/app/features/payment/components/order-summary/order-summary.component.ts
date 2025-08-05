import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';
import { ShoppingCart } from '../../../../core/models/shopping-cart.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'payment-order-summary',
  standalone: false,
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummary implements OnInit, OnDestroy {

  cartItems: ShoppingCart[] = [];
  subtotal = 0;
  taxes = 0;
  total = 0;

  private cartSubscription: Subscription | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart$.subscribe(cart => {
      this.cartItems = cart;
      this.calculateTotals();
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  calculateTotals(): void {
    this.subtotal = this.cartService.getTotal();
    this.taxes = this.subtotal * 0.21; // 21% IVA
    this.total = this.subtotal + this.taxes;
  }

  increaseQuantity(planId: string): void {
    const item = this.cartItems.find(i => i.plan.id === planId);
    if (item) {
      this.cartService.add(item.plan, 1);
    }
  }

  decreaseQuantity(planId: string): void {
    const item = this.cartItems.find(i => i.plan.id === planId);
    if (item) {
      if (item.quantity > 1) {
        this.cartService.add(item.plan, -1);
      } else {
        this.cartService.remove(planId);
      }
    }
  }

}
