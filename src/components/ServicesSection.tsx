import React from 'react';
import { 
  Stethoscope, 
  Users, 
  Smile, 
  Activity, 
  HeartPulse, 
  ShieldCheck, 
  ArrowRight,
  Info
} from 'lucide-react';
import { PROPOSED_SERVICES } from '../data/clinicData';
import { MedicalService } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: MedicalService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  // Map icon names to Lucide icons
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'Smile':
        return <Smile className="w-6 h-6" />;
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#F5F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-wider text-[#087F8C] uppercase mb-2">
              Proposed Clinical Categories
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#15324B] tracking-tight mb-3">
              General & Family Medical Services
            </h2>
            <p className="text-sm sm:text-base text-[#607080] leading-relaxed">
              The services below represent common primary care categories subject to official clinic confirmation. Consultations are scheduled on an outpatient basis.
            </p>
          </div>

          <div className="text-xs text-slate-500 bg-white p-3 rounded-xl border border-slate-200 max-w-sm">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
              <span>
                <strong>Note:</strong> Dr. Mursleen Clinic does not offer trauma/emergency surgery or guarantee specific clinical outcomes.
              </span>
            </div>
          </div>
        </div>

        {/* Services Grid (6 Proposed Categories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPOSED_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-[#087F8C]/60 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Category kicker & icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF8F6] text-[#087F8C] flex items-center justify-center group-hover:bg-[#087F8C] group-hover:text-white transition-colors">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#15324B] tracking-tight mb-2.5">
                  {service.title}
                </h3>

                <p className="text-sm text-[#607080] leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Scope Note */}
                <div className="text-[11px] text-slate-500 py-1 px-2.5 bg-slate-50 rounded-lg border border-slate-100 mb-4">
                  Scope: {service.suitableFor}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectService(service)}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-[#087F8C] bg-[#EAF8F6]/60 hover:bg-[#EAF8F6] hover:text-[#066772] rounded-xl transition-colors cursor-pointer"
              >
                <span>Contact for Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Verification Advisory */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            Need a consultation not listed above? Please contact our clinic desk directly at <span className="font-semibold text-slate-800">0332 3513316</span> to verify doctor availability.
          </p>
        </div>

      </div>
    </section>
  );
};
