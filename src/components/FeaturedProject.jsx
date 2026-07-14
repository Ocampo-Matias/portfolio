import React from 'react';
import { Tag } from './common/Tag';
import dashboardScreenshot from '../assets/flawsfind-dashboard.jpeg';

export const FeaturedProject = ({ project }) => {
  const { title, badge, description, tags, links } = project;

  return (
    <article className="featured-project">
      <div className="featured-project-header">
        <span className="project-badge">{badge}</span>
        <h3>{title}</h3>
      </div>

      {/* Propuesta de valor destacada */}
      <blockquote className="featured-project-pitch">
        "FlawsFind no busca únicamente detectar vulnerabilidades. También intenta ayudar a que
        personas sin experiencia en ciberseguridad comprendan qué significan los resultados del
        escaneo, mientras ofrece a usuarios técnicos la información necesaria para profundizar en
        cada hallazgo."
      </blockquote>

      <p className="featured-project-description">{description}</p>

      {/* Características actualmente implementadas */}
      <div className="featured-project-features">
        <h4>Capacidades Implementadas Actualmente</h4>
        <ul>
          <li>
            <strong>Integración OWASP ZAP:</strong> Motor de análisis activo y pasivo para detección
            de vulnerabilidades.
          </li>
          <li>
            <strong>Autenticación de Usuarios:</strong> Panel privado para gestionar y guardar
            reportes históricos.
          </li>
          <li>
            <strong>Cuestionario de Contexto:</strong> Entrevista interactiva para mapear la
            criticidad y el entorno del sitio.
          </li>
          <li>
            <strong>Severidad Dinámica:</strong> Recálculo de criticidad basado en las respuestas
            del cuestionario.
          </li>
          <li>
            <strong>Reportes de Visualización Dual:</strong> Doble vista de resultados:
            explicaciones sencillas y detalles técnicos profundos.
          </li>
          <li>
            <strong>Exportación de Reporte:</strong> Exportación de sumarios de seguridad en formato
            HTML.
          </li>
        </ul>
      </div>

      {/* Flujo de análisis simplificado (Diagrama monoespaciado) */}
      <div className="flow-diagram-container">
        <h4 className="flow-diagram-title">Flujo lógico del escaneo</h4>

        {/* PLACEHOLDER: Diagrama de arquitectura interactivo o imagen (SVG, Excalidraw o Figma) */}
        <pre className="flow-diagram" aria-label="Diagrama del flujo lógico del escaneo">
          {`Usuario
  │
  ▼
Cuestionario de contexto (Producción, Datos sensibles, Roles)
  │
  ▼
OWASP ZAP Engine (Análisis activo/pasivo)
  │
  ▼
Recalculador de severidad (Contexto + Severidad base CVSS)
  │
  ▼
Reporte Dual ──┬──> Vista no técnica (Lenguaje claro)
               └──> Vista técnica (Payloads, Referencias)`}
        </pre>
      </div>

      <div className="project-tags" style={{ margin: '1.5rem 0' }}>
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

        {/* PLACEHOLDER: Enlace a demo en vivo y documentación técnica extendida en el futuro */}
        {/*
        <a href="https://flawsfind.demo" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
          Probar Demo ↗
        </a>
        */}
      </div>

      {/* Captura de pantalla real de FlawsFind */}
      <div className="featured-project-screenshot-container">
        <img
          src={dashboardScreenshot}
          alt="Dashboard de FlawsFind"
          className="featured-project-screenshot"
        />
      </div>
    </article>
  );
};
