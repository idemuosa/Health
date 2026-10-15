import { Phone, Mail, MapPin, HeartPulse } from 'lucide-react';
import { STORE_INFO } from '../data/medicines';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-teal-700 flex items-center justify-center text-white">
                <HeartPulse className="w-3.5 h-3.5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                NewLight <span className="text-teal-400 font-normal">Health Services</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Your trusted community healthcare and pharmacy center in Benin City. Dedicated to pharmaceutical safety, personalized clinical consultation, and compassionate care.
            </p>

            <div className="text-[11px] text-slate-500 space-y-1">
              <div>Registration License: <span className="font-mono text-slate-400">{STORE_INFO.licenseNumber}</span></div>
              <div>Lead Pharmacist: <span className="text-slate-400">{STORE_INFO.leadPharmacist}</span></div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about-medicine" className="hover:text-white transition-colors">
                  Quality & Safety Standards
                </a>
              </li>
              <li>
                <a href="#about-store" className="hover:text-white transition-colors">
                  Specialties & Facilities
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Opening Hours & Location
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Location
            </div>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>{STORE_INFO.addressLine1}, {STORE_INFO.addressLine2}, {STORE_INFO.cityStateZip}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phonePrimary}`} className="hover:text-white font-mono">
                  {STORE_INFO.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={`mailto:${STORE_INFO.emailCare}`} className="hover:text-white">
                  {STORE_INFO.emailCare}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-500 space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 text-slate-500">
            <div>
              © {new Date().getFullYear()} NewLight Health Services, Benin City. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Quality Assured</span>
              <span>·</span>
              <span>Benin City, Nigeria</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
