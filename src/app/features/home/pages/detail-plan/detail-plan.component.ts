import { Component } from '@angular/core';
import { PricingPlan } from '../../../../core/models/swimming.models';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SwimmingService } from '../../../../core/services/swimming.service';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-detail-plan',
  standalone: false,
  templateUrl: './detail-plan.component.html',
  styleUrl: './detail-plan.component.css'
})
export class DetailPlan {

  plan!: PricingPlan;

  constructor(
    private swimmingService: SwimmingService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this.swimmingService.getPricingPlan(id).subscribe((plan: PricingPlan) => {
        this.plan = plan;
        this.plan.isDisabledBtn = true;
      });
    });
  }

  addToCart(plan: PricingPlan) {
    console.log(plan);
    this.cartService.add(plan);
    this.plan.isDisabledBtn = true;

  }
}
