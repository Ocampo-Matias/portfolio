import React from 'react';
import { Button } from './common/Button';
import profilePic from '../assets/profile.jpeg';

export const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <p className="hero-eyebrow">// Backend Developer</p>
          <h1>
            Matías
            <br />
            <span>Ocampo</span>
          </h1>
          <p className="hero-desc">
            Estudiante de Informática en la UNAHUR, construyendo software con foco en backend
            Python/Django y ciberseguridad web. Actualmente desarrollando FlawsFind, un escáner de
            vulnerabilidades orientado a usuarios no técnicos.
          </p>
          <div className="hero-cta">
            <Button href="#proyectos" variant="primary">
              Ver proyectos
            </Button>
            <Button
              href="https://linkedin.com/in/matias-ocampo-0b12aa28b"
              variant="outline"
              external={true}
            >
              LinkedIn ↗
            </Button>
            <Button href="https://github.com/Ocampo-Matias" variant="outline" external={true}>
              GitHub ↗
            </Button>
          </div>
        </div>

        <div className="hero-avatar-container">
          <img src={profilePic} alt="Matías Ocampo" className="avatar-img" />
        </div>
      </div>
    </header>
  );
};
