import { Component } from '@angular/core';
import { PaymentMethod } from '../../../../core/models/swimming.models';

@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {

  paymentMethod?: PaymentMethod;

  constructor(){}

  onPaymentMethodSelected(paymentMethod: PaymentMethod){
    this.paymentMethod = paymentMethod;
    console.log('Payment method selected', paymentMethod);
  }

  onSubmit(): void {

    
  }

}
