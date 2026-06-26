import { useState, useEffect } from 'react';
import { Phone, X, MoveRight } from 'lucide-react';

interface PageProps {
  navigate: (to: string, section?: string) => void;
}

// Images downloaded into /public/storyboards so the gallery survives the
// original site going offline.
const M = '/storyboards/1658be_';

// The Lighthouse Collection — sourced from covingtoncasket.com/storyboardsall
const designs: { name: string; num: string; img: string }[] = [
  ['Alpha', '2101', 'd724ce390ffc43a1b6a4bd1f7250222c~mv2.jpg'],
  ['Anchor', '2102', 'd423915ae96b4c98ba58f52534eca96c~mv2.jpg'],
  ['Amazing', '2103', '02832b90596040dd8ad8c022fe3664eb~mv2.jpg'],
  ['Blessed', '2104', '9bdaf802ba3f4a2aa1ce3d64ed4f1722~mv2.jpg'],
  ['Free', '2105', 'f6b8891d40824facb49a153787a3e307~mv2.jpg'],
  ['Sweet', '2106', '7e6f3819a95041028f25ce8bec68f08b~mv2.jpg'],
  ['Lives', '2107', 'ed645cda10c44482889a0d1363d70470~mv2.jpg'],
  ['King', '2108', '5507b8a8ddc8477a99ffd8cbe10799b3~mv2.jpg'],
  ['Wind', '2109', 'bcaf603b2af14d4c8c20383f6c50b5c3~mv2.jpg'],
  ['Precious', '2110', '1ce16934825b4124854bf3ac5666fdee~mv2.jpg'],
  ['Lighthouse', '2111', '292e95c46ba642e7abe1f27c0ab678e7~mv2.jpg'],
  ['Home', '2112', 'ba635f7918ba40bcadbd1c0d1155cb37~mv2.jpg'],
  ['Thou Art', '2113', '72af8f6aaaf34c36a159e0aa6a9504a2~mv2.jpg'],
  ['Victory', '2114', '8e34a7289ebf41859ecf0b2d621464c5~mv2.jpg'],
  ['Mountain', '2115', '12998349f97c40f98801337b941dc8bd~mv2.jpg'],
  ['Soul', '2116', '47f34ab2dc0d4b08b259b92865434e98~mv2.jpg'],
  ['Faithfulness', '2117', '61214fdb31ac42f79b481617bc75b400~mv2.jpg'],
  ['River', '2118', 'a8a3df46ac52486e823afcb10e8b2c72~mv2.jpg'],
  ['Imagine', '2119', '6160d613ea854e179b5542ccd59b8411~mv2.jpg'],
  ['Farm', '2120', '40ed5ba0b6134768b4ba685279133679~mv2.jpg'],
  ['Well Done', '2121', '0043a881da4f4cf9a40f269ed9cb7547~mv2.jpg'],
  ['Mother', '2122', 'd0fce51934544908a75a80ceab9c9a27~mv2.jpg'],
  ['Army', '2123', '5e153d65ad104169aacf0d69dbfafda0~mv2.jpg'],
  ['Marines', '2124', 'a2c64ee1055e46619fd99acda2a4ca9b~mv2.jpg'],
  ['Navy', '2125', 'e3541fb8ceaa4b80ac7fd65371302f72~mv2.jpg'],
  ['Air Force', '2126', '9dfa5668294b4fad80034f641e13c349~mv2.jpg'],
  ['Coast Guard', '2127', 'fa72852c032347c9a691a80551f2161e~mv2.jpg'],
  ['Fallen', '2127', '16b4a276562a472085a6fee63dc9db67~mv2.jpg'],
  ['Veteran Eagle', '2128', '6883121a502a488f89098d690c372851~mv2.jpg'],
  ['Rosary', '2130', '1cda0f5e2a674cf9892bc2c457885219~mv2.jpg'],
  ['Crimson', '2131', 'a6395c12405e42c28cdbbfd0dee1c8c1~mv2.jpg'],
  ['Orange & Blue', '2132', 'e823fb310f6e4ff6a40aa03554391bd8~mv2.jpg'],
  ['Biker', '2133', 'fad5e6291c134793842e2ab3b104b902~mv2.jpg'],
  ['Golf', '2134', '85b25399f7ce468bb9f0275e93ee2f5d~mv2.jpg'],
  ['Ride', '2135', '2ee3fb20d89340dc8118468cdac5ebd7~mv2.jpg'],
  ['Lane', '2136', 'fa95ef42f00f4f1e93cc9002146e3080~mv2.jpg'],
  ['Fishing', '2137', '4078da3ec523429c926d8ef4a21abc94~mv2.jpg'],
  ['Hunting', '2138', 'bcdcb687b2e041c9ba139558563f7b29~mv2.jpg'],
  ['John 3:16', '2139', 'ce40d81b4d2341c895b1b935dcd83525~mv2.jpg'],
  ['Rainbow', '2140', '5844f0293ddb4c55b90cb706b51dec35~mv2.jpg'],
  ['Psalm', '2141', 'e1d0b4327a694fd497800f6fb2cbb868~mv2.jpg'],
  ['Shepherd', '2142', '65068aaff9cf4544a15ea2abc98f934c~mv2.jpg'],
  ['Lady', '2143', '345f35ef37104dbd843839b2a9b8805c~mv2.jpg'],
  ['Family', '2144', '6ed75f2f1eb64d6a8a7bca7645dc8523~mv2.jpg'],
].map(([name, num, img]) => ({ name, num, img: M + img }));

const orderSteps = [
  'The name exactly as it should be printed',
  'The sharpest, clearest, largest photo(s) that can be e-mailed',
  'Birth year and date of death',
  'Any special instructions',
];

const onImgError = (e: { currentTarget: HTMLImageElement }) => {
  const i = e.currentTarget;
  if (i.dataset.f) return;
  i.dataset.f = '1';
  i.src = '/LIVES-storyboard.avif';
};

export default function StoryboardsPage({ navigate }: PageProps) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [active]);

  const current = active !== null ? designs[active] : null;

  return (
    <div className="bg-[#152239] text-white font-serif">

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-28 text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#b1a17c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b1a17c]/60" /> Exclusive Offering <span className="h-px w-8 bg-[#b1a17c]/60" />
          </span>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">Covington StoryBoards</h1>
          <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed">
            Our role has always been to help families tell their loved one&rsquo;s story in a personal way. Now, alongside our custom caskets, we present our exclusive <span className="text-[#b1a17c]">Lighthouse Collection</span> of StoryBoards.
          </p>
        </div>
      </section>

      {/* What is a StoryBoard */}
      <section className="heritage-bg text-[#152239] py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="card-frame relative p-2 bg-white border border-[#152239]/10 order-2 lg:order-1">
            <img src={designs[6].img} alt="Covington StoryBoard example" loading="lazy" decoding="async" onError={onImgError} className="w-full h-auto" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center gap-2">
              <span className="h-px w-6 bg-[#b1a17c]" /> Artistry, Personalized
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6">A Pictorial Tribute</h2>
            <p className="font-sans text-[#152239]/75 text-sm md:text-base leading-relaxed mb-5">
              A StoryBoard is an artistic, pictorial panel that helps tell your loved one&rsquo;s story more perfectly than anything else we offer. Created with an award-winning designer, each panel can carry a name, dates, photographs, and the imagery of a life well lived.
            </p>
            <ul className="space-y-3 mb-2">
              {['Fits inside the casket lid — or displays on an easel for a memorial or closed-casket service',
                'Approximately 32" wide × 14" high',
                'Fits caskets made by most national manufacturers'].map((t) => (
                <li key={t} className="flex items-start gap-3 font-sans text-sm text-[#152239]/75">
                  <span className="w-2 h-2 rotate-45 bg-[#b1a17c] mt-1.5 shrink-0" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#152239] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#b1a17c]/60" /> The Lighthouse Collection <span className="h-px w-8 bg-[#b1a17c]/60" />
            </span>
            <h2 className="text-4xl md:text-5xl font-light">Explore the Designs</h2>
            <p className="font-sans text-white/60 text-sm mt-4">{designs.length} ready-made designs — or commission a fully custom StoryBoard.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {designs.map((d, i) => (
              <button
                key={`${d.num}-${d.name}`}
                onClick={() => setActive(i)}
                className="group block text-left bg-[#0d1625] border border-white/10 hover:border-[#b1a17c] transition-colors duration-300 overflow-hidden"
              >
                <div className="aspect-[16/7] overflow-hidden bg-[#0d1625]">
                  <img
                    src={d.img}
                    alt={`${d.name} StoryBoard`}
                    loading="lazy"
                    decoding="async"
                    onError={onImgError}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-3 border-t border-white/10">
                  <span className="font-light text-lg">{d.name}</span>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#b1a17c]">No. {d.num}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="heritage-bg text-[#152239] py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-14">
          <div>
            <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center gap-2">
              <span className="h-px w-6 bg-[#b1a17c]" /> How to Order
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6">Simple &amp; Fast</h2>
            <p className="font-sans text-[#152239]/70 text-sm leading-relaxed mb-6">When you&rsquo;re ready, just send us:</p>
            <ul className="space-y-4">
              {orderSteps.map((s) => (
                <li key={s} className="flex items-start gap-3 font-sans text-sm text-[#152239]/80">
                  <span className="w-2 h-2 rotate-45 bg-[#b1a17c] mt-1.5 shrink-0" aria-hidden="true" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#152239] text-white p-8 self-start">
            <h3 className="text-xl font-light mb-5">Good to Know</h3>
            <ul className="space-y-4 font-sans text-sm text-white/70 leading-relaxed">
              <li className="flex items-start gap-3"><span className="w-2 h-2 rotate-45 bg-[#b1a17c] mt-1.5 shrink-0" /><span>Orders placed before <span className="text-white">2:00 p.m. Central Time</span> ship the same day.</span></li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rotate-45 bg-[#b1a17c] mt-1.5 shrink-0" /><span>Next Day Air shipping isn&rsquo;t available to all areas — please provide the date it&rsquo;s needed.</span></li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rotate-45 bg-[#b1a17c] mt-1.5 shrink-0" /><span>Friends and family often send a StoryBoard in place of flowers.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#d21243] py-16 lg:py-20 border-t border-white/10 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-5">Begin a StoryBoard</h2>
          <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed mb-9">
            Call us and we&rsquo;ll help you and your funeral director create a tribute worthy of the life it honors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+18007265570" className="btn-swipe inline-flex items-center justify-center gap-3 bg-white text-[#152239] [--btn-swipe:#b1a17c] [--corner:#152239] px-8 py-4 text-xs uppercase">
              <Phone className="w-4 h-4" /> Call to Learn More
            </a>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="btn-swipe inline-flex items-center justify-center gap-3 bg-[#152239] text-white [--btn-swipe:#0d1625] px-8 py-4 text-xs uppercase">
              Contact Us <MoveRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {current && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[80] bg-[#0d1625]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        >
          <button onClick={() => setActive(null)} aria-label="Close" className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors">
            <X className="w-7 h-7" />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
            <div className="card-frame relative p-2 bg-white">
              <img src={current.img} alt={`${current.name} StoryBoard`} decoding="async" onError={onImgError} className="w-full h-auto" />
            </div>
            <div className="flex items-center justify-between mt-4 text-white">
              <div>
                <h3 className="text-2xl font-light">{current.name}</h3>
                <span className="font-sans text-[11px] uppercase tracking-widest text-[#b1a17c]">StoryBoard No. {current.num}</span>
              </div>
              <a href="tel:+18007265570" className="btn-swipe hidden sm:inline-flex items-center gap-2 bg-[#d21243] text-white [--btn-swipe:#152239] px-6 py-3 text-xs uppercase">
                <Phone className="w-4 h-4" /> Call to Learn More
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
