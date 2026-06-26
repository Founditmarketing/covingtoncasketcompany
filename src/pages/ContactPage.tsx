import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Phone, MapPin, Mail, Send } from 'lucide-react';

interface PageProps {
  navigate: (to: string, section?: string) => void;
}

const PHONE_DISPLAY = '1-800-726-5570';
const PHONE_HREF = 'tel:+18007265570';

const staff = [
  { name: 'Alan Williamson', role: 'President / CEO', email: 'awilliamson@covingtoncasket.com' },
  { name: 'Andrew Williamson', role: 'Sales', email: 'andrew@covingtoncasket.com' },
  { name: 'Debbie Turner', role: 'Customer Service', email: 'debbie@covingtoncasket.com' },
  { name: 'Beth Davis', role: 'Office Manager', email: 'beth@covingtoncasket.com' },
  { name: 'Breanna Willis', role: 'Warehouse Sales', email: 'breanna@covingtoncasket.com' },
  { name: 'Steven Previtt', role: 'Plant Operations', email: null },
];

const inputCls =
  'w-full bg-white border border-[#152239]/15 focus:border-[#b1a17c] outline-none text-[#152239] text-sm px-4 py-3 rounded-none placeholder:text-[#152239]/40 transition-colors';

export default function ContactPage(_props: PageProps) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', home: '', email: '', phone: '', message: '' });
  const update =
    (k: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-[#152239] text-white font-serif">

      {/* Page hero */}
      <section className="relative overflow-hidden py-24 lg:py-28 text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#b1a17c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b1a17c]/60" /> Get in Touch <span className="h-px w-8 bg-[#b1a17c]/60" />
          </span>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">Contact Us</h1>
          <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed">
            We&rsquo;re here to assist funeral professionals across the Southeast — day or night.
          </p>
          <p className="font-sans text-[#b1a17c] text-xs uppercase tracking-widest mt-5">
            Covington Casket sells exclusively to licensed funeral homes
          </p>
        </div>
      </section>

      {/* Info + form */}
      <section className="heritage-bg text-[#152239] py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">

          {/* Left: contact info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-8">Reach Covington</h2>

            <div className="space-y-6 mb-12">
              <a href={PHONE_HREF} className="flex items-start gap-4 group">
                <Phone className="w-5 h-5 text-[#b1a17c] mt-1 shrink-0" />
                <span>
                  <span className="block font-sans text-[10px] uppercase tracking-widest text-[#152239]/50">Call Toll-Free</span>
                  <span className="font-serif text-xl group-hover:text-[#b1a17c] transition-colors">{PHONE_DISPLAY}</span>
                </span>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#b1a17c] mt-1 shrink-0" />
                <span className="font-sans text-sm leading-relaxed">
                  <span className="block text-[10px] uppercase tracking-widest text-[#152239]/50 mb-1">Shipping</span>
                  400 Progress Drive<br />Andalusia, AL 36421
                  <span className="block text-[10px] uppercase tracking-widest text-[#152239]/50 mt-3 mb-1">Mailing</span>
                  PO Box 128<br />Andalusia, AL 36420
                </span>
              </div>
            </div>

            <h3 className="text-xl font-light mb-5 border-b border-[#152239]/10 pb-3">Our Team</h3>
            <ul className="space-y-4">
              {staff.map((s) => (
                <li key={s.name} className="flex items-start gap-3">
                  <span className="w-2 h-2 rotate-45 bg-[#b1a17c] mt-1.5 shrink-0" aria-hidden="true" />
                  <span className="font-sans text-sm">
                    <span className="font-semibold">{s.name}</span>
                    <span className="text-[#152239]/55"> — {s.role}</span>
                    {s.email && (
                      <a href={`mailto:${s.email}`} className="flex items-center gap-1.5 text-[#b1a17c] hover:text-[#152239] transition-colors text-xs mt-0.5">
                        <Mail className="w-3 h-3" /> {s.email}
                      </a>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: contact form */}
          <div className="bg-[#152239] text-white p-8 lg:p-10">
            <h2 className="text-2xl md:text-3xl font-light mb-2">Send a Message</h2>
            <p className="font-sans text-white/55 text-sm mb-7">A Covington representative will respond promptly.</p>
            {sent ? (
              <div className="py-12 text-center">
                <p className="font-serif text-[#b1a17c] text-2xl mb-2">Thank You</p>
                <p className="font-sans text-white/65 text-sm">We&rsquo;ve received your message and will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <input required value={form.name} onChange={update('name')} type="text" placeholder="Your Name" className={inputCls} />
                <input required value={form.home} onChange={update('home')} type="text" placeholder="Funeral Home" className={inputCls} />
                <input required value={form.email} onChange={update('email')} type="email" placeholder="Email" className={inputCls} />
                <input value={form.phone} onChange={update('phone')} type="tel" placeholder="Phone (optional)" className={inputCls} />
                <textarea required value={form.message} onChange={update('message')} placeholder="How can we help?" rows={4} className={`${inputCls} resize-none`} />
                <button type="submit" className="btn-swipe w-full flex items-center justify-center gap-2 bg-[#d21243] text-white [--btn-swipe:#b1a17c] py-3.5 text-xs uppercase">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
