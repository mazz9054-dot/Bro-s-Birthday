import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#timeline', label: 'Journey' },
  { href: '#letter', label: 'Letter' },
  { href: '#wishes', label: 'Wishes' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-nav">
      <div className="nav-inner">
        <a href="#hero" className="nav-brand">
          🎂 <span>Siyam Saran's Birthday</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="mobile-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
