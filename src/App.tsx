/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMedicine } from './components/AboutMedicine';
import { AboutStore } from './components/AboutStore';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-700 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Page Flow: Proposition -> Quality -> Specialties & Facility -> Contact & Location */}
      <main className="flex-1">
        <Hero />

        <AboutMedicine />

        <AboutStore />

        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
