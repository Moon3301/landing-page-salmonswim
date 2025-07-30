import { Component } from '@angular/core';

@Component({
  selector: 'payment-methods',
  standalone: false,
  templateUrl: './payment-methods.component.html',
  styleUrl: './payment-methods.component.css'
})
export class PaymentMethods {

  checkoutForm = {
    paymentMethod: 'credit-card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
  };

}
