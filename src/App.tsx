/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickInfoCards } from './components/QuickInfoCards';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TimingsSection } from './components/TimingsSection';
import { AppointmentBooking } from './components/AppointmentBooking';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ClinicAdminModal } from './components/ClinicAdminModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { DEFAULT_CLINIC_INFO, CLINIC_TIMINGS, PHONE_DIAL_URL, WHATSAPP_BASE_URL } from './data/clinicData';
import { ClinicInfo, MedicalService } from './types';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

const STORAGE_KEY = 'dr_mursleen_clinic_info_v1';

export default function App() {
  const [clinicInfo, setClinicInfo] = useState<ClinicInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load clinic info from storage', e);
    }
    return DEFAULT_CLINIC_INFO;
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('');

  const handleSaveClinicInfo = (updated: ClinicInfo) => {
    setClinicInfo(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save clinic info', e);
    }
  };

  const handleResetClinicInfo = () => {
    setClinicInfo(DEFAULT_CLINIC_INFO);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear clinic info', e);
    }
  };

  const scrollToAppointment = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceTitle(serviceTitle);
    }
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: MedicalService) => {
    scrollToAppointment(service.title);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FA] text-[#15324B] antialiased selection:bg-[#EAF8F6] selection:text-[#087F8C]">
      {/* Header */}
      <Header
        onBookClick={() => scrollToAppointment()}
        onAdminClick={() => setIsAdminOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onBookClick={() => scrollToAppointment()} />

        {/* Quick Information Cards */}
        <QuickInfoCards onBookClick={() => scrollToAppointment()} />

        {/* About the Clinic */}
        <AboutSection
          clinicInfo={clinicInfo}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* Proposed Medical Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Appointment Booking Form */}
        <AppointmentBooking initialServiceTitle={selectedServiceTitle} />

        {/* Clinic Timings */}
        <TimingsSection
          timings={CLINIC_TIMINGS}
          onBookClick={() => scrollToAppointment()}
        />

        {/* Location & Directions */}
        <LocationSection />

        {/* Contact Section */}
        <ContactSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Mobile Floating Action Bar for rapid access */}
      <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-lg flex items-center justify-around gap-2">
        <a
          href={PHONE_DIAL_URL}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-[11px] font-semibold text-[#15324B] bg-slate-50 border border-slate-200/80 active:bg-slate-100"
        >
          <Phone className="w-4 h-4 text-[#087F8C] mb-0.5" />
          <span>Call Desk</span>
        </a>
        <a
          href={WHATSAPP_BASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 active:bg-emerald-100"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>
        <button
          onClick={() => scrollToAppointment()}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-[11px] font-semibold text-white bg-[#087F8C] active:bg-[#066772] shadow-xs"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span>Book</span>
        </button>
      </div>

      {/* Modals */}
      <ClinicAdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        clinicInfo={clinicInfo}
        onSave={handleSaveClinicInfo}
        onReset={handleResetClinicInfo}
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
