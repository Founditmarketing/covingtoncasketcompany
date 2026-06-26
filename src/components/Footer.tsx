import { Package, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer({ navigate }: { navigate: (to: string, section?: string) => void }) {
  return (
    <footer className="bg-[#0d1625] text-white pt-20 pb-10 border-t border-[#b1a17c]/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#b1a17c]/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div>
            <div className="mb-6">
              <img src="/footer-shield.png" alt="" aria-hidden="true" className="block w-48 h-auto" />
              <img src="/footer-wordmark.png" alt="Covington Casket Company" className="block w-48 h-auto brightness-0 invert" />
            </div>
            <p className="font-sans text-xs text-white/50 leading-relaxed mb-6">
              Proudly manufacturing premium caskets for funeral professionals across the Southeast since 1924. Uncompromising quality, direct to you.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Covingtoncasket/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#b1a17c] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-[#b1a17c] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-[#b1a17c] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#b1a17c] mb-6">Quick Links</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60">
              <li><a href="#/caskets" onClick={(e) => { e.preventDefault(); navigate('/caskets'); }} className="hover:text-[#b1a17c] transition-colors">View Catalog</a></li>
              <li><a href="#/storyboards" onClick={(e) => { e.preventDefault(); navigate('/storyboards'); }} className="hover:text-[#b1a17c] transition-colors">The Storyboards</a></li>
              <li><a href="#/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }} className="hover:text-[#b1a17c] transition-colors">Our History</a></li>
              <li><a href="#/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="hover:text-[#b1a17c] transition-colors">Contact Us</a></li>
              <li><a href="#/jobs" onClick={(e) => { e.preventDefault(); navigate('/jobs'); }} className="hover:text-[#b1a17c] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Products Col */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#b1a17c] mb-6">Collections</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60">
              <li><a href="#/caskets/steel-18-gauge" onClick={(e) => { e.preventDefault(); navigate('/caskets/steel-18-gauge'); }} className="hover:text-[#b1a17c] transition-colors">18-Gauge Steel</a></li>
              <li><a href="#/caskets/steel-20-gauge" onClick={(e) => { e.preventDefault(); navigate('/caskets/steel-20-gauge'); }} className="hover:text-[#b1a17c] transition-colors">20-Gauge Steel</a></li>
              <li><a href="#/caskets/hardwood" onClick={(e) => { e.preventDefault(); navigate('/caskets/hardwood'); }} className="hover:text-[#b1a17c] transition-colors">Hardwood</a></li>
              <li><a href="#/caskets/specialty-metals" onClick={(e) => { e.preventDefault(); navigate('/caskets/specialty-metals'); }} className="hover:text-[#b1a17c] transition-colors">Specialty Metals</a></li>
              <li><a href="#/caskets/oversize" onClick={(e) => { e.preventDefault(); navigate('/caskets/oversize'); }} className="hover:text-[#b1a17c] transition-colors">Oversize</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#b1a17c] mb-6">Contact Us</h4>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-[#b1a17c] flex-shrink-0 mt-0.5" />
                <span>400 Progress Drive<br/>Andalusia, AL 36421</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-[#b1a17c] flex-shrink-0" />
                <a href="tel:+18007265570" className="hover:text-[#b1a17c] transition-colors">1-800-726-5570</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-[#b1a17c] flex-shrink-0" />
                <a href="mailto:andrew@covingtoncasket.com" className="hover:text-[#b1a17c] transition-colors">andrew@covingtoncasket.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between font-sans text-[10px] uppercase tracking-widest text-white/40">
          <p>&copy; {new Date().getFullYear()} Covington Casket Company. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#b1a17c] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#b1a17c] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#b1a17c] transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
