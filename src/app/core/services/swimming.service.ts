import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SwimmingServiceModel, Schedule, PricingPlan, ContactInfo, PaymentMethod } from '../models/swimming.models';

@Injectable({
  providedIn: 'root'
})
export class SwimmingService {

  private services: SwimmingServiceModel[] = [
    {
      id: '1',
      name: 'Clases Individuales',
      description: 'Entrenamiento personalizado uno a uno con instructor certificado',
      duration: '45 min',
      level: 'All Levels',
      maxStudents: 1,
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      isDisabled: false
    },
    {
      id: '2',
      name: 'Rama de natación',
      description: 'Entrena aprende y comparte formando equipo en grupo con máximo 12 estudiantes por pista',
      duration: '60 min',
      level: 'Beginner',
      maxStudents: 12,
      image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800',
      isDisabled: false
    },
    {
      id: '3',
      name: 'Natación Pre-Rama',
      description: 'Clases especializadas para niños de 3 a 6 años',
      duration: '60 min',
      level: 'Beginner',
      maxStudents: 6,
      image: 'public/img/4.jpeg',
      isDisabled: false
    },
    {
      id: '4',
      name: 'Clinicas y talleres',
      description: 'Clases de salvamento y RCP. Tecnicas de uso y vaciado de snorkel',
      duration: '45 min',
      level: 'All Levels',
      maxStudents: 15,
      image: 'public/img/5.jpg',
      isDisabled: false
    },
    {
      id: '5',
      name: 'Natacion adultos',
      description: 'Natacion para papas y adultos que quieren mejorar su condicion fisica',
      duration: '60 min',
      level: 'All Levels',
      maxStudents: 12,
      image: 'public/img/3.jpg',
      isDisabled: false
    },
    {
      id: '6',
      name: 'Natacion master',
      description: 'Entrenamiento intensivo. Desde iniciante hasta triatleta',
      duration: '60 min',
      level: 'All Levels',
      maxStudents: 12,
      image: 'public/img/6.png',
      isDisabled: false
    }
  ];

  private schedules: Schedule[] = [
    { id: '1', service: 'Clases Individuales', dayOfWeek: 'Lunes', time: '18:15 - 20:00', instructor: 'Carlos Mendoza', availableSpots: 1, totalSpots: 1 },
    { id: '2', service: 'Clases Grupales', dayOfWeek: 'Lunes', time: '20:00 - 22:00', instructor: 'María López', availableSpots: 3, totalSpots: 6 },
    { id: '3', service: 'Natación Infantil', dayOfWeek: 'Miércoles', time: '18:15 - 20:00', instructor: 'Ana García', availableSpots: 2, totalSpots: 4 },
    { id: '4', service: 'Clases Grupales', dayOfWeek: 'Miércoles', time: '20:00 - 22:00', instructor: 'Roberto Silva', availableSpots: 5, totalSpots: 8 },
    { id: '5', service: 'Natación Infantil', dayOfWeek: 'Viernes', time: '17:00 - 19:00', instructor: 'María López', availableSpots: 2, totalSpots: 6 }
  ];

  private pricingPlans: PricingPlan[] = [
    {
      id: '1',
      name: 'Plan Básico',
      price: 63000,
      duration: 'mensual',
      sessionsPerWeek: 1,
      features: [
        '4 clases por mes',
        'Acceso a piscina durante clases',
        'Instructor certificado',
        'Evaluación inicial gratuita'
      ],
      description: 'Plan básico para principiantes',
      fullDescription: 'Plan básico para principiantes',
    },
    {
      id: '2',
      name: 'Plan Estándar',
      price: 83000,
      duration: 'mensual',
      sessionsPerWeek: 2,
      isPopular: true,
      features: [
        '8 clases por mes',
        'Acceso a piscina durante clases',
        'Instructor certificado',
        'Evaluación inicial y seguimiento',
      ],
      description: 'Plan estándar para principiantes',
      fullDescription: 'Plan estándar para principiantes',
    },
    {
      id: '3',
      name: 'Plan Premium',
      price: 95000,
      duration: 'mensual',
      sessionsPerWeek: 3,
      features: [
        '12 clases por mes',
        'Acceso libre a piscina',
        'Instructor personal disponible',
        'Evaluación y plan personalizado',
        'Acceso a todas las clases grupales',
      ],
      description: 'Plan premium para principiantes',
      fullDescription: 'Plan premium para principiantes',
    }
  ];

  private contactInfo: ContactInfo = {
    phone: '+56 9 82530378',
    email: 'carla@salmonswim.cl',
    whatsapp: '+56 9 82530378',
    address: 'María Monvel 50, La reina',
    socialMedia: {
      instagram: '@club.salmon.swim',
      facebook: 'club.salmon.swim'
    }
  };

  private paymentMethods: PaymentMethod[] = [
    {
      id: '1',
      name: 'Tarjetas de Crédito/Débito',
      icon: '💳',
      description: 'Visa, Mastercard, American Express'
    },
    {
      id: '2',
      name: 'Transferencia Bancaria',
      icon: '🏦',
      description: 'Transferencia directa desde tu banco'
    },
    {
      id: '3',
      name: 'PayPal',
      icon: '💰',
      description: 'Pago seguro con tu cuenta PayPal'
    },
    {
      id: '4',
      name: 'WebPay',
      icon: '🇨🇱',
      description: 'Plataforma de pago chilena'
    }
  ];

  getService(id: string): Observable<SwimmingServiceModel> {
    return of(this.services.find((service) => service.id === id)!);
  }

  getServices(): Observable<SwimmingServiceModel[]> {
    return of(this.services);
  }

  getSchedules(): Observable<Schedule[]> {
    return of(this.schedules);
  }

  getPricingPlan(id: string): Observable<PricingPlan> {
    return of(this.pricingPlans.find((plan) => plan.id === id)!);
  }

  getPricingPlans(): Observable<PricingPlan[]> {
    return of(this.pricingPlans);
  }

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }

  getPaymentMethods(): Observable<PaymentMethod[]> {
    return of(this.paymentMethods);
  }
}
