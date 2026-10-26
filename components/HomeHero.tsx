import React from 'react';
import { INTRO_SVG } from './introSvg';

/**
 * Animated share-card hero at the top of the home page.
 * The artwork builds in once when the page loads, then stays put;
 * the background gradient drifts slowly behind it and the grain flickers.
 */
const HomeHero: React.FC = () => (
  <section className="home-hero" aria-label="Rate Your Landlord Chapel Hill. Read the reviews before you sign.">
    <div className="home-hero__band" aria-hidden="true" />
    <div className="home-hero__art" aria-hidden="true" dangerouslySetInnerHTML={{ __html: INTRO_SVG }} />
  </section>
);

export default HomeHero;
