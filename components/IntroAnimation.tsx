import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { INTRO_SVG } from './introSvg';

const SEEN_KEY = 'ryl-intro-seen';
const PLAY_MS = 2700;
const FADE_MS = 450;

function shouldPlay(pathname: string): boolean {
  if (typeof window === 'undefined' || pathname !== '/') return false;
  try {
    if (window.sessionStorage.getItem(SEEN_KEY)) return false;
  } catch {
    /* storage unavailable: still play */
  }
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  return true;
}

/** Plays the share-card build-in once per visit when a visitor lands on the home page. */
const IntroAnimation: React.FC = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(() => shouldPlay(pathname));
  const [leaving, setLeaving] = useState(false);
  const finishing = useRef(false);

  const finish = useCallback(() => {
    if (finishing.current) return;
    finishing.current = true;
    setLeaving(true);
    window.setTimeout(() => setVisible(false), FADE_MS);
  }, []);

  useEffect(() => {
    if (!visible) return;
    try {
      window.sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* ignore */
    }
    const timer = window.setTimeout(finish, PLAY_MS);
    window.addEventListener('keydown', finish);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', finish);
      document.body.style.overflow = prevOverflow;
    };
  }, [visible, finish]);

  if (!visible) return null;

  return (
    <div className={`ryl-intro${leaving ? ' ryl-intro--leaving' : ''}`} onClick={finish} aria-hidden="true">
      <div className="ryl-intro__art" dangerouslySetInnerHTML={{ __html: INTRO_SVG }} />
      <span className="ryl-intro__skip">Click anywhere to skip</span>
    </div>
  );
};

export default IntroAnimation;
