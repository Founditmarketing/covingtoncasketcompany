/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import AboutUs from './components/AboutUs';
import CasketShowcase from './components/CasketShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import Storyboards from './components/Storyboards';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#152239] selection:bg-[#d21243] selection:text-white relative">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Hero />
        <TrustBanner />
        <AboutUs />
        <CasketShowcase />
        <WhyChooseUs />
        <Storyboards />
        <CTASection />
      </main>

      <Footer />

      {/* Floating contact widget — hidden while the mobile menu is open */}
      <ChatWidget hidden={menuOpen} />
    </div>
  );
}
