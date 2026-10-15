import { Phone, MapPin, ShieldCheck, HeartPulse } from 'lucide-react';
import { STORE_INFO } from '../data/medicines';
import { heroImg } from '../assets/images';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet kicker text */}
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4 text-teal-700" />
              <span>Accredited Healthcare & Pharmacy Services</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Quality Medicines, Expert Clinical Care & Comprehensive Healthcare Services.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Welcome to {STORE_INFO.name}. Serving Benin City with dedication, we combine hospital-grade pharmaceutical diligence with personalized patient care, health screenings, and professional medical consultations.
            </p>

            {/* Primary Action */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#about-store"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors shadow-xs whitespace-nowrap"
              >
                <HeartPulse className="w-4 h-4" />
                <span>Explore Our Specialties & Services</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Contact Us</span>
              </a>
            </div>

            {/* Unboxed Metadata Trust Bar */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-500 font-medium">
                <span className="text-slate-700 font-semibold">Quality Assured</span>
                <span aria-hidden="true">·</span>
                <span>Authentic Sourced Pharmaceuticals</span>
                <span aria-hidden="true">·</span>
                <span>Clinical Consultations</span>
                <span aria-hidden="true">·</span>
                <span>Benin City, Edo State</span>
              </div>
            </div>

            {/* Direct Contact & Location Snapshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="w-7 h-7 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Direct Helpline</div>
                  <a
                    href={`tel:${STORE_INFO.phonePrimary}`}
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
                  <div className="font-semibold text-slate-900"> Office Location</div>
                  <a href="#location" className="hover:text-teal-700 truncate block max-w-[200px]">
                    {STORE_INFO.addressLine1}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm aspect-[4/3] lg:aspect-[1/1] xl:aspect-[4/3] group">
              <img
                src={heroImg}
                alt="NewLight Health Services modern health center and pharmacy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Scrim overlay for clinical caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-5 text-white">
                <div className="text-xs font-semibold text-teal-300">Clinical & Pharmacy Center</div>
                <div className="text-sm font-medium mt-0.5">
                  Professional healthcare delivery and patient-focused consultations in Benin City
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
