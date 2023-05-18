import React from 'react';

function ProjectsSection() {
  const projects = [
    {
      name: 'Memory Games',
      description: 'Opis projektu 1',
      image: 'path/to/project1-image.jpg',
      link: 'https://example.com/project1'
    },
    {
      name: 'Projekt 2',
      description: 'Opis projektu 2',
      image: 'path/to/project2-image.jpg',
      link: 'https://example.com/project2'
    },
    // Dodaj więcej projektów według potrzeb
  ];

  return (
    <section className="projects-section">
      <h2>Projekty</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.name} />
            <a href={project.link}>Zobacz więcej</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
