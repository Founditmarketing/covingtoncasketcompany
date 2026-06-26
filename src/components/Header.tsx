import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Linkedin, Phone, ChevronRight } from 'lucide-react';

const navLinks = ['Home', 'Immediate Need', 'Our Caskets', 'Storyboards', 'About Us', 'Contact Us', 'Jobs!'];

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile slide-out menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md font-serif">
      {/* Top Bar */}
      <div className="bg-[#152239] border-b border-[#b1a17c]/20 text-white text-[10px] tracking-widest uppercase">
        <div className="relative w-full flex items-center justify-between px-4 lg:px-8 py-2 min-h-8">
          {/* Social — desktop only (on mobile the Facebook icon sits by the hamburger) */}
          <a href="#" aria-label="Covington Casket Company on Facebook" className="hidden lg:block text-[#b1a17c] hover:text-white transition-colors shrink-0">
            <Facebook className="w-4 h-4" />
          </a>

          {/* Centered tagline (desktop) */}
          <p className="absolute left-1/2 -translate-x-1/2 opacity-80 hidden lg:block whitespace-nowrap">
            Serving Premiere Funeral Homes across the Southeast | EST. 1924
          </p>

          {/* Centered message (mobile) */}
          <span className="md:hidden absolute left-1/2 -translate-x-1/2 opacity-80 text-[#b1a17c] whitespace-nowrap">
            Family Owned &amp; Operated Since 1924
          </span>

          {/* Service areas (tablet/desktop) */}
          <span className="hidden md:inline opacity-70 italic font-sans normal-case ml-auto">
            Alabama • Georgia • Florida • Mississippi • Louisiana
          </span>
        </div>
      </div>

      {/* Main Navigation (white) */}
      <div className={`relative w-full px-4 lg:px-8 flex items-center justify-between bg-white border-b border-[#152239]/10 transition-all duration-300 ${scrolled ? 'py-1.5' : 'py-2'}`}>
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0" aria-label="Covington Casket Company home">
          <img
            src="/covingtoncasket-longlogo.png"
            alt="Covington Casket Company"
            className={`w-auto transition-all duration-300 ${scrolled ? 'h-9 lg:h-11' : 'h-14 lg:h-16'}`}
          />
        </a>

        {/* Desktop Menu — perfectly centered horizontally */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6 font-sans text-[11px] font-semibold tracking-widest">
          {navLinks.map((label) => (
            <a key={label} href="#" className="text-[#152239] hover:text-[#b1a17c] transition-colors py-2 uppercase whitespace-nowrap">{label}</a>
          ))}
        </nav>

        {/* Right side: CTA (desktop) + mobile menu button */}
        <div className="flex items-center shrink-0">
          <button className="btn-swipe hidden lg:inline-flex items-center bg-[#d21243] text-white [--btn-swipe:#152239] font-sans font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-sm">
            Get a Quote
          </button>
          <a
            href="#"
            aria-label="Covington Casket Company on Facebook"
            className="lg:hidden p-2 text-[#152239] hover:text-[#d21243] transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 text-[#152239]"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile slide-out menu */}
      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 z-[60] bg-[#0d1625]/70 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      {/* Drawer */}
      <aside
        className={`lg:hidden fixed top-0 right-0 z-[70] h-full w-[82%] max-w-xs bg-[#152239] border-l border-[#b1a17c]/20 shadow-[0_0_60px_rgba(0,0,0,0.7)] flex flex-col transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
          <img
            src="/covingtoncasket-longlogo.png"
            alt="Covington Casket Company"
            className="h-9 w-auto brightness-0 invert"
          />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 py-4 font-sans overflow-y-auto">
          {navLinks.map((label) => (
            <a
              key={label}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between text-white hover:text-[#b1a17c] uppercase tracking-widest text-sm font-semibold py-3.5 border-b border-white/5 transition-colors"
            >
              {label}
              <ChevronRight className="w-4 h-4 text-[#b1a17c]/40 group-hover:text-[#b1a17c] group-hover:translate-x-1 transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Drawer footer: contact + CTA */}
        <div className="mt-auto px-6 py-6 border-t border-white/10 space-y-4 shrink-0">
          <a
            href="tel:+12544475090"
            className="btn-swipe flex items-center justify-center gap-2 bg-[#d21243] text-white [--btn-swipe:#152239] font-bold uppercase tracking-widest text-xs py-3.5 rounded-sm"
          >
            <Phone className="w-4 h-4" /> Call (254) 447-5090
          </a>
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="btn-swipe block text-center bg-[#152239] border border-[#b1a17c] text-white [--btn-swipe:#d21243] font-bold uppercase tracking-widest text-xs py-3.5 rounded-sm"
          >
            Get a Quote
          </a>
          <div className="flex justify-center gap-6 pt-1">
            <a href="#" aria-label="Facebook" className="text-white/40 hover:text-[#b1a17c] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="text-white/40 hover:text-[#b1a17c] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white/40 hover:text-[#b1a17c] transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}
