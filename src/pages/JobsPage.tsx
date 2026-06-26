import { MoveRight } from 'lucide-react';

interface PageProps {
  navigate: (to: string, section?: string) => void;
}

const reasons = [
  { title: 'Built to Last', desc: 'Many of our team members have been with Covington for decades. We hire for the long term and grow our people from within.' },
  { title: 'Award-Winning', desc: "Recently named Best Medium-Size Business by the Andalusia Chamber of Commerce — and we're still growing." },
  { title: 'Meaningful Work', desc: 'Every order helps a family honor someone they love. Our work matters, and so does the care behind it.' },
  { title: 'World-Class Product', desc: 'We take pride in the detail of a truly world-class product, made right here in the USA.' },
];

const positions = [
  'Office & Clerical',
  'Welders',
  'Painters',
  'Sewing Machine Operators',
  'Truck Drivers & Delivery',
  'And More',
];

const benefits = [
  'Competitive Pay',
  'Blue Cross Blue Shield Insurance',
  'Paid Time Off',
  'Paid Holidays',
];

export default function JobsPage({ navigate }: PageProps) {
  return (
    <div className="bg-[#152239] text-white font-serif">

      {/* Page hero */}
      <section className="relative overflow-hidden py-24 lg:py-28 text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#b1a17c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b1a17c]/60" /> Careers <span className="h-px w-8 bg-[#b1a17c]/60" />
          </span>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">Join Our Made-in-the-USA Team</h1>
          <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed">
            We&rsquo;re a growing, family-owned manufacturer in a brand-new facility that feels like home. Come build something that matters.
          </p>
        </div>
      </section>

      {/* Why work here */}
      <section className="heritage-bg text-[#152239] py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#b1a17c]/60" /> Why Covington <span className="h-px w-8 bg-[#b1a17c]/60" />
            </span>
            <h2 className="text-4xl md:text-5xl font-light">A Place to Grow</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {reasons.map((r) => (
              <div key={r.title} className="flex items-start gap-5">
                <span className="shrink-0 mt-2 w-2.5 h-2.5 rotate-45 bg-[#b1a17c]" aria-hidden="true" />
                <div>
                  <h3 className="text-xl mb-2 font-light">{r.title}</h3>
                  <p className="font-sans text-[#152239]/70 text-sm">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions + benefits */}
      <section className="bg-[#152239] py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-8">Open Roles</h2>
            <ul className="space-y-4">
              {positions.map((p) => (
                <li key={p} className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="w-2.5 h-2.5 rotate-45 bg-[#b1a17c] shrink-0" aria-hidden="true" />
                  <span className="font-sans text-white/80 uppercase tracking-widest text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-8">Benefits</h2>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="w-2.5 h-2.5 rotate-45 bg-[#b1a17c] shrink-0" aria-hidden="true" />
                  <span className="font-sans text-white/80 uppercase tracking-widest text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="bg-[#d21243] py-20 lg:py-24 border-t border-white/10 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Apply?</h2>
          <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed mb-10">
            We&rsquo;d love to hear from you. Reach out and we&rsquo;ll get an application into your hands and answer any questions about joining the Covington team.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="btn-swipe group inline-flex items-center gap-3 bg-white text-[#152239] [--btn-swipe:#b1a17c] [--corner:#152239] px-8 py-4 text-xs uppercase"
          >
            Apply Now <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </section>

    </div>
  );
}
