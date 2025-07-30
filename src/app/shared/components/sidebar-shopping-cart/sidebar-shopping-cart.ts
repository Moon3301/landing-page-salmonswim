import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartSidebarService } from '../../../core/services/cart-sidebar.service';
import { CartService } from '../../../core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-shopping-cart',
  standalone: false,
  templateUrl: './sidebar-shopping-cart.html',
  styleUrls: ['./sidebar-shopping-cart.css']
})

export class SidebarShoppingCart implements OnInit, OnDestroy  {

  
  isOpen = false;

  cart$ = this.cartService.cart$;

  constructor(private router: Router,private cartSidebarService: CartSidebarService, private cartService: CartService) {
    
  }

  ngOnInit(): void {
    this.cartSidebarService.open$.subscribe(open => (this.isOpen = open));


  }

  ngOnDestroy(): void {
    
  }

  close() {
    this.cartSidebarService.close();
  }

  removePlan(planId: string) {
    this.cartService.remove(planId);
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  increaseQuantity(planId: string): void {
    this.cartService.increaseQuantity(planId);
  }

  decreaseQuantity(planId: string): void {
    this.cartService.decreaseQuantity(planId);
  }

  goToCheckout() {
    this.router.navigate(['payment/checkout']);
  }
}
