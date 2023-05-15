import React from 'react';

function Skills() {
  const skills = [
    'Umiejętność 1',
    'Umiejętność 2',
    'Umiejętność 3',
    // Dodaj więcej umiejętności według potrzeb
  ];

  return (
    <section className="skills-section">
      <h2>Umiejętności</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
