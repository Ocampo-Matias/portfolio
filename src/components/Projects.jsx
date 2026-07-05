import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { FeaturedProject } from './FeaturedProject';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../data/projects';

export const Projects = () => {
  const featuredProject = projectsData.find((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="proyectos" aria-labelledby="proyectos-title">
      <SectionTitle number="// 02" title="Proyectos" />

      {featuredProject && (
        <div style={{ marginBottom: '2.5rem' }}>
          <FeaturedProject project={featuredProject} />
        </div>
      )}

      {otherProjects.length > 0 && (
        <>
          <h4
            style={{
              fontSize: '0.8rem',
              fontFamily: 'var(--mono)',
              color: 'var(--muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginTop: '3rem',
              marginBottom: '1rem',
            }}
          >
            Otros Proyectos desarrollados
          </h4>
          <div className="projects-grid">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
