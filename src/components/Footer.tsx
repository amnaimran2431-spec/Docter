import React from 'react';
import { Phone, MapPin, MessageSquare, Clock, ShieldCheck, Heart } from 'lucide-react';
import { PHONE_DIAL_URL, WHATSAPP_BASE_URL, GOOGLE_MAPS_SEARCH_URL } from '../data/clinicData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenAdmin }) => {
  return (
    <footer className="bg-[#15324B] text-slate-300 pt-16 pb-12 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700/60">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#087F8C] flex items-center justify-center text-white shadow-xs">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Dr. Mursleen Clinic
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              General and family medical practice located in Qadri Colony, Walton Road, Lahore. Dedicated to accessible primary care consultations and patient-centric healthcare guidance.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={PHONE_DIAL_URL}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#087F8C] text-white flex items-center justify-center transition-colors"
                title="Call 0332 3513316"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
                title="WhatsApp +92 332 3513316"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={GOOGLE_MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#087F8C] text-white flex items-center justify-center transition-colors"
                title="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Quick Links
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Practice</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Proposed Services</a>
              </li>
              <li>
                <a href="#hours" className="hover:text-white transition-colors">Clinic Hours</a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-white transition-colors">Book Appointment</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Location & Map</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Clinic</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#087F8C]" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Clinic Hours
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mon – Fri: 7:00 PM – 11:00 PM<br />
              Saturday: 7:00 PM – 11:30 PM<br />
              Sunday: 6:30 PM – 11:00 PM
            </p>
            <p className="text-[11px] text-amber-300">
              * Provisional listed hours. Please call 0332 3513316 before visiting to confirm today&apos;s schedule.
            </p>
            <div className="pt-2">
              <a
                href="#hours"
                className="text-xs text-[#087F8C] hover:text-[#0AA5B7] underline"
              >
                View full weekly schedule
              </a>
            </div>
          </div>

          {/* Column 4: Contact & Verification (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Direct Contact
            </span>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <p>
                <strong className="text-white block">Phone:</strong>
                <a href={PHONE_DIAL_URL} className="hover:text-white">0332 3513316</a>
              </p>
              <p>
                <strong className="text-white block">WhatsApp:</strong>
                <a href={WHATSAPP_BASE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  +92 332 3513316
                </a>
              </p>
              <p>
                <strong className="text-white block">Address:</strong>
                Main Street, Qadri Colony, Near Bhola Chowk, Walton Road, Lahore
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAdmin}
                className="text-[11px] text-slate-400 hover:text-white underline cursor-pointer"
              >
                Clinic Owner: Customize Verified Details
              </button>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer Banner */}
        <div className="pt-8 pb-6 border-b border-slate-700/40">
          <div className="bg-slate-900/60 rounded-2xl p-4 sm:p-5 border border-slate-700/60 text-xs text-slate-400 space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#087F8C]" />
              <span>Medical Disclaimer</span>
            </div>
            <p className="leading-relaxed">
              The information on this website is for general informational purposes and does not replace professional medical advice. For urgent or emergency symptoms, contact local emergency services (Rescue 1122 in Pakistan) or visit the nearest hospital emergency room.
            </p>
          </div>
        </div>

        {/* Copyright & Legal Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Dr. Mursleen Clinic. All rights reserved. Lahore, Pakistan.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors cursor-pointer underline"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <a href="#location" className="hover:text-slate-300 transition-colors">
              Directions
            </a>
            <span>·</span>
            <span className="flex items-center gap-1 text-slate-400">
              Serving Qadri Colony & Walton Road <Heart className="w-3 h-3 text-rose-400" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
