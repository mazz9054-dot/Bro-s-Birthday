import { useState, useEffect, useRef } from 'react';
import './GallerySection.css';

const childhoodImages = [
  { src: '/childhood/t.jpg', caption: 'The beginning of a wonderful journey 👶' },
  { src: '/childhood/t1.jpg', caption: 'First birthday celebration with family 🎂' },
  { src: '/childhood/t2.jpg', caption: 'Sweet family moments 💕' },
  { src: '/childhood/t3.jpg', caption: 'That pure, precious smile 😊' },
  { src: '/childhood/t7.jpg', caption: 'Always full of love and laughter ❤️' },
  { src: '/childhood/t6.jpg', caption: 'Growing up surrounded by love 🌟' },
  { src: '/childhood/t10.jpg', caption: 'Two brothers, one heart 👫' },
  { src: '/childhood/t11.jpg', caption: 'The boys we were 🌈' },
];

const currentImages = [
  { src: '/current/WhatsApp%20Image%202026-04-21%20at%209.30.01%20PM%20(2).jpeg', caption: 'The handsome young man he\'s become 🌿' },
  { src: '/current/WhatsApp%20Image%202026-04-21%20at%209.30.01%20PM%20(3).jpeg', caption: 'Smiling through every season 😄' },
  { src: '/current/WhatsApp%20Image%202026-04-21%20at%209.30.01%20PM%20(4).jpeg', caption: 'Adventures with the best people ✨' },
  { src: '/current/7f8afa16-6580-4561-9fb1-1461ba3f7fad.jpg', caption: 'Living life to the fullest 🎉' },
  { src: '/current/Picsart_25-03-28_18-24-17-116-1.jpg', caption: 'Always dreaming big 🚀' },
  { src: '/current/WhatsApp%20Image%202025-09-07%20at%2016.35.28_ddf28bd7.jpg', caption: 'Making memories 💫' },
  { src: '/current/WhatsApp%20Image%202026-04-21%20at%209.30.01%20PM.jpeg', caption: 'A style of his own 🕶️' },
  { src: '/current/fad90b0d-9468-45e6-9fab-3f21d8d7d74a.jpg', caption: 'Unforgettable times 🔥' },
];

function PhotoCard({ src, caption, index }) {
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
      className={`photo-card ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 4) * 100}ms` }}
    >
      <div className="photo-inner">
        <img src={src} alt={caption} loading="lazy" />
        <div className="photo-overlay">
          <p>{caption}</p>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [tab, setTab] = useState('childhood');

  const images = tab === 'childhood' ? childhoodImages : currentImages;

  return (
    <section className="gallery-wrapper" id="gallery">
      <div className="section">
        <h2 className="section-title">📸 Memory Lane</h2>
        <div className="divider" />
        <p className="section-subtitle">
          From tiny steps to big dreams — every photo tells a story ✨
        </p>

        {/* Tabs */}
        <div className="gallery-tabs">
          <button
            className={`gallery-tab ${tab === 'childhood' ? 'active' : ''}`}
            onClick={() => setTab('childhood')}
            id="tab-childhood"
          >
            👶 Childhood Memories
          </button>
          <button
            className={`gallery-tab ${tab === 'current' ? 'active' : ''}`}
            onClick={() => setTab('current')}
            id="tab-current"
          >
            ✨ Present Day
          </button>
        </div>

        {/* Photo grid */}
        <div className="photo-grid">
          {images.map((img, i) => (
            <PhotoCard key={img.src} src={img.src} caption={img.caption} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
