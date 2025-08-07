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
      name: 'Natacion adultos',
      description: 'Natacion para papas y adultos que quieren mejorar su condicion fisica',
      fullDescription: `Natación especialmente diseñada para papás y adultos que buscan mejorar su condición física y salud acuática.
        Ideal tanto para quienes se inician como para quienes regresan al agua tras años de inactividad.
        Trabajamos técnica de brazada, respiración y postura corporal con ejercicios progresivos.
        Las clases combinan trabajo cardiovascular con entrenamiento de fuerza específico en agua.
        Ambiente motivador para entrenar en grupo con instructores certificados.
        Se incluyen ejercicios de flotación, deslizamiento y nado continuo adaptado al nivel de cada adulto.
        Opción de clases grupales o privadas según preferencia y ritmo de progreso.`,
      duration: '60 min',
      level: 'All Levels',
      maxStudents: 12,
      image: 'public/img/3.jpg',
      isDisabled: false
    },
    {
      id: '2',
      name: 'Rama intermedio y avanzado',
      description: 'Entrena aprende y comparte formando equipo en grupo con máximo 12 estudiantes por pista',
      fullDescription: `Pensada para quienes ya dominan técnica básica y desean llevar su natación al siguiente nivel.
        Se enfoca en entrenamiento estructurado en equipo, ideal para triatletas y entusiastas fitness.
        Grupos reducidos (máximo 12 nadadores por pista) para atención técnica personalizada.
        Mejoras en brazada (crawl, espalda, braza y mariposa) y respiración rítmica.
        Ejercicios en intervalos, resistencia, velocidad y técnica con corrección constante.
        Incluye análisis de estilo, feedback individualizado y uso de snorkel técnico.
        Entrenadores certificados, experiencia en entrenamiento competitivo y triatlón. Ideal para fortalecer técnica, rendimiento y resistencia acuática.`,
      duration: '60 min',
      level: 'Beginner',
      maxStudents: 12,
      image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800',
      isDisabled: false
    },
    {
      id: '3',
      name: 'Natación infantil Pre rama',
      description: 'Clases especializadas para niños de 3 a 6 años',
      fullDescription: `Clases especializadas para niños de 3 a 6 años diseñadas para su desarrollo motor y acuático.
        Enfoque lúdico y progresivo: adaptamos juegos y actividades al aprendizaje acuático.
        Objetivos: entrada segura a la piscina, respiración, flotación y deslizamiento.
        Maestro guía junto al niño, fomentando confianza y familiaridad con el agua.
        Grupos muy reducidos y alta tasa de atención individual para seguridad y evolución.
        Promovemos habilidades como inmersión facial, salidas y habilidades motrices acuáticas.
        Transición suave al programa intermedio cuando ya dominan los básicos de forma autónoma.
        Apoyamos el gusto por el agua mediante juegos grupales y canciones en piscina`,
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
      fullDescription: `Sesiones especializadas para formar competencias en seguridad acuática y rescate.
        Incluyen técnicas de salvamento, reanimación cardiopulmonar (RCP) y uso seguro de snorkel.
        Orientadas tanto a adultos como a padres interesados en seguridad y primeros auxilios.
        Monitores certificados en RCP, DEA y primeros auxilios aplicados al entorno acuático Uso práctico de snorkel:
        cómo usarlo, vaciarlo y mejorar técnica de respiración frontal y alineación Pequeñas clases prácticas y
        teóricas para reforzar confianza en emergencias. Ideal para familias, entrenadores y nadadores que desean ser
        auto‑suficientes y seguros. Se entregan guías de seguridad acuática y ejercicios para practicar fuera de la piscina.`,
      duration: '45 min',
      level: 'All Levels',
      maxStudents: 15,
      image: 'public/img/5.jpg',
      isDisabled: false
    },
    {
      id: '5',
      name: 'Natacion para niños neurodivergentes',
      description: 'Natacion para papas y adultos que quieren mejorar su condicion fisica',
      fullDescription: `Programa inclusivo diseñado para niños dentro del espectro autista u otras condiciones neurodiversas.
        Clases adaptadas considerando necesidades sensoriales, motrices y comunicativas Plan personalizado tras reunión previa con padres para entender preferencias, temores y objetivos.
        Enseñanza flexible con apoyos visuales, rutinas predecibles y ambiente tranquilo.
        Instructor escogido según perfil adecuado (tono, voz, género, estilo) para generar confianza Objetivos: seguridad en el agua, flotación, inmersión gradual, independencia y disfrute.
        Progreso medido en base a metas individuales: independencia, control respiratorio, desplazamiento.
        Transición gradual al programa general cuando el niño esté listo en habilidades y seguridad.`,
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
      fullDescription: `Entrenamiento intensivo para adultos desde nivel iniciación hasta triatletas.
        Clases programadas de 3 a 5 veces por semana, con enfoque en ritmo, técnica y resistencia.
        Sesiones con series estructuradas en piscina larga y corta, entrenamiento de velocidad y umbral.
        Incluye trabajo técnico específico: patada, brazadas técnicas, virajes y salidas competitivas.
        Ideal para triatletas que se preparan para eventos Ironman, medio Ironman o pruebas de natación largas Monitores con experiencia en entrenamiento de alto rendimiento.
        Evaluaciones periódicas y ajustes en plan según progreso, fuerza y objetivos personales.
        Ambiente motivante con comunidad de nadadores avanzados y apoyo constante.`,
      duration: '60 min',
      level: 'All Levels',
      maxStudents: 12,
      image: 'public/img/6.png',
      isDisabled: false
    }
  ];

  private schedules: Schedule[] = [
    { id: '1', service: 'Rama intermedio y avanzado', dayOfWeek: 'Lunes', time: '18:15 - 19:15', instructor: 'Juan Carlos Ramirez', availableSpots: 1, totalSpots: 1 },
    { id: '2', service: 'Rama intermedio y avanzado', dayOfWeek: 'Martes', time: '18:15 - 19:15', instructor: 'Juan Carlos Ramirez', availableSpots: 1, totalSpots: 1 },
    { id: '3', service: 'Rama intermedio y avanzado', dayOfWeek: 'Miércoles', time: '18:15 - 19:15', instructor: 'Juan Carlos Ramirez', availableSpots: 1, totalSpots: 1 },
    { id: '4', service: 'Rama intermedio y avanzado', dayOfWeek: 'Viernes', time: '17:00 - 18:00', instructor: 'Juan Carlos Ramirez', availableSpots: 1, totalSpots: 1 },
    { id: '5', service: 'Natación infantil Pre rama', dayOfWeek: 'Miércoles', time: '17:45 - 18:40', instructor: 'Carla Carmona', availableSpots: 3, totalSpots: 6 },
    { id: '6', service: 'Natación infantil Pre rama', dayOfWeek: 'Viernes', time: '16:45 - 17:40', instructor: 'Carla Carmona', availableSpots: 3, totalSpots: 6 },
    { id: '7', service: 'Clinicas y talleres', dayOfWeek: 'Miércoles', time: '18:15 - 20:00', instructor: 'Carla Carmona', availableSpots: 2, totalSpots: 4 },
    { id: '8', service: 'Natacion para niños neurodivergentes', dayOfWeek: 'Miércoles', time: '7:45 - 18:40', instructor: 'Carla Carmona', availableSpots: 5, totalSpots: 8 },
    { id: '9', service: 'Natacion para niños neurodivergentes', dayOfWeek: 'Viernes', time: '16:45 - 17:40', instructor: 'Carla Carmona', availableSpots: 5, totalSpots: 8 },
    { id: '10', service: 'Natacion master', dayOfWeek: 'Lunes', time: '20:00 - 21:00', instructor: 'Juan Carlos Ramirez', availableSpots: 2, totalSpots: 6 },
    { id: '11', service: 'Natacion master', dayOfWeek: 'Martes', time: '20:00 - 21:00', instructor: 'Juan Carlos Ramirez', availableSpots: 2, totalSpots: 6 },
    { id: '12', service: 'Natacion master', dayOfWeek: 'Miércoles', time: '20:00 - 21:00', instructor: 'Juan Carlos Ramirez', availableSpots: 2, totalSpots: 6 },
    { id: '13', service: 'Natacion adultos', dayOfWeek: 'Lunes', time: '17:00 - 18:00', instructor: 'Juan Carlos Ramirez', availableSpots: 2, totalSpots: 6 }
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
      fullDescription: `El Plan Básico está diseñado para quienes recién comienzan en la natación o desean mantener una rutina ligera.
        Incluye una clase semanal (4 clases al mes) con instructores certificados, en grupos pequeños y con acceso a la piscina solo durante el horario de clase.
        Ideal para niños en nivel inicial, adultos que desean retomar el deporte o quienes buscan mejorar confianza en el agua.
        Incluye una evaluación inicial gratuita para identificar tu nivel y objetivos personales.
        Las sesiones están estructuradas para desarrollar habilidades básicas: flotación, respiración y desplazamiento.
        Perfecto si tienes poco tiempo o prefieres avanzar de manera gradual.`,
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
      fullDescription: `
        El Plan Estándar es ideal para quienes desean un progreso más constante en su entrenamiento acuático.
        Incluye dos clases semanales (8 al mes), lo que permite reforzar habilidades y mejorar condición física en menor tiempo.
        Acceso a la piscina durante las sesiones con instructores certificados, en grupos dinámicos y motivadores.
        Perfecto para niños, adultos y adolescentes que se encuentran en etapa intermedia o quieren avanzar con mayor ritmo.
        Incluye una evaluación inicial más seguimiento mensual personalizado, para ver avances técnicos.
        Compatible con clases infantiles, clínicas, o niveles intermedios como la rama avanzada.
        Horarios más flexibles y disponibilidad preferente en ciertos horarios.
        `,
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
      fullDescription: `
        Nuestro plan más completo, pensado para quienes quieren resultados reales y acceso total a todas las clases.
        Incluye tres sesiones semanales (12 clases al mes), con acceso libre a la piscina en horario extendido para práctica autónoma.
        Dispondrás de un instructor personal en tus clases para atención directa y entrenamiento a medida.
        Recibirás una evaluación inicial y un plan de entrenamiento personalizado basado en tus objetivos (salud, competencia, técnica, etc).
        Acceso sin restricción a todas las clases grupales disponibles: infantiles, máster, clínicas, neurodivergentes, etc.
        Recomendado para triatletas, adultos comprometidos o niños con alto potencial.
        Accede también a talleres especiales como salvamento y técnicas de respiración.
        Un plan ideal para quienes buscan disciplina, evolución técnica y comunidad activa.
        `,
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
      name: 'WebPay',
      icon: 'public/img/1.Webpay_FB_800.png',
      description: 'Visa, Mastercard, American Express'
    },
    {
      id: '2',
      name: 'Mercado Pago',
      icon: 'public/img/logo_mercado_pago_1.png',
      description: 'Paga con tu cuenta de mercado pago'
    },
    {
      id: '3',
      name: 'Khipu',
      icon: 'public/img/logo_khipu_3.png',
      description: 'Pago seguro con tu cuenta Khipu'
    },
    {
      id: '4',
      name: 'PayPal',
      icon: 'public/img/logo-paypal-1.png',
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
