import { Stethoscope, Syringe, Clock3, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/medicines';

export function AboutStore() {
  const storeServices = [
    {
      icon: Stethoscope,
      title: 'Free Walk-in Health Screenings',
      desc: 'Instant blood pressure checks, capillary blood glucose analysis, and BMI assessments with certified pharmacist feedback.',
    },
    {
      icon: Syringe,
      title: 'Immunizations & Vaccinations',
      desc: 'Annual seasonal flu, Shingrix, pneumococcal, tetanus/Tdap, and travel vaccines administered with no appointment needed.',
    },
    {
      icon: Clock3,
      title: 'Medication Synchronization',
      desc: 'Align all your monthly maintenance medications to be filled on a single, convenient day every month.',
    },
    {
      icon: Award,
      title: 'Compliance Blister Packaging',
      desc: 'Custom multi-dose blister packs organized by time of day (Morning, Noon, Evening, Bedtime) to eliminate dosing errors.',
    },
  ];

  return (
    <section id="about-store" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-teal-800 tracking-wide uppercase mb-2">
            Our Facility & Team
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            About Our Store: Community Trust, Clinical Expertise & Patient Comfort
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Established to bring personal, patient-centered care back to pharmacy practice. We are not just a medicine dispenser; we are your local healthcare partners, dedicated to helping you manage chronic wellness and acute recovery with confidence.
          </p>
        </div>

        {/* Store Highlights Grid: Pharmacist Profile + Consultation Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Pharmacist Spotlight */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                  <img
                    src="/src/assets/images/pharmacist_lead_portrait_1792056685701.jpg"
                    alt="Dr. Sarah Jenkins, Lead Clinical Pharmacist"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Dr. Sarah Jenkins, PharmD
                  </h3>
                  <div className="text-xs text-teal-700 font-semibold mt-0.5">
                    Lead Clinical Pharmacist & Dispensary Director
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-1">
                    Board-Certified Pharmacotherapy Specialist (BCPS)
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                "Our store was built on a simple promise: every patient leaves knowing exactly how to take their medicine, what side effects to watch for, and how their prescriptions work together. We take time to talk, listen, and answer your questions."
              </p>

              <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Doctor of Pharmacy (PharmD), Oregon State University</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>14+ years in hospital & clinical retail pharmacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Licensed Preceptor for Pharmacy Resident Clinicians</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-900">Direct Pharmacist Consults:</span>
              <span className="font-mono text-slate-700">{STORE_INFO.phonePrimary}</span>
            </div>
          </div>

          {/* Store Interior & Facility Showcase */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 bg-slate-100">
              <img
                src="/src/assets/images/store_interior_consultation_1792056684307.jpg"
                alt="Modern consultation station and sterile dispensing compounding bench"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 text-white">
                <div className="text-xs font-semibold text-teal-300">Private Consultation Station</div>
                <div className="text-xs text-slate-200">
                  Soundproof acoustic glass booths for confidential patient medication reviews
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Built for Patient Safety, Accessibility & Comfort
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Located conveniently directly across from the regional hospital, our store features step-free ramp access, wide aisles, private counseling suites, a 24-hour drive-through prescription window, and a dedicated automated compounding workstation.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-100 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="font-semibold text-slate-900">Drive-Thru Window</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">24/7 Pick-Up & Drop-Off</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="font-semibold text-slate-900">Free Patient Parking</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">28 Dedicated Spots</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 col-span-2 sm:col-span-1">
                  <div className="font-semibold text-slate-900">ADA Compliant</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Wheelchair Friendly</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* In-Store Clinical Services Bento */}
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
            Comprehensive Clinical Services
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {storeServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
