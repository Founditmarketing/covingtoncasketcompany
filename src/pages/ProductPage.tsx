import { Phone } from 'lucide-react';
import type { Casket } from '../data/caskets';
import { getCategory, getCaskets } from '../data/caskets';
import CasketCard from '../components/CasketCard';

interface Props {
  navigate: (to: string, section?: string) => void;
  casket: Casket;
}

export default function ProductPage({ navigate, casket }: Props) {
  const category = getCategory(casket.categorySlug);
  const material = casket.material || category?.material || 'steel';
  const related = getCaskets(casket.categorySlug).filter((c) => c.slug !== casket.slug).slice(0, 4);

  const specs: { label: string; value: string }[] = [
    { label: 'Collection', value: category?.name ?? '' },
    { label: 'Material', value: material.charAt(0).toUpperCase() + material.slice(1) },
  ];
  if (casket.interior) specs.push({ label: 'Interior', value: casket.interior });
  if (casket.code) specs.push({ label: 'Model', value: casket.code });

  return (
    <div className="bg-[#f9f8f6] font-serif">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-8">
        <div className="flex flex-wrap items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-[#152239]/50">
          <a href="#/caskets" onClick={(e) => { e.preventDefault(); navigate('/caskets'); }} className="hover:text-[#b1a17c]">Caskets</a>
          <span className="w-1 h-1 rotate-45 bg-[#b1a17c]" />
          <a href={`#/caskets/${casket.categorySlug}`} onClick={(e) => { e.preventDefault(); navigate(`/caskets/${casket.categorySlug}`); }} className="hover:text-[#b1a17c]">{category?.name}</a>
          <span className="w-1 h-1 rotate-45 bg-[#b1a17c]" />
          <span className="text-[#152239]">{casket.name}</span>
        </div>
      </div>

      {/* Product */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-10 lg:py-14 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Image */}
        <div className="bg-white border border-[#152239]/10 p-6 lg:p-10 flex items-center justify-center aspect-[4/3] lg:aspect-auto lg:min-h-[460px]">
          <img
            src={casket.image}
            alt={`Covington ${casket.name} casket`}
            decoding="async"
            onError={(e) => { const i = e.currentTarget; if (!i.dataset.f) { i.dataset.f = '1'; i.src = '/CrimsonWinsert-casket.png'; } }}
            className="max-h-full max-w-full object-contain drop-shadow-xl"
          />
        </div>

        {/* Info */}
        <div className="text-[#152239]">
          <span className="text-[#b1a17c] font-sans uppercase tracking-[0.35em] text-[10px] mb-4 flex items-center gap-2">
            <span className="h-px w-6 bg-[#b1a17c]" /> {category?.name}
          </span>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-5">{casket.name}</h1>

          <p className="font-sans text-[#152239]/70 text-sm md:text-base leading-relaxed mb-8">
            The {casket.name} is a Covington casket crafted in {material}{casket.interior ? `, appointed in ${casket.interior.toLowerCase()}` : ''}. Like every Covington casket, it is hand-assembled in Andalusia, Alabama, and can be personalized with corner hardware, handles, and our signature Covington StoryBoards.
          </p>

          {/* Specs */}
          <dl className="border-t border-[#152239]/10 mb-9">
            {specs.map((s) => (
              <div key={s.label} className="flex items-start gap-4 py-3 border-b border-[#152239]/10">
                <dt className="w-32 shrink-0 font-sans text-[10px] uppercase tracking-widest text-[#152239]/45 pt-1">{s.label}</dt>
                <dd className="font-sans text-sm text-[#152239]/85">{s.value}</dd>
              </div>
            ))}
          </dl>

          {/* No-payment, call-to-learn-more */}
          <div className="bg-[#152239] text-white p-7">
            <p className="font-sans text-white/70 text-sm leading-relaxed mb-5">
              Covington sells exclusively to licensed funeral homes — so there&rsquo;s no checkout here. Call us to learn more about the {casket.name}, and we&rsquo;ll help you and your funeral director make it the focal point of the service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+18007265570" className="btn-swipe flex-1 inline-flex items-center justify-center gap-2 bg-[#d21243] text-white [--btn-swipe:#b1a17c] px-6 py-3.5 text-xs uppercase">
                <Phone className="w-4 h-4" /> Call to Learn More
              </a>
              <a href="#/immediate-need" onClick={(e) => { e.preventDefault(); navigate('/immediate-need'); }} className="btn-swipe flex-1 inline-flex items-center justify-center bg-[#b1a17c] text-[#152239] [--btn-swipe:#f9f8f6] [--corner:#152239] px-6 py-3.5 text-xs uppercase">
                Immediate Need
              </a>
            </div>
            <p className="font-sans text-white/40 text-[11px] mt-4 text-center sm:text-left">1-800-726-5570 · Ask your funeral director for a Covington Casket</p>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-white border-t border-[#152239]/10 py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl md:text-3xl text-[#152239] font-light">More from {category?.name}</h2>
              <a href={`#/caskets/${casket.categorySlug}`} onClick={(e) => { e.preventDefault(); navigate(`/caskets/${casket.categorySlug}`); }} className="font-sans text-[10px] uppercase tracking-widest text-[#b1a17c] hover:text-[#152239] whitespace-nowrap">View All</a>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {related.map((c) => <CasketCard key={c.slug} casket={c} navigate={navigate} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
