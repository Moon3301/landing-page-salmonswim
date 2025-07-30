import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheckoutComponent } from "./pages/checkout/checkout.component";
import { ConfirmationComponent } from "./pages/confirmation/confirmation.component";
import { SuccessComponent } from "./pages/success/success.component";

const routes: Routes = [

  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'confirmation', component: ConfirmationComponent
  },
  {
    path: 'success', component: SuccessComponent
  }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaymentRoutingModule { }