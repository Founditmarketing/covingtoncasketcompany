/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import AboutUs from './components/AboutUs';
import CasketShowcase from './components/CasketShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import Storyboards from './components/Storyboards';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#152239] selection:bg-[#d21243] selection:text-white relative">
      <Header />
      
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

      {/* Chat Floating Element */}
      <div className="fixed bottom-8 right-8 flex items-center gap-4 z-50">
        <button className="w-14 h-14 bg-[#d21243] shadow-[0_0_20px_rgba(210,18,67,0.5)] flex items-center justify-center rounded-sm border border-white/20 hover:scale-105 transition-transform">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
