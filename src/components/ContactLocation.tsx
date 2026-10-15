import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Copy, Check, Send, Navigation, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/medicines';
import { store1Img } from '../assets/images';

export function ContactLocation() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'General Healthcare Inquiry',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

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
    const generatedTicket = 'NLH-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedTicket);
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      topic: 'General Healthcare Inquiry',
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
            Get in Touch & Visit Us
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Contact NewLight Health Services
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Reach out to our clinical staff via phone or email, or visit our facility in Benin City, Edo State for personalized medical care and consultations.
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
                Speak directly with our healthcare personnel and consultation desk.
              </p>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-slate-500 text-[11px] font-medium">Primary Line & WhatsApp</div>
                  <div className="flex items-center justify-between mt-0.5">
                    <a
                      href={`tel:${STORE_INFO.phonePrimary}`}
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
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200/60 text-[11px] text-slate-400">
              Available during opening hours for prompt support
            </div>
          </div>

          {/* Channel 2: Email Address */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Email Address
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Send health inquiries, medical questions, or general feedback.
              </p>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-slate-500 text-[11px] font-medium">Official Contact Email</div>
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
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200/60 text-[11px] text-slate-400">
              Responsive electronic communication
            </div>
          </div>

          {/* Channel 3: Physical Location & Address */}
          <div id="location" className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Physical Address
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Visit our center in Benin City, Edo State, Nigeria.
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
                  `${STORE_INFO.addressLine1}, ${STORE_INFO.addressLine2}, ${STORE_INFO.cityStateZip}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Map</span>
              </a>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Hours vs Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Operating Hours & Facility Snapshot (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-teal-700" />
                  <h3 className="text-base font-bold text-slate-900">
                    Opening & Consultation Hours
                  </h3>
                </div>
              </div>

              <div className="divide-y divide-slate-100 text-xs mt-2">
                <div className="py-2.5 flex items-center justify-between text-slate-700">
                  <span>Monday – Friday</span>
                  <span className="font-mono tabular-nums">8:00 AM – 9:00 PM</span>
                </div>
                <div className="py-2.5 flex items-center justify-between text-slate-700">
                  <span>Saturday</span>
                  <span className="font-mono tabular-nums">8:00 AM – 8:00 PM</span>
                </div>
                <div className="py-2.5 flex items-center justify-between text-slate-700">
                  <span>Sunday</span>
                  <span className="font-mono tabular-nums">10:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Facility Location Photo Card */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={facilityExteriorImg}
                  alt="NewLight Health Services entrance and location in Benin City"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-3 text-white text-xs font-semibold">
                  Facility Entrance & Center Location
                </div>
              </div>
              <div className="p-4 text-xs text-slate-600">
                <div className="font-semibold text-slate-900 mb-1">Easy Walk-In & Parking Access</div>
                Located at No. 4 Atamu Street, off Musheshe, off Upper Sakponba Road in Benin City.
              </div>
            </div>
          </div>

          {/* Right: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-teal-700" />
              <h3 className="text-base font-bold text-slate-900">
                Send Us a Message
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              Have a question or need assistance? Fill out the form below and our team will get back to you.
            </p>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4 bg-white rounded-xl p-6 border border-teal-200">
                <div className="w-12 h-12 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Message Received</h4>
                  <div className="text-xs text-slate-500 font-mono mt-1">
                    Ticket ID: <span className="font-bold text-slate-800">{ticketId}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. We will review your message and reply to <span className="font-semibold text-slate-900">{formData.email}</span> shortly.
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
                    placeholder="e.g. Osasere Agbonlahor"
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
                      placeholder="09066302198"
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
                    <option value="General Healthcare Inquiry">General Healthcare Inquiry</option>
                    <option value="Clinical Consultation Request">Clinical Consultation Request</option>
                    <option value="Medication Inquiry">Medication Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your healthcare inquiry..."
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
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
