import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { Button } from './common/Button';

export const Contact = () => {
  return (
    <section id="contacto" aria-labelledby="contacto-title">
      <SectionTitle number="// 03" title="Contacto" />

      <div className="contact-inner">
        <p>
          Estoy buscando mi primera experiencia profesional como desarrollador backend junior o
          pasantía. Si tenés una oportunidad o simplemente querés charlar, escribime.
        </p>
        <div className="contact-links">
          <Button
            href="https://linkedin.com/in/matias-ocampo-0b12aa28b"
            variant="primary"
            external={true}
          >
            LinkedIn ↗
          </Button>
          <Button href="https://github.com/Ocampo-Matias" variant="outline" external={true}>
            GitHub ↗
          </Button>
        </div>
      </div>
    </section>
  );
};
