import { useState } from 'react';
import { Phone, ChevronDown } from 'lucide-react';

interface PageProps {
  navigate: (to: string, section?: string) => void;
}

const opening = [
  'Funerals and celebrations of life are about sharing a loved one’s story.',
  'A casket is the central focal point in paying tribute to your loved one.',
  'A funeral director at the funeral home of your choice will assist you with arrangements.',
];

const personalizeIntro = [
  'You’ll want to start with the material used to build the casket — steel, wood, or specialty metals such as bronze or copper. Then you can choose the type and color of the fabric inside. Personalization can go even further with corner hardware and handles.',
  'Our Covington StoryBoards fit in the lid or can be placed on an easel for a memorial or closed-casket service.',
  'No worries if this is just too much decision-making. On our selection pages you’ll find beautiful, handcrafted caskets in many styles and colors — personalization and customization can be to any extent you wish.',
];

const topics = [
  {
    title: 'Type & Material',
    blocks: [{ text: 'We offer wood, steel, specialty metals (bronze, copper, stainless steel), and cloth-covered caskets. Families often choose the material that best reflects their loved one’s walk of life or personality — a rustic wooden casket might be the choice for an outdoorsman.' }],
  },
  {
    title: 'Exterior Color',
    blocks: [{ text: 'We offer several spectacular paint colors, applied through a professional process that yields automotive-grade paint quality.' }],
  },
  {
    title: 'Interior Design',
    blocks: [
      { subtitle: 'Cloth', text: 'The interior cloth can be customized in both color and kind. We often accommodate special requests — like camouflage.' },
      { subtitle: 'Interior Lid', text: 'Our most popular personalization is the Covington StoryBoard — an artistic, pictorial depiction that helps tell your loved one’s story more perfectly than anything else we offer. The interior of the lid can also carry an embroidered panel with a saying, artwork, or emblem.' },
    ],
  },
  {
    title: 'Features',
    blocks: [
      { subtitle: 'About Steel', text: 'As paradoxical as it seems, 18-gauge steel is thicker than 20-gauge steel — so an 18-gauge steel casket is the sturdiest steel casket we offer. Our other metals include bronze and copper.' },
      { subtitle: 'Hardware', text: 'Handles come in different styles for many selections. Decorative corner pieces can reflect the vocation, walk of life, hobby, or faith of your loved one, with many themes to choose from.' },
      { subtitle: 'Gasket', text: 'A gasketed casket has a rubber seal placed around the lid. You will see the term “NG” used, which means non-gasketed.' },
    ],
  },
  {
    title: 'Size',
    blocks: [{ text: 'Just as people vary in size, so do caskets. Your funeral director will help determine size requirements — and rest assured, we make caskets for all size people. Our EMPIRE caskets are larger, and we also make youth and infant-sized caskets.' }],
  },
  {
    title: 'Cost',
    blocks: [{ text: 'The material used to construct a casket drives its cost. Cloth-covered caskets are the lowest cost; specialty metals such as bronze and copper are at the top end. Lighter 20-gauge steel costs more than 18-gauge, and a gasketed casket costs more than a non-gasketed one. We’re confident you’ll find a casket that meets your expectations and needs.' }],
  },
];

export default function ImmediateNeedPage(_props: PageProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-[#152239] text-white font-serif">

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-28 text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#b1a17c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b1a17c]/60" /> Immediate Need <span className="h-px w-8 bg-[#b1a17c]/60" />
          </span>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">Need a Casket Now?</h1>
          <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed">
            We extend our deepest condolences to you.
          </p>
        </div>
      </section>

      {/* Message of comfort + guidance */}
      <section className="heritage-bg text-[#152239] py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-5 font-sans text-[#152239]/75 text-base md:text-lg leading-relaxed">
            {opening.map((p) => <p key={p}>{p}</p>)}
          </div>

          {/* Your rights — emphasized callout */}
          <div className="my-12 border-l-2 border-[#b1a17c] bg-white px-7 py-8 text-left">
            <p className="font-sans text-[#152239]/80 text-sm md:text-base leading-relaxed mb-4">
              We don&rsquo;t sell caskets to the public. But you have the <span className="text-[#152239] font-semibold">legal right to request the casket of your choice</span> &mdash; whether your funeral home is corporately or family owned, whether our caskets are in stock, and whether the funeral home carries another brand.
            </p>
            <p className="font-serif text-[#b1a17c] text-xl md:text-2xl">So please insist on a Covington Casket.</p>
          </div>

          <p className="font-sans text-[#152239]/75 text-base md:text-lg leading-relaxed mb-10">
            We will work tirelessly to help you and your funeral director ensure that a quality Covington Casket is the focal point of the celebration of life you are planning. If we can help you locate a funeral home that carries our caskets, please call us.
          </p>

          <a
            href="tel:+18007265570"
            className="btn-swipe inline-flex items-center justify-center gap-3 bg-[#d21243] text-white [--btn-swipe:#152239] px-8 py-4 text-xs uppercase"
          >
            <Phone className="w-4 h-4" /> Call 1-800-726-5570
          </a>

          <p className="font-serif italic text-[#152239]/60 text-xl md:text-2xl mt-12">
            We would be honored to help you.
          </p>
        </div>
      </section>

      {/* Ways to personalize */}
      <section className="bg-[#152239] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#b1a17c]/60" /> Personalization <span className="h-px w-8 bg-[#b1a17c]/60" />
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-8">Ways to Personalize</h2>
            <div className="space-y-5 font-sans text-white/70 text-sm md:text-base leading-relaxed text-left">
              {personalizeIntro.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>

          {/* Accordion of options */}
          <div className="border-t border-white/10">
            {topics.map((t, i) => {
              const isOpen = open === i;
              return (
                <div key={t.title} className="border-b border-white/10">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="flex items-center gap-4">
                      <span className="w-2 h-2 rotate-45 bg-[#b1a17c] shrink-0" aria-hidden="true" />
                      <span className="text-lg md:text-xl uppercase tracking-[0.15em]" style={{ fontFamily: "'Cinzel', serif" }}>{t.title}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#b1a17c] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="pb-7 pl-6 space-y-4 font-sans text-white/65 text-sm md:text-base leading-relaxed">
                        {t.blocks.map((b, j) => (
                          <div key={j}>
                            {'subtitle' in b && b.subtitle && (
                              <span className="block text-[#b1a17c] text-[11px] uppercase tracking-widest mb-1">{b.subtitle}</span>
                            )}
                            <p>{b.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
