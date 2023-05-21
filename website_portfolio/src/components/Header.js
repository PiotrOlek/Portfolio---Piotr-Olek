import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../images/logo.png';
import WebFont from 'webfontloader';

function Header() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto:400,500,700']
      }
    });
  }, []);

  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={location.pathname === '/' ? styles.active : ''}>
            <Link to="/">Strona główna</Link>
          </li>
          <li className={location.pathname === '/skills' ? styles.active : ''}>
            <Link to="/skills">Umiejętności</Link>
          </li>
          <li className={location.pathname === '/projects' ? styles.active : ''}>
            <Link to="/projects">Projekty</Link>
          </li>
          <li className={location.pathname === '/contact' ? styles.active : ''}>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
