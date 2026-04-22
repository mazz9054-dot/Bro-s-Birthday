import { useEffect, useRef, useState } from 'react';
import './WishesSection.css';

const wishes = [
  { icon: '🌈', title: 'Endless Joy', desc: 'May every morning greet you with new reasons to smile and every night bring you peaceful rest.' },
  { icon: '🚀', title: 'Big Dreams', desc: 'May your ambitions soar higher than you ever imagined and your wings be strong enough to reach them.' },
  { icon: '💪', title: 'Unbreakable Strength', desc: 'May every challenge you face only forge you into someone stronger, wiser, and braver.' },
  { icon: '💙', title: 'True Love', desc: 'May you always be surrounded by people who love you genuinely and cherish your presence.' },
  { icon: '🌟', title: 'Bright Future', desc: 'May every door you knock on open wide, and every path you choose lead somewhere beautiful.' },
  { icon: '🎯', title: 'Clear Purpose', desc: 'May you always know your worth and walk through life with confidence and direction.' },
];

function WishCard({ wish, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`wish-card ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 120}ms` }}
    >
      <div className="wish-icon">{wish.icon}</div>
      <h3 className="wish-title">{wish.title}</h3>
      <p className="wish-desc">{wish.desc}</p>
    </div>
  );
}

export default function WishesSection() {
  return (
    <section className="wishes-wrapper" id="wishes">
      <div className="section">
        <h2 className="section-title">🎁 Birthday Wishes</h2>
        <div className="divider" />
        <p className="section-subtitle">
          Six heartfelt wishes from your Anna, for your brightest year yet 🌙
        </p>

        <div className="wishes-grid">
          {wishes.map((w, i) => (
            <WishCard key={i} wish={w} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
