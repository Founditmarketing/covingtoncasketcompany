import { useState, useRef } from 'react';
import type { TransitionEvent as ReactTransitionEvent, PointerEvent as ReactPointerEvent } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const caskets = [
  {
    id: 1,
    name: "Crimson",
    tagline: "The Crimson Series",
    desc: "A bold, deep-gloss finish with a personalized pictorial storyboard.",
    image: "/CrimsonWinsert-casket.png",
  },
  {
    id: 2,
    name: "Augusta",
    tagline: "The Augusta Series",
    desc: "Understated elegance honoring a life of sport and quiet leisure.",
    image: "/AugustaWinsert-casket.png",
  },
  {
    id: 3,
    name: "Hunting",
    tagline: "The Heritage Series",
    desc: "A warm hardwood tribute for the devoted hunter and outdoorsman.",
    image: "/HuntingInsert-casket.png",
  },
];

const N = caskets.length;
const SLOT = 82;                  // % of full viewport width per card slot
const OFFSET = (100 - SLOT) / 2;  // centers the active card -> symmetric peek

export default function CasketShowcase() {
  // Triple-rendered for a seamless infinite loop.
  const items = [...caskets, ...caskets, ...caskets];
  const [pos, setPos] = useState(N);
  const [withTransition, setWithTransition] = useState(true);
  const animating = useRef(false);
  const dragX = useRef<number | null>(null);
  const active = ((pos % N) + N) % N;

  const move = (dir: number) => {
    if (animating.current) return;
    animating.current = true;
    setWithTransition(true);
    setPos((p) => p + dir);
  };

  const goTo = (i: number) => {
    if (animating.current || i === active) return;
    animating.current = true;
    setWithTransition(true);
    setPos(N + i);
  };

  const handleTransitionEnd = (e: ReactTransitionEvent) => {
    if (e.propertyName !== 'transform' || e.target !== e.currentTarget) return;
    // Snap back into the middle band without animation -> seamless wrap.
    setPos((p) => {
      if (p < N) { setWithTransition(false); return p + N; }
      if (p >= 2 * N) { setWithTransition(false); return p - N; }
      return p;
    });
    animating.current = false;
  };

  const onPointerDown = (e: ReactPointerEvent) => { dragX.current = e.clientX; };
  const onPointerUp = (e: ReactPointerEvent) => {
    if (dragX.current == null) return;
    const dx = e.clientX - dragX.current;
    dragX.current = null;
    if (dx < -50) move(1);
    else if (dx > 50) move(-1);
  };

  return (
    <section className="py-24 bg-[#0d1625] relative border-t border-white/5 font-serif overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#b1a17c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Header (contained) */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center gap-2">
              <span className="h-px w-6 bg-[#b1a17c]" /> Signature Work
            </span>
            <h2 className="text-4xl md:text-5xl text-white mb-4 font-light">Explore Our Collections</h2>
            <p className="font-sans text-white/60 max-w-2xl text-sm">
              Every Covington casket is manufactured with precision and care, ensuring a flawless presentation for the families you serve.
            </p>
          </div>
          <button className="hidden md:flex items-center text-[#b1a17c] font-sans font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group">
            View Full Catalog
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Full-width peek carousel */}
      <div className="relative z-10 overflow-hidden">
        <div
          className="flex select-none"
          style={{
            transform: `translateX(${-pos * SLOT + OFFSET}%)`,
            transition: withTransition ? 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          {items.map((c, i) => (
            <div key={i} className="shrink-0 px-3" style={{ width: `${SLOT}%` }}>
              <div className="card-frame relative bg-[#152239] rounded-sm overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] h-[440px] md:h-[560px] flex flex-col">
                {/* Casket — fully visible, no overlay */}
                <div className="flex-1 min-h-0 relative flex items-center justify-center p-6">
                  <img
                    src={c.image}
                    alt={`Covington ${c.name} casket`}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="max-h-full w-auto object-contain drop-shadow-2xl"
                  />
                </div>
                {/* Caption */}
                <div className="px-8 pb-8 pt-3 border-t border-white/10">
                  <span className="text-[#b1a17c] font-sans uppercase tracking-[0.3em] text-[9px] flex items-center gap-2 mb-2">
                    <span className="h-px w-5 bg-[#b1a17c]" /> {c.tagline}
                  </span>
                  <h3 className="text-2xl md:text-3xl text-white font-light mb-1">{c.name}</h3>
                  <p className="font-sans text-white/60 text-xs md:text-sm max-w-md">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation: arrows + position dots */}
      <div className="flex items-center justify-center gap-6 mt-8 relative z-10">
        <button onClick={() => move(-1)} aria-label="Previous casket" className="w-11 h-11 rounded-full border border-[#b1a17c]/40 text-[#b1a17c] hover:bg-[#d21243] hover:text-white hover:border-[#d21243] flex items-center justify-center transition-all duration-300 cursor-pointer">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          {caskets.map((c, i) => (
            <button
              key={c.id}
              onClick={() => goTo(i)}
              aria-label={`Show the ${c.name} casket`}
              aria-pressed={active === i}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${active === i ? 'w-8 bg-[#b1a17c]' : 'w-2 bg-white/25 hover:bg-white/50'}`}
            />
          ))}
        </div>
        <button onClick={() => move(1)} aria-label="Next casket" className="w-11 h-11 rounded-full border border-[#b1a17c]/40 text-[#b1a17c] hover:bg-[#d21243] hover:text-white hover:border-[#d21243] flex items-center justify-center transition-all duration-300 cursor-pointer">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
}
