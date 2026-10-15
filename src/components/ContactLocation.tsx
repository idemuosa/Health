import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Copy, Check, Send, Navigation, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/medicines';

export function ContactLocation() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Prescription Refill or Status',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Active map pin state
  const [activePin, setActivePin] = useState<'entrance' | 'drivethru' | 'parking' | 'transit'>('entrance');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  // Determine current day of week to highlight hours
  const now = new Date();
  const currentDay = now.getDay(); // 0 is Sun, 1 is Mon, 6 is Sat
  const currentHour = now.getHours();

  const isOpen =
    (currentDay >= 1 && currentDay <= 5 && currentHour >= 8 && currentHour < 21) ||
    (currentDay === 6 && currentHour >= 9 && currentHour < 19) ||
    (currentDay === 0 && currentHour >= 10 && currentHour < 17);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = 'Please provide your full name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Please provide a phone number for callback';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide a brief message (minimum 10 characters)';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    const generatedTicket = 'CRM-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedTicket);
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      topic: 'Prescription Refill or Status',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-teal-800 tracking-wide uppercase mb-2">
            Direct Assistance & Visit Us
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Contact CuraMed Store & Visit Our Location
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Reach our licensed pharmacists directly via dedicated phone lines, email dispensary records, or visit our physical storefront with convenient parking and 24/7 drive-through service.
          </p>
        </div>

        {/* 3 Main Contact Channels Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Channel 1: Phone Lines */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Phone Contact
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Direct lines to our dispensing counter, pharmacist consultation, and automated refill lines.
              </p>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-slate-500 text-[11px] font-medium">Primary Store & Dispensary</div>
                  <div className="flex items-center justify-between mt-0.5">
                    <a
                      href={`tel:${STORE_INFO.phonePrimary.replace(/[^\d+]/g, '')}`}
                      className="font-bold text-slate-900 hover:text-teal-700 font-mono text-sm"
                    >
                      {STORE_INFO.phonePrimary}
                    </a>
                    <button
                      onClick={() => copyToClipboard(STORE_INFO.phonePrimary, 'phonePrimary')}
                      className="text-slate-400 hover:text-slate-700 p-1"
                      title="Copy phone"
                    >
                      {copiedType === 'phonePrimary' ? (
                        <Check className="w-3.5 h-3.5 text-teal-700" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/60">
                  <div className="text-slate-500 text-[11px] font-medium">Toll-Free Prescription Helpline</div>
                  <div className="flex items-center justify-between mt-0.5">
                    <a
                      href={`tel:${STORE_INFO.phoneTollFree.replace(/[^\d+]/g, '')}`}
                      className="font-semibold text-slate-900 hover:text-teal-700 font-mono text-xs"
                    >
                      {STORE_INFO.phoneTollFree}
                    </a>
                    <button
                      onClick={() => copyToClipboard(STORE_INFO.phoneTollFree, 'phoneTollFree')}
                      className="text-slate-400 hover:text-slate-700 p-1"
                      title="Copy phone"
                    >
                      {copiedType === 'phoneTollFree' ? (
                        <Check className="w-3.5 h-3.5 text-teal-700" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/60">
                  <div className="text-slate-500 text-[11px] font-medium">24/7 On-Call Emergency Pharmacist</div>
                  <div className="font-semibold text-rose-800 font-mono text-xs mt-0.5">
                    {STORE_INFO.phoneEmergency}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200/60 text-[11px] text-slate-400">
              Immediate answer time during store hours
            </div>
          </div>

          {/* Channel 2: Email Addresses */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Email Addresses
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Send clinical questions, insurance transfer documents, or general store feedback.
              </p>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-slate-500 text-[11px] font-medium">Patient Care & Inquiries</div>
                  <div className="flex items-center justify-between mt-0.5">
                    <a
                      href={`mailto:${STORE_INFO.emailCare}`}
                      className="font-bold text-slate-900 hover:text-teal-700 font-mono text-xs"
                    >
                      {STORE_INFO.emailCare}
                    </a>
                    <button
                      onClick={() => copyToClipboard(STORE_INFO.emailCare, 'emailCare')}
                      className="text-slate-400 hover:text-slate-700 p-1"
                      title="Copy email"
                    >
                      {copiedType === 'emailCare' ? (
                        <Check className="w-3.5 h-3.5 text-teal-700" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/60">
                  <div className="text-slate-500 text-[11px] font-medium">Prescription Transfers & Doctor Records</div>
                  <div className="flex items-center justify-between mt-0.5">
                    <a
                      href={`mailto:${STORE_INFO.emailPrescriptions}`}
                      className="font-semibold text-slate-900 hover:text-teal-700 font-mono text-xs"
                    >
                      {STORE_INFO.emailPrescriptions}
                    </a>
                    <button
                      onClick={() => copyToClipboard(STORE_INFO.emailPrescriptions, 'emailPrescriptions')}
                      className="text-slate-400 hover:text-slate-700 p-1"
                      title="Copy email"
                    >
                      {copiedType === 'emailPrescriptions' ? (
                        <Check className="w-3.5 h-3.5 text-teal-700" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/60">
                  <div className="text-slate-500 text-[11px] font-medium">HIPAA Encrypted Portal</div>
                  <div className="text-slate-700 text-xs mt-0.5">
                    Secure clinical communication compliant with medical privacy standards.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200/60 text-[11px] text-slate-400">
              Average email response &lt; 20 minutes
            </div>
          </div>

          {/* Channel 3: Physical Location & Address */}
          <div id="location" className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Store Location
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Centrally located with direct hospital proximity and drive-through access.
              </p>

              <div className="space-y-2 text-xs">
                <div className="font-bold text-slate-900 text-sm">
                  {STORE_INFO.addressLine1}
                </div>
                <div className="text-slate-600">
                  {STORE_INFO.addressLine2}
                </div>
                <div className="font-semibold text-slate-900">
                  {STORE_INFO.cityStateZip}
                </div>

                <div className="pt-3 border-t border-slate-200/60 space-y-1.5 text-slate-500">
                  <div>· Free surface patient parking (28 spots)</div>
                  <div>· 24/7 drive-thru pick-up on East wing</div>
                  <div>· Lane transit access: Bus Line 14</div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-2">
              <button
                onClick={() =>
                  copyToClipboard(
                    `${STORE_INFO.addressLine1}, ${STORE_INFO.addressLine2}, ${STORE_INFO.cityStateZip}`,
                    'fullAddress'
                  )
                }
                className="flex-1 py-2 px-3 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                {copiedType === 'fullAddress' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-teal-700" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${STORE_INFO.addressLine1}, ${STORE_INFO.cityStateZip}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Hours & Interactive Map vs Interactive Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Operating Hours & Simulated Interactive Store Map (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Store Hours Card with Live Status Indicator */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-teal-700" />
                  <h3 className="text-base font-bold text-slate-900">
                    Store & Dispensary Hours
                  </h3>
                </div>

                <div className="text-xs font-semibold">
                  {isOpen ? (
                    <span className="text-teal-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                      Open Now
                    </span>
                  ) : (
                    <span className="text-amber-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                      Closed · Reopening 8:00 AM
                    </span>
                  )}
                </div>
              </div>

              <div className="divide-y divide-slate-100 text-xs mt-2">
                <div
                  className={`py-2.5 flex items-center justify-between ${
                    currentDay >= 1 && currentDay <= 5 ? 'font-bold text-teal-900' : 'text-slate-600'
                  }`}
                >
                  <span>Monday – Friday</span>
                  <span className="font-mono tabular-nums">8:00 AM – 9:00 PM</span>
                </div>
                <div
                  className={`py-2.5 flex items-center justify-between ${
                    currentDay === 6 ? 'font-bold text-teal-900' : 'text-slate-600'
                  }`}
                >
                  <span>Saturday</span>
                  <span className="font-mono tabular-nums">9:00 AM – 7:00 PM</span>
                </div>
                <div
                  className={`py-2.5 flex items-center justify-between ${
                    currentDay === 0 ? 'font-bold text-teal-900' : 'text-slate-600'
                  }`}
                >
                  <span>Sunday</span>
                  <span className="font-mono tabular-nums">10:00 AM – 5:00 PM</span>
                </div>
                <div className="py-2.5 flex items-center justify-between text-slate-700">
                  <span className="font-semibold">Drive-Thru Window</span>
                  <span className="text-teal-700 font-semibold font-mono">24 Hours / 7 Days</span>
                </div>
              </div>
            </div>

            {/* Interactive Map Layout & Facility Guide */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Store Compound & Facility Layout
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Select a zone to view access points and directions
                  </div>
                </div>

                {/* Segmented Map Filter Buttons */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActivePin('entrance')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                      activePin === 'entrance'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Main Store
                  </button>
                  <button
                    onClick={() => setActivePin('drivethru')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                      activePin === 'drivethru'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Drive-Thru
                  </button>
                  <button
                    onClick={() => setActivePin('parking')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                      activePin === 'parking'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Parking
                  </button>
                </div>
              </div>

              {/* Graphical Simulated Interactive Map Canvas */}
              <div className="relative bg-slate-900 h-64 sm:h-72 p-6 flex flex-col justify-between text-white overflow-hidden">
                {/* Street Grid Graphic Representation */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <div className="w-full h-full border-t border-b border-slate-500 grid grid-cols-6 grid-rows-4 gap-4 p-4">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="border border-slate-600 rounded"></div>
                    ))}
                  </div>
                </div>

                {/* Map Elements & Visual Pins */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="p-2 rounded-lg bg-slate-800/90 backdrop-blur-xs border border-slate-700 text-xs">
                    <div className="text-slate-400 text-[10px] uppercase font-mono">Location Reference</div>
                    <div className="font-semibold text-slate-100">Evergreen Blvd @ 7th Ave</div>
                  </div>

                  <div className="text-right text-xs text-slate-400">
                    <div>GPS: 44.0462° N, 123.0220° W</div>
                    <div className="text-[11px] text-teal-400">North Medical Plaza</div>
                  </div>
                </div>

                {/* Interactive Dynamic Callout Card */}
                <div className="relative z-10 bg-slate-800/95 backdrop-blur-md rounded-xl p-4 border border-slate-700 max-w-md">
                  {activePin === 'entrance' && (
                    <div>
                      <div className="text-xs font-bold text-teal-400 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Main Store & Dispensary Entrance</span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Automatic sliding glass doors, zero-step wheelchair ramp, and direct check-in reception desk for prescription drop-offs and OTC retail shopping.
                      </p>
                    </div>
                  )}

                  {activePin === 'drivethru' && (
                    <div>
                      <div className="text-xs font-bold text-teal-400 flex items-center gap-1.5">
                        <Navigation className="w-3.5 h-3.5" />
                        <span>24/7 Drive-Through Prescription Lane</span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Located on the East wing of the building with two dedicated vehicle lanes. Pick up ready refills without leaving your vehicle.
                      </p>
                    </div>
                  )}

                  {activePin === 'parking' && (
                    <div>
                      <div className="text-xs font-bold text-teal-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Free Patient Parking & EV Stations</span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        28 marked patient parking bays right outside the entrance, including 4 ADA accessible spaces and 2 level-2 EV charging bays.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact & Inquiry Form (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-teal-700" />
              <h3 className="text-base font-bold text-slate-900">
                Direct Dispensary Inquiry
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              Send a direct message to our clinical staff. We respond promptly regarding medicine availability, prescription transfers, and health questions.
            </p>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4 bg-white rounded-xl p-6 border border-teal-200">
                <div className="w-12 h-12 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Message Received</h4>
                  <div className="text-xs text-slate-500 font-mono mt-1">
                    Inquiry Reference: <span className="font-bold text-slate-800">{ticketId}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. A supervising pharmacist or care coordinator will contact you at <span className="font-semibold text-slate-900">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={handleResetForm}
                  className="px-4 py-2 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                  />
                  {formErrors.name && (
                    <div className="text-[11px] text-rose-600 mt-1">{formErrors.name}</div>
                  )}
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                    />
                    {formErrors.email && (
                      <div className="text-[11px] text-rose-600 mt-1">{formErrors.email}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                    />
                    {formErrors.phone && (
                      <div className="text-[11px] text-rose-600 mt-1">{formErrors.phone}</div>
                    )}
                  </div>
                </div>

                {/* Inquiry Topic */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                  >
                    <option value="Prescription Refill or Status">Prescription Refill or Status</option>
                    <option value="Check Medicine Stock & Pricing">Check Medicine Stock & Pricing</option>
                    <option value="Pharmacist Health Consultation">Pharmacist Health Consultation</option>
                    <option value="Prescription Transfer from Other Pharmacy">Prescription Transfer from Other Pharmacy</option>
                    <option value="General Store & Hours Question">General Store & Hours Question</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Message / Clinical Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your medicine, prescription number, or clinical inquiry..."
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all resize-none"
                  ></textarea>
                  {formErrors.message && (
                    <div className="text-[11px] text-rose-600 mt-1">{formErrors.message}</div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Pharmacist</span>
                </button>

                <div className="text-[11px] text-slate-400 text-center">
                  Protected under HIPAA patient confidentiality standards.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
