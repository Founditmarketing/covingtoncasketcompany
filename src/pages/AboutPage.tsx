import { MoveRight } from 'lucide-react';

interface PageProps {
  navigate: (to: string, section?: string) => void;
}

const story = [
  'The era of modern-day Covington Casket Company begins in an unlikely way — with a pack of Lance crackers. Johnny Williamson was a Lance route salesman. Back in the early 1970s, he sold cookies and crackers to local store owners. One of his stops was a casket company on North Cotton Street in his hometown of Andalusia, Alabama — a casket maker that began operations in 1924, having combined with a similar factory in Opp, just 20 minutes to the east.',
  'The men running the company took great interest in the salesmanship of the local Lance route salesman and ultimately hired him in 1971. Just six short years later, he acquired 50% of the company. Originally named Andalusia Casket Company, the business was incorporated in 1945 and renamed Covington Casket Company.',
  'Covington began like most casket companies of the day, manufacturing cloth-covered woods that were packed in wooden boxes and shipped throughout the Southeast by rail. In 1959, Covington began manufacturing metal caskets. Mr. Williamson’s son Eddie joined in 1978, and his younger son Alan — now President and CEO — joined in 1987. Later that year, Johnny Williamson acquired the balance of the stock, becoming sole owner.',
  'In December of 1993, Mr. Williamson lost his battle with cancer and the brothers took over as owners. Later, Alan bought his brother’s shares. Today, Alan and his wife, Paula, own Covington Casket. Their son, Andrew — the third generation of the family — is an integral part of operations, regularly on the road meeting with funeral directors. Alan himself still enjoys making deliveries and talking with customers, pretty much unheard of for a CEO these days.',
  'In 2020, working with the City of Andalusia, Alan exchanged the historic North Cotton Street location for a massive building in Andalusia’s Industrial Park — adding state-of-the-art production lines, a beautiful new showroom, spacious warehouse facilities, and enjoyable space for employees.',
  'Production has more than doubled, and new funeral homes join the Covington network routinely. An entirely new product line — Covington Storyboards — is now in production and available nationwide. That red-topped jar with the blue “Lance” lettering still sits prominently in Covington’s Heritage Room. Alan and his team welcome you to stop by, take a tour — and grab a pack of Lance crackers.',
];

export default function AboutPage({ navigate }: PageProps) {
  return (
    <div className="bg-[#152239] text-white font-serif">

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-28 text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#b1a17c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b1a17c]/60" /> Our Heritage <span className="h-px w-8 bg-[#b1a17c]/60" />
          </span>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">The Covington Story</h1>
          <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed">
            Family owned since 1924 — now in our third generation, proudly serving funeral homes across the Southeast.
          </p>
        </div>
      </section>

      {/* Welcome + owner portrait */}
      <section className="heritage-bg text-[#152239] py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="card-frame relative p-2 bg-white border border-[#152239]/10 order-2 lg:order-1">
            <img src="/about/alan-williamson.png" alt="Alan A. Williamson, owner of Covington Casket" loading="lazy" decoding="async" className="w-full h-auto" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center gap-2">
              <span className="h-px w-6 bg-[#b1a17c]" /> Thank You for Visiting
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6">A Hometown Legacy</h2>
            <p className="font-sans text-[#152239]/75 text-sm md:text-base leading-relaxed mb-5">
              It is an honor to have you visit us. Since 1924, families across the Southeast have made us a part of their story. We are only able to do what we do because of professional, compassionate funeral directors who believe in Covington Casket — and the third generation of our Williamson family is now serving current, and often third-generation, funeral directors.
            </p>
            <blockquote className="font-serif italic text-[#b1a17c] text-xl md:text-2xl leading-snug mb-2">
              “To think — it all started with a pack of Lance crackers.”
            </blockquote>
            <p className="font-sans text-[#152239]/55 text-xs uppercase tracking-widest">— Alan A. Williamson, Owner</p>
          </div>
        </div>
      </section>

      {/* The Covington Story */}
      <section className="bg-[#152239] py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#b1a17c]/60" /> Since 1924 <span className="h-px w-8 bg-[#b1a17c]/60" />
            </span>
            <h2 className="text-4xl md:text-5xl font-light">The Condensed Version</h2>
          </div>

          <div className="card-frame relative p-2 bg-white/5 border border-white/10 mb-10">
            <img src="/about/factory.jpg" alt="The original Covington Casket factory on North Cotton Street" loading="lazy" decoding="async" className="w-full h-auto" />
          </div>

          <div className="space-y-5 font-sans text-white/75 text-sm md:text-base leading-relaxed">
            {story.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="card-frame relative p-2 bg-white/5 border border-white/10">
              <img src="/about/lance-crackers.jpg" alt="The Lance crackers jar in Covington’s Heritage Room" loading="lazy" decoding="async" className="w-full h-44 md:h-56 object-cover" />
            </div>
            <div className="card-frame relative p-2 bg-white/5 border border-white/10">
              <img src="/about/heritage-room.png" alt="Covington Casket Heritage Room" loading="lazy" decoding="async" className="w-full h-44 md:h-56 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Service area + map */}
      <section className="heritage-bg text-[#152239] py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-[#b1a17c] font-sans uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center gap-2">
              <span className="h-px w-6 bg-[#b1a17c]" /> Our Service Area
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6">Rooted in Andalusia, Alabama</h2>
            <p className="font-sans text-[#152239]/75 text-sm md:text-base leading-relaxed">
              Andalusia is about an hour and a half south of Montgomery and roughly 30 minutes from the Florida panhandle line. In addition to our massive corporate warehouse, we operate distribution centers in Mississippi, Louisiana, Georgia, and North Alabama.
            </p>
          </div>
          <div className="card-frame relative p-2 bg-white border border-[#152239]/10">
            <img src="/about/service-area-map.png" alt="Covington Casket service area across the Southeast" loading="lazy" decoding="async" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#d21243] py-20 lg:py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Become a Covington Partner</h2>
          <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed mb-10">
            We’d be honored to serve your funeral home. Reach out and we’ll tell you more about joining the Covington network.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="btn-swipe group inline-flex items-center gap-3 bg-white text-[#152239] [--btn-swipe:#b1a17c] [--corner:#152239] px-8 py-4 text-xs uppercase"
          >
            Contact Us <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </section>

    </div>
  );
}
