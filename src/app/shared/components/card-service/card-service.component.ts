import { Component, Input, OnInit } from "@angular/core";
import { SwimmingServiceModel } from "../../../core/models/swimming.models";
import { Router } from "@angular/router";

@Component({
  selector: 'shared-card-service',
  standalone: false,
  templateUrl: './card-service.component.html',
  styleUrls: ['./card-service.component.css']
})
export class CardServiceComponent implements OnInit {

  @Input() service!: SwimmingServiceModel;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}


  goToService() {
    this.router.navigateByUrl(`/detail-service/${this.service.id}`);

    console.log(this.service.id);
  }

}
