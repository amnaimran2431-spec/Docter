import React from 'react';
import { Clock, AlertTriangle, Phone, CheckCircle2, Calendar } from 'lucide-react';
import { ClinicTiming } from '../types';
import { PHONE_DIAL_URL } from '../data/clinicData';

interface TimingsSectionProps {
  timings: ClinicTiming[];
  onBookClick: () => void;
}

export const TimingsSection: React.FC<TimingsSectionProps> = ({ timings, onBookClick }) => {
  // Determine current day (0 = Sunday, 1 = Monday, etc.)
  const currentDayIndex = new Date().getDay();

  return (
    <section id="hours" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-wider text-[#087F8C] uppercase mb-2">
            Weekly Consultation Schedule
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#15324B] tracking-tight mb-4">
            Clinic Timings & Availability
          </h2>
          <p className="text-base text-[#607080]">
            Provisional evening operating hours based on public listings. Please call or WhatsApp ahead to verify doctor presence before travelling to the clinic.
          </p>
        </div>

        {/* Timings Inconsistency Warning Banner */}
        <div className="max-w-4xl mx-auto mb-10 bg-amber-50/90 border border-amber-200/90 rounded-2xl p-5 sm:p-6 text-[#15324B]">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-amber-100 text-amber-900 rounded-xl shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-bold text-amber-950">
                Notice: Hours May Change; Please Call Before Visiting
              </h3>
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                Public online listings contain inconsistent timing records for this practice. The hours below are provisional guidelines. We ask all patients to confirm current clinic timings directly with Dr. Mursleen Clinic by calling <a href={PHONE_DIAL_URL} className="font-bold underline text-amber-950 hover:text-black">0332 3513316</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Timings Table / Card View */}
        <div className="max-w-4xl mx-auto bg-[#F5F8FA] rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#087F8C]" />
              <span className="font-bold text-sm sm:text-base text-[#15324B]">Provisional Weekly Hours</span>
            </div>
            <span className="text-xs text-slate-500">
              Evening Sessions
            </span>
          </div>

          <div className="divide-y divide-slate-200/80">
            {timings.map((item) => {
              const isToday = item.dayIndex === currentDayIndex;
              return (
                <div
                  key={item.day}
                  className={`py-3.5 px-4 rounded-xl flex items-center justify-between transition-colors ${
                    isToday ? 'bg-white shadow-xs border border-[#087F8C]/30' : 'hover:bg-white/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-sm sm:text-base font-semibold ${isToday ? 'text-[#087F8C]' : 'text-[#15324B]'}`}>
                      {item.day}
                    </span>
                    {isToday && (
                      <span className="text-[11px] font-bold text-[#087F8C] bg-[#EAF8F6] px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Today
                      </span>
                    )}
                  </div>

                  <span className={`text-sm sm:text-base font-medium tabular-nums ${isToday ? 'text-[#15324B] font-bold' : 'text-[#607080]'}`}>
                    {item.time}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Quick Action Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Want to book a slot during evening hours?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={PHONE_DIAL_URL}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#15324B] bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#087F8C]" />
                <span>Call to Confirm</span>
              </a>
              <button
                type="button"
                onClick={onBookClick}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#087F8C] hover:bg-[#066772] rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Request Appointment</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
