const advantages = [
  {
    title: 'Uncompromising Quality Control',
    desc: 'Every unit undergoes a rigorous 50-point inspection before it leaves our facility. We guarantee flawless finishes and structural integrity.',
  },
  {
    title: 'Next-Day Delivery Network',
    desc: 'Our dedicated logistics fleet ensures your orders arrive when you need them. No excuses, just reliable service across the Southeast.',
  },
  {
    title: 'Exclusive Customization',
    desc: 'Stand out in your market. Offer families our hand-painted Storyboard panels, turning a casket into a deeply personal tribute.',
  },
  {
    title: 'Direct Director Support',
    desc: 'When you call Covington, you speak to an owner. We provide priority, 24/7 support for our funeral home partners.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="section-frame relative py-24 overflow-hidden text-[#152239] font-serif bg-cover bg-center"
      style={{ backgroundImage: "url('/tanbackgroundtexture.png')" }}
    >
      {/* Tan texture + slight white overlay to keep it light and readable */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-8 relative z-10">

        {/* Centered header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b1a17c]/60" /> The Covington Advantage <span className="h-px w-8 bg-[#b1a17c]/60" />
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 font-light text-[#152239]">Why Premiere Homes Choose Us</h2>
          <p className="font-sans text-[#152239]/70 text-sm md:text-base leading-relaxed">
            Funeral directors across the Southeast trust Covington for uncompromising craftsmanship, dependable delivery, and the personal service of a family-owned partner.
          </p>
        </div>

        {/* Advantages — balanced two-column grid */}
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {advantages.map((a) => (
            <div key={a.title} className="flex items-start gap-5">
              {/* Elegant gold diamond bullet */}
              <span className="shrink-0 mt-2 w-2.5 h-2.5 rotate-45 bg-[#b1a17c]" aria-hidden="true" />
              <div>
                <h3 className="text-xl text-[#152239] mb-2 font-light">{a.title}</h3>
                <p className="font-sans text-[#152239]/70 text-sm">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
