import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactInfo } from '../../../../core/models/swimming.models';
import { SwimmingService } from '../../../../core/services/swimming.service';
import { ContactService } from '../../../../core/services/contact.service';

@Component({
  selector: 'home-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  contactInfo: ContactInfo | null = null;
  isSubmitting = false;
  submitSuccess = false;
  submitMessage = '';

  constructor(
    private fb: FormBuilder,
    private swimmingService: SwimmingService,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      service: [''],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.swimmingService.getContactInfo().subscribe(info => {
      this.contactInfo = info;
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;

      this.contactService.submitContactForm(this.contactForm.value)
        .subscribe(response => {
          this.isSubmitting = false;
          if (response.success) {
            this.submitSuccess = true;
            this.submitMessage = response.message;
            this.contactForm.reset();
          }
        });
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
