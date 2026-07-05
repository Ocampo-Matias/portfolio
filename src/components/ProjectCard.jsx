import React from 'react';
import { Tag } from './common/Tag';

export const ProjectCard = ({ project }) => {
  const { title, description, tags, links } = project;

  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-tags">
        {tags.map((tag) => (
          <Tag key={tag} as="span">
            {tag}
          </Tag>
        ))}
      </div>

      <div className="project-links">
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            Ver código ↗
          </a>
        )}
        {links.status && <span className="project-links-status">{links.status}</span>}
      </div>
    </article>
  );
};
