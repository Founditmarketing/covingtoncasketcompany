const trustItems = [
  'Family Owned Since 1924',
  'Premier Partner — Oak Ridge',
  'Southern Funeral Directors',
  'BBB Accredited A+',
  'Florida Directors Guild',
  'Veteran Recognized',
  '280+ Trusted Partners',
  'Serving the Southeast',
];

export default function TrustBanner() {
  // Render the list twice so the -50% scroll loops seamlessly.
  const loop = [...trustItems, ...trustItems];

  return (
    <section className="trust-marquee bg-[#0d1625] py-5 border-y border-[#b1a17c]/15 relative overflow-hidden font-sans">
      {/* Edge fades so items melt in/out at the borders */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0d1625] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0d1625] to-transparent z-10" />

      <div className="marquee-track items-center">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center shrink-0" aria-hidden={i >= trustItems.length}>
            {/* Each label gets symmetric padding; the diamond sits centered between labels */}
            <span className="px-8 md:px-12 text-white/75 text-[11px] md:text-xs font-semibold uppercase tracking-[0.3em] whitespace-nowrap">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#b1a17c] shrink-0" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
