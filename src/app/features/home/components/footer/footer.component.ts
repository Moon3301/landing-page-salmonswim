import { Component, OnInit } from '@angular/core';
import { ContactInfo } from '../../../../core/models/swimming.models';
import { SwimmingService } from '../../../../core/services/swimming.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
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