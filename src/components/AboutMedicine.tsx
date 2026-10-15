import { ShieldAlert, ThermometerSnowflake, FileCheck2, HeartHandshake, CheckCircle2 } from 'lucide-react';
import medicineDisplayImg from '../assets/images/medicine_product_display_1792056686096.jpg';

export function AboutMedicine() {
  const standards = [
    {
      index: '01',
      icon: ShieldAlert,
      title: 'Direct Manufacturer & Licensed Supply',
      description:
        'All pharmaceuticals at NewLight Health Services are sourced from authorized, regulated manufacturers to guarantee genuine active ingredients, batch authenticity, and complete quality assurance.',
    },
    {
      index: '02',
      icon: ThermometerSnowflake,
      title: 'Strict Temperature-Controlled Storage',
      description:
        'Temperature-sensitive medications, vaccines, and biologics are preserved under optimal cold chain storage with continuous digital monitoring to guarantee therapeutic potency.',
    },
    {
      index: '03',
      icon: FileCheck2,
      title: 'Comprehensive Drug Interaction Reviews',
      description:
        'Our clinical team reviews prescription safety, dosage accuracy, and potential drug-drug interactions to ensure safe administration and peace of mind.',
    },
    {
      index: '04',
      icon: HeartHandshake,
      title: 'Personalized Counseling & Education',
      description:
        'We believe informed patients achieve better health outcomes. We provide comprehensive guidance on proper medication usage, timing, potential side effects, and precautions.',
    },
  ];

  return (
    <section id="about-medicine" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-teal-800 tracking-wide uppercase mb-2">
            Pharmaceutical Excellence
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Our Quality, Safety & Dispensing Standards
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            At NewLight Health Services, we uphold strict healthcare standards so that every medication, treatment, and consultation delivers optimal health and patient safety.
          </p>
        </div>

        {/* Content Split: Image showcase and Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image with clinical facts */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
              <img
                src={medicineDisplayImg}
                alt="Authentic pharmaceuticals and healthcare supplies display at NewLight Health Services"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 object-cover"
              />
              <div className="p-5 space-y-3">
                <div className="text-sm font-bold text-slate-900">
                  Authentic Healthcare & Medical Supplies
                </div>
                <div className="text-xs text-slate-600 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Verified pharmaceutical supply chain and NAFDAC registered products.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Hygienic, climate-controlled storage environment.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Wide range of essential medicines, wellness products, and diagnostics.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Guidance Box */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600">
              <span className="font-semibold text-slate-900">Patient Guidance Note: </span>
              Visit our health center at No. 4 Atamu Street, off Musheshe, off Upper Sakponba Road, Benin City for walk-in consultations and prescriptions.
            </div>
          </div>

          {/* Right Column: 4 Core Clinical Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {standards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.index}
                  className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        {item.index}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
