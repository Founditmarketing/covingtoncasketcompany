import { categories, getCaskets, categoryCount } from '../data/caskets';
import type { CasketCategory } from '../data/caskets';
import CasketCard from '../components/CasketCard';

interface Props {
  navigate: (to: string, section?: string) => void;
  category?: CasketCategory;
}

function PageHero({ eyebrow, title, blurb }: { eyebrow: string; title: string; blurb: string }) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24 text-center bg-[#152239] text-white">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#b1a17c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#b1a17c]/60" /> {eyebrow} <span className="h-px w-8 bg-[#b1a17c]/60" />
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-5">{title}</h1>
        <p className="font-sans text-white/70 text-sm md:text-base leading-relaxed">{blurb}</p>
      </div>
    </section>
  );
}

export default function CasketsPage({ navigate, category }: Props) {
  // Single-category listing
  if (category) {
    const products = getCaskets(category.slug);
    return (
      <div className="bg-[#152239] font-serif">
        <PageHero eyebrow="Our Caskets" title={category.name} blurb={category.blurb} />

        <section className="bg-[#f9f8f6] py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            {/* Breadcrumb + count */}
            <div className="flex items-center justify-between mb-8 font-sans text-xs">
              <div className="flex items-center gap-2 text-[#152239]/50 uppercase tracking-widest">
                <a href="#/caskets" onClick={(e) => { e.preventDefault(); navigate('/caskets'); }} className="hover:text-[#b1a17c]">Caskets</a>
                <span className="w-1 h-1 rotate-45 bg-[#b1a17c]" />
                <span className="text-[#152239]">{category.name}</span>
              </div>
              <span className="text-[#152239]/50 uppercase tracking-widest">{products.length} Models</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
              {products.map((c) => <CasketCard key={c.slug} casket={c} navigate={navigate} />)}
            </div>
          </div>
        </section>

        <CatalogCta navigate={navigate} />
      </div>
    );
  }

  // All-categories overview
  return (
    <div className="bg-[#152239] font-serif">
      <PageHero
        eyebrow="Our Caskets"
        title="Explore Our Collections"
        blurb="Every Covington casket is hand-assembled in Andalusia, Alabama. Browse our collections by material and style — then call us or ask your funeral director to learn more."
      />

      <section className="bg-[#f9f8f6] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const cover = getCaskets(cat.slug)[0];
            return (
              <a
                key={cat.slug}
                href={`#/caskets/${cat.slug}`}
                onClick={(e) => { e.preventDefault(); navigate(`/caskets/${cat.slug}`); }}
                className="group block bg-white border border-[#152239]/10 hover:border-[#b1a17c] transition-colors duration-300"
              >
                <div className="aspect-[16/10] flex items-center justify-center p-6 overflow-hidden bg-[#f4f1ea]">
                  {cover && (
                    <img
                      src={cover.image}
                      alt={cat.name}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => { const i = e.currentTarget; if (!i.dataset.f) { i.dataset.f = '1'; i.src = '/CrimsonWinsert-casket.png'; } }}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="px-6 py-5 border-t border-[#152239]/10">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="text-xl md:text-2xl text-[#152239] font-light leading-tight">{cat.name}</h2>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-[#152239]/45 shrink-0">{categoryCount(cat.slug)} Models</span>
                  </div>
                  <p className="font-sans text-[#152239]/60 text-xs md:text-sm mt-2 leading-relaxed">{cat.blurb}</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <CatalogCta navigate={navigate} />
    </div>
  );
}

function CatalogCta({ navigate }: { navigate: (to: string, section?: string) => void }) {
  return (
    <section className="bg-[#d21243] py-16 lg:py-20 border-t border-white/10 text-center text-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light mb-4">Found one that speaks to you?</h2>
        <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed mb-8">
          Covington sells exclusively to licensed funeral homes. Call us and we&rsquo;ll help you and your funeral director bring a Covington Casket to the service you&rsquo;re planning.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:+18007265570" className="btn-swipe inline-flex items-center justify-center gap-3 bg-white text-[#152239] [--btn-swipe:#b1a17c] [--corner:#152239] px-8 py-4 text-xs uppercase">
            Call to Learn More
          </a>
          <a href="#/immediate-need" onClick={(e) => { e.preventDefault(); navigate('/immediate-need'); }} className="btn-swipe inline-flex items-center justify-center bg-[#152239] text-white [--btn-swipe:#0d1625] px-8 py-4 text-xs uppercase">
            Immediate Need
          </a>
        </div>
      </div>
    </section>
  );
}
