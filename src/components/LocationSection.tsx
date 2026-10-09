import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink, Car, Phone } from 'lucide-react';
import { GOOGLE_MAPS_SEARCH_URL, PHONE_DIAL_URL } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-[#087F8C] uppercase mb-2">
            Clinic Accessibility
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#15324B] tracking-tight mb-4">
            Find Our Clinic
          </h2>
          <p className="text-base text-[#607080] leading-relaxed">
            Conveniently situated in Qadri Colony off Walton Road in Lahore. Use the directions button below to navigate directly using Google Maps on your phone or vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Clinic Address Card */}
          <div className="lg:col-span-5 bg-[#F5F8FA] rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF8F6] text-[#087F8C] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#15324B]">
                    Dr. Mursleen Clinic
                  </h3>
                  <p className="text-xs text-slate-500">General Practice · Walton Road</p>
                </div>
              </div>

              {/* Exact Physical Address */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Official Physical Address
                </span>
                <p className="text-sm sm:text-base font-semibold text-[#15324B] leading-snug">
                  Main Street, Qadri Colony<br />
                  Near Bhola Chowk<br />
                  Walton Road, Lahore, Punjab, Pakistan
                </p>
              </div>

              {/* Landmarks and Navigation Tips */}
              <div className="space-y-3 text-xs sm:text-sm text-[#607080]">
                <div className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-[#087F8C] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-slate-800">Key Landmark:</strong> Located adjacent to Bhola Chowk inside Qadri Colony, easily accessible from main Walton Road.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-[#087F8C] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-slate-800">Approaching from Walton Road:</strong> Turn towards Qadri Colony at Bhola Chowk. Street-side parking is generally available during evening hours.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#087F8C] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-slate-800">Need Directions via Phone?</strong> Call <a href={PHONE_DIAL_URL} className="text-[#087F8C] font-semibold underline">0332 3513316</a> if you need assistance reaching the clinic.
                  </div>
                </div>
              </div>

            </div>

            {/* Primary Action Button */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <a
                href={GOOGLE_MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#087F8C] hover:bg-[#066772] text-white font-semibold text-sm rounded-xl shadow-xs transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Map Card with Responsive Map UI */}
          <div className="lg:col-span-7 bg-[#EAF8F6]/40 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between relative overflow-hidden">
            
            {/* Visual Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-[#087F8C]" />
                <span>Lahore Cantonment / Walton Road Corridor</span>
              </div>
              <span className="text-xs text-slate-500">Google Maps Verified Search</span>
            </div>

            {/* Map Frame Graphic / Visual Route Map Preview */}
            <div className="w-full h-80 sm:h-96 rounded-2xl bg-white border border-slate-200/90 shadow-inner relative overflow-hidden flex flex-col items-center justify-center text-center p-6">
              
              {/* Background Map Graphic Pattern */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#087F8C_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Central Pin Card */}
              <div className="relative z-10 bg-white/95 backdrop-blur-xs p-6 rounded-2xl border border-slate-200 shadow-lg max-w-sm">
                <div className="w-12 h-12 rounded-full bg-[#087F8C] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <h4 className="font-extrabold text-[#15324B] text-base mb-1">
                  Dr. Mursleen Clinic
                </h4>
                <p className="text-xs text-[#607080] mb-4">
                  Main Street, Qadri Colony, near Bhola Chowk, Walton Road, Lahore
                </p>
                <a
                  href={GOOGLE_MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#087F8C] hover:bg-[#066772] rounded-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps App</span>
                </a>
              </div>

              {/* Bottom Quick Notice */}
              <div className="absolute bottom-3 left-4 right-4 text-[11px] text-slate-500 bg-white/80 backdrop-blur-xs py-1 px-3 rounded-lg border border-slate-200/60">
                Real-time routing available directly via Google Maps navigation query.
              </div>

            </div>

            {/* Area Proximity Strip */}
            <div className="mt-4 pt-4 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600">
              <div>
                <span className="font-semibold text-slate-800 block">Near:</span>
                <span>Bhola Chowk (Walkable)</span>
              </div>
              <div>
                <span className="font-semibold text-slate-800 block">Arriving from:</span>
                <span>Walton Road (Direct Access)</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="font-semibold text-slate-800 block">City Zone:</span>
                <span>Lahore, Punjab</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
