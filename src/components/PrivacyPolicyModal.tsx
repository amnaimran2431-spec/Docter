import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative"
        role="dialog"
        aria-labelledby="privacy-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close privacy policy modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-[#EAF8F6] text-[#087F8C] rounded-xl">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
            Patient Confidentiality
          </span>
        </div>

        <h3 id="privacy-modal-title" className="text-2xl font-bold text-[#15324B] mb-4">
          Privacy Policy & Health Information Notice
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-[#607080] leading-relaxed">
          <p>
            At <strong className="text-slate-900">Dr. Mursleen Clinic</strong>, located in Qadri Colony, Walton Road, Lahore, patient privacy and trust are our highest priorities.
          </p>

          <h4 className="font-bold text-[#15324B] text-sm pt-2">
            1. Appointment Inquiries & Personal Data
          </h4>
          <p>
            When you submit an appointment inquiry through our website, your name, telephone number, and timing preferences are used exclusively to coordinate scheduling via WhatsApp or direct phone calls with our front-desk staff. We do not sell, rent, or trade your contact details with any third parties.
          </p>

          <h4 className="font-bold text-[#15324B] text-sm pt-2">
            2. Medical Information Advisory
          </h4>
          <p>
            We strictly request that patients do not transmit sensitive medical records, laboratory photos, or emergency symptoms through online web forms. Medical evaluations and diagnostic details should only be discussed during in-person clinical consultations with Dr. Mursleen Ali.
          </p>

          <h4 className="font-bold text-[#15324B] text-sm pt-2">
            3. Emergency Care Disclaimer
          </h4>
          <p>
            This website does not provide real-time diagnostic triage. If you or a loved one experience chest pain, sudden breathlessness, high trauma, or severe acute emergencies, please immediately visit the nearest emergency facility or call local ambulance services (Rescue 1122).
          </p>

          <h4 className="font-bold text-[#15324B] text-sm pt-2">
            4. Clinic Contact & Inquiries
          </h4>
          <p>
            For any queries concerning records or data handling, you may contact our practice directly at 0332 3513316 or visit our clinic at Main Street, Qadri Colony, near Bhola Chowk, Walton Road, Lahore, Pakistan.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#087F8C] hover:bg-[#066772] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
