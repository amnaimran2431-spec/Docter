import React, { useState } from 'react';
import { X, Save, RotateCcw, ShieldCheck, Check, AlertCircle } from 'lucide-react';
import { ClinicInfo } from '../types';
import { DEFAULT_CLINIC_INFO } from '../data/clinicData';

interface ClinicAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  clinicInfo: ClinicInfo;
  onSave: (updated: ClinicInfo) => void;
  onReset: () => void;
}

export const ClinicAdminModal: React.FC<ClinicAdminModalProps> = ({
  isOpen,
  onClose,
  clinicInfo,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<ClinicInfo>(clinicInfo);
  const [saveToast, setSaveToast] = useState(false);

  React.useEffect(() => {
    setFormData(clinicInfo);
  }, [clinicInfo, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative"
        role="dialog"
        aria-labelledby="admin-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close configuration modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="p-2 bg-[#EAF8F6] text-[#087F8C] rounded-xl">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
            Practice Administration
          </span>
        </div>

        <h3 id="admin-modal-title" className="text-xl sm:text-2xl font-bold text-[#15324B] mb-2">
          Verify or Edit Clinic Details
        </h3>
        <p className="text-xs sm:text-sm text-[#607080] mb-6">
          As instructed in medical compliance guidelines, all doctor credentials remain labeled as placeholders or hidden until verified by clinic administration. You can update and confirm them below:
        </p>

        {saveToast && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Clinic details saved successfully!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Doctor Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Doctor&apos;s Full Verified Name
            </label>
            <input
              type="text"
              value={formData.doctorName}
              onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#087F8C] focus:outline-hidden"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Current listing: Dr. Mursleen Ali (Confirm with clinic before publishing)
            </p>
          </div>

          {/* Academic Qualifications */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Academic Qualifications
              </label>
              <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.qualificationsVerified}
                  onChange={(e) => setFormData({ ...formData, qualificationsVerified: e.target.checked })}
                  className="rounded text-[#087F8C] focus:ring-[#087F8C]"
                />
                <span className={formData.qualificationsVerified ? 'text-emerald-700 font-bold' : 'text-slate-500'}>
                  Mark as Verified
                </span>
              </label>
            </div>
            <input
              type="text"
              value={formData.qualifications}
              onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
              placeholder="e.g. MBBS, FCPS (Family Medicine)"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-sm focus:border-[#087F8C] focus:outline-hidden"
            />
            <p className="text-[11px] text-slate-400">
              When unverified, the website safely conceals this field to prevent unverified medical degree claims.
            </p>
          </div>

          {/* PMDC Registration */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                PMDC Registration Number
              </label>
              <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.registrationVerified}
                  onChange={(e) => setFormData({ ...formData, registrationVerified: e.target.checked })}
                  className="rounded text-[#087F8C] focus:ring-[#087F8C]"
                />
                <span className={formData.registrationVerified ? 'text-emerald-700 font-bold' : 'text-slate-500'}>
                  Mark as Verified
                </span>
              </label>
            </div>
            <input
              type="text"
              value={formData.registrationNumber}
              onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
              placeholder="e.g. 12345-P"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-sm focus:border-[#087F8C] focus:outline-hidden"
            />
          </div>

          {/* Clinical Experience */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Clinical Experience Summary
              </label>
              <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.experienceVerified}
                  onChange={(e) => setFormData({ ...formData, experienceVerified: e.target.checked })}
                  className="rounded text-[#087F8C] focus:ring-[#087F8C]"
                />
                <span className={formData.experienceVerified ? 'text-emerald-700 font-bold' : 'text-slate-500'}>
                  Mark as Verified
                </span>
              </label>
            </div>
            <input
              type="text"
              value={formData.experienceYears}
              onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
              placeholder="e.g. 10+ Years in General Practice & Family Health"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-sm focus:border-[#087F8C] focus:outline-hidden"
            />
          </div>

          {/* Languages */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Languages Spoken (comma separated)
            </label>
            <input
              type="text"
              value={formData.languages.join(', ')}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  languages: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#087F8C] focus:outline-hidden"
            />
          </div>

          {/* Contact Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Telephone Number
              </label>
              <input
                type="text"
                value={formData.phoneFormatted}
                onChange={(e) => setFormData({ ...formData, phoneFormatted: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:border-[#087F8C]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                WhatsApp Desk Number
              </label>
              <input
                type="text"
                value={formData.whatsappFormatted}
                onChange={(e) => setFormData({ ...formData, whatsappFormatted: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:border-[#087F8C]"
              />
            </div>
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              Changes are stored in local storage for previewing before client delivery.
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={() => {
                onReset();
                setFormData(DEFAULT_CLINIC_INFO);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#087F8C] hover:bg-[#066772] rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
