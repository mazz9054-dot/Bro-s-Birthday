import { useEffect, useState } from 'react';
import './HeroSection.css';

const Particle = ({ style }) => <div className="hero-particle" style={style} />;

export default function HeroSection() {
  const [particles, setParticles] = useState([]);
  const [candles, setCandles] = useState([true, true, true, true, true]);
  const [allBlown, setAllBlown] = useState(false);

  useEffect(() => {
    const pts = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 8}s`,
      animationDuration: `${4 + Math.random() * 6}s`,
      width: `${2 + Math.random() * 4}px`,
      height: `${2 + Math.random() * 4}px`,
      background: i % 3 === 0
        ? '#60a5fa'
        : i % 3 === 1
        ? '#fcd34d'
        : '#93c5fd',
      top: `${Math.random() * 100}%`,
      opacity: 0.4 + Math.random() * 0.6,
    }));
    setParticles(pts);
  }, []);

  const blowCandle = (idx) => {
    const next = [...candles];
    next[idx] = false;
    setCandles(next);
    if (next.every(c => !c)) setAllBlown(true);
  };

  const resetCandles = () => {
    setCandles([true, true, true, true, true]);
    setAllBlown(false);
  };

  return (
    <section className="hero" id="hero">
      {/* Stars/particles */}
      {particles.map(p => (
        <Particle
          key={p.id}
          style={{
            left: p.left,
            top: p.top,
            width: p.width,
            height: p.height,
            background: p.background,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
            opacity: p.opacity,
          }}
        />
      ))}

      {/* Moon deco */}
      <div className="hero-moon" />

      <div className="hero-content">
        {/* Profile ring */}
        <div className="hero-photo-wrapper">
          <div className="hero-ring hero-ring-1" />
          <div className="hero-ring hero-ring-2" />
          <div className="hero-photo-frame">
            <img
              src="/current/WhatsApp%20Image%202026-04-21%20at%209.30.02%20PM.jpeg"
              alt="Birthday Boy"
              className="hero-photo"
            />
          </div>
        </div>

        {/* Text */}
        <p className="hero-label">🎉 Today is a Special Day 🎉</p>
        <h1 className="hero-title">
          Happy Birthday,
          <span className="hero-name"> Siyam Saran! 🎂</span>
        </h1>
        <p className="hero-sub">
          Another journey around the sun completed — and what a journey it's been!<br />
          May this new chapter be your brightest yet. ✨
        </p>

        {/* Cake candles */}
        <div className="hero-cake-area">
          <div className="hero-candles">
            {candles.map((lit, i) => (
              <button
                key={i}
                className={`candle-btn ${!lit ? 'blown' : ''}`}
                onClick={() => blowCandle(i)}
                title="Click to blow out!"
                aria-label={`Candle ${i + 1}`}
              >
                {lit && <span className="candle-flame">🔥</span>}
                <span className="candle-body" />
              </button>
            ))}
          </div>
          <div className="cake-base">
            <span className="cake-emoji">🎂</span>
          </div>
          {allBlown && (
            <div className="wish-popup animate-slide-up">
              <p>🌟 Your wish has been granted! 🌟</p>
              <button className="relight-btn" onClick={resetCandles}>Relight Candles</button>
            </div>
          )}
          {!allBlown && (
            <p className="candle-hint">👆 Click each candle to blow it out & make a wish!</p>
          )}
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-dot" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
