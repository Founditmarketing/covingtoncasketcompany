import { Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      className="section-frame relative py-24 lg:py-32 flex items-center justify-center overflow-hidden font-serif bg-cover bg-center"
      style={{ backgroundImage: "url('/covingtoncasketsign.png')" }}
    >
      {/* Consistent dark overlay — uniform color all around */}
      <div className="absolute inset-0 bg-[#152239]/85" />

      <div className="relative z-10 max-w-4xl mx-auto px-8 lg:px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-light drop-shadow-md">
          Have an Immediate Need?
        </h2>
        <p className="font-sans text-xl md:text-2xl text-[#b1a17c] mb-10 font-light">
          We are ready to assist you. Call us directly.
        </p>
        
        <div className="flex justify-center">
          <a href="tel:+18007265570" className="btn-swipe flex items-center justify-center bg-[#d21243] text-white [--btn-swipe:#152239] font-sans font-bold px-8 py-4 uppercase tracking-widest text-xs w-full sm:w-auto">
            <Phone className="w-5 h-5 mr-3" />
            1-800-726-5570
          </a>
        </div>
      </div>
    </section>
  );
}
