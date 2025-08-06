import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwimmingServiceModel } from '../../../../core/models/swimming.models';
import { SwimmingService } from '../../../../core/services/swimming.service';

@Component({
  selector: 'app-service-swim',
  standalone: false,
  templateUrl: './detail-service.component.html',
  styleUrl: './detail-service.component.css'
})
export class DetailServiceComponent implements OnInit {

  service!: SwimmingServiceModel;

  constructor(
    private swimmingService: SwimmingService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      const id = params['id'];
      this.swimmingService.getService(id).subscribe((service) => {
        this.service = service;
        this.service.isDisabled = true;
      });
    });
  }

  goToPlans() {
    this.router.navigate(['/home']);
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();

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
}
