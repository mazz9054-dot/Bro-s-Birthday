import './FooterSection.css';

export default function FooterSection() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-glow" />
      <div className="footer-content">
        {/* Photo collage row */}
        <div className="footer-photos">
          {[
            '/current/WhatsApp%20Image%202026-04-21%20at%209.30.01%20PM%20(1).jpeg',
            '/childhood/t10.jpg',
            '/current/WhatsApp%20Image%202026-04-21%20at%209.30.01%20PM%20(4).jpeg',
          ].map((src, i) => (
            <div className="footer-photo" key={i}>
              <img src={src} alt="Memory" />
            </div>
          ))}
        </div>

        <div className="footer-main">
          <div className="footer-cake">🎂</div>
          <h2 className="footer-title">
            Happy Birthday, Thambi!
          </h2>
          <p className="footer-quote">
            "You are not just a year older, you are a year wiser, braver, and more magnificent."
          </p>

          <div className="footer-balloons">
            {['🎈', '🎉', '🎊', '✨', '🎈'].map((b, i) => (
              <span key={i} className="balloon" style={{ animationDelay: `${i * 0.5}s` }}>{b}</span>
            ))}
          </div>

          <div className="footer-hearts">
            <span>Made with</span>
            <span className="heart-pulse">💙</span>
            <span>by your Anna</span>
          </div>

          <p className="footer-copyright">
            April 24, 2026 &nbsp;•&nbsp; A day to remember forever ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
