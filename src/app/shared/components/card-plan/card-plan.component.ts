import { Component, Input, OnInit } from '@angular/core';
import { PricingPlan } from '../../../core/models/swimming.models';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-card-plan',
  standalone: false,
  templateUrl: './card-plan.component.html',
  styleUrls: ['./card-plan.component.css']
})
export class CardPlanComponent implements OnInit {

  @Input() plan!: PricingPlan;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  selectPlan(plan: PricingPlan): void {
    this.router.navigate(['/detail-plan', plan.id]);
  }

}
