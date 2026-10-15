/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMedicine } from './components/AboutMedicine';
import { MedicineStore } from './components/MedicineStore';
import { AboutStore } from './components/AboutStore';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { MedicineDetailModal } from './components/MedicineDetailModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { Medicine } from './data/medicines';
import { Check } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const cartItemIds = useMemo(() => {
    return new Set(cart.map((item) => item.medicine.id));
  }, [cart]);

  const totalCartCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 2800);
  };

  const handleAddToCart = (medicine: Medicine) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.medicine.id === medicine.id);
      if (existing) {
        return prev.map((item) =>
          item.medicine.id === medicine.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { medicine, quantity: 1 }];
    });
    showToast(`Added ${medicine.name} to Medicine Bag`);
  };

  const handleUpdateQuantity = (medicineId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.medicine.id === medicineId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const handleRemoveFromCart = (medicineId: string) => {
    setCart((prev) => prev.filter((item) => item.medicine.id !== medicineId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-700 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Page Flow: Proposition -> Mechanism -> Catalog -> Store & Team -> Contact & Location */}
      <main className="flex-1">
        <Hero />

        <AboutMedicine />

        <MedicineStore
          onSelectMedicine={(med) => setSelectedMedicine(med)}
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        <AboutStore />

        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Clinical Detail Modal */}
      <MedicineDetailModal
        medicine={selectedMedicine}
        onClose={() => setSelectedMedicine(null)}
        onAddToCart={handleAddToCart}
        isInCart={selectedMedicine ? cartItemIds.has(selectedMedicine.id) : false}
      />

      {/* Interactive Cart & Order Reservation Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Action Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-medium py-3 px-4 rounded-xl shadow-lg border border-slate-700 flex items-center gap-2 animate-fade-in">
          <div className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 font-bold text-teal-400 hover:text-teal-300 underline underline-offset-2"
          >
            View Bag
          </button>
        </div>
      )}
    </div>
  );
}
