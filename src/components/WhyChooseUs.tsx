import craftsmanPolaroid from '../assets/images/craftsman_polaroid_1782308629040.jpg';
import { ShieldCheck, Clock, Palette, PhoneCall } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section
      className="section-frame relative py-24 overflow-hidden text-[#152239] font-serif bg-cover bg-center"
      style={{ backgroundImage: "url('/tanbackgroundtexture.png')" }}
    >
      {/* Tan texture + slight white overlay to keep it light and readable */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center relative z-10">

        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2">
          <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center gap-2">
            <span className="h-px w-6 bg-[#b1a17c]" /> The Covington Advantage
          </span>
          <h2 className="text-4xl md:text-5xl mb-12 font-light text-[#152239]">Why Premiere Homes Choose Us</h2>

          <div className="space-y-10">

            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <ShieldCheck className="w-8 h-8 text-[#b1a17c]" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl text-[#152239] mb-2 font-light">Uncompromising Quality Control</h3>
                <p className="font-sans text-[#152239]/70 text-sm">Every unit undergoes a rigorous 50-point inspection before it leaves our facility. We guarantee flawless finishes and structural integrity.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <Clock className="w-8 h-8 text-[#b1a17c]" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl text-[#152239] mb-2 font-light">Next-Day Delivery Network</h3>
                <p className="font-sans text-[#152239]/70 text-sm">Our dedicated logistics fleet ensures your orders arrive when you need them. No excuses, just reliable service across the Southeast.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <Palette className="w-8 h-8 text-[#b1a17c]" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl text-[#152239] mb-2 font-light">Exclusive Customization</h3>
                <p className="font-sans text-[#152239]/70 text-sm">Stand out in your market. Offer families our hand-painted Storyboard panels, turning a casket into a deeply personal tribute.</p>
              </div>
            </div>

             <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <PhoneCall className="w-8 h-8 text-[#b1a17c]" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl text-[#152239] mb-2 font-light">Direct Director Support</h3>
                <p className="font-sans text-[#152239]/70 text-sm">When you call Covington, you speak to an owner. We provide priority, 24/7 support for our funeral home partners.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Polaroid/Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="card-frame relative p-3 bg-white shadow-[0_20px_50px_rgba(21,34,57,0.25)] transform rotate-3 z-10 max-w-md w-full border border-[#152239]/10">
             <div className="absolute -inset-1 bg-gradient-to-tr from-[#152239] to-[#2a3a5a] -z-10 rounded-sm opacity-50" />
             <img
               src={craftsmanPolaroid}
               alt="Covington Craftsman"
               loading="lazy"
               decoding="async"
               className="w-full h-auto sepia-[.3] contrast-125"
             />
             <div className="pt-6 pb-2 text-center text-[#152239]/70 italic text-sm">
               "Craftsmanship isn't just our job. It's our name."
             </div>
          </div>

          {/* Decorative shapes behind polaroid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[#b1a17c] -z-10 rounded-full blur-[100px] opacity-10" />
        </div>

      </div>
    </section>
  );
}
