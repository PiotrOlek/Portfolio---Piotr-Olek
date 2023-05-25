import React from 'react';
import styles from './Home.module.css';
import photo from '../images/photo.jpg';
import { CSSTransition } from 'react-transition-group';
import linkedinLogo from '../images/linkedin.png';
import githubLogo from '../images/github.png';

function Home() {
  return (
    <section className={styles.homeSection}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <CSSTransition in={true} appear={true} timeout={1000} classNames={styles} unmountOnExit>
            <h3>Witaj na mojej stronie!</h3>
          </CSSTransition>
          <CSSTransition in={true} appear={true} timeout={1000} classNames={styles} unmountOnExit>
            <p>Mam na imię Piotr, pasjonuję się programowaniem i tworzeniem aplikacji webowych.</p>
          </CSSTransition>
          <CSSTransition in={true} appear={true} timeout={1000} classNames={styles} unmountOnExit>
            <p>Na tej stronie znajdziesz informacje o moim doświadczeniu, umiejętnościach oraz projektach.</p>
          </CSSTransition>
          <CSSTransition in={true} appear={true} timeout={1000} classNames={styles} unmountOnExit>
            <p>Mam doświadczenie w projektowaniu i programowaniu interfejsów użytkownika oraz w tworzeniu responsywnych stron internetowych.</p>
          </CSSTransition>
          <CSSTransition in={true} appear={true} timeout={1000} classNames={styles} unmountOnExit>
            <p>Moim celem jest tworzenie intuicyjnych i atrakcyjnych dla użytkownika aplikacji webowych.</p>
          </CSSTransition>
          <CSSTransition in={true} appear={true} timeout={1000} classNames={styles} unmountOnExit>
            <p>Zapraszam do zapoznania się z moimi projektami, gdzie prezentuję moje umiejętności i kreatywność w praktyce.</p>
          </CSSTransition>
          <CSSTransition in={true} appear={true} timeout={1000} classNames={styles} unmountOnExit>
            <p>Jeśli masz jakiekolwiek pytania lub chciałbyś porozmawiać o możliwościach współpracy, skontaktuj się ze mną.</p>
          </CSSTransition>
          <CSSTransition in={true} appear={true} timeout={1000} classNames={styles} unmountOnExit>
            <p>Zapraszam do odkrywania moich projektów i twórczości!</p>
          </CSSTransition>
          </div>
        <div className={styles.imageContainer}>
          <img src={photo} alt="Photo" />
        </div>
        </div>
      <div className={styles.socialContainer}>
        <a href="https://www.linkedin.com/in/piotr-olek-03b0b71a3/?originalSubdomain=pl" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
      </a>
        <a href="https://github.com/PiotrOlek/Portfolio---Piotr-Olek" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
      </a>
      </div>

      <div className={styles.LinkedinHeader}>
      <h3>Mój profil Linkedin</h3>
      </div>

      <div className={styles.GithubHeader}>
      <h3>Mój profil Github</h3>
      </div>


    </section>
  );
}

export default Home;