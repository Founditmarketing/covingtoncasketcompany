import { Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      className="section-frame relative py-24 lg:py-32 flex items-center justify-center overflow-hidden font-serif bg-cover bg-center"
      style={{ backgroundImage: "url('/covingtoncasketsign.png')" }}
    >
      {/* Consistent dark overlay — uniform color all around */}
      <div className="absolute inset-0 bg-[#152239]/85" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-light drop-shadow-md">
          Have an Immediate Need?
        </h2>
        <p className="font-sans text-xl md:text-2xl text-[#b1a17c] mb-10 font-light">
          We are ready to assist you. Call us directly.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="flex items-center justify-center bg-[#d21243] text-white font-sans font-bold px-8 py-4 uppercase tracking-widest text-xs transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(210,18,67,0.4)] hover:scale-105">
            <Phone className="w-5 h-5 mr-3" />
            (254) 447-5090
          </button>
          
          <span className="italic text-white/50 text-lg">or</span>
          
          <button className="border border-[#b1a17c] bg-[#152239] text-[#b1a17c] hover:bg-[#b1a17c]/10 hover:text-white font-sans font-bold px-8 py-4 uppercase tracking-widest text-xs transition-colors duration-300 w-full sm:w-auto shadow-[0_0_15px_rgba(177,161,124,0.1)]">
            Login to Partner Portal
          </button>
        </div>
      </div>
    </section>
  );
}
