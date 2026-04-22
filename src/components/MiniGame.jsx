import { useState, useEffect } from 'react';
import './MiniGame.css';

const IMAGES = [
  '/gamepics/WhatsApp%20Image%202026-04-23%20at%2012.47.36%20AM%20(1).jpeg',
  '/gamepics/WhatsApp%20Image%202026-04-23%20at%2012.47.36%20AM%20(2).jpeg',
  '/gamepics/WhatsApp%20Image%202026-04-23%20at%2012.47.36%20AM.jpeg',
  '/gamepics/WhatsApp%20Image%202026-04-23%20at%2012.47.37%20AM%20(1).jpeg',
  '/gamepics/WhatsApp%20Image%202026-04-23%20at%2012.47.37%20AM%20(2).jpeg',
  '/gamepics/WhatsApp%20Image%202026-04-23%20at%2012.47.37%20AM.jpeg',
];

export default function MiniGame({ onUnlock }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [won, setWon] = useState(false);
  const [exitAnim, setExitAnim] = useState(false);

  useEffect(() => {
    // Shuffle cards
    const shuffled = [...IMAGES, ...IMAGES]
      .sort(() => Math.random() - 0.5)
      .map((imgSrc, idx) => ({ id: idx, imgSrc }));
    setCards(shuffled);
  }, []);

  useEffect(() => {
    if (matched.length === IMAGES.length && IMAGES.length > 0) {
      setTimeout(() => setWon(true), 500);
    }
  }, [matched]);

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(cards[index].imgSrc)) return;
    
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const isMatch = cards[newFlipped[0]].imgSrc === cards[newFlipped[1]].imgSrc;
      if (isMatch) {
        setMatched([...matched, cards[newFlipped[0]].imgSrc]);
        setFlipped([]);
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 800);
      }
    }
  };

  const handleUnlock = () => {
    setExitAnim(true);
    setTimeout(() => {
      onUnlock();
    }, 800); // Wait for the transition out to finish
  };

  return (
    <div className={`minigame-container ${exitAnim ? 'game-exit' : ''}`}>
      <div className="minigame-modal">
        {!won ? (
          <div className="game-view">
            <h2 className="game-title">Wait! Who goes there? 🕵️‍♂️</h2>
            <p className="game-subtitle">Match all the pairs to unlock your surprise!</p>
            
            <div className="game-grid">
              {cards.map((card, i) => {
                const isFlipped = flipped.includes(i) || matched.includes(card.imgSrc);
                return (
                  <div 
                    key={card.id} 
                    className={`game-card ${isFlipped ? 'flipped' : ''}`}
                    onClick={() => handleCardClick(i)}
                  >
                    <div className="card-inner">
                      <div className="card-front">❓</div>
                      <div className="card-back">
                        <img src={card.imgSrc} alt="Memory card" className="card-image" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="game-progress">
              Matches: {matched.length} / {IMAGES.length}
            </div>
          </div>
        ) : (
          <div className="win-view">
            <h2 className="win-title">🎉 Access Granted! 🎉</h2>
            <p className="win-text">Siyam Saran! Happy Birthday 🎂</p>
            <button className="enter-btn" onClick={handleUnlock}>
              Explore Adventures 🚀
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
