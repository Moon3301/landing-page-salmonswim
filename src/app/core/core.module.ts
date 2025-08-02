import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwimmingService } from './services/swimming.service';
import { CartService } from './services/cart.service';
import { CartSidebarService } from './services/cart-sidebar.service';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    SwimmingService,
    CartService,
    CartSidebarService,
    ContactService
  ]
})
export class CoreModule {
  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  //   if (parentModule) {
  //     throw new Error('CoreModule is already loaded. Import it only once in AppModule.');
  //   }
  // }
}
