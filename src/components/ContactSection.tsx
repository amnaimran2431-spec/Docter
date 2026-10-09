import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Navigation,
  User,
  Mail
} from 'lucide-react';
import { 
  PHONE_DIAL_URL, 
  WHATSAPP_BASE_URL, 
  GOOGLE_MAPS_SEARCH_URL,
  createWhatsAppInquiryUrl
} from '../data/clinicData';
import { ContactInquiry } from '../types';

export const ContactSection: React.FC = () => {
  const [inquiry, setInquiry] = useState<ContactInquiry>({
    fullName: '',
    phoneNumber: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactInquiry, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactInquiry, string>> = {};

    if (!inquiry.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!inquiry.phoneNumber.trim()) {
      errs.phoneNumber = 'Please provide a valid contact number.';
    } else if (!/^[0-9+-\s()]{7,15}$/.test(inquiry.phoneNumber.trim())) {
      errs.phoneNumber = 'Please enter a valid telephone number.';
    }

    if (!inquiry.message.trim()) {
      errs.message = 'Please provide your question or inquiry.';
    } else if (inquiry.message.trim().length < 5) {
      errs.message = 'Message must be at least 5 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const waText = `Assalam-o-Alaikum, Inquiry from ${inquiry.fullName.trim()} (${inquiry.phoneNumber.trim()}): ${inquiry.message.trim()}`;
    const url = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(waText)}`;

    setSubmitted(true);

    try {
      window.open(url, '_blank');
    } catch (e) {
      console.warn('Popup blocked', e);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#F5F8FA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-[#087F8C] uppercase mb-2">
            Direct Communications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#15324B] tracking-tight mb-4">
            Contact Dr. Mursleen Clinic
          </h2>
          <p className="text-base text-[#607080] leading-relaxed">
            Have questions regarding consultation availability, doctor schedule, or clinic directions? Reach out directly via telephone, WhatsApp, or through the contact message form below.
          </p>
        </div>

        {/* 3 Quick Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          
          <a
            href={PHONE_DIAL_URL}
            className="flex items-center justify-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-[#087F8C] hover:bg-[#EAF8F6]/30 transition-all text-[#15324B] font-semibold text-sm group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EAF8F6] text-[#087F8C] flex items-center justify-center group-hover:bg-[#087F8C] group-hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="block text-[11px] text-slate-500 font-normal">Telephone</span>
              <span>Call Now</span>
            </div>
          </a>

          <a
            href={WHATSAPP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-emerald-500 hover:bg-emerald-50/30 transition-all text-[#15324B] font-semibold text-sm group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="block text-[11px] text-slate-500 font-normal">Instant Chat</span>
              <span>Chat on WhatsApp</span>
            </div>
          </a>

          <a
            href={GOOGLE_MAPS_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-[#087F8C] hover:bg-[#EAF8F6]/30 transition-all text-[#15324B] font-semibold text-sm group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EAF8F6] text-[#087F8C] flex items-center justify-center group-hover:bg-[#087F8C] group-hover:text-white transition-colors">
              <Navigation className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="block text-[11px] text-slate-500 font-normal">Navigation</span>
              <span>Get Directions</span>
            </div>
          </a>

        </div>

        {/* Contact Details & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-[#15324B] border-b border-slate-100 pb-4">
              Clinic Contact Overview
            </h3>

            <div className="space-y-4">
              
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF8F6] text-[#087F8C] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Phone Number</span>
                  <a href={PHONE_DIAL_URL} className="text-base font-bold text-[#15324B] hover:text-[#087F8C] transition-colors">
                    0332 3513316
                  </a>
                  <p className="text-xs text-slate-500">Dial with country code: +92 332 3513316</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">WhatsApp Desk</span>
                  <a 
                    href={WHATSAPP_BASE_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-base font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    +92 332 3513316
                  </a>
                  <p className="text-xs text-slate-500">Fastest response for slot availability</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF8F6] text-[#087F8C] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Address</span>
                  <p className="text-sm font-semibold text-[#15324B]">
                    Main Street, Qadri Colony<br />
                    Near Bhola Chowk, Walton Road<br />
                    Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF8F6] text-[#087F8C] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Clinic Hours</span>
                  <p className="text-sm font-semibold text-[#15324B]">
                    Monday – Friday: 7:00 PM – 11:00 PM<br />
                    Saturday: 7:00 PM – 11:30 PM<br />
                    Sunday: 6:30 PM – 11:00 PM
                  </p>
                  <p className="text-[11px] text-amber-700 mt-1 font-medium">
                    (Provisional — please call before visiting)
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            
            <h3 className="text-xl font-bold text-[#15324B] mb-2">
              Send an Inquiry Message
            </h3>
            <p className="text-xs sm:text-sm text-[#607080] mb-6">
              Fill out the form below. For immediate timing confirmation, submissions will bridge directly to WhatsApp.
            </p>

            {submitted ? (
              <div className="p-6 bg-[#EAF8F6] rounded-2xl border border-[#087F8C]/30 text-center space-y-4">
                <div className="w-12 h-12 bg-white text-[#087F8C] rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#15324B]">
                  Inquiry Dispatched
                </h4>
                <p className="text-xs sm:text-sm text-[#607080] max-w-md mx-auto">
                  Thank you, <strong className="text-slate-800">{inquiry.fullName}</strong>. Your inquiry has been forwarded to our WhatsApp clinic line (+92 332 3513316). We will reply during clinic operating hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setInquiry({ fullName: '', phoneNumber: '', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-[#087F8C] bg-white border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div>
                  <label htmlFor="contactFullName" className="block text-xs font-semibold text-[#15324B] uppercase tracking-wider mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="contactFullName"
                      type="text"
                      value={inquiry.fullName}
                      onChange={(e) => setInquiry({ ...inquiry, fullName: e.target.value })}
                      placeholder="e.g. Usman Tariq"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-[#15324B] focus:outline-hidden focus:ring-2 focus:ring-[#087F8C]/20 transition-all ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-white focus:border-[#087F8C]'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-xs font-semibold text-[#15324B] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="contactPhone"
                      type="tel"
                      value={inquiry.phoneNumber}
                      onChange={(e) => setInquiry({ ...inquiry, phoneNumber: e.target.value })}
                      placeholder="e.g. 0332 3513316"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-[#15324B] focus:outline-hidden focus:ring-2 focus:ring-[#087F8C]/20 transition-all ${
                        errors.phoneNumber ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-white focus:border-[#087F8C]'
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && <p className="text-xs text-red-600 mt-1">{errors.phoneNumber}</p>}
                </div>

                <div>
                  <label htmlFor="contactMessage" className="block text-xs font-semibold text-[#15324B] uppercase tracking-wider mb-1.5">
                    Your Question / Inquiry <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contactMessage"
                    rows={4}
                    value={inquiry.message}
                    onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                    placeholder="Ask about consultation timing, specific fee schedules, or clinic directions..."
                    className={`w-full p-3.5 rounded-xl border text-sm text-[#15324B] focus:outline-hidden focus:ring-2 focus:ring-[#087F8C]/20 transition-all resize-none ${
                      errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-white focus:border-[#087F8C]'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-white font-semibold text-sm bg-[#087F8C] hover:bg-[#066772] active:scale-[0.99] shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp Desk</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
