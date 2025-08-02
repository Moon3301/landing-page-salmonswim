import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../../../core/services/cart.service';
import { ShoppingCart } from '../../../../core/models/shopping-cart.models';
import { PaymentMethod, PricingPlan } from '../../../../core/models/swimming.models';
import { Subscription } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  
  cartItems: ShoppingCart[] = [];
  subtotal = 0;
  taxes = 0;
  total = 0;
  private cartSubscription: Subscription | undefined;

  // Form model
  checkoutForm = {
    email: '',
    paymentMethod: 'credit-card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    country: 'España',
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: ''
  };

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

  onSubmit(): void {
    // TODO: Implement form submission logic
    console.log('Form submitted', this.checkoutForm);
    // Here you would typically send the payment details to your backend
    // and handle the payment processing
  }

  onPaymentMethodSelected(paymentMethod: any){
    console.log('Payment method selected', paymentMethod);
  }
}
