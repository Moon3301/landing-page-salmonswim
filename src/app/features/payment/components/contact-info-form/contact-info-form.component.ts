import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { Commune, Country, Region, ContactForm } from '../../../../core/models/contact-payment.model';

@Component({
  selector: 'payment-contact-info-form',
  standalone: false,
  templateUrl: './contact-info-form.component.html',
  styleUrl: './contact-info-form.component.css'
})
export class ContactInfoForm implements OnInit {

  @Output() formChange = new EventEmitter<ContactForm>();

  regions: Region[] = [];
  communes: Commune[] = [];

  constructor(private fb: FormBuilder, private paymentService: PaymentService){}

  public contactForm!: FormGroup;

  async ngOnInit() {

    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      region: ['', [Validators.required]],
      commune: ['', [Validators.required]]
    });

    const country = await this.paymentService.getRegions();
    this.regions = country.regions;
    console.log(this.regions);

    // emit initial form value
    this.formChange.emit(this.contactForm.value as ContactForm);

    // emit on every change
    this.contactForm.valueChanges.subscribe(value => {
      this.formChange.emit(value as ContactForm);
    });

    this.regions.forEach(region => {
      this.communes = region.communes;
    });

  }

  onCityChange(event: any): void {
    console.log(event.value);

    this.communes = this.regions.find(region => region.id === event.value)?.communes || [];
  }

  onSubmit(): void {
    // emit latest value explicitly if needed
    this.formChange.emit(this.contactForm.value as ContactForm);
    // TODO: Implement form submission logic
    console.log(this.contactForm.value);

  }

}
