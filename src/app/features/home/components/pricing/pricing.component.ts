import { Component, OnInit } from '@angular/core';
import { PricingPlan, PaymentMethod } from '../../../../core/models/swimming.models';
import { SwimmingService } from '../../../../core/services/swimming.service';

@Component({
  selector: 'home-pricing',
  standalone: false,
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  pricingPlans: PricingPlan[] = [];
  paymentMethods: PaymentMethod[] = [];

  constructor(private swimmingService: SwimmingService) {}

  ngOnInit() {
    this.swimmingService.getPricingPlans().subscribe(plans => {
      this.pricingPlans = plans;
    });

    this.swimmingService.getPaymentMethods().subscribe(methods => {
      this.paymentMethods = methods;
    });
  }
}
