import type { Casket } from '../data/caskets';

interface Props {
  casket: Casket;
  navigate: (to: string, section?: string) => void;
  // This project has no @types/react, so JSX's special `key` handling isn't
  // applied to typed components — accept it explicitly. React strips it at runtime.
  key?: string;
}

export default function CasketCard({ casket, navigate }: Props) {
  const href = `/caskets/${casket.categorySlug}/${casket.slug}`;
  return (
    <a
      href={'#' + href}
      onClick={(e) => { e.preventDefault(); navigate(href); }}
      className="group block bg-white border border-[#152239]/10 hover:border-[#b1a17c] transition-colors duration-300"
    >
      <div className="aspect-[4/3] flex items-center justify-center p-4 overflow-hidden bg-[#f4f1ea]">
        <img
          src={casket.image}
          alt={`Covington ${casket.name} casket`}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.dataset.fallback) return;
            img.dataset.fallback = '1';
            img.src = '/CrimsonWinsert-casket.png';
          }}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="px-5 py-4 border-t border-[#152239]/10">
        <h3 className="text-base md:text-lg text-[#152239] font-light mb-1 leading-tight">{casket.name}</h3>
        {casket.interior && <p className="font-sans text-[#152239]/55 text-xs leading-snug">{casket.interior}</p>}
        <span className="mt-3 inline-flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-widest text-[#b1a17c] group-hover:gap-2.5 transition-all">
          View Details
          <span className="w-1.5 h-1.5 rotate-45 bg-[#b1a17c]" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}
