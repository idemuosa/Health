import { useEffect } from 'react';
import { X, Check, Plus, AlertTriangle, ShieldCheck, Thermometer, Factory } from 'lucide-react';
import { Medicine } from '../data/medicines';

interface MedicineDetailModalProps {
  medicine: Medicine | null;
  onClose: () => void;
  onAddToCart: (medicine: Medicine) => void;
  isInCart: boolean;
}

export function MedicineDetailModal({
  medicine,
  onClose,
  onAddToCart,
  isInCart,
}: MedicineDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (medicine) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [medicine, onClose]);

  if (!medicine) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <span className="font-mono uppercase font-semibold text-slate-500">
                {medicine.categoryLabel}
              </span>
              <span>·</span>
              <span className="font-semibold text-teal-700">
                Over The Counter (OTC)
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">{medicine.name}</h3>
            <div className="text-xs text-slate-600 mt-0.5">
              Active Ingredient: <span className="font-semibold text-slate-900">{medicine.genericName}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
          {/* Key Quick Attributes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
              <div className="text-[11px] text-slate-400">Strength</div>
              <div className="font-bold text-slate-900 mt-0.5 font-mono">{medicine.dosageStrength}</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
              <div className="text-[11px] text-slate-400">Dosage Form</div>
              <div className="font-bold text-slate-900 mt-0.5">{medicine.form}</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
              <div className="text-[11px] text-slate-400">Packaging</div>
              <div className="font-bold text-slate-900 mt-0.5">{medicine.packSize}</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
              <div className="text-[11px] text-slate-400">Availability</div>
              <div className="font-bold text-teal-700 mt-0.5">
                {medicine.inStock ? 'In Stock (Immediate)' : 'Restocking Soon'}
              </div>
            </div>
          </div>

          {/* Clinical Indications */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-700" />
              <span>Indications & Clinical Uses</span>
            </h4>
            <p className="text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              {medicine.indication}
            </p>
          </div>

          {/* Dosage and Administration */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1.5">
              Dosage & Administration Instructions
            </h4>
            <p className="text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              {medicine.dosageInstructions}
            </p>
          </div>

          {/* Precautions and Warnings */}
          <div>
            <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Contraindications & Clinical Warnings</span>
            </h4>
            <div className="text-slate-600 leading-relaxed bg-rose-50/50 p-3.5 rounded-xl border border-rose-200">
              {medicine.precautions}
            </div>
          </div>

          {/* Storage and Manufacturer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Thermometer className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
              <div>
                <div className="font-semibold text-slate-900">Storage Specification</div>
                <div className="text-slate-500 text-[11px] mt-0.5">{medicine.storageCondition}</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Factory className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
              <div>
                <div className="font-semibold text-slate-900">Licensed Manufacturer</div>
                <div className="text-slate-500 text-[11px] mt-0.5">{medicine.manufacturer}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Price & Actions */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-4">
          <div>
            <div className="text-[11px] text-slate-400 font-mono">Dispensary Price</div>
            <div className="text-xl font-bold text-slate-900 font-mono tabular-nums">
              ${medicine.price.toFixed(2)}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Close
            </button>

            <button
              onClick={() => onAddToCart(medicine)}
              className={`px-5 py-2.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 ${
                isInCart
                  ? 'bg-teal-50 text-teal-800 border border-teal-300'
                  : 'bg-teal-700 hover:bg-teal-800 text-white shadow-xs'
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-4 h-4 text-teal-700" />
                  <span>Added to Bag</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Medicine Bag</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
