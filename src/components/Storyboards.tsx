import { motion } from 'motion/react';
import { Paintbrush } from 'lucide-react';

export default function Storyboards() {
  return (
    <section className="pt-24 pb-10 bg-[#0d1625] text-white relative overflow-hidden font-serif border-t border-white/5">

      {/* Abstract dark texture */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#152239] via-[#0d1625] to-[#1c2c48] opacity-80 mix-blend-overlay" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#b1a17c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">

        {/* Left: Content */}
        <div className="w-full lg:w-5/12">
          <div className="flex items-center space-x-3 mb-6">
            <Paintbrush className="w-5 h-5 text-[#b1a17c]" />
            <span className="font-sans font-bold tracking-[0.4em] text-[#b1a17c] text-[10px] uppercase">Exclusive Offering</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 font-light drop-shadow-md">
            The Covington <br/>
            <span className="italic text-[#b1a17c]">Storyboards</span>
          </h2>
          <p className="font-sans text-white/70 text-sm mb-8 leading-relaxed">
            Elevate your service offerings. Our in-house artists hand-paint custom scenes directly onto the casket lid panels, transforming a standard unit into a deeply personal, stunning work of art that families will cherish.
          </p>
          <ul className="space-y-4 mb-10 font-sans text-white/80 text-sm">
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#d21243] rounded-full mr-3" />
              Custom Portraits
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#d21243] rounded-full mr-3" />
              Military & Civic Tributes
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#d21243] rounded-full mr-3" />
              Beloved Landscapes & Hobbies
            </li>
          </ul>
          <button className="bg-transparent border border-[#b1a17c] text-[#b1a17c] hover:bg-[#b1a17c]/10 hover:text-white font-sans font-bold px-8 py-4 uppercase tracking-widest text-xs transition-colors duration-300">
            View Storyboard Gallery
          </button>
        </div>

        {/* Right: Cascading Images */}
        <div className="w-full lg:w-7/12 relative h-[500px] md:h-[600px]">

          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-frame absolute top-10 left-0 w-2/3 shadow-[0_0_30px_rgba(0,0,0,0.8)] z-10 border border-white/20 p-2 bg-white/5 backdrop-blur-sm rounded-sm"
          >
            <img src="/LIVES-storyboard.avif" alt="&ldquo;Because He Lives&rdquo; landscape storyboard" loading="lazy" decoding="async" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-frame absolute top-1/3 right-0 w-2/3 shadow-[0_0_30px_rgba(0,0,0,0.8)] z-20 border border-white/20 p-2 bg-white/5 backdrop-blur-sm rounded-sm"
          >
            <img src="/ARMY-storyboard.avif" alt="United States Army veteran tribute storyboard" loading="lazy" decoding="async" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="card-frame absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 shadow-[0_0_40px_rgba(0,0,0,0.9)] z-30 border border-white/20 p-2 bg-[#152239] rounded-sm"
          >
            <img src="/KING-storyboard.avif" alt="&ldquo;Gone to See the King&rdquo; tribute storyboard" loading="lazy" decoding="async" className="w-full h-auto object-cover opacity-95 hover:opacity-100 transition-opacity" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
