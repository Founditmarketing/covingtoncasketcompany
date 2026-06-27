interface Props {
  fading: boolean;
}

export default function LoadScreen({ fading }: Props) {
  return (
    <div
      aria-hidden="true"
      style={{ background: 'radial-gradient(circle at 50% 40%, #213458 0%, #152239 48%, #090e18 100%)' }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-[900ms] ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* faint dot texture, matching the hero */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#b1a17c 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />

      <div className="relative flex flex-col items-center px-6">
        {/* Shield — plain transparent PNG, no filter/shadow/mask so it can never
            render a box behind it on iOS Safari. */}
        <div className="load-rise w-24 md:w-32" style={{ animationDelay: '0.1s' }}>
          <img
            src="/covingtoncasketshield.png"
            alt="Covington Casket Company"
            className="block w-full h-auto"
          />
        </div>

        {/* Wordmark — fades in after the shield */}
        <div className="load-rise mt-8 flex flex-col items-center" style={{ animationDelay: '0.75s' }}>
          <div
            className="text-3xl md:text-4xl text-white tracking-[0.22em] pl-[0.22em]"
            style={{ fontFamily: "'Cinzel', serif", fontWeight: 400 }}
          >
            COVINGTON
          </div>
          <div className="mt-3 flex items-center gap-3">
            <span className="h-px w-7 bg-[#b1a17c]/50" />
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#b1a17c]">Casket Company</span>
            <span className="h-px w-7 bg-[#b1a17c]/50" />
          </div>
          <span className="mt-4 font-sans text-[9px] uppercase tracking-[0.35em] text-white/35">Est. 1924</span>
        </div>
      </div>
    </div>
  );
}
