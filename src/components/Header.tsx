import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ShieldAlert } from 'lucide-react';
import { PHONE_DIAL_URL } from '../data/clinicData';

interface HeaderProps {
  onBookClick: () => void;
  onAdminClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick, onAdminClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showEmergencyNotice, setShowEmergencyNotice] = useState(true);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Clinic Hours', href: '#hours' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Quiet Emergency Disclaimer Banner */}
      {showEmergencyNotice && (
        <div className="bg-[#15324B] text-white text-xs px-4 py-2 border-b border-slate-700/40">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#087F8C] shrink-0" />
              <span className="text-slate-300">
                <strong className="text-white font-medium">Medical Notice:</strong> For urgent or emergency symptoms, please call Rescue 1122 or visit an emergency room immediately. Dr. Mursleen Clinic provides scheduled outpatient family care.
              </span>
            </div>
            <button
              onClick={() => setShowEmergencyNotice(false)}
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Dismiss notice"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Sticky Header - Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark with original medical emblem */}
          <a
            href="#home"
            className="flex items-center gap-3.5 text-slate-900 group whitespace-nowrap shrink-0"
            aria-label="Dr. Mursleen Clinic Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#087F8C] flex items-center justify-center text-white shadow-xs group-hover:bg-[#066772] transition-colors">
              {/* Original clean geometric medical cross with soft leaf corner */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
                <circle cx="12" cy="12" r="9" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-40" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#15324B] group-hover:text-[#087F8C] transition-colors">
                Dr. Mursleen Clinic
              </span>
              <span className="text-xs font-normal text-slate-500 tracking-normal hidden sm:inline">
                Family & General Healthcare · Lahore
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 single-line clean navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#087F8C] transition-colors py-1 whitespace-nowrap shrink-0 hover:underline hover:underline-offset-8"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + subtle call button & mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={PHONE_DIAL_URL}
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#15324B] bg-[#F5F8FA] hover:bg-[#EAF8F6] hover:text-[#087F8C] rounded-lg border border-slate-200 transition-colors whitespace-nowrap"
              title="Call 0332 3513316"
            >
              <Phone className="w-3.5 h-3.5 text-[#087F8C]" />
              <span>+92 332 3513316</span>
            </a>

            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#087F8C] hover:bg-[#066772] active:scale-[0.98] rounded-lg shadow-sm transition-all whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-[#087F8C] hover:bg-[#EAF8F6] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={PHONE_DIAL_URL}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-[#15324B] bg-[#F5F8FA] border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#087F8C]" />
                <span>Call +92 332 3513316</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-[#087F8C] rounded-lg shadow-sm hover:bg-[#066772] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onAdminClick();
                }}
                className="text-xs text-slate-500 hover:text-slate-800 text-center py-1 underline"
              >
                Clinic Owner: Edit / Verify Placeholders
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
