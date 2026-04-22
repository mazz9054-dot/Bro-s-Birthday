import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import TimelineSection from './components/TimelineSection';
import LetterSection from './components/LetterSection';
import WishesSection from './components/WishesSection';
import FooterSection from './components/FooterSection';
import Confetti from './components/Confetti';
import MiniGame from './components/MiniGame';
import Countdown from './components/Countdown';
import './index.css';
import './App.css';

export default function App() {
  const targetDate = new Date("2026-04-24T00:00:00").getTime();
  const [isTimeUp, setIsTimeUp] = useState(new Date().getTime() >= targetDate);
  
  const [confetti, setConfetti] = useState(false);
  const [showGame, setShowGame] = useState(true);

  // Trigger confetti on unlock
  useEffect(() => {
    if (!showGame && isTimeUp) {
      const t = setTimeout(() => setConfetti(true), 800);
      return () => clearTimeout(t);
    }
  }, [showGame, isTimeUp]);

  // Lock scroll when countdown or game is active
  useEffect(() => {
    if (!isTimeUp || showGame) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isTimeUp, showGame]);

  if (!isTimeUp) {
    return <Countdown targetDate={targetDate} onComplete={() => setIsTimeUp(true)} />;
  }

  return (
    <>
      {showGame && <MiniGame onUnlock={() => setShowGame(false)} />}
      <div className="app">
        <Confetti active={confetti} />
        <Navbar />
        <HeroSection />
        <GallerySection />
        <TimelineSection />
        <LetterSection />
        <WishesSection />
        <FooterSection />

        {/* Floating confetti trigger */}
        <button
          className="confetti-trigger"
          onClick={() => setConfetti(true)}
          title="Celebrate again!"
          id="confetti-trigger-btn"
          aria-label="Trigger confetti"
        >
          🎊
        </button>
      </div>
    </>
  );
}
