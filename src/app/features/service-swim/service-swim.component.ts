import { Component, OnInit } from '@angular/core';
import { SwimmingService } from '../../core/services/swimming.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SwimmingServiceModel } from '../../core/models/swimming.models';

@Component({
  selector: 'service-swim-page',
  standalone: false,
  templateUrl: './service-swim.component.html',
  styleUrls: ['./service-swim.component.css']
})
export class ServiceSwimTestComponent implements OnInit {

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
