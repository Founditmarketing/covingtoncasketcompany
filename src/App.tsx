/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import LoadScreen from './components/LoadScreen';
import SearchModal from './components/SearchModal';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import JobsPage from './pages/JobsPage';
import ImmediateNeedPage from './pages/ImmediateNeedPage';
import CasketsPage from './pages/CasketsPage';
import ProductPage from './pages/ProductPage';
import StoryboardsPage from './pages/StoryboardsPage';
import { getCategory, getCasket } from './data/caskets';

const getRoute = () => window.location.hash.replace(/^#/, '') || '/';

export default function App() {
  const [route, setRoute] = useState(getRoute());
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  // Intro sequence (home only): load screen -> reveal hero background -> content slides in.
  const [phase, setPhase] = useState<'load' | 'reveal' | 'done'>(() => (getRoute() === '/' ? 'load' : 'done'));

  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    if (phase === 'done') return;
    const t1 = window.setTimeout(() => setPhase('reveal'), 2400); // load screen fades, revealing the hero background
    const t2 = window.setTimeout(() => setPhase('done'), 3600); // then content fades & slides in
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reveal = phase === 'done';

  // Navigate to a route, optionally scrolling to a section (used for home anchors).
  const navigate = (to: string, section?: string) => {
    setMenuOpen(false);
    const changing = getRoute() !== to;
    if (changing) window.location.hash = '#' + to;
    window.setTimeout(
      () => {
        if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: changing ? 'auto' : 'smooth' });
      },
      changing ? 90 : 0,
    );
  };

  let page;
  if (route === '/about') page = <AboutPage navigate={navigate} />;
  else if (route === '/contact') page = <ContactPage navigate={navigate} />;
  else if (route === '/jobs') page = <JobsPage navigate={navigate} />;
  else if (route === '/immediate-need') page = <ImmediateNeedPage navigate={navigate} />;
  else if (route === '/storyboards') page = <StoryboardsPage navigate={navigate} />;
  else if (route === '/caskets') page = <CasketsPage navigate={navigate} />;
  else if (route.startsWith('/caskets/')) {
    const [, , catSlug, prodSlug] = route.split('/');
    const category = getCategory(catSlug);
    if (category && prodSlug) {
      const casket = getCasket(catSlug, prodSlug);
      page = casket ? <ProductPage navigate={navigate} casket={casket} /> : <CasketsPage navigate={navigate} category={category} />;
    } else if (category) {
      page = <CasketsPage navigate={navigate} category={category} />;
    } else {
      page = <CasketsPage navigate={navigate} />;
    }
  } else page = <Home reveal={reveal} />;

  return (
    <div className="min-h-screen bg-[#152239] selection:bg-[#d21243] selection:text-white relative">
      {phase !== 'done' && <LoadScreen fading={phase === 'reveal'} />}

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} navigate={navigate} route={route} onSearch={() => setSearchOpen(true)} />

      <main>{page}</main>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} navigate={navigate} />

      <Footer navigate={navigate} />

      {/* Floating contact widget — hidden while the mobile menu is open */}
      <ChatWidget hidden={menuOpen} />
    </div>
  );
}
