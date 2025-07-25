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
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      name: 'Clases Grupales',
      description: 'Aprende en grupo con máximo 6 estudiantes por clase',
      duration: '60 min',
      level: 'Beginner',
      maxStudents: 6,
      image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '3',
      name: 'Natación Infantil',
      description: 'Clases especializadas para niños de 4 a 12 años',
      duration: '30 min',
      level: 'Beginner',
      maxStudents: 4,
      image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '4',
      name: 'Aqua Fitness',
      description: 'Ejercicios acuáticos para mejorar condición física',
      duration: '45 min',
      level: 'All Levels',
      maxStudents: 8,
      image: 'https://images.pexels.com/photos/1263347/pexels-photo-1263347.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '5',
      name: 'Perfeccionamiento Técnico',
      description: 'Mejora tu técnica en los diferentes estilos de natación',
      duration: '60 min',
      level: 'Intermediate',
      maxStudents: 4,
      image: 'https://images.pexels.com/photos/1263346/pexels-photo-1263346.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '6',
      name: 'Preparación Competitiva',
      description: 'Entrenamiento intensivo para competencias y triatlones',
      duration: '90 min',
      level: 'Advanced',
      maxStudents: 6,
      image: 'https://images.pexels.com/photos/1263345/pexels-photo-1263345.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  private schedules: Schedule[] = [
    { id: '1', service: 'Clases Individuales', dayOfWeek: 'Lunes', time: '08:00 - 08:45', instructor: 'Carlos Mendoza', availableSpots: 1, totalSpots: 1 },
    { id: '2', service: 'Clases Grupales', dayOfWeek: 'Lunes', time: '09:00 - 10:00', instructor: 'María López', availableSpots: 3, totalSpots: 6 },
    { id: '3', service: 'Natación Infantil', dayOfWeek: 'Martes', time: '16:00 - 16:30', instructor: 'Ana García', availableSpots: 2, totalSpots: 4 },
    { id: '4', service: 'Aqua Fitness', dayOfWeek: 'Miércoles', time: '18:00 - 18:45', instructor: 'Roberto Silva', availableSpots: 5, totalSpots: 8 },
    { id: '5', service: 'Perfeccionamiento Técnico', dayOfWeek: 'Jueves', time: '19:00 - 20:00', instructor: 'Carlos Mendoza', availableSpots: 1, totalSpots: 4 },
    { id: '6', service: 'Preparación Competitiva', dayOfWeek: 'Viernes', time: '20:00 - 21:30', instructor: 'María López', availableSpots: 2, totalSpots: 6 }
  ];

  private pricingPlans: PricingPlan[] = [
    {
      id: '1',
      name: 'Plan Básico',
      price: 45000,
      duration: 'mensual',
      sessionsPerWeek: 1,
      features: [
        '4 clases por mes',
        'Acceso a piscina durante clases',
        'Instructor certificado',
        'Evaluación inicial gratuita'
      ]
    },
    {
      id: '2',
      name: 'Plan Estándar',
      price: 75000,
      duration: 'mensual',
      sessionsPerWeek: 2,
      isPopular: true,
      features: [
        '8 clases por mes',
        'Acceso a piscina durante clases',
        'Instructor certificado',
        'Evaluación inicial y seguimiento',
        'Material de apoyo incluido',
        '10% descuento en clases adicionales'
      ]
    },
    {
      id: '3',
      name: 'Plan Premium',
      price: 120000,
      duration: 'mensual',
      sessionsPerWeek: 3,
      features: [
        '12 clases por mes',
        'Acceso libre a piscina',
        'Instructor personal disponible',
        'Evaluación y plan personalizado',
        'Material de apoyo incluido',
        'Acceso a todas las clases grupales',
        '20% descuento en servicios adicionales',
        'Consulta nutricional incluida'
      ]
    }
  ];

  private contactInfo: ContactInfo = {
    phone: '+56 9 8765 4321',
    email: 'info@salmonswim.cl',
    whatsapp: '+56 9 8765 4321',
    address: 'Av. Las Condes 1234, Las Condes, Santiago',
    socialMedia: {
      instagram: '@salmonswim',
      facebook: 'SalmonSwim'
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

  getServices(): Observable<SwimmingServiceModel[]> {
    return of(this.services);
  }

  getSchedules(): Observable<Schedule[]> {
    return of(this.schedules);
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