
export interface ContactForm {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  region: string;
  commune: string;
  paymentMethod: string;
}

export interface Country {
  name:    string;
  regions: Region[];
}

export interface Region {
  name:        string;
  romanNumber: string;
  number:      string;
  id:          string;
  communes:    Commune[];
}

export interface Commune {
  name: string;
  id:   string;
} 