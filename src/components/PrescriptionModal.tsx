import { useState } from 'react';
import { X, Upload, FileText, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { STORE_INFO } from '../data/medicines';

interface PrescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrescriptionModal({ isOpen, onClose }: PrescriptionModalProps) {
  const [requestType, setRequestType] = useState<'refill' | 'new_upload'>('refill');
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [rxNumber, setRxNumber] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [fulfillmentMethod, setFulfillmentMethod] = useState<'pickup' | 'delivery'>('pickup');
  const [fileName, setFileName] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!patientName.trim()) newErrors.patientName = 'Please enter patient name';
    if (!phone.trim()) newErrors.phone = 'Please provide contact phone number';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please provide a valid email';

    if (requestType === 'refill' && !rxNumber.trim()) {
      newErrors.rxNumber = 'Please provide your current Rx number (found on prescription label)';
    }

    if (requestType === 'new_upload' && !fileName) {
      newErrors.fileName = 'Please upload a photo or scan of your doctor’s prescription';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const ref = 'RX-' + Math.floor(100000 + Math.random() * 900000);
    setOrderRef(ref);
    setSubmitted(true);
  };

  const handleSimulateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      if (errors.fileName) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next.fileName;
          return next;
        });
      }
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setPatientName('');
    setPhone('');
    setEmail('');
    setRxNumber('');
    setDoctorName('');
    setFileName('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Prescription Refill & Upload
              </h3>
              <div className="text-[11px] text-slate-500">
                Licensed Dispensary · Fast Verification
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Prescription Request Submitted
                </h4>
                <div className="text-xs text-slate-500 font-mono mt-1">
                  Reference Order: <span className="font-bold text-slate-900">{orderRef}</span>
                </div>
              </div>

              <div className="text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 text-left space-y-2">
                <div className="flex items-center gap-2 text-teal-800 font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>Estimated Processing Time: ~30 Minutes</span>
                </div>
                <p>
                  Our pharmacist will review your prescription records and contact your physician or insurance if authorization is required.
                </p>
                <p className="font-medium text-slate-900">
                  Fulfillment: {fulfillmentMethod === 'pickup' ? 'In-Store Pickup or 24/7 Drive-Thru Window' : 'Same-Day Courier Delivery'}
                </p>
              </div>

              <div className="text-xs text-slate-500">
                Questions? Call our direct prescription desk at <span className="font-mono font-semibold text-slate-900">{STORE_INFO.phonePrimary}</span>.
              </div>

              <button
                onClick={handleReset}
                className="w-full py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Type Switcher */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
                <button
                  type="button"
                  onClick={() => setRequestType('refill')}
                  className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    requestType === 'refill'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Refill Existing Rx
                </button>
                <button
                  type="button"
                  onClick={() => setRequestType('new_upload')}
                  className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    requestType === 'new_upload'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Upload New Script
                </button>
              </div>

              {/* Patient Name */}
              <div>
                <label className="block text-slate-700 font-medium mb-1">
                  Patient Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Legal name on prescription"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
                {errors.patientName && (
                  <div className="text-[11px] text-rose-600 mt-1">{errors.patientName}</div>
                )}
              </div>

              {/* Phone and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 000-0000"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                  {errors.phone && (
                    <div className="text-[11px] text-rose-600 mt-1">{errors.phone}</div>
                  )}
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                  {errors.email && (
                    <div className="text-[11px] text-rose-600 mt-1">{errors.email}</div>
                  )}
                </div>
              </div>

              {/* Request Type Specific Field */}
              {requestType === 'refill' ? (
                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Rx Prescription Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={rxNumber}
                    onChange={(e) => setRxNumber(e.target.value)}
                    placeholder="e.g. RX-849201 (Found on bottle label)"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 font-mono focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                  {errors.rxNumber && (
                    <div className="text-[11px] text-rose-600 mt-1">{errors.rxNumber}</div>
                  )}
                </div>
              ) : (
                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Upload Prescription Image / PDF <span className="text-rose-500">*</span>
                  </label>
                  <label className="border-2 border-dashed border-slate-200 hover:border-slate-300 rounded-xl p-4 text-center cursor-pointer block bg-slate-50 transition-colors">
                    <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1.5" />
                    <div className="font-medium text-slate-700">
                      {fileName ? fileName : 'Click to select picture or file'}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Accepts JPG, PNG, PDF up to 10MB
                    </div>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleSimulateUpload}
                      className="hidden"
                    />
                  </label>
                  {errors.fileName && (
                    <div className="text-[11px] text-rose-600 mt-1">{errors.fileName}</div>
                  )}

                  <div className="mt-2">
                    <label className="block text-slate-700 font-medium mb-1">
                      Prescribing Doctor (Optional)
                    </label>
                    <input
                      type="text"
                      value={doctorName}
                      onChange={(e) => setDoctorName(e.target.value)}
                      placeholder="Dr. Name or Medical Center"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                    />
                  </div>
                </div>
              )}

              {/* Pickup or Delivery Option */}
              <div>
                <label className="block text-slate-700 font-medium mb-1">
                  Preferred Fulfillment Method
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label
                    onClick={() => setFulfillmentMethod('pickup')}
                    className={`p-2.5 rounded-lg border text-left cursor-pointer transition-colors ${
                      fulfillmentMethod === 'pickup'
                        ? 'border-teal-700 bg-teal-50/50 text-slate-900 font-semibold'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div>Store or Drive-Thru</div>
                    <div className="text-[10px] text-slate-500 font-normal mt-0.5">Ready in 30 mins (Free)</div>
                  </label>

                  <label
                    onClick={() => setFulfillmentMethod('delivery')}
                    className={`p-2.5 rounded-lg border text-left cursor-pointer transition-colors ${
                      fulfillmentMethod === 'delivery'
                        ? 'border-teal-700 bg-teal-50/50 text-slate-900 font-semibold'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div>Same-Day Delivery</div>
                    <div className="text-[10px] text-slate-500 font-normal mt-0.5">To your door ($4.99 or free &gt;$35)</div>
                  </label>
                </div>
              </div>

              {/* Pharmacist Notes */}
              <div>
                <label className="block text-slate-700 font-medium mb-1">
                  Notes for the Pharmacist (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Allergies, generic substitution preference, etc."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors cursor-pointer shadow-xs mt-2"
              >
                Submit Prescription Request
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                <span>Protected under HIPAA patient privacy rules</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
