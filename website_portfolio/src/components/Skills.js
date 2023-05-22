import React from 'react';
import JavaScriptLogo from '../images/js.png';
import PythonLogo from '../images/python.png';
import HTMLLogo from '../images/html.png';
import CSSLogo from '../images/css.png';
import ReactLogo from '../images/react.png';
import WordPressLogo from '../images/wordpress.png';
import MySQLLogo from '../images/sql.png';
import GITLogo from '../images/git.png';
import VSCodeLogo from '../images/visual-studio.png';
import JiraLogo from '../images/jira.png';
import SharePointLogo from '../images/sharepoint.png';
import styles from './Skills.module.css';

function Skills() {
  return (
    <div>
      <section className={styles['programming-languages']}>
        <h2 className={styles['heading']}>Języki Programowania</h2>
        <div className={styles['left-column-programing']}>
          <img src={JavaScriptLogo} alt="JavaScript" />
          <p className={styles['left-column-programing-text']}>JavaScript</p>
        </div>
        <div className={styles['left-mid-column-programing']}>
          <img src={PythonLogo} alt="Python" />
          <p className={styles['left-mid-column-programing-text']}>Python</p>
        </div>
        <div className={styles['right-mid-column-programing']}>
          <img src={HTMLLogo} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className={styles['right-column-programing']}>
          <img src={CSSLogo} alt="CSS" />
          <p>CSS</p>
        </div>
      </section>

      <section className={styles['technologies-and-frameworks']}>
        <h2>Technologie i frameworki</h2>
        <div className={styles['left-column-frameworks']}>
          <img src={ReactLogo} alt="React.js" />
          <p>React.js</p>
        </div>
        <div className={styles['right-column-frameworks']}>
          <img src={WordPressLogo} alt="WordPress" />
          <p>WordPress</p>
        </div>
      </section>

      <section className={styles['Database']}>
        <h2>Bazy danych</h2>
        <div className={styles['mid-column-Database']}>
          <img src={MySQLLogo} alt="MySQL" />
          <p>MySQL</p>
        </div>
      </section>

      <section className={styles['Tools-and-Development-Environments']}>
        <h2>Narzędzia i środowiska programistyczne</h2>
        <div className={styles['left-column-Tools']}>
          <img src={GITLogo} alt="GIT" />
          <p>GIT</p>
        </div>
        <div className={styles['left-mid-column-Tools']}>
          <img src={VSCodeLogo} alt="Visual Studio Code" />
          <p>Visual Studio Code</p>
        </div>
        <div className={styles['right-mid-column-Tools']}>
          <img src={JiraLogo} alt="Jira" />
          <p>Jira</p>
        </div>
        <div className={styles['right-column-Tools']}>
          <img src={SharePointLogo} alt="SharePoint" />
          <p>SharePoint</p>
        </div>
      </section>

      <section className={styles['admin']}>
        <h2>Zarządzanie infrastrukturą IT</h2>
        <div className={styles['left-column-admin']}>
          <p>Administracja w Azure Active Directory</p>
        </div>
        <div className={styles['left-mid-column-admin']}>
          <p>Zarządzanie infrastrukturą sieciową w całej organizacji - Teltonika Networks</p>
        </div>
        <div className={styles['right-mid-column-admin']}>
          <p>Kompleksowe zarządzanie sprzętem IT</p>
        </div>
        <div className={styles['right-column-admin']}>
          <p>Zarządzanie Systemem RFID</p>
        </div>
      </section>
    </div>
  );
}

export default Skills;
