import { MoveRight } from 'lucide-react';
import craftsmanPolaroid from '../assets/images/craftsman_polaroid_1782308629040.jpg';

interface PageProps {
  navigate: (to: string, section?: string) => void;
}

const timeline = [
  { year: '1924', text: 'Our story begins. The original casket operation is founded, hand-building cloth-covered wood caskets delivered by rail.' },
  { year: '1945', text: 'The company merges with a neighboring factory in Opp, Alabama and incorporates as Covington Casket Company.' },
  { year: '1959', text: 'Metal casket manufacturing begins, broadening the collection for the families we serve.' },
  { year: '1971', text: 'Johnny Williamson — a Lance snack-route salesman — joins the company, acquiring half ownership within six years.' },
  { year: '1978 – 1987', text: 'Johnny’s sons Eddie and Alan join the business, carrying the family into a second generation.' },
  { year: '2020', text: 'Alan relocates to a new Industrial Park facility, more than doubles production, and launches Covington Storyboards nationwide.' },
];

const leadership = [
  { name: 'Alan Williamson', role: 'Owner, President & CEO' },
  { name: 'Paula Williamson', role: 'Ownership & Operations' },
  { name: 'Andrew Williamson', role: 'Sales — Third Generation' },
];

export default function AboutPage({ navigate }: PageProps) {
  return (
    <div className="bg-[#152239] text-white font-serif">

      {/* Page hero */}
      <section className="relative overflow-hidden py-24 lg:py-28 text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#b1a17c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b1a17c]/60" /> Our Heritage <span className="h-px w-8 bg-[#b1a17c]/60" />
          </span>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">The Covington Story</h1>
          <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed">
            A family-owned manufacturer proudly serving funeral homes across the Southeast since 1924 — now in our third generation.
          </p>
        </div>
      </section>

      {/* Intro + image */}
      <section className="heritage-bg text-[#152239] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="card-frame relative p-3 bg-white border border-[#152239]/10 order-2 lg:order-1">
            <img src={craftsmanPolaroid} alt="A Covington craftsman at work" loading="lazy" decoding="async" className="w-full h-auto sepia-[.25] contrast-110" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center gap-2">
              <span className="h-px w-6 bg-[#b1a17c]" /> Thank You for Visiting
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6">Three Generations of Hometown Craftsmanship</h2>
            <p className="font-sans text-[#152239]/75 text-sm md:text-base leading-relaxed mb-5">
              We are honored to have served families across the Southeast since 1924. Behind every casket are real hometown people — many who have known profound loss personally — who hand-assemble each order with care.
            </p>
            <p className="font-sans text-[#152239]/75 text-sm md:text-base leading-relaxed">
              Today, three generations of the Williamson family are involved in the business, continuing a legacy built on quality, integrity, and service to the funeral directors and families who count on us.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-[#0d1625] py-20 border-y border-[#b1a17c]/15 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-serif italic text-[#b1a17c] text-2xl md:text-3xl leading-snug">
            &ldquo;To think — it all started with a pack of Lance crackers.&rdquo;
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#152239] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#b1a17c]/60" /> A Century of Service <span className="h-px w-8 bg-[#b1a17c]/60" />
            </span>
            <h2 className="text-4xl md:text-5xl font-light">Our Journey</h2>
          </div>
          <div className="space-y-8">
            {timeline.map((t) => (
              <div key={t.year} className="flex gap-6 items-start border-b border-white/10 pb-8 last:border-0">
                <div className="shrink-0 w-28 md:w-36 text-[#b1a17c] font-serif text-xl md:text-2xl">{t.year}</div>
                <p className="font-sans text-white/70 text-sm md:text-base leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="heritage-bg text-[#152239] py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b1a17c]/60" /> Family Leadership <span className="h-px w-8 bg-[#b1a17c]/60" />
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-12">The Williamson Family</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {leadership.map((p) => (
              <div key={p.name} className="flex flex-col items-center">
                <span className="w-3 h-3 rotate-45 bg-[#b1a17c] mb-5" aria-hidden="true" />
                <h3 className="text-xl md:text-2xl font-light mb-1">{p.name}</h3>
                <p className="font-sans text-[#152239]/60 text-xs uppercase tracking-widest">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area + CTA */}
      <section className="bg-[#d21243] py-20 lg:py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-white/90 font-sans uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/50" /> Our Service Area <span className="h-px w-8 bg-white/50" />
          </span>
          <h2 className="text-3xl md:text-4xl font-light mb-6">Rooted in Andalusia, Alabama</h2>
          <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed mb-10">
            From our facility in Andalusia — about 90 minutes south of Montgomery and 30 minutes from the Florida panhandle — and distribution centers across Mississippi, Louisiana, Georgia, and North Alabama, we proudly serve more than 280 funeral homes throughout the Southeast.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="btn-swipe group inline-flex items-center gap-3 bg-white text-[#152239] [--btn-swipe:#b1a17c] [--corner:#152239] px-8 py-4 text-xs uppercase"
          >
            Become a Covington Partner <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </section>

    </div>
  );
}
