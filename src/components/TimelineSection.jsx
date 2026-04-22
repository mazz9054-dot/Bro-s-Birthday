import { useEffect, useRef, useState } from 'react';
import './TimelineSection.css';

const milestones = [
  {
    year: '24 April 2005',
    title: 'A Star Arrives 🌟',
    desc: 'The day you were born, the whole family was complete. The little boy who would change everything.',
    icon: '👶',
    side: 'left',
  },
  {
    year: 'Toddler Days',
    title: 'First Steps & Big Smiles 😄',
    desc: 'Those tiny feet learning to walk, that infectious laugh filling the house — pure magic.',
    icon: '👟',
    side: 'right',
  },
  {
    year: 'School Days',
    title: 'The Curious Learner 📚',
    desc: 'Books, friends, and endless questions — you approached school with a natural curiosity that set you apart.',
    icon: '🏫',
    side: 'left',
  },
  {
    year: 'Growing Up',
    title: 'Finding Your Stride 🚀',
    desc: 'Teenage years full of discovery — music, friendships, adventures, and figuring out who you are.',
    icon: '🎵',
    side: 'right',
  },
  {
    year: 'Today',
    title: 'The Man You\'ve Become 👑',
    desc: 'Confident, kind, and unstoppable. Today, you stand on the threshold of an incredible future.',
    icon: '🌠',
    side: 'left',
  },
];

function TimelineItem({ item, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`timeline-item ${item.side} ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="timeline-icon">{item.icon}</div>
      <div className="timeline-card">
        <span className="timeline-year">{item.year}</span>
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-desc">{item.desc}</p>
      </div>
    </div>
  );
}

export default function TimelineSection() {
  return (
    <section className="timeline-wrapper" id="timeline">
      <div className="section">
        <h2 className="section-title">🌠 His Journey So Far</h2>
        <div className="divider" />
        <p className="section-subtitle">
          Every chapter of his life, beautifully written 📖
        </p>

        <div className="timeline">
          <div className="timeline-line" />
          {milestones.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
