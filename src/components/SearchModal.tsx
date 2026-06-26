import { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { caskets, categories } from '../data/caskets';

interface Props {
  open: boolean;
  onClose: () => void;
  navigate: (to: string, section?: string) => void;
}

const pages = [
  { label: 'Home', sub: 'Welcome', to: '/' },
  { label: 'Immediate Need', sub: 'Need a casket now?', to: '/immediate-need' },
  { label: 'Our Caskets', sub: 'Browse all collections', to: '/caskets' },
  { label: 'Storyboards', sub: 'The Lighthouse Collection', to: '/storyboards' },
  { label: 'About Us', sub: 'The Covington story', to: '/about' },
  { label: 'Contact Us', sub: 'Reach our team', to: '/contact' },
  { label: 'Jobs', sub: 'Careers at Covington', to: '/jobs' },
];

export default function SearchModal({ open, onClose, navigate }: Props) {
  const [q, setQ] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setQ('');
    const t = setTimeout(() => inputRef.current?.focus(), 60);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const query = q.trim().toLowerCase();
  const results = useMemo(() => {
    if (!query) return { pages: [] as { label: string; sub: string; to: string }[], products: [] as typeof caskets };
    const pageHits = [
      ...pages.filter((p) => p.label.toLowerCase().includes(query) || p.sub.toLowerCase().includes(query)),
      ...categories
        .filter((c) => c.name.toLowerCase().includes(query))
        .map((c) => ({ label: c.name, sub: 'Casket Collection', to: `/caskets/${c.slug}` })),
    ];
    const productHits = caskets
      .filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          (c.interior || '').toLowerCase().includes(query) ||
          (c.code || '').toLowerCase().includes(query),
      )
      .slice(0, 30);
    return { pages: pageHits, products: productHits };
  }, [query]);

  if (!open) return null;

  const go = (to: string) => { onClose(); navigate(to); };

  return (
    <div
      className="fixed inset-0 z-[90] bg-[#0d1625]/80 backdrop-blur-sm flex items-start justify-center p-4 sm:pt-24"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#152239] border border-[#b1a17c]/30 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
          <Search className="w-5 h-5 text-[#b1a17c] shrink-0" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search caskets, collections, pages…"
            className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40 font-sans text-sm"
          />
          <button onClick={onClose} aria-label="Close search" className="text-white/50 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {!query && (
            <p className="px-5 py-10 text-center font-sans text-white/40 text-sm">
              Search our caskets, collections, and pages.
            </p>
          )}

          {query && results.pages.length === 0 && results.products.length === 0 && (
            <p className="px-5 py-10 text-center font-sans text-white/40 text-sm">No results for “{q}”.</p>
          )}

          {results.pages.length > 0 && (
            <div className="py-2">
              <p className="px-5 py-2 font-sans text-[10px] uppercase tracking-[0.25em] text-[#b1a17c]/70">Pages &amp; Collections</p>
              {results.pages.map((p) => (
                <button
                  key={p.to}
                  onClick={() => go(p.to)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-3 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="min-w-0">
                    <span className="block text-white text-sm font-serif">{p.label}</span>
                    <span className="block font-sans text-white/45 text-xs">{p.sub}</span>
                  </span>
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#b1a17c] shrink-0" aria-hidden="true" />
                </button>
              ))}
            </div>
          )}

          {results.products.length > 0 && (
            <div className="py-2 border-t border-white/10">
              <p className="px-5 py-2 font-sans text-[10px] uppercase tracking-[0.25em] text-[#b1a17c]/70">Caskets ({results.products.length})</p>
              {results.products.map((c) => {
                const cat = categories.find((x) => x.slug === c.categorySlug);
                return (
                  <button
                    key={c.categorySlug + c.slug}
                    onClick={() => go(`/caskets/${c.categorySlug}/${c.slug}`)}
                    className="w-full flex items-center gap-4 px-5 py-2.5 text-left hover:bg-white/5 transition-colors"
                  >
                    <img
                      src={c.image}
                      alt=""
                      loading="lazy"
                      className="w-14 h-11 object-cover bg-[#0d1625] shrink-0"
                      onError={(e) => { const i = e.currentTarget; if (!i.dataset.f) { i.dataset.f = '1'; i.src = '/CrimsonWinsert-casket.png'; } }}
                    />
                    <span className="min-w-0">
                      <span className="block text-white text-sm font-serif truncate">{c.name}</span>
                      <span className="block font-sans text-white/45 text-xs truncate">
                        {cat?.name}
                        {c.interior ? ` · ${c.interior}` : ''}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
