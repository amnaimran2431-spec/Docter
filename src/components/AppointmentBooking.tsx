import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { createWhatsAppAppointmentUrl } from '../data/clinicData';
import { AppointmentRequest } from '../types';

interface AppointmentBookingProps {
  initialServiceTitle?: string;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({ initialServiceTitle }) => {
  const [formData, setFormData] = useState<AppointmentRequest>({
    patientName: '',
    contactNumber: '',
    preferredDate: '',
    preferredTime: '08:00 PM',
    reasonForVisit: initialServiceTitle ? `Consultation regarding ${initialServiceTitle}` : '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentRequest, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  // Update reason if initialServiceTitle changes
  React.useEffect(() => {
    if (initialServiceTitle) {
      setFormData(prev => ({
        ...prev,
        reasonForVisit: `Consultation regarding ${initialServiceTitle}`
      }));
    }
  }, [initialServiceTitle]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AppointmentRequest, string>> = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Please enter the patient name.';
    } else if (formData.patientName.trim().length < 2) {
      newErrors.patientName = 'Name must be at least 2 characters.';
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Please provide a contact phone number.';
    } else if (!/^[0-9+-\s()]{7,15}$/.test(formData.contactNumber.trim())) {
      newErrors.contactNumber = 'Please enter a valid phone number (e.g. 0332 3513316).';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred evening time.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Prepare WhatsApp URL
    const url = createWhatsAppAppointmentUrl(
      formData.patientName.trim(),
      formData.preferredDate,
      formData.preferredTime
    );
    setGeneratedWhatsAppUrl(url);

    // Short processing delay for realistic UX
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      // Attempt to open WhatsApp in a new tab
      try {
        window.open(url, '_blank');
      } catch (err) {
        console.warn('Popup blocked, fallback provided via action button', err);
      }
    }, 450);
  };

  const handleReset = () => {
    setSubmissionSuccess(false);
    setFormData({
      patientName: '',
      contactNumber: '',
      preferredDate: '',
      preferredTime: '08:00 PM',
      reasonForVisit: '',
    });
    setErrors({});
  };

  // Get tomorrow's date as min
  const todayStr = new Date().toISOString().split('T')[0];

  const timeOptions = [
    '07:00 PM',
    '07:30 PM',
    '08:00 PM',
    '08:30 PM',
    '09:00 PM',
    '09:30 PM',
    '10:00 PM',
    '10:30 PM',
  ];

  return (
    <section id="appointment" className="py-16 lg:py-24 bg-[#F5F8FA] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-wider text-[#087F8C] uppercase mb-2">
            Schedule a Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#15324B] tracking-tight mb-3">
            Appointment Request Form
          </h2>
          <p className="text-sm sm:text-base text-[#607080] max-w-xl mx-auto">
            Submit your desired appointment details. We will prepare your request message and connect directly with our clinic desk on WhatsApp to confirm timing availability.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          
          {submissionSuccess ? (
            /* Success State */
            <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-[#EAF8F6] text-[#087F8C] rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#15324B]">
                  Appointment Request Ready
                </h3>
                <p className="text-sm text-[#607080] max-w-md mx-auto leading-relaxed">
                  Your request has been formulated. Please click the button below to send it to <strong className="text-slate-800">Dr. Mursleen Clinic (+92 332 3513316)</strong> on WhatsApp to verify slot availability.
                </p>
              </div>

              {/* Prepared Message Preview Box */}
              <div className="bg-[#F5F8FA] rounded-2xl p-5 border border-slate-200 text-left max-w-lg mx-auto text-xs sm:text-sm text-slate-700 font-mono space-y-2">
                <div className="text-[11px] font-sans font-semibold text-slate-400 uppercase tracking-wider">
                  Prepared WhatsApp Message:
                </div>
                <p className="bg-white p-3 rounded-xl border border-slate-200/60 leading-relaxed font-sans text-slate-800">
                  &ldquo;Assalam-o-Alaikum, I would like to ask about an appointment at Dr. Mursleen Clinic. Name: <span className="font-semibold">{formData.patientName}</span>. Preferred date: <span className="font-semibold">{formData.preferredDate}</span>. Preferred time: <span className="font-semibold">{formData.preferredTime}</span>. Please let me know the available timings.&rdquo;
                </p>
              </div>

              {/* Clarity Notice */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-900 max-w-lg mx-auto flex items-start gap-2 text-left">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Important Notice:</strong> This request does not guarantee an immediate confirmed booking. The clinic staff will respond on WhatsApp to confirm the specific token number and doctor availability.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp (+92 332 3513316)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm rounded-xl transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Patient Name */}
                <div>
                  <label htmlFor="patientName" className="block text-xs font-semibold text-[#15324B] uppercase tracking-wider mb-2">
                    Patient Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="patientName"
                      type="text"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      placeholder="e.g. Muhammad Ali"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#15324B] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#087F8C]/20 transition-all ${
                        errors.patientName ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-white focus:border-[#087F8C]'
                      }`}
                    />
                  </div>
                  {errors.patientName && (
                    <p className="text-xs text-red-600 mt-1.5">{errors.patientName}</p>
                  )}
                </div>

                {/* Contact Number */}
                <div>
                  <label htmlFor="contactNumber" className="block text-xs font-semibold text-[#15324B] uppercase tracking-wider mb-2">
                    Contact Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="contactNumber"
                      type="tel"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      placeholder="e.g. 0332 3513316"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#15324B] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#087F8C]/20 transition-all ${
                        errors.contactNumber ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-white focus:border-[#087F8C]'
                      }`}
                    />
                  </div>
                  {errors.contactNumber && (
                    <p className="text-xs text-red-600 mt-1.5">{errors.contactNumber}</p>
                  )}
                </div>

                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#15324B] uppercase tracking-wider mb-2">
                    Preferred Appointment Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <CalendarIcon className="w-4 h-4" />
                    </div>
                    <input
                      id="preferredDate"
                      type="date"
                      min={todayStr}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#15324B] focus:outline-hidden focus:ring-2 focus:ring-[#087F8C]/20 transition-all ${
                        errors.preferredDate ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-white focus:border-[#087F8C]'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-xs text-red-600 mt-1.5">{errors.preferredDate}</p>
                  )}
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-semibold text-[#15324B] uppercase tracking-wider mb-2">
                    Preferred Evening Slot <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#15324B] focus:outline-hidden focus:ring-2 focus:ring-[#087F8C]/20 transition-all ${
                        errors.preferredTime ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-white focus:border-[#087F8C]'
                      }`}
                    >
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>
                          {time} (Evening)
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.preferredTime && (
                    <p className="text-xs text-red-600 mt-1.5">{errors.preferredTime}</p>
                  )}
                </div>

              </div>

              {/* Reason for visit (optional) */}
              <div>
                <label htmlFor="reasonForVisit" className="block text-xs font-semibold text-[#15324B] uppercase tracking-wider mb-2">
                  Reason for Visit <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="reasonForVisit"
                  rows={3}
                  value={formData.reasonForVisit}
                  onChange={(e) => setFormData({ ...formData, reasonForVisit: e.target.value })}
                  placeholder="e.g. General check-up, routine blood pressure review, or seasonal symptoms"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-[#15324B] placeholder:text-slate-400 focus:outline-hidden focus:border-[#087F8C] focus:ring-2 focus:ring-[#087F8C]/20 transition-all resize-none"
                />
              </div>

              {/* Strict Medical Privacy Consent Warning */}
              <div className="flex items-start gap-3 p-4 bg-[#EAF8F6] rounded-xl border border-[#087F8C]/20 text-xs text-[#15324B]">
                <ShieldAlert className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-semibold block">Privacy Consent Notice</span>
                  <span className="text-[#607080]">
                    Please avoid sharing sensitive medical information in this form. Requests are used solely to establish appointment timing with the clinic desk.
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl text-white font-semibold text-sm sm:text-base bg-[#087F8C] hover:bg-[#066772] active:scale-[0.99] shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Preparing Request...</span>
                ) : (
                  <>
                    <MessageSquare className="w-4 h-4" />
                    <span>Submit Request via WhatsApp</span>
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
