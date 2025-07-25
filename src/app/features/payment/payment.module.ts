import { NgModule } from "@angular/core";
import { PaymentRoutingModule } from "./payment-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { LayoutModule } from "../layout/layout.module";
import { CheckoutComponent } from "./components/checkout/checkout.component";

@NgModule({
    declarations: [
        CheckoutComponent
  ],
    imports: [
        PaymentRoutingModule,
        SharedModule,
        LayoutModule
    ],
    providers: [],
})
export class PaymentModule { }