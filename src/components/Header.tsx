import { useState, useEffect } from 'react';
import { ShoppingCart, User, Menu, ChevronDown, Facebook } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md font-serif">
      {/* Top Bar */}
      <div className="bg-[#152239] border-b border-[#b1a17c]/20 text-white text-[10px] tracking-widest uppercase">
        <div className="relative w-full flex items-center justify-between px-4 lg:px-8 py-2">
          {/* Social */}
          <a href="#" aria-label="Covington Casket Company on Facebook" className="text-[#b1a17c] hover:text-white transition-colors shrink-0">
            <Facebook className="w-4 h-4" />
          </a>

          {/* Centered tagline */}
          <p className="absolute left-1/2 -translate-x-1/2 opacity-80 hidden lg:block whitespace-nowrap">
            Serving Premiere Funeral Homes across the Southeast | EST. 1924
          </p>

          {/* Service areas */}
          <div className="hidden md:flex gap-4 opacity-70 italic font-sans normal-case shrink-0">
            <span>Alabama • Georgia • Florida • Mississippi • Louisiana</span>
          </div>
        </div>
      </div>

      {/* Main Navigation (white) */}
      <div className={`w-full px-4 lg:px-8 flex items-center justify-between bg-white border-b border-[#152239]/10 transition-all duration-300 ${scrolled ? 'py-1.5' : 'py-2'}`}>
        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-[#152239]">
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <a href="#" className="flex items-center shrink-0" aria-label="Covington Casket Company home">
          <img
            src="/covingtoncasket-longlogo.png"
            alt="Covington Casket Company"
            className={`w-auto transition-all duration-300 ${scrolled ? 'h-9 lg:h-11' : 'h-14 lg:h-16'}`}
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 font-sans text-[11px] font-semibold tracking-widest">
          <div className="relative group">
            <button className="flex items-center space-x-1 text-[#152239] hover:text-[#b1a17c] transition-colors py-2 uppercase">
              <span>Our Collections</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-1 text-[#152239] hover:text-[#b1a17c] transition-colors py-2 uppercase">
              <span>Storyboards</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <a href="#" className="text-[#152239] hover:text-[#b1a17c] transition-colors py-2 uppercase">About Us</a>
          <a href="#" className="text-[#152239] hover:text-[#b1a17c] transition-colors py-2 uppercase">B2B Portal</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-[#152239]">
          <div className="hidden sm:block text-right mr-2">
            <div className="flex text-[#b1a17c] text-xs justify-end">★★★★★</div>
            <div className="text-[9px] uppercase tracking-tighter opacity-60 text-[#152239]">280+ Trusted Partners</div>
          </div>
          <button className="p-2 border border-[#152239]/20 rounded hover:bg-[#152239]/5 transition-colors hidden sm:block">
            <User className="w-4 h-4" />
          </button>
          <button className="p-2 border border-[#152239]/20 rounded hover:bg-[#152239]/5 transition-colors relative">
            <ShoppingCart className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 bg-[#d21243] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
