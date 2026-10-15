import { ShieldAlert, ThermometerSnowflake, FileCheck2, HeartHandshake, CheckCircle2 } from 'lucide-react';

export function AboutMedicine() {
  const standards = [
    {
      index: '01',
      icon: ShieldAlert,
      title: 'Direct Manufacturer Verification',
      description:
        'Every tablet, capsule, and solution in our inventory is sourced exclusively from licensed, cGMP-compliant pharmaceutical producers. We track every batch number with tamper-evident packaging and manufacturer certificates.',
    },
    {
      index: '02',
      icon: ThermometerSnowflake,
      title: 'Precision 2°C–8°C Cold Chain',
      description:
        'Biologics, insulins, injectable medications, and sensitive eye drops require unbroken temperature control. Our medical-grade refrigerators feature 24/7 digital sensors and backup generators to guarantee potency.',
    },
    {
      index: '03',
      icon: FileCheck2,
      title: 'Clinical Drug Interaction Audits',
      description:
        'Before any medicine leaves our dispensary, our pharmacists conduct a thorough drug-utilization review. We screen for adverse interactions with your current prescriptions, OTC herbal supplements, and dietary restrictions.',
    },
    {
      index: '04',
      icon: HeartHandshake,
      title: 'Plain-Language Patient Counseling',
      description:
        'Every prescription and complex OTC medication includes clear directions: when to take, whether food is recommended, common side effects to watch for, and what to do if a dose is accidentally missed.',
    },
  ];

  return (
    <section id="about-medicine" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-teal-800 tracking-wide uppercase mb-2">
            Pharmaceutical Integrity
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            About the Medicine: Quality, Safety & Clinical Dispensing Standards
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Medications are only as effective as the integrity of their formulation and the safety of their storage.
            At CuraMed, our dispensing protocols mirror hospital standards to safeguard your health at every step.
          </p>
        </div>

        {/* Content Split: Image showcase and Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image with clinical facts */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
              <img
                src="/src/assets/images/medicine_product_display_1792056686096.jpg"
                alt="Pharmaceutical grade authentic medicines and amber bottles"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="p-5 space-y-3">
                <div className="text-sm font-bold text-slate-900">
                  Verified Pharmaceutical Stock
                </div>
                <div className="text-xs text-slate-600 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Sealed blister packaging prevents moisture ingress and degradation.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Amber USP Type III glass protects light-sensitive syrups & vitamins.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Clear distinction between Over-the-Counter (OTC) & Prescription (Rx).</span>
                  </div>
                </div>
              </div>
            </div>

            {/* OTC vs Rx Guidance Box */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600">
              <span className="font-semibold text-slate-900">Patient Guidance Note: </span>
              Items marked <span className="font-semibold text-slate-900">OTC</span> can be purchased directly in-store or online. Items marked <span className="font-semibold text-amber-800">Rx Required</span> require a valid prescription from an authorized medical practitioner prior to fulfillment.
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
