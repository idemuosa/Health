import { useState } from 'react';
import { ShoppingBag, Phone, Menu, X, Pill, Clock } from 'lucide-react';
import { STORE_INFO } from '../data/medicines';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenPrescriptionModal: () => void;
}

export function Navbar({ cartCount, onOpenCart, onOpenPrescriptionModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if store is currently open (8:00 - 21:00 on weekdays, etc.)
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay(); // 0 is Sun, 6 is Sat
  const isOpen =
    (currentDay >= 1 && currentDay <= 5 && currentHour >= 8 && currentHour < 21) ||
    (currentDay === 6 && currentHour >= 9 && currentHour < 19) ||
    (currentDay === 0 && currentHour >= 10 && currentHour < 17);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro announcement bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium text-teal-400">Licensed Community Pharmacy</span>
            <span className="text-slate-500">·</span>
            <span>License #{STORE_INFO.licenseNumber}</span>
            <span className="hidden md:inline text-slate-500">·</span>
            <span className="hidden md:inline">Drive-thru window open 24/7</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>{isOpen ? 'Store Open Now' : 'Store Reopening at 8:00 AM'}</span>
            </span>
            <a
              href={`tel:${STORE_INFO.phonePrimary.replace(/[^\d+]/g, '')}`}
              className="flex items-center gap-1 text-white hover:text-teal-400 transition-colors font-mono tabular-nums"
            >
              <Phone className="w-3 h-3 text-teal-400" />
              <span>{STORE_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <div className="w-8 h-8 rounded-lg bg-teal-700 flex items-center justify-center text-white shadow-xs group-hover:bg-teal-800 transition-colors">
            <Pill className="w-4 h-4 rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 font-sans">
            CuraMed <span className="text-teal-700 font-normal">Apothecary</span>
          </span>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#about-medicine" className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0">
            About Medicine
          </a>
          <a href="#store-catalog" className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0">
            Store Catalog
          </a>
          <a href="#about-store" className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0">
            Our Store & Care
          </a>
          <a href="#location" className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0">
            Location & Map
          </a>
          <a href="#contact" className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0">
            Contact Us
          </a>
        </nav>

        {/* Zone 3: 1 primary action + cart drawer affordance */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPrescriptionModal}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-teal-700 rounded-lg hover:bg-teal-800 transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            Refill / Upload Rx
          </button>

          {/* Cart Bag Button */}
          <button
            onClick={onOpenCart}
            aria-label="View Medicine Bag"
            className="relative p-2 rounded-lg text-slate-700 hover:text-teal-700 hover:bg-slate-100 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-teal-700 text-white text-[11px] font-bold rounded-full flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
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
              About Medicine
            </a>
            <a
              href="#store-catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-slate-50 rounded-md"
            >
              Store Catalog
            </a>
            <a
              href="#about-store"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-slate-50 rounded-md"
            >
              Our Store & Care
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-slate-50 rounded-md"
            >
              Location & Map
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-slate-50 rounded-md"
            >
              Contact & Hours
            </a>
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrescriptionModal();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-teal-700 rounded-lg hover:bg-teal-800 transition-colors text-center"
            >
              Refill / Upload Prescription
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
