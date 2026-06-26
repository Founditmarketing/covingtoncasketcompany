import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

const caskets = [
  { name: 'Crimson', src: '/CrimsonWinsert-casket.png', swatch: '#9b1c2e' },
  { name: 'Augusta', src: '/AugustaWinsert-casket.png', swatch: '#3d4b41' },
  { name: 'Hunting', src: '/HuntingInsert-casket.png', swatch: '#7a5230' },
];

export default function Hero({ reveal = true }: { reveal?: boolean }) {
  const [selected, setSelected] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Slow the background video down a little for a calm, drifting feel.
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.7;
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-7rem)] lg:min-h-[680px] flex flex-col md:flex-row bg-[#152239] overflow-hidden text-white font-serif">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="/meadowbackground.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        onLoadedMetadata={(e) => { e.currentTarget.playbackRate = 0.7; }}
      />
      {/* Blue overlay over the video */}
      <div className="absolute inset-0 z-[1] bg-[#152239]/92 pointer-events-none" />
      {/* Abstract radial pattern overlay */}
      <div className="absolute inset-0 z-[2] opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#b1a17c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Left: Content */}
      <div className="w-full md:w-1/2 lg:w-[60%] px-6 lg:pl-16 lg:pr-6 py-12 flex flex-col justify-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={reveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-2">
            <span className="h-px w-8 bg-[#b1a17c]" /> Family Owned Artistry
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-light leading-[1.1] mb-8 drop-shadow-2xl">
            Honor their legacy.<br className="lg:hidden" /> <span className="text-[#b1a17c]">Ask for Covington.</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-lg leading-relaxed mb-10 font-sans">
            Custom, world-class caskets and artistic, pictorial Storyboards that help you tell your loved one's story. We manufacture and serve premiere funeral homes across the Southeast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-swipe px-8 py-4 bg-[#d21243] text-white [--btn-swipe:#152239] text-xs font-bold font-sans uppercase tracking-widest flex items-center justify-center">
              Discover Caskets
            </button>
            <button className="btn-swipe px-8 py-4 bg-[#b1a17c] text-[#152239] [--btn-swipe:#f9f8f6] [--corner:#152239] text-xs font-bold font-sans uppercase tracking-widest flex items-center justify-center">
              Personalize Storyboards
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right: Oversized casket bleeding off the right edge + working color switcher */}
      <div className="w-full md:w-1/2 lg:w-[40%] relative flex flex-col">
        {/* Decorative radial glow behind the casket */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[30rem] md:h-[30rem] bg-[#1c2c48] rounded-full blur-3xl opacity-60 pointer-events-none" />

        {/* Casket stage */}
        <div className="relative flex-1 min-h-[320px] md:min-h-[480px]">
          <motion.img
            key={caskets[selected].src}
            src={caskets[selected].src}
            alt={`Covington ${caskets[selected].name} storyboard casket`}
            initial={{ opacity: 0, x: 200 }}
            animate={reveal ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="absolute top-1/2 left-[8%] -translate-y-1/2 md:mt-12 w-[128%] max-w-none object-contain drop-shadow-2xl pointer-events-none z-10"
          />
        </div>

        {/* Working color switcher */}
        <div className={`relative z-20 flex flex-col items-center gap-3 pb-12 lg:pb-16 transition-opacity duration-700 delay-300 ${reveal ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-5">
            {caskets.map((c, i) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setSelected(i)}
                aria-label={`Show the ${c.name} casket`}
                aria-pressed={selected === i}
                className={`w-9 h-9 rounded-full border transition-all duration-300 hover:scale-110 cursor-pointer ${
                  selected === i
                    ? 'border-white ring-2 ring-[#d21243] ring-offset-2 ring-offset-[#152239] scale-110'
                    : 'border-white/30'
                }`}
                style={{ backgroundColor: c.swatch }}
              />
            ))}
          </div>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#b1a17c]">
            {caskets[selected].name} Series
          </span>
        </div>
      </div>
    </section>
  );
}
