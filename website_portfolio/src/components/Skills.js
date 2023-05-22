import React from 'react';

function Skills() {
  return (
    <div>
      <section className="programming-languages">
        <h2>Języki Programowania</h2>
        <div className="left-column">
          <p>JavaScript</p>
        </div>
        <div className="left-mid-column">
          <p>Python</p>
        </div>
        <div className="right-mid-column">
          <p>HTML</p>
        </div>
        <div className="right-column">
          <p>CSS</p>
        </div>
      </section>

      <section className="technologies-and-frameworks">
        <h2>Technologie i frameworki</h2>
        <div className="left-column">
          <p>React.js</p>
        </div>
        <div className="mid-column">
          <p>Plumsail Forms</p>
        </div>
        <div className="right-column">
          <p>WordPress</p>
        </div>  
      </section>

      <section className="Database">
        <h2>Bazy danych</h2>
        <div className="left-column">
          <p>MySQL</p>
        </div>
        <div className="right-column">
          <p>Azure Data Studio</p>
        </div>  
      </section>

      <section className="Tools-and-Development-Environments">
        <h2>Narzędzia i środowiska programistyczne</h2>
        <div className="left-column">
          <p>GIT</p>
        </div>
        <div className="mid-column">
          <p>Visual StudioCode</p>
        </div>
        <div className="right-column">
          <p>Jira</p>
        </div>  
      </section>


      <section className="admin">
        <h2>Zarządzanie infrastrukturą IT</h2>
        <div className="left-column">
          <p>Administracja w Azure Active Directory</p>
        </div>
        <div className="left-mid-column">
          <p>Zarządzanie infrastrukturą sieciową w całej organizacji - Teltonika Networks</p>
        </div>
        <div className="right-mid-column">
          <p>Kompleksowe zarządzanie sprzętem IT</p>
        </div>
        <div className="right-column">
          <p>Zarządzanie Systemem RFID</p>
        </div>
      </section>
    </div>
  );
}

export default Skills;
