export interface SwimmingServiceModel {
  id: string;
  name: string;
  description?: string;
  fullDescription?: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  maxStudents: number;
  image: string;
  isDisabled?: boolean;
}

export interface Schedule {
  id: string;
  service: string;
  dayOfWeek: string;
  time: string;
  instructor: string;
  availableSpots: number;
  totalSpots: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  isPopular?: boolean;
  sessionsPerWeek: number;
  isDisabledBtn?: boolean;
  description?: string;
  fullDescription?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  socialMedia: {
    instagram: string;
    facebook: string;
  };
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
}
