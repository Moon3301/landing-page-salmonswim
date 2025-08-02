import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
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

  @Input() selectable = false;
  /** When true shows the card container styles; when false renders plain grid. */
  @Input() showCard = true;
  @Output() selectionChange = new EventEmitter<PaymentMethod>();

  selectedMethodId?: number | string;

  constructor(private swimmingService: SwimmingService) {}

  ngOnInit(): void {

    this.swimmingService.getPaymentMethods().subscribe((methods: PaymentMethod[]) => {
      this.paymentMethods = methods;
    });

  }

  onSelect(method: PaymentMethod): void {
      if (!this.selectable) {
        return;
      }
  
      this.selectedMethodId = (method as any).id ?? method.name; // fallback to name if id absent
      this.selectionChange.emit(method);
    }
}
