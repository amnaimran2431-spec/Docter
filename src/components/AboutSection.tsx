import React from 'react';
import { UserCheck, Award, FileText, Globe, Clock, Settings, Info } from 'lucide-react';
import { ClinicInfo } from '../types';

interface AboutSectionProps {
  clinicInfo: ClinicInfo;
  onOpenAdmin: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ clinicInfo, onOpenAdmin }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-[#087F8C] uppercase mb-2">
            About Our Practice
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#15324B] tracking-tight mb-4">
            Care That Puts Patients First
          </h2>
          <p className="text-base sm:text-lg text-[#607080] leading-relaxed">
            Dr. Mursleen Clinic is dedicated to serving the local residents of Qadri Colony, Walton Road, and surrounding neighborhoods in Lahore. We focus on general medical evaluations, family health support, and proactive wellness guidance in a clean, welcoming environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Doctor Profile & Editable Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-[#F5F8FA] rounded-2xl p-6 sm:p-8 border border-slate-200">
              
              <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-200/80">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#15324B]">
                      {clinicInfo.doctorName}
                    </h3>
                    <span className="text-[11px] font-medium text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                      Provisional
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Lead Physician · General & Family Practice
                  </p>
                </div>

                <button
                  onClick={onOpenAdmin}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#087F8C] bg-white border border-slate-200 hover:border-[#087F8C] rounded-lg transition-colors cursor-pointer shrink-0"
                  title="Configure clinic details"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Edit Details</span>
                </button>
              </div>

              {/* Practitioner Credentials Cards */}
              <div className="space-y-4">
                
                {/* Doctor's Name Status */}
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/70">
                  <UserCheck className="w-5 h-5 text-[#087F8C] mt-0.5 shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-semibold text-[#15324B] block">Practitioner Verification</span>
                    <span className="text-[#607080]">
                      Listed as <strong className="text-slate-800">{clinicInfo.doctorName}</strong>. Name and clinical designations are subject to formal confirmation with clinic management prior to publication.
                    </span>
                  </div>
                </div>

                {/* Qualifications */}
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/70">
                  <Award className="w-5 h-5 text-[#087F8C] mt-0.5 shrink-0" />
                  <div className="text-xs sm:text-sm w-full">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-[#15324B]">Academic Qualifications</span>
                      {clinicInfo.qualificationsVerified ? (
                        <span className="text-[11px] text-emerald-700 font-medium">Verified</span>
                      ) : (
                        <span className="text-[11px] text-slate-500 italic">Pending clinic submission</span>
                      )}
                    </div>
                    <p className="text-[#607080] mt-0.5">
                      {clinicInfo.qualificationsVerified
                        ? clinicInfo.qualifications
                        : 'Field hidden until confirmed by clinic to avoid publishing unverified medical degrees.'}
                    </p>
                  </div>
                </div>

                {/* Professional Registration */}
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/70">
                  <FileText className="w-5 h-5 text-[#087F8C] mt-0.5 shrink-0" />
                  <div className="text-xs sm:text-sm w-full">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-[#15324B]">PMDC Registration</span>
                      {clinicInfo.registrationVerified ? (
                        <span className="text-[11px] text-emerald-700 font-medium">Verified</span>
                      ) : (
                        <span className="text-[11px] text-slate-500 italic">Awaiting document check</span>
                      )}
                    </div>
                    <p className="text-[#607080] mt-0.5">
                      {clinicInfo.registrationVerified
                        ? clinicInfo.registrationNumber
                        : 'Professional registration number is held pending official documentation check.'}
                    </p>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/70">
                  <Clock className="w-5 h-5 text-[#087F8C] mt-0.5 shrink-0" />
                  <div className="text-xs sm:text-sm w-full">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-[#15324B]">Clinical Experience</span>
                      {clinicInfo.experienceVerified ? (
                        <span className="text-[11px] text-emerald-700 font-medium">Verified</span>
                      ) : (
                        <span className="text-[11px] text-slate-500 italic">Unpublished placeholder</span>
                      )}
                    </div>
                    <p className="text-[#607080] mt-0.5">
                      {clinicInfo.experienceVerified
                        ? clinicInfo.experienceYears
                        : 'Experience details will be displayed once confirmed with Dr. Mursleen.'}
                    </p>
                  </div>
                </div>

                {/* Languages Spoken */}
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/70">
                  <Globe className="w-5 h-5 text-[#087F8C] mt-0.5 shrink-0" />
                  <div className="text-xs sm:text-sm w-full">
                    <span className="font-semibold text-[#15324B] block">Languages Spoken</span>
                    <p className="text-[#607080] mt-0.5">
                      {clinicInfo.languages.join(' · ')}
                    </p>
                  </div>
                </div>

              </div>

              {/* Informational Callout */}
              <div className="mt-6 flex items-start gap-2.5 p-3 rounded-lg bg-[#EAF8F6] text-xs text-[#15324B]">
                <Info className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                <span>
                  <strong>Ethical Practice Notice:</strong> We do not publish unverified credentials or fabricated awards. If you are the clinic owner, click &ldquo;Edit Details&rdquo; to input confirmed certificates.
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Clinic Philosophy & Clinical Ambiance Image */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <img
                src="/src/assets/images/clinic_interior_care_1791517688116.jpg"
                alt="Modern, spotless medical clinic reception and consultation environment"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-72 object-cover object-center"
              />
              <div className="p-4 bg-white border-t border-slate-200 text-xs text-[#607080]">
                Clean, organized clinical reception and consultation area designed for patient comfort and privacy.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
              <h4 className="text-base font-bold text-[#15324B]">
                Our Practice Principles
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#607080]">
                <li className="flex items-start gap-2">
                  <span className="text-[#087F8C] font-bold">✓</span>
                  <span><strong>Accessible Neighborhood Care:</strong> Easy access for families living along Walton Road and Qadri Colony.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#087F8C] font-bold">✓</span>
                  <span><strong>Clear Patient Communication:</strong> Thoughtful consultations explaining diagnosis, lifestyle steps, and prescriptions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#087F8C] font-bold">✓</span>
                  <span><strong>Appropriate Referrals:</strong> If conditions require secondary hospital care or emergency intervention, prompt guidance is given.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
