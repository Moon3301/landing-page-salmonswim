import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentRoutingModule } from "./payment-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { SuccessComponent } from './pages/success/success.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartService } from '../../core/services/cart.service';
import { ContactInfoForm } from './components/contact-info-form/contact-info-form.component';
import { PaymentMethods } from './components/payment-methods/payment-methods.component';
import { CreditCardForm } from './components/credit-card-form/credit-card-form.component';
import { OrderSummary } from './components/order-summary/order-summary.component';

@NgModule({
    declarations: [
      ConfirmationComponent,
      SuccessComponent,
      CheckoutComponent,
      ContactInfoForm,
      PaymentMethods,
      CreditCardForm,
      OrderSummary
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      PaymentRoutingModule,
      SharedModule,
    ],
    providers: [
      CartService
    ],
})
export class PaymentModule { }
