import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ContactForm } from '../../../../core/models/contact-payment.model';
import { PaymentMethod } from '../../../../core/models/swimming.models';

@Component({
  standalone: false,
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  contactInfo?: ContactForm;
  // paymentMethod?: PaymentMethod;

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  onSubmit(): void {
    if(!this.contactInfo){
      console.warn('No contact info');
      return;
    }
    // if(!this.paymentMethod){
    //   console.warn('No payment method selected');
    //   return;
    // }

    const checkoutData = {
      contact: this.contactInfo,
      // paymentMethod: this.paymentMethod
    };

    console.log('Checkout data', checkoutData);

    // TODO: call backend service then navigate
    this.router.navigate(['/payment/confirmation']);
    // TODO: Implement form submission logic
    // Here you would typically send the payment details to your backend
    // and handle the payment processing
  }

  // onPaymentMethodSelected(paymentMethod: PaymentMethod){
  //   this.paymentMethod = paymentMethod;
  //   console.log('Payment method selected', paymentMethod);
  // }

  onContactFormChange(form: ContactForm){
    this.contactInfo = form;
  }
}
