import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import AboutUs from '../components/AboutUs';
import CasketShowcase from '../components/CasketShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import Storyboards from '../components/Storyboards';
import CTASection from '../components/CTASection';

export default function Home({ reveal }: { reveal?: boolean }) {
  return (
    <>
      <div id="home"><Hero reveal={reveal} /></div>
      <TrustBanner />
      <div id="about" className="scroll-mt-28"><AboutUs /></div>
      <div id="caskets" className="scroll-mt-28"><CasketShowcase /></div>
      <WhyChooseUs />
      <div id="storyboards" className="scroll-mt-28"><Storyboards /></div>
      <div id="contact" className="scroll-mt-28"><CTASection /></div>
    </>
  );
}
