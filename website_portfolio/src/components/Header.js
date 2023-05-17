import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../images/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/about">O mnie</Link>
          </li>
          <li>
            <Link to="/education-experience">Edukacja i Doświadczenie</Link>
          </li>
          <li>
            <Link to="/skills">Umiejętności</Link>
          </li>
          <li>
            <Link to="/projects">Projekty</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
