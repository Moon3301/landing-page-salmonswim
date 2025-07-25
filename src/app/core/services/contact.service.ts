import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactForm } from '../models/contact.models';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  submitContactForm(form: ContactForm): Observable<{ success: boolean; message: string }> {
    // Simulamos el envío del formulario
    console.log('Contact form submitted:', form);
    
    return of({
      success: true,
      message: 'Tu mensaje ha sido enviado correctamente. Te contactaremos pronto.'
    });
  }
}