import { useState, useEffect } from 'react';
import './Countdown.css';

const QUOTES = [
  "A star was born on this day...",
  "True patience brings great rewards...",
  "Almost time for the big reveal!",
  "Great things take time...",
  "The best is yet to come!",
  "Countdowns are just the universe building suspense! ⏳"
];

export default function Countdown({ targetDate, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    }, 4000);
    return () => clearInterval(quoteTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = targetDate - new Date().getTime();
      if (remaining <= 0) {
        clearInterval(timer);
        onComplete();
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="countdown-wrapper">
      <div className="countdown-overlay"></div>
      <div className="countdown-content">
        <h1 className="countdown-title">The Wait is Almost Over... ✨</h1>
        
        <div className="countdown-image-container">
          <img 
            src="/childhood/Screenshot%202025-04-23%20232058.png" 
            alt="Preview" 
            className="countdown-image" 
          />
        </div>
        
        <div className="timer-box">
          {days > 0 && (
            <>
              <div className="time-block">
                <span>{days.toString().padStart(2, '0')}</span>
                <small>Days</small>
              </div>
              <span className="separator">:</span>
            </>
          )}
          <div className="time-block">
            <span>{hours.toString().padStart(2, '0')}</span>
            <small>Hours</small>
          </div>
          <span className="separator">:</span>
          <div className="time-block">
            <span>{minutes.toString().padStart(2, '0')}</span>
            <small>Mins</small>
          </div>
          <span className="separator">:</span>
          <div className="time-block">
            <span>{seconds.toString().padStart(2, '0')}</span>
            <small>Secs</small>
          </div>
        </div>

        <p className="countdown-quote fade-in-quote" key={quoteIndex}>
          "{QUOTES[quoteIndex]}"
        </p>
      </div>
    </div>
  );
}
