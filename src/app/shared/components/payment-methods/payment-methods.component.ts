import { Component, OnInit } from "@angular/core";
import { PaymentMethod } from "../../../core/models/swimming.models";
import { SwimmingService } from "../../../core/services/swimming.service";

@Component({
  selector: 'shared-payment-methods',
  standalone: false,
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {

  paymentMethods: PaymentMethod[] = [];

  constructor(private swimmingService: SwimmingService) {}

  ngOnInit(): void {

    this.swimmingService.getPaymentMethods().subscribe((methods: PaymentMethod[]) => {
      this.paymentMethods = methods;
    });

  }
}
