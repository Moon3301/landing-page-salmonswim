import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'home-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {

  animate = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animate = true;
    }, 50);
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70; // Altura del header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  }

}
