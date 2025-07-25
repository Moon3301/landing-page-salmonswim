import { Component, OnInit } from '@angular/core';
import { SwimmingServiceModel } from '../../../../core/models/swimming.models';
import { SwimmingService } from '../../../../core/services/swimming.service';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: SwimmingServiceModel[] = [];

  constructor(private swimmingService: SwimmingService) {}

  ngOnInit() {
    this.swimmingService.getServices().subscribe(services => {
      this.services = services;
    });
  }
}