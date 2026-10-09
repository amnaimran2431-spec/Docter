export interface ClinicInfo {
  name: string;
  doctorName: string;
  doctorNameStatus: 'provisional' | 'confirmed';
  category: string;
  addressLine1: string;
  addressLandmark: string;
  addressRoad: string;
  city: string;
  province: string;
  country: string;
  phoneRaw: string;
  phoneFormatted: string;
  whatsappRaw: string;
  whatsappFormatted: string;
  // Editable practitioner details
  qualifications: string;
  qualificationsVerified: boolean;
  registrationNumber: string;
  registrationVerified: boolean;
  experienceYears: string;
  experienceVerified: boolean;
  languages: string[];
  languagesVerified: boolean;
  bioNotes: string;
}

export interface ClinicTiming {
  day: string;
  time: string;
  dayIndex: number; // 0 for Sunday, 1 for Monday, etc.
}

export interface MedicalService {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  suitableFor: string;
  iconName: string;
  provisionalNote?: string;
}

export interface AppointmentRequest {
  patientName: string;
  contactNumber: string;
  preferredDate: string;
  preferredTime: string;
  reasonForVisit?: string;
  serviceId?: string;
}

export interface ContactInquiry {
  fullName: string;
  phoneNumber: string;
  message: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
