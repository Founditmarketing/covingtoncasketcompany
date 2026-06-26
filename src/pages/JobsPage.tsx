import { Download } from 'lucide-react';

interface PageProps {
  navigate: (to: string, section?: string) => void;
}

const positions = [
  'Office & Clerical',
  'Welders',
  'Painters',
  'Sewing Machine Operators',
  'Truck Drivers & Delivery',
  'And More',
];

const benefits = ['Competitive Pay', 'Blue Cross Blue Shield Insurance', 'Paid Time Off', 'Paid Holidays'];

export default function JobsPage({ navigate }: PageProps) {
  return (
    <div className="bg-[#152239] text-white font-serif">

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-28 text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#b1a17c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b1a17c]/60" /> Careers <span className="h-px w-8 bg-[#b1a17c]/60" />
          </span>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">Come Join Our Made-in-the-USA Team</h1>
          <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed">
            A great place to work, building a world-class product right here in Andalusia, Alabama.
          </p>
        </div>
      </section>

      {/* Intro + image */}
      <section className="heritage-bg text-[#152239] py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="card-frame relative p-2 bg-white border border-[#152239]/10 order-2 lg:order-1">
            <img src="/about/factory.jpg" alt="Inside the Covington Casket facility" loading="lazy" decoding="async" className="w-full h-auto" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center gap-2">
              <span className="h-px w-6 bg-[#b1a17c]" /> Why Covington
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6">A Great Place to Work</h2>
            <p className="font-sans text-[#152239]/75 text-sm md:text-base leading-relaxed mb-5">
              Covington Casket is a great place to work, where many of our team members have built long, rewarding careers. We were proud to be named <span className="text-[#152239] font-semibold">Best Medium-Size Business</span> by the Andalusia Chamber of Commerce.
            </p>
            <p className="font-sans text-[#152239]/75 text-sm md:text-base leading-relaxed">
              Our people are passionate about quality — we give attention to every detail in a product that serves families during life’s most important moments.
            </p>
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

      {/* Apply — download application */}
      <section className="bg-[#d21243] py-20 lg:py-24 border-t border-white/10 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Apply?</h2>
          <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed mb-10">
            Download our application, fill it out, and submit it to us. We’d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/covington-application.pdf"
              download
              className="btn-swipe inline-flex items-center justify-center gap-2 bg-white text-[#152239] [--btn-swipe:#b1a17c] [--corner:#152239] px-8 py-4 text-xs uppercase"
            >
              <Download className="w-4 h-4" /> Download Application
            </a>
            <a
              href="#/contact"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className="btn-swipe inline-flex items-center justify-center bg-[#152239] text-white [--btn-swipe:#0d1625] px-8 py-4 text-xs uppercase"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
