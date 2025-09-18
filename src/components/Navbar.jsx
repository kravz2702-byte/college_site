import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
  { to: '/course', label: 'COURSE' },
  { to: '/blog', label: 'BLOG' },
  { to: '/contact', label: 'CONTACT' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuId = 'primary-navigation';

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav>
      <Link to="/" aria-label="Home">
        <img src="/images/logo.png" alt="College logo" />
      </Link>
      <div className={`nav-links${menuOpen ? ' open' : ''}`} id={menuId}>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Close navigation menu"
          aria-controls={menuId}
          onClick={() => setMenuOpen(false)}
        >
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="menu-toggle"
        aria-label="Open navigation menu"
        aria-controls={menuId}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(true)}
      >
        <i className="fa-solid fa-bars" aria-hidden="true" />
      </button>
    </nav>
  );
}

export default Navbar;
