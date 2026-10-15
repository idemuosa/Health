import { Pill, Phone, Mail, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/medicines';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-teal-700 flex items-center justify-center text-white">
                <Pill className="w-3.5 h-3.5 rotate-45" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                CuraMed <span className="text-teal-400 font-normal">Apothecary</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Your accredited neighborhood pharmacy and wellness store. Dedicated to pharmaceutical purity, safe dispensing, patient education, and accessible care for Springfield and surrounding communities.
            </p>

            <div className="text-[11px] text-slate-500 space-y-1">
              <div>State Board of Pharmacy License: <span className="font-mono text-slate-400">{STORE_INFO.licenseNumber}</span></div>
              <div>Supervising Pharmacist: <span className="text-slate-400">{STORE_INFO.leadPharmacist}</span></div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Dispensary & Store
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about-medicine" className="hover:text-white transition-colors">
                  About the Medicine
                </a>
              </li>
              <li>
                <a href="#store-catalog" className="hover:text-white transition-colors">
                  Store Catalog
                </a>
              </li>
              <li>
                <a href="#about-store" className="hover:text-white transition-colors">
                  About Our Store
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Store Hours & Access
                </a>
              </li>
            </ul>
          </div>

          {/* Clinical Services */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Patient Services
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>Over-The-Counter Medicine</li>
              <li>Walk-In Flu & Travel Vaccines</li>
              <li>Free Blood Pressure Checks</li>
              <li>Private Health Consultation</li>
              <li>24/7 Drive-Thru Collection</li>
            </ul>
          </div>

          {/* Contact Details Mirror */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Location
            </div>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>{STORE_INFO.addressLine1}, {STORE_INFO.cityStateZip}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phonePrimary.replace(/[^\d+]/g, '')}`} className="hover:text-white font-mono">
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

        {/* Medical Emergency Disclaimer & Legal */}
        <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-500 space-y-3">
          <p className="leading-relaxed text-slate-400">
            <strong className="text-slate-300">Important Medical Disclaimer:</strong> If you are experiencing a life-threatening medical emergency or severe allergic reaction, please dial 911 or visit the nearest emergency department immediately. Information provided on this website does not constitute individual medical diagnosis or replace consulting a licensed physician.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 text-slate-500">
            <div>
              © {new Date().getFullYear()} CuraMed Pharmacy & Wellness Store. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>HIPAA Compliant</span>
              <span>·</span>
              <span>FDA cGMP Sourced</span>
              <span>·</span>
              <span>NABP Accredited</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
