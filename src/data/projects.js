export const projectsData = [
  {
    id: 'flawsfind',
    title: 'FlawsFind',
    badge: 'En desarrollo',
    description:
      'Escáner de vulnerabilidades web diseñado para usuarios no técnicos. Detecta vulnerabilidades y explica los hallazgos en lenguaje claro, ayudando a entender el estado de seguridad de un sitio sin necesidad de experiencia técnica previa.',
    tags: ['Python', 'Django', 'DRF', 'Celery', 'OWASP ZAP', 'React', 'Docker'],
    links: {
      status: 'Repositorio privado — en desarrollo activo',
    },
    featured: true,
  },
  {
    id: 'sgis',
    title: 'SGIS — Sistema de Gestión de Incidentes de Seguridad',
    description:
      'Aplicación web monolítica para registrar, clasificar y hacer seguimiento de incidentes de seguridad de la información. Implementa control de acceso basado en roles (RBAC) y lógica de negocio del lado del servidor. Desarrollado como proyecto académico para demostrar habilidades en diseño de base de datos y backend Django.',
    tags: ['Python', 'Django', 'RBAC', 'SQLite'],
    links: {
      github: 'https://github.com/Ocampo-Matias/SGIS-Django',
    },
    featured: false,
  },
  {
    id: 'django-auth',
    title: 'Django Auth CRUD',
    description:
      'Aplicación de gestión de tareas con sistema de autenticación de usuarios integrado. Proyecto de práctica para consolidar fundamentos de Django, bases de datos relacionales y despliegue. Basado en el curso práctico de Fazt Code.',
    tags: ['Python', 'Django', 'Autenticación', 'SQLite'],
    links: {
      github: 'https://github.com/Ocampo-Matias/django-auth-crud',
    },
    featured: false,
  },
];
