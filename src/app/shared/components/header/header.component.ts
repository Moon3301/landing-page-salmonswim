import { Component, HostListener } from '@angular/core';
import { CartSidebarService } from '../../../core/services/cart-sidebar.service';
import { Router } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'shared-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  isScrolled = false;
  isMenuOpen = false;

  quantity$ = this.cartService.cart$.pipe(
    map(cart => cart.reduce((sum, item) => sum + item.quantity, 0))
  );

  

  constructor(
    private router: Router,
    private cartSidebarService: CartSidebarService,
    private cartService: CartService
  ){}

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();

    // cierra menú
    this.closeMenu();

    const doScroll = () => {
      // pequeño delay para asegurar que el DOM se renderice si hubo navegación
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 70;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' });
        }
      });
    };

    // Si estamos fuera de la home, navega primero y luego hace scroll
    if (this.router.url !== '/') {
      this.router.navigate(['/'], { fragment: sectionId }).then(() => doScroll());
    } else {
      doScroll();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSidebar() {
    this.cartSidebarService.toggle();
    console.log(this.cartSidebarService.open$);
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
