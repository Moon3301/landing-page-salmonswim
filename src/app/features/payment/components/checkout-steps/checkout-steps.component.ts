import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'payment-checkout-steps',
  standalone: false,
  templateUrl: './checkout-steps.component.html',
  styleUrls: ['./checkout-steps.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutSteps {
  /**
   * Paso actual del proceso de compra.
   * 1: Datos de contacto
   * 2: Selección de método de pago
   */
  @Input() step: 1 | 2 | 3 = 1;
}
