import React from 'react';
import { Users, MapPin, PhoneCall, ArrowRight, MessageSquare } from 'lucide-react';
import { PHONE_DIAL_URL, WHATSAPP_BASE_URL, GOOGLE_MAPS_SEARCH_URL } from '../data/clinicData';

interface QuickInfoCardsProps {
  onBookClick: () => void;
}

export const QuickInfoCards: React.FC<QuickInfoCardsProps> = ({ onBookClick }) => {
  return (
    <section className="py-8 bg-[#F5F8FA] border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Family Healthcare */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-[#087F8C]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EAF8F6] text-[#087F8C] flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#15324B] tracking-tight mb-2">
                Family Healthcare
              </h3>
              <p className="text-sm text-[#607080] leading-relaxed mb-4">
                Compassionate outpatient consultations for adults, seniors, and children. Dedicated to everyday general health assessments in our local neighborhood.
              </p>
            </div>
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F8C] hover:text-[#066772] transition-colors group mt-2 pt-2 border-t border-slate-100"
            >
              <span>Request consultation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Card 2: Clinic Location */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-[#087F8C]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EAF8F6] text-[#087F8C] flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#15324B] tracking-tight mb-2">
                Clinic Location
              </h3>
              <p className="text-sm text-[#607080] leading-relaxed mb-4">
                Conveniently situated on Main Street, Qadri Colony, near Bhola Chowk, Walton Road, Lahore. Accessible for nearby residential communities.
              </p>
            </div>
            <a
              href={GOOGLE_MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F8C] hover:text-[#066772] transition-colors group mt-2 pt-2 border-t border-slate-100"
            >
              <span>View on Google Maps</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Card 3: Appointment Assistance */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-[#087F8C]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EAF8F6] text-[#087F8C] flex items-center justify-center mb-5">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#15324B] tracking-tight mb-2">
                Appointment Assistance
              </h3>
              <p className="text-sm text-[#607080] leading-relaxed mb-4">
                Call or WhatsApp our desk directly at <span className="font-semibold text-[#15324B]">0332 3513316</span> to inquire about same-day queue status or evening consultation slots.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-2 pt-2 border-t border-slate-100">
              <a
                href={PHONE_DIAL_URL}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F8C] hover:text-[#066772] transition-colors"
              >
                <span>Call Clinic</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
