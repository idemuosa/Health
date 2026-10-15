import { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle2, MapPin, Truck } from 'lucide-react';
import { Medicine, STORE_INFO } from '../data/medicines';

export interface CartItem {
  medicine: Medicine;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (medicineId: string, delta: number) => void;
  onRemoveItem: (medicineId: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [fulfillment, setFulfillment] = useState<'pickup' | 'delivery'>('pickup');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);
  const [reservationCode, setReservationCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.medicine.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05; // 5% healthcare dispensary tax
  const deliveryFee = fulfillment === 'delivery' ? (subtotal >= 35 ? 0 : 4.99) : 0;
  const total = subtotal + tax + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setErrorMsg('Please enter customer full name');
      return;
    }
    if (!customerPhone.trim()) {
      setErrorMsg('Please enter phone number for ready-notification SMS');
      return;
    }
    if (fulfillment === 'delivery' && !address.trim()) {
      setErrorMsg('Please provide your delivery address');
      return;
    }

    setErrorMsg('');
    const code = 'CP-' + Math.floor(1000 + Math.random() * 9000);
    setReservationCode(code);
    setIsOrdered(true);
  };

  const handleFinish = () => {
    setIsOrdered(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Medicine Bag & Reserve
                </h3>
                <div className="text-[11px] text-slate-500">
                  {items.length} unique item{items.length !== 1 ? 's' : ''}
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

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {isOrdered ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Order Reservation Confirmed
                  </h4>
                  <div className="text-xs text-slate-500 font-mono mt-1">
                    Pickup Code: <span className="text-lg font-bold text-teal-800">{reservationCode}</span>
                  </div>
                </div>

                <div className="text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 text-left space-y-2">
                  <div className="font-semibold text-slate-900">
                    {fulfillment === 'pickup' ? 'Ready for Pickup in 30 Mins' : 'Out for Courier Delivery'}
                  </div>
                  <p>
                    {fulfillment === 'pickup'
                      ? `Show this code at CuraMed Pharmacy counter or drive-thru window at ${STORE_INFO.addressLine1}.`
                      : `Your order has been assigned to our local temperature-controlled courier.`}
                  </p>
                  <p className="font-medium text-slate-800">
                    Total Due: <span className="font-mono tabular-nums">${total.toFixed(2)}</span> (Pay at pickup or upon delivery)
                  </p>
                </div>

                <div className="text-[11px] text-slate-400">
                  A confirmation SMS has been dispatched to {customerPhone}.
                </div>

                <button
                  onClick={handleFinish}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors cursor-pointer"
                >
                  Return to Store
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center text-slate-500 space-y-3">
                <ShoppingBag className="w-10 h-10 text-slate-300 mx-auto" />
                <div className="text-sm font-semibold text-slate-800">Your bag is currently empty</div>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Explore our verified medicine catalog to add over-the-counter pain relief, vitamins, or chronic care supplies.
                </p>
                <button
                  onClick={onClose}
                  className="mt-3 px-4 py-2 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors cursor-pointer"
                >
                  Browse Medicines
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Items List */}
                <div className="divide-y divide-slate-100">
                  {items.map(({ medicine, quantity }) => (
                    <div key={medicine.id} className="py-3.5 flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                          <span>{medicine.categoryLabel}</span>
                          {medicine.isRxRequired && (
                            <span className="text-amber-800 font-semibold">· Rx</span>
                          )}
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 mt-0.5">
                          {medicine.name}
                        </h4>
                        <div className="text-[11px] text-slate-500 font-mono">
                          ${medicine.price.toFixed(2)} each · {medicine.packSize}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                          <button
                            onClick={() => onUpdateQuantity(medicine.id, -1)}
                            className="p-1 hover:text-slate-900 text-slate-500 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold font-mono tabular-nums text-slate-900">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(medicine.id, 1)}
                            className="p-1 hover:text-slate-900 text-slate-500 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(medicine.id)}
                          className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fulfillment Mode */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-slate-900">Fulfillment Method</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFulfillment('pickup')}
                      className={`p-2.5 rounded-lg border text-left text-xs transition-colors ${
                        fulfillment === 'pickup'
                          ? 'border-teal-700 bg-teal-50/50 font-semibold text-slate-900'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-teal-700" />
                        <span>Store Pickup</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-normal mt-0.5">Ready in 30 mins (Free)</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFulfillment('delivery')}
                      className={`p-2.5 rounded-lg border text-left text-xs transition-colors ${
                        fulfillment === 'delivery'
                          ? 'border-teal-700 bg-teal-50/50 font-semibold text-slate-900'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <Truck className="w-3.5 h-3.5 text-teal-700" />
                        <span>Local Courier</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-normal mt-0.5">
                        {subtotal >= 35 ? 'Free (over $35)' : '$4.99 fee'}
                      </div>
                    </button>
                  </div>
                </div>

                {/* Checkout Contact Details */}
                <form onSubmit={handleCheckout} className="pt-2 space-y-2.5 text-xs">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-0.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-0.5">
                      Mobile Number (for SMS pickup alert)
                    </label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="(555) 000-0000"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700"
                    />
                  </div>

                  {fulfillment === 'delivery' && (
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-0.5">
                        Delivery Address
                      </label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Street, Apt, Springfield, OR"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700"
                      />
                    </div>
                  )}

                  {errorMsg && (
                    <div className="text-[11px] text-rose-600">{errorMsg}</div>
                  )}

                  {/* Pricing Breakdown */}
                  <div className="pt-4 border-t border-slate-100 space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>Subtotal</span>
                      <span className="font-mono tabular-nums">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Dispensary Tax (5%)</span>
                      <span className="font-mono tabular-nums">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Fulfillment</span>
                      <span className="font-mono tabular-nums">
                        {deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-bold text-slate-900">
                      <span>Estimated Total</span>
                      <span className="font-mono tabular-nums text-base">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors cursor-pointer shadow-xs mt-3"
                  >
                    Confirm Reservation / Order
                  </button>

                  <div className="text-[10px] text-slate-400 text-center">
                    Payment collected at store counter, drive-thru, or upon delivery.
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
