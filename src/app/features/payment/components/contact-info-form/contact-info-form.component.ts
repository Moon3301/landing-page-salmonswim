import { Component } from '@angular/core';

@Component({
  selector: 'payment-contact-info-form',
  standalone: false,
  templateUrl: './contact-info-form.component.html',
  styleUrl: './contact-info-form.component.css'
})
export class ContactInfoForm {

  checkoutForm = {
    email: '',
    country: 'España',
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: ''
  };

  onSubmit(): void {
    // TODO: Implement form submission logic
    console.log('Form submitted', this.checkoutForm);
    // Here you would typically send the payment details to your backend
    // and handle the payment processing
  }

}
