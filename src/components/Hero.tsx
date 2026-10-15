import { ArrowRight, FileText, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/medicines';

interface HeroProps {
  onOpenPrescriptionModal: () => void;
}

export function Hero({ onOpenPrescriptionModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet kicker text - NO PILL BOX */}
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4 text-teal-700" />
              <span>Accredited Community Pharmacy & Dispensary</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Clinical Medicines, Certified Pharmacists & Everyday Wellness.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              We combine hospital-grade pharmaceutical diligence with personal neighborhood care.
              Browse authentic over-the-counter and prescription medicines, consult directly with our
              board-certified clinical team, and enjoy easy in-store pickup or local delivery.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#store-catalog"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors shadow-xs whitespace-nowrap"
              >
                <span>Browse Medicine Store</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenPrescriptionModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-teal-700" />
                <span>Upload Prescription / Refill</span>
              </button>
            </div>

            {/* Unboxed Metadata Trust Bar (NO PILLS) */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-500 font-medium">
                <span className="text-slate-700 font-semibold">Quality Assured</span>
                <span aria-hidden="true">·</span>
                <span>100% Tamper-Evident Batch Sourcing</span>
                <span aria-hidden="true">·</span>
                <span>2°C–8°C Cold-Chain Storage</span>
                <span aria-hidden="true">·</span>
                <span>Licensed Supervising Pharmacists</span>
              </div>
            </div>

            {/* Direct Contact & Location Snapshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="w-7 h-7 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Direct Pharmacy Line</div>
                  <a
                    href={`tel:${STORE_INFO.phonePrimary.replace(/[^\d+]/g, '')}`}
                    className="hover:text-teal-700 font-mono tabular-nums"
                  >
                    {STORE_INFO.phonePrimary}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="w-7 h-7 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Physical Store</div>
                  <a href="#location" className="hover:text-teal-700 truncate block max-w-[200px]">
                    {STORE_INFO.addressLine1}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm aspect-[4/3] lg:aspect-[1/1] xl:aspect-[4/3]">
              <img
                src="/src/assets/images/hero_modern_pharmacy_1792056684377.jpg"
                alt="Modern CuraMed pharmacy and wellness store interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback container if image cannot be rendered
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Scrim overlay for clinical caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-5 text-white">
                <div className="text-xs font-semibold text-teal-300">Modern Clinical Dispensary</div>
                <div className="text-sm font-medium mt-0.5">
                  Walk-in health consultations, prescription sync, and temperature-controlled storage
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
