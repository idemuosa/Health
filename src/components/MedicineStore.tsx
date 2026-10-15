import { useState, useMemo } from 'react';
import { Search, Plus, Check, Info, AlertCircle } from 'lucide-react';
import { MEDICINES, CATEGORIES, Medicine } from '../data/medicines';

interface MedicineStoreProps {
  onSelectMedicine: (medicine: Medicine) => void;
  onAddToCart: (medicine: Medicine) => void;
  cartItemIds: Set<string>;
}

export function MedicineStore({
  onSelectMedicine,
  onAddToCart,
  cartItemIds,
}: MedicineStoreProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredMedicines = useMemo(() => {
    return MEDICINES.filter((med) => {
      const matchesCategory =
        selectedCategory === 'all' || med.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        med.name.toLowerCase().includes(q) ||
        med.genericName.toLowerCase().includes(q) ||
        med.brand.toLowerCase().includes(q) ||
        med.indication.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="store-catalog" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-semibold text-teal-800 tracking-wide uppercase mb-1">
              Store Catalog & Dispensary
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Medicines & Health Supplies
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Authentic medications, diagnostics, and daily healthcare supplies stored under certified conditions. Reserve online for fast in-store pickup or same-day local delivery.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by brand or active ingredient..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Interactive Category Filter Tabs (Segmented Buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Results Count & Notice */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 pb-2 border-b border-slate-100">
          <div>
            Showing <span className="font-semibold text-slate-900 tabular-nums">{filteredMedicines.length}</span> verified products
            {searchQuery && (
              <span> for "<span className="text-slate-900 font-medium">{searchQuery}</span>"</span>
            )}
          </div>
          <div className="text-[11px] text-slate-500 hidden sm:block">
            Prices in USD (incl. standard dispensary taxes)
          </div>
        </div>

        {/* Products Grid */}
        {filteredMedicines.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-slate-50 border border-dashed border-slate-200 max-w-lg mx-auto">
            <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <div className="text-sm font-semibold text-slate-900">No matching medicines found</div>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try searching by generic name (e.g., Paracetamol, Cetirizine, Omeprazole) or browse by category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-teal-700 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMedicines.map((med) => {
              const inCart = cartItemIds.has(med.id);
              return (
                <div
                  key={med.id}
                  className="group rounded-xl border border-slate-200 bg-white p-5 flex flex-col justify-between shadow-xs hover:border-slate-300 hover:shadow-sm transition-all"
                >
                  <div>
                    {/* Unboxed Metadata Header (NO PILL BADGE SANDWICH) */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-mono text-[11px] tracking-wide uppercase font-medium text-slate-500">
                        {med.categoryLabel}
                      </span>
                    </div>

                    {/* Medicine Title */}
                    <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-teal-700 transition-colors">
                      {med.name}
                    </h3>

                    {/* Active Ingredient / Generic */}
                    <div className="text-xs text-slate-500 mt-0.5 font-medium">
                      {med.genericName}
                    </div>

                    {/* Pack & Form info */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2 font-mono">
                      <span>{med.dosageStrength}</span>
                      <span>·</span>
                      <span>{med.packSize}</span>
                    </div>

                    {/* Indication excerpt */}
                    <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                      {med.indication}
                    </p>
                  </div>

                  {/* Bottom: Price baseline & Action Controls */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] text-slate-400 font-mono">Price</div>
                      <div className="text-lg font-bold text-slate-900 font-mono tabular-nums">
                        ${med.price.toFixed(2)}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectMedicine(med)}
                        title="View Clinical Details and Dosage"
                        className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onAddToCart(med)}
                        className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                          inCart
                            ? 'bg-teal-50 text-teal-800 border border-teal-200'
                            : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-teal-700" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Bag</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Medicine Assistance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-bold text-slate-900">
              Need a medicine or wellness product not listed here?
            </div>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
              We stock over 5,000 branded and generic healthcare products. If your required item is not featured in our online catalog, contact our dispensary directly for immediate stock verification.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-white border border-slate-300 hover:border-slate-400 rounded-lg transition-colors whitespace-nowrap shadow-xs shrink-0"
          >
            Inquire Medicine Stock
          </a>
        </div>
      </div>
    </section>
  );
}
