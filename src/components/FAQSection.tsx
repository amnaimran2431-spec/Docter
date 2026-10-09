import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/clinicData';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS[0].id]);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-wider text-[#087F8C] uppercase mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#15324B] tracking-tight mb-4">
            Patient Information & Queries
          </h2>
          <p className="text-base text-[#607080] max-w-xl mx-auto">
            Find answers to commonly asked questions regarding clinic timings, appointments, location, and consultation guidelines.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="bg-[#F5F8FA] rounded-2xl border border-slate-200/90 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4.5 px-6 flex items-center justify-between text-left gap-4 hover:bg-slate-100/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#087F8C] shrink-0" />
                    <span className="font-bold text-sm sm:text-base text-[#15324B]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#087F8C]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#607080] leading-relaxed border-t border-slate-200/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
