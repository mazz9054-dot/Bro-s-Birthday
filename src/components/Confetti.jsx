import { useEffect, useState } from 'react';
import './Confetti.css';

const COLORS = ['#60a5fa', '#fcd34d', '#93c5fd', '#f472b6', '#34d399', '#818cf8'];

function getRandomConfetti(id) {
  return {
    id,
    left: `${Math.random() * 100}%`,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    duration: `${2.5 + Math.random() * 3}s`,
    delay: `${Math.random() * 3}s`,
    width: `${6 + Math.random() * 8}px`,
    height: `${10 + Math.random() * 8}px`,
    rotate: `${Math.random() * 360}deg`,
  };
}

export default function Confetti({ active }) {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    if (active) {
      setPieces(Array.from({ length: 60 }, (_, i) => getRandomConfetti(i)));
      const t = setTimeout(() => setPieces([]), 6000);
      return () => clearTimeout(t);
    }
  }, [active]);

  if (!pieces.length) return null;

  return (
    <div className="confetti-container" aria-hidden>
      {pieces.map(p => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left,
            background: p.color,
            animationDuration: p.duration,
            animationDelay: p.delay,
            width: p.width,
            height: p.height,
            transform: `rotate(${p.rotate})`,
          }}
        />
      ))}
    </div>
  );
}
