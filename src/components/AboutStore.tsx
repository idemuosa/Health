import { Stethoscope, Activity, HeartPulse, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/medicines';
import pharmacistPortraitImg from '../assets/images/pharmacist_lead_portrait_1792056685701.jpg';
import storeInteriorImg from '../assets/images/store_interior_consultation_1792056684307.jpg';

export function AboutStore() {
  const storeServices = [
    {
      icon: Stethoscope,
      title: 'Clinical Consultation & Triage',
      desc: 'One-on-one consultation with qualified healthcare professionals for symptom evaluation, health guidance, and preventive advice.',
    },
    {
      icon: Activity,
      title: 'Health Screenings & Monitoring',
      desc: 'Routine diagnostic checks including blood pressure monitoring, blood glucose testing, body composition, and vital signs.',
    },
    {
      icon: HeartPulse,
      title: 'Chronic Disease Management',
      desc: 'Tailored management plans and medication therapy reviews for hypertension, diabetes, and long-term health conditions.',
    },
    {
      icon: ShieldCheck,
      title: 'Preventive Care & Wellness',
      desc: 'Comprehensive nutritional counseling, immunity boosting, preventive healthcare packages, and maternal-child health guidance.',
    },
  ];

  return (
    <section id="about-store" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-teal-800 tracking-wide uppercase mb-2">
            About NewLight Health Services
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Our Facility, History, Atmosphere & Patient Care
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            NewLight Health Services was established in Benin City to deliver compassionate, community-focused medical and pharmaceutical services. Combining modern diagnostic tools, clean clinical facilities, and friendly healthcare professionals, we light the path to holistic health for every family.
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
                    src={pharmacistPortraitImg}
                    alt="Pharm. Wisdom Idemudia, Lead Pharmacist & Healthcare Director"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Pharm. Wisdom Idemudia
                  </h3>
                  <div className="text-xs text-teal-700 font-semibold mt-0.5">
                    Lead Pharmacist & Healthcare Director
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-1">
                    NewLight Health Services
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                "Our commitment at NewLight Health Services is to provide every individual in Benin City with accessible, high-quality, and transparent medical care. From precision prescription dispensing to preventive health checks, your well-being is our utmost priority."
              </p>

              <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Licensed Clinical Pharmacist & Healthcare Administrator</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Experienced in primary care and pharmaceutical management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Dedicated to community health outreach in Edo State</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-900">Direct Consultation Line:</span>
              <span className="font-mono text-slate-700">{STORE_INFO.phonePrimary}</span>
            </div>
          </div>

          {/* Facility & Atmosphere Showcase */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 bg-slate-100">
              <img
                src={storeInteriorImg}
                alt="NewLight Health Services consultation room and interior atmosphere"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 text-white">
                <div className="text-xs font-semibold text-teal-300">Modern Consultation Suite & Friendly Atmosphere</div>
                <div className="text-xs text-slate-200">
                  Clean, confidential, and comfortable clinical spaces
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Designed for Patient Comfort, Privacy & Comprehensive Care
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Located at No. 4 Atamu Street, off Musheshe, off Upper Sakponba Road in Benin City, our facility offers private consultation rooms, state-of-the-art diagnostic screening gear, and a warm, welcoming environment for patients of all ages.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-100 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="font-semibold text-slate-900">Private Consultations</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Confidential Sessions</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="font-semibold text-slate-900">Emergency Desk</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Rapid Response Guidance</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 col-span-2 sm:col-span-1">
                  <div className="font-semibold text-slate-900">Accessible Location</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Benin City, Edo State</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Specialties & Services */}
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
            Specialties & Healthcare Services
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
