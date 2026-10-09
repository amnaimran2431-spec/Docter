import React from 'react';
import { Calendar, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { PHONE_DIAL_URL, WHATSAPP_BASE_URL } from '../data/clinicData';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-white">
      {/* Soft mint subtle background glow */}
      <div className="absolute top-0 right-0 -z-10 w-full lg:w-1/2 h-full bg-[#EAF8F6]/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clinic Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            
            {/* Small label: Unboxed clean metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#087F8C] uppercase mb-4">
              <span>Your Local Family Clinic</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 font-medium normal-case tracking-normal">Qadri Colony, Walton Road, Lahore</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#15324B] tracking-tight leading-[1.15] text-balance mb-6">
              Personalized Healthcare for Your Family
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#607080] leading-relaxed max-w-2xl mb-8">
              Connect with our clinic for information about consultations, clinic timings, and appointment availability. Dedicated outpatient primary care serving the neighborhood community.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#087F8C] hover:bg-[#066772] active:scale-[0.98] rounded-xl shadow-sm transition-all whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={PHONE_DIAL_URL}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#15324B] bg-[#F5F8FA] hover:bg-[#EAF8F6] hover:text-[#087F8C] border border-slate-200 rounded-xl transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#087F8C] shrink-0" />
                <span>Call the Clinic</span>
              </a>

              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-[#087F8C] hover:bg-[#EAF8F6] rounded-xl transition-colors whitespace-nowrap"
                title="Message on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust & Location Snapshot Strip */}
            <div className="pt-6 border-t border-slate-200/80 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#087F8C] mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-[#15324B] block">Clinic Location</span>
                  <span className="text-slate-500">Qadri Colony, near Bhola Chowk, Walton Road</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#087F8C] mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-[#15324B] block">Evening Consultations</span>
                  <span className="text-slate-500">Provisional: 7:00 PM – 11:00 PM (Call first)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Healthcare Photo in Consultation Room */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Soft mint backdrop panel with rounded edges */}
              <div className="absolute -inset-3 sm:-inset-4 bg-[#EAF8F6] rounded-3xl -rotate-1 -z-10" />

              {/* Decorative clean medical cross motif in corner */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-[#087F8C] z-10">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 6v12M6 12h12" />
                </svg>
              </div>

              {/* Consultation Room Image */}
              <div className="overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-md">
                <img
                  src="/src/assets/images/doctor_consultation_room_1791517674376.jpg"
                  alt="Doctor consulting a patient in a bright, modern medical consultation room"
                  referrerPolicy="no-referrer"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center"
                />
              </div>

              {/* Realistic caption & clarification box */}
              <div className="mt-3 px-3 py-2 bg-white/90 backdrop-blur-xs rounded-lg border border-slate-200 text-[11px] text-[#607080] leading-tight flex items-center justify-between gap-2">
                <span>
                  Doctor in consultation room. Illustrative representation. Verify credentials directly with clinic.
                </span>
                <span className="text-[#087F8C] font-semibold whitespace-nowrap shrink-0">
                  Qadri Colony
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
