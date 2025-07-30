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
}
