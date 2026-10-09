import { ClinicInfo, ClinicTiming, MedicalService, FAQItem } from '../types';

export const DEFAULT_CLINIC_INFO: ClinicInfo = {
  name: 'Dr. Mursleen Clinic',
  doctorName: 'Dr. Mursleen Ali',
  doctorNameStatus: 'provisional', // confirm with clinic before publishing
  category: 'General / Family Practice',
  addressLine1: 'Main Street, Qadri Colony',
  addressLandmark: 'Near Bhola Chowk',
  addressRoad: 'Walton Road',
  city: 'Lahore',
  province: 'Punjab',
  country: 'Pakistan',
  phoneRaw: '03323513316',
  phoneFormatted: '+92 332 3513316',
  whatsappRaw: '923323513316',
  whatsappFormatted: '+92 332 3513316',
  qualifications: 'MBBS / General Practice (Pending official clinic verification)',
  qualificationsVerified: false,
  registrationNumber: 'PMDC Registration (Pending official verification)',
  registrationVerified: false,
  experienceYears: 'General Family Practice in Lahore',
  experienceVerified: false,
  languages: ['Urdu', 'Punjabi', 'English'],
  languagesVerified: true,
  bioNotes: 'Providing dedicated family healthcare consultations and primary medical advisory for neighborhood residents in Qadri Colony and Walton Road, Lahore.'
};

export const CLINIC_TIMINGS: ClinicTiming[] = [
  { day: 'Monday', time: '7:00 PM – 11:00 PM', dayIndex: 1 },
  { day: 'Tuesday', time: '7:00 PM – 11:00 PM', dayIndex: 2 },
  { day: 'Wednesday', time: '7:00 PM – 11:00 PM', dayIndex: 3 },
  { day: 'Thursday', time: '7:00 PM – 11:00 PM', dayIndex: 4 },
  { day: 'Friday', time: '7:00 PM – 11:00 PM', dayIndex: 5 },
  { day: 'Saturday', time: '7:00 PM – 11:30 PM', dayIndex: 6 },
  { day: 'Sunday', time: '6:30 PM – 11:00 PM', dayIndex: 0 },
];

export const PROPOSED_SERVICES: MedicalService[] = [
  {
    id: 'general-consultation',
    title: 'General Medical Consultation',
    category: 'Primary Care',
    shortDescription: 'Comprehensive outpatient medical evaluations for common acute health complaints, infections, and general medical advice.',
    suitableFor: 'Adults and seniors seeking outpatient medical guidance',
    iconName: 'Stethoscope',
    provisionalNote: 'Proposed service category — confirm specific clinical scope with clinic'
  },
  {
    id: 'family-healthcare',
    title: 'Family Healthcare',
    category: 'Family Practice',
    shortDescription: 'Continuous, coordinated primary medical care and routine evaluations tailored for all members of the household.',
    suitableFor: 'Individuals and families seeking routine healthcare oversight',
    iconName: 'Users',
    provisionalNote: 'Subject to clinic confirmation'
  },
  {
    id: 'childrens-healthcare',
    title: "Children's Healthcare",
    category: 'Pediatric Care',
    shortDescription: 'General outpatient assessment for seasonal childhood illnesses, fever management, and basic pediatric health guidance.',
    suitableFor: 'Children requiring general primary care consultation',
    iconName: 'Smile',
    provisionalNote: 'Non-emergency primary care only; consult clinic for pediatric scope'
  },
  {
    id: 'blood-pressure-assessment',
    title: 'Blood Pressure Assessment',
    category: 'Cardiovascular Care',
    shortDescription: 'Routine blood pressure measurements, lifestyle guidance, and periodic tracking for hypertensive patients.',
    suitableFor: 'Patients requiring routine blood pressure tracking and guidance',
    iconName: 'Activity',
    provisionalNote: 'Screening and monitoring advice — emergency cases must visit ER'
  },
  {
    id: 'diabetes-consultation',
    title: 'Diabetes Consultation',
    category: 'Metabolic Health',
    shortDescription: 'General outpatient consultations on blood glucose tracking, lifestyle habits, and routine diabetic management advice.',
    suitableFor: 'Patients managing diabetes or prediabetes',
    iconName: 'HeartPulse',
    provisionalNote: 'Routine consultative guidance only'
  },
  {
    id: 'preventive-health',
    title: 'Preventive Health Advice',
    category: 'Wellness & Prevention',
    shortDescription: 'Guidance on seasonal health precautions, nutrition basics, and preventive strategies to maintain everyday wellness.',
    suitableFor: 'Proactive individuals aiming to maintain overall wellness',
    iconName: 'ShieldCheck',
    provisionalNote: 'Educational and preventive medical counsel'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How can I request an appointment?',
    answer: 'You can submit an appointment request using our online booking form on this website or by sending a direct WhatsApp message to +92 332 3513316. Our clinic staff will review current patient volume and respond to confirm available timing slots.',
    category: 'Appointments'
  },
  {
    id: 'faq-2',
    question: 'Where is Dr. Mursleen Clinic located?',
    answer: 'The clinic is located on Main Street in Qadri Colony, near Bhola Chowk, Walton Road, Lahore, Punjab, Pakistan. It is easily accessible from Walton Road and adjacent neighborhoods in Lahore.',
    category: 'Location'
  },
  {
    id: 'faq-3',
    question: 'What are the clinic hours?',
    answer: 'Provisional operating hours are Monday through Friday from 7:00 PM to 11:00 PM, Saturday from 7:00 PM to 11:30 PM, and Sunday from 6:30 PM to 11:00 PM. Because timings may adjust due to patient demand or hospital duties, we strongly recommend calling 0332 3513316 prior to your visit.',
    category: 'Timings'
  },
  {
    id: 'faq-4',
    question: 'How can I contact the clinic directly?',
    answer: 'You can reach us by telephone at 0332 3513316 or via WhatsApp at +92 332 3513316. You may also click the "Call Now" or "Chat on WhatsApp" buttons available throughout this website.',
    category: 'Contact'
  },
  {
    id: 'faq-5',
    question: 'Which services are available at the clinic?',
    answer: 'Dr. Mursleen Clinic offers general outpatient medical consultations, family health assessments, pediatric evaluations, blood pressure checks, and diabetes consultations. Please note that the clinic provides primary outpatient care and does not provide emergency trauma services.',
    category: 'Services'
  }
];

export const GOOGLE_MAPS_SEARCH_URL = 'https://www.google.com/maps/search/?api=1&query=Dr+Mursleen+Clinic+Qadri+Colony+Walton+Road+Lahore';
export const PHONE_DIAL_URL = 'tel:+923323513316';
export const WHATSAPP_BASE_URL = 'https://wa.me/923323513316';

export function createWhatsAppAppointmentUrl(patientName: string, date: string, time: string): string {
  const text = `Assalam-o-Alaikum, I would like to ask about an appointment at Dr. Mursleen Clinic. Name: ${patientName || '[Name]'}. Preferred date: ${date || '[Date]'}. Preferred time: ${time || '[Time]'}. Please let me know the available timings.`;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
}

export function createWhatsAppInquiryUrl(message: string): string {
  const text = `Assalam-o-Alaikum Dr. Mursleen Clinic, ${message}`;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
}
