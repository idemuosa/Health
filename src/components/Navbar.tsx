import { useState } from 'react';
import { Phone, Menu, X, HeartPulse } from 'lucide-react';
import { STORE_INFO } from '../data/medicines';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro announcement bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium text-teal-400">NewLight Health Services</span>
            <span className="text-slate-500">·</span>
            <span>Benin City, Edo State</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${STORE_INFO.phonePrimary}`}
              className="flex items-center gap-1 text-white hover:text-teal-400 transition-colors font-mono tabular-nums"
            >
              <Phone className="w-3 h-3 text-teal-400" />
              <span>{STORE_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Brand Wordmark */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <div className="w-8 h-8 rounded-lg bg-teal-700 flex items-center justify-center text-white shadow-xs group-hover:bg-teal-800 transition-colors">
            <HeartPulse className="w-4 h-4" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 font-sans">
            NewLight <span className="text-teal-700 font-normal">Health Services</span>
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#about-medicine" className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0">
            Quality & Standards
          </a>
          <a href="#about-store" className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0">
            Specialties & Facilities
          </a>
          <a href="#location" className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0">
            Hours & Location
          </a>
          <a href="#contact" className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0">
            Contact Us
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2.5 text-sm font-medium text-slate-700">
            <a
              href="#about-medicine"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-slate-50 rounded-md"
            >
              Quality & Standards
            </a>
            <a
              href="#about-store"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-slate-50 rounded-md"
            >
              Specialties & Facilities
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-slate-50 rounded-md"
            >
              Hours & Location
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-slate-50 rounded-md"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
