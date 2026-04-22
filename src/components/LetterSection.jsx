import { useState } from 'react';
import './LetterSection.css';

const quotes = [
  {
    text: "A brother is a friend given by Nature.",
    author: "Jean Baptiste Legouvé",
    icon: "🌿"
  },
  {
    text: "Brothers are what best friends can never be.",
    author: "Unknown",
    icon: "🤝"
  },
  {
    text: "Having a place to go — is a home. Having someone to love — is a family. Having both — is a blessing.",
    author: "Donna Hedges",
    icon: "🏠"
  },
  {
    text: "The bond between brothers is unbreakable — it echoes through every chapter of life.",
    author: "Unknown",
    icon: "⚡"
  }
];

export default function LetterSection() {
  const [activeQuote, setActiveQuote] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <section className="letter-wrapper" id="letter">
      <div className="section">
        <h2 className="section-title">💌 A Letter From the Heart</h2>
        <div className="divider" />
        <p className="section-subtitle">
          Written with love, from Anna to Siyam Saran 💙
        </p>

        {/* Envelope / Letter */}
        <div className="envelope-container">
          {!open ? (
            <div className="envelope" id="envelope" onClick={() => setOpen(true)}>
              <div className="envelope-flap" />
              <div className="envelope-body">
                <div className="envelope-seal">💙</div>
                <p className="envelope-hint">Click to open your letter 💌</p>
              </div>
            </div>
          ) : (
            <div className="letter-card animate-slide-up">
              <div className="letter-header">
                <span className="letter-date">{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span className="letter-to">Dear Siyam Saran,</span>
              </div>

              <div className="letter-body">
                <p>
                  Wishing you a very Happy Birthday my dear Thambi💙.. Ipo Irukura maathiri yepovume lifelong happy huh irukanum nee and I won't let you alone in any situation you can blindly trust me.
                </p>
                <p>
                  On this special day, I want you to know that having you as my younger brother is one of the greatest gifts life has ever given me. 🌟
                </p>
                <p>
                  You are not a kid anymore!, eni life rombave kastama Irukam but, whenever the world feels heavy remember that without the fear of any judgement you have me on your side all the time.                
                </p>
                <p>
                  Today isn't just your birthday. It's a celebration of YOU — every laugh, every dream, every scar that made you stronger. You are enough. You are loved. You are destined for greatness.
                </p>
                <p>
                Na unaku oru nalla Annana irunthurukena nu therla but nee yepovume enaku oru nalla Thambi yah irunthurukae . Forever grateful for God to be with us ♱
                </p>
                <p className="letter-sign">
                  With all my love and blessings,<br />
                  <strong>Your Anna 💙</strong>
                </p>
              </div>

              <button className="close-letter-btn" onClick={() => setOpen(false)}>
                Close Letter ✉️
              </button>
            </div>
          )}
        </div>

        {/* Quotes carousel */}
        <div className="quotes-section">
          <h3 className="quotes-title">✨ Words to Live By</h3>
          <div className="quotes-slider">
            <div className="quote-card">
              <span className="quote-icon">{quotes[activeQuote].icon}</span>
              <blockquote className="quote-text">
                "{quotes[activeQuote].text}"
              </blockquote>
              <cite className="quote-author">— {quotes[activeQuote].author}</cite>
            </div>
            <div className="quote-dots">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  className={`quote-dot ${i === activeQuote ? 'active' : ''}`}
                  onClick={() => setActiveQuote(i)}
                  aria-label={`Quote ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
