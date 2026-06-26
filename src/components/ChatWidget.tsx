import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Phone, X, MessageCircle, Send } from 'lucide-react';

const PHONE_DISPLAY = '(254) 447-5090';
const PHONE_HREF = 'tel:+12544475090';

const inputCls =
  'w-full bg-white/5 border border-white/10 focus:border-[#b1a17c] outline-none text-white text-sm px-3 py-2.5 rounded-sm placeholder:text-white/30 transition-colors';

export default function ChatWidget({ hidden = false }: { hidden?: boolean }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const update =
    (key: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans pointer-events-none ${hidden ? 'hidden' : ''}`}
    >
      {/* Pop-up window */}
      <div
        className={`origin-bottom-right w-[calc(100vw-3rem)] max-w-sm max-h-[calc(100vh-7rem)] overflow-y-auto rounded-sm bg-[#152239] border border-[#b1a17c]/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 ${
          open
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Window header */}
        <div className="relative bg-[#0d1625] border-b border-[#b1a17c]/20 px-5 py-4">
          <h3 className="font-serif text-white text-lg leading-tight">How can we help?</h3>
          <p className="text-white/50 text-xs mt-0.5">We're here to assist you — day or night.</p>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close contact window"
            className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top half: Call Now */}
        <div className="p-5 border-b border-white/5">
          <a
            href={PHONE_HREF}
            className="btn-swipe flex items-center justify-center gap-3 bg-[#d21243] text-white [--btn-swipe:#152239] font-bold uppercase tracking-widest text-sm py-4 rounded-sm"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <p className="text-center text-[#b1a17c] text-sm mt-3 tracking-wide">{PHONE_DISPLAY}</p>
        </div>

        {/* Bottom half: quick contact form */}
        <div className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] whitespace-nowrap">
              or send a message
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          {sent ? (
            <div className="text-center py-6">
              <p className="font-serif text-[#b1a17c] text-lg">Thank you.</p>
              <p className="text-white/60 text-sm mt-1">A Covington representative will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input required value={form.name} onChange={update('name')} type="text" placeholder="Name" className={inputCls} />
              <input required value={form.phone} onChange={update('phone')} type="tel" placeholder="Phone" className={inputCls} />
              <input value={form.email} onChange={update('email')} type="email" placeholder="Email (optional)" className={inputCls} />
              <textarea required value={form.message} onChange={update('message')} placeholder="How can we help?" rows={3} className={`${inputCls} resize-none`} />
              <button
                type="submit"
                className="btn-swipe w-full flex items-center justify-center gap-2 bg-[#152239] border border-[#b1a17c] text-white [--btn-swipe:#d21243] font-bold uppercase tracking-widest text-xs py-3 rounded-sm"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Floating launcher button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close contact window' : 'Open contact window'}
        aria-expanded={open}
        className="pointer-events-auto w-14 h-14 bg-[#d21243] flex items-center justify-center rounded-sm border border-white/20 hover:scale-105 transition-transform shrink-0"
      >
        {open ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </button>
    </div>
  );
}
