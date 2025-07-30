import { Component, OnInit } from '@angular/core';
import { ContactInfo } from '../../../core/models/swimming.models';
import { SwimmingService } from '../../../core/services/swimming.service';

@Component({
  selector: 'shared-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contactInfo: ContactInfo | null = null;

  constructor(private swimmingService: SwimmingService) {}

  ngOnInit() {
    this.swimmingService.getContactInfo().subscribe(info => {
      this.contactInfo = info;
    });
  }
}
