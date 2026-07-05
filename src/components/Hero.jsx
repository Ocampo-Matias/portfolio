import React from 'react';
import { Button } from './common/Button';

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
          {/* Reemplazar por foto de perfil real */}
          {/* PLACEHOLDER: Foto de perfil de Matías (Paso 1: Colocar la imagen en src/assets/profile.jpg o profile.webp. Paso 2: Importar la imagen aquí y reemplazar este bloque por <img src={profilePic} alt="Matías Ocampo" className="avatar-img" />) */}
          <div className="avatar-placeholder" aria-hidden="true">
            <div className="avatar-placeholder-text">
              <span
                style={{
                  color: 'var(--accent)',
                  fontWeight: 'bold',
                  display: 'block',
                  marginBottom: '0.4rem',
                }}
              >
                [ AVATAR ]
              </span>
              Colocar foto de perfil real en:
              <br />
              <code
                style={{
                  fontSize: '0.7rem',
                  display: 'block',
                  marginTop: '0.4rem',
                  color: 'var(--accent)',
                }}
              >
                src/assets/profile.jpg
              </code>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
