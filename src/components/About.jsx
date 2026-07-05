import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { Tag } from './common/Tag';

export const About = () => {
  const backendSkills = ['Python', 'Django', 'Django REST Framework', 'Celery', 'Java'];
  const frontendSkills = ['React', 'JavaScript', 'HTML', 'CSS'];
  const toolsSkills = ['Docker', 'Git', 'PostgreSQL', 'SQLite'];

  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-title">
      <SectionTitle number="// 01" title="Sobre mí" />

      <div className="about-grid">
        <div className="about-text">
          <p>
            Soy desarrollador backend con foco en Python y Django, cursando la Licenciatura en
            Informática en la Universidad Nacional de Hurlingham (UNAHUR).
          </p>
          <p>
            Me interesa construir sistemas bien estructurados que resuelvan problemas reales.
            Actualmente estoy desarrollando FlawsFind, un proyecto de startup de ciberseguridad cuyo
            objetivo es que cualquier persona pueda entender el estado de seguridad de su sitio web
            sin necesidad de conocimientos técnicos.
          </p>
        </div>

        <div className="about-stack">
          <div style={{ marginBottom: '1.5rem' }}>
            <h4>Backend</h4>
            <ul className="tag-list" style={{ marginTop: '0.5rem' }}>
              {backendSkills.map((skill) => (
                <Tag key={skill} as="li">
                  {skill}
                </Tag>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4>Frontend</h4>
            <ul className="tag-list" style={{ marginTop: '0.5rem' }}>
              {frontendSkills.map((skill) => (
                <Tag key={skill} as="li">
                  {skill}
                </Tag>
              ))}
            </ul>
          </div>

          <div>
            <h4>Herramientas</h4>
            <ul className="tag-list" style={{ marginTop: '0.5rem' }}>
              {toolsSkills.map((skill) => (
                <Tag key={skill} as="li">
                  {skill}
                </Tag>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
