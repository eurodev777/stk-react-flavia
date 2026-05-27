export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  iconName: string; // Lucide icon name
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: "clinical" | "detail" | "reception";
  description: string;
}

export interface ClinicInfo {
  name: string;
  title: string;
  crp: string;
  address: string;
  complement: string;
  cep: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  whatsappUrl: string;
  instagramUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface EPDSOption {
  text: string;
  score: number;
}

export interface EPDSQuestion {
  id: number;
  questionText: string;
  options: EPDSOption[];
  tip: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestResult {
  score: number;
  riskLevel: "low" | "moderate" | "high";
  title: string;
  explanation: string;
  recommendation: string;
  hasRiskOfSelfHarm: boolean;
}

export interface AppointmentDraft {
  serviceId: string;
  period: "morning" | "afternoon" | "night" | "";
  name: string;
  isFirstTime: boolean;
  messageText: string;
}
