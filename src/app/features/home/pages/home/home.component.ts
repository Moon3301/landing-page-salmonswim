import { Component, OnInit } from '@angular/core';
import { SwimmingService } from '../../../../core/services/swimming.service';

@Component({
  selector: 'home-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  scheduleServicesName: string[] = [];
  constructor(private swimmingService: SwimmingService){}

  ngOnInit(): void {
    this.swimmingService.getServices().subscribe(services => {
      this.scheduleServicesName = services.map(service => service.name);
    });
  }
}
