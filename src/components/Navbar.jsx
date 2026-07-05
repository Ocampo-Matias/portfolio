import React from 'react';

export const Navbar = () => {
  return (
    <nav aria-label="Navegación principal">
      <div className="nav-container">
        <a href="#" className="nav-logo" aria-label="Ir al inicio de la página">
          matias.ocampo
        </a>
        <ul className="nav-links">
          <li>
            <a href="#sobre-mi">Sobre mí</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
