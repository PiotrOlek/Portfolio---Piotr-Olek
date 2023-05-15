import React from 'react';

function EducationAndExperience() {
  const education = [
    {
      institution: 'Nazwa uczelni 1',
      degree: 'Stopień naukowy 1',
      fieldOfStudy: 'Kierunek studiów 1',
      year: 'Rok ukończenia 1'
    },
    {
      institution: 'Nazwa uczelni 2',
      degree: 'Stopień naukowy 2',
      fieldOfStudy: 'Kierunek studiów 2',
      year: 'Rok ukończenia 2'
    },
    // Dodaj więcej informacji o edukacji
  ];

  const experience = [
    {
      company: 'Nazwa firmy 1',
      position: 'Stanowisko 1',
      period: 'Okres pracy 1',
      description: 'Opis obowiązków i osiągnięć 1'
    },
    {
      company: 'Nazwa firmy 2',
      position: 'Stanowisko 2',
      period: 'Okres pracy 2',
      description: 'Opis obowiązków i osiągnięć 2'
    },
    // Dodaj więcej informacji o doświadczeniu zawodowym
  ];

  return (
    <section className="education-experience-section">
      <h2>Edukacja i Doświadczenie zawodowe</h2>

      <div className="education">
        <h3>Edukacja</h3>
        {education.map((item, index) => (
          <div key={index}>
            <h4>{item.institution}</h4>
            <p>{item.degree} - {item.fieldOfStudy}</p>
            <p>{item.year}</p>
          </div>
        ))}
      </div>

      <div className="experience">
        <h3>Doświadczenie zawodowe</h3>
        {experience.map((item, index) => (
          <div key={index}>
            <h4>{item.company}</h4>
            <p>{item.position}</p>
            <p>{item.period}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationAndExperience;
