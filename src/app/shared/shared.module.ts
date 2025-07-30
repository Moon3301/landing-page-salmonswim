import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CardServiceComponent } from './components/card-service/card-service.component';
import { CardPlanComponent } from './components/card-plan/card-plan.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { SidebarShoppingCart } from './components/sidebar-shopping-cart/sidebar-shopping-cart';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CardServiceComponent,
    CardPlanComponent,
    PaymentMethodsComponent,
    SidebarShoppingCart
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FooterComponent,
    HeaderComponent,
    CardServiceComponent,
    CardPlanComponent,
    PaymentMethodsComponent
  ]
})
export class SharedModule { }
