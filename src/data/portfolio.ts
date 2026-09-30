// Contenido del portafolio. Edita este archivo para actualizar la web.

export const profile = {
  name: 'Pierre Algarín',
  fullName: 'Pierre Angelo Algarín Vigna',
  role: 'Desarrollador Full-Stack · Líder Técnico y Funcional',
  stack: ['Ruby on Rails', 'Angular', 'React', 'PostgreSQL'],
  tagline:
    'Construyo aplicaciones web con Ruby on Rails y frameworks modernos de JavaScript, con foco en integraciones, seguridad y rendimiento.',
  location: 'Barranquilla, Colombia',
  about: [
    'Desarrollador full-stack con cuatro años construyendo aplicaciones web en Ruby on Rails y frameworks modernos de JavaScript.',
    'Actualmente soy Líder Técnico y Funcional de una plataforma de fotodetección de infracciones de tránsito para municipios colombianos.',
    'Mis fortalezas son las integraciones con plataformas estatales, la autorización, la optimización de rendimiento y el diagnóstico de fallas en producción entre sistemas distribuidos.',
  ],
  email: 'pierrealgarin@gmail.com',
  whatsapp: '573022963990',
  links: {
    github: 'https://github.com/pierreAngeloAA',
    linkedin: 'https://www.linkedin.com/in/pierre-angelo-a-3937121aa',
  },
}

export type Job = {
  role: string
  company: string
  period: string
  location: string
  highlights: string[]
}

export const experience: Job[] = [
  {
    role: 'Desarrollador Full-Stack — Líder Técnico y Funcional',
    company: 'Sistemas y Aplicaciones en Línea',
    period: 'Enero 2025 – Actualidad',
    location: 'Barranquilla, Colombia · Remoto',
    highlights: [
      'Dirección técnica, decisiones de arquitectura y revisión de código del proyecto de fotodetección, junto con la definición funcional del flujo de infracciones con las autoridades de tránsito.',
      'Desarrollador backend principal: Ruby 3.3 / Rails 7.2 API-only, PostgreSQL, Redis + Sidekiq, Docker, AWS S3 + CloudFront, con frontend en Angular.',
      'Integraciones con plataformas estatales: envío de infracciones a SIMIT y a la plataforma contravencional, consultas al RUNT y webhooks de proveedores de cámaras.',
      'Autorización y seguridad: control de acceso por roles con permisos por acción, auditoría, corrección de inyección SQL y de enumeración de usuarios; Brakeman en el flujo de trabajo.',
      'Migración de la suite de pruebas de Minitest a RSpec con servicios externos simulados; capacitación y soporte de segunda línea a las autoridades de tránsito.',
    ],
  },
  {
    role: 'Desarrollador Web',
    company: 'Alexander Taborda Acosta',
    period: 'Junio 2022 – Enero 2025',
    location: 'Barranquilla, Colombia · Remoto',
    highlights: [
      'Ruby on Rails sobre PostgreSQL: modelado de datos, migraciones, endpoints CRUD y lógica de negocio con ActiveRecord, concerns y Service Objects.',
      'Interfaces con React (componentes, hooks y estado) consumiendo APIs REST, vistas Rails con JavaScript y jQuery, y aplicaciones Angular independientes.',
      'Procesamiento asíncrono con Sidekiq y Redis para correos, reportes y exportaciones Excel/PDF.',
      'Autenticación, sesiones, tokens y permisos por rol; carga de archivos con CarrierWave / Active Storage; Docker, Git/GitHub, Jira y Postman.',
    ],
  },
]

export type Project = {
  title: string
  description: string
  status?: { label: string; tone: 'warning' | 'info' }
  highlights?: { title: string; text: string }[]
  tags: string[]
  repo?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'Plataforma de fotodetección de infracciones',
    description:
      'Plataforma para municipios colombianos que gestiona el ciclo de las infracciones de tránsito detectadas por cámaras. Lidero su parte técnica y funcional.',
    highlights: [
      {
        title: 'Integraciones con SIMIT, RUNT y la plataforma contravencional',
        text: 'Envío de infracciones con constructores de payload, reintentos idempotentes y conciliación; consultas al RUNT con caché diario por placa y webhooks de proveedores de cámaras.',
      },
      {
        title: 'Generación de PDF propia',
        text: 'Generación interna de documentos con plantillas Liquid y Chrome headless sobre S3 + CloudFront, eliminando una dependencia SaaS de pago y una condición de carrera que duplicaba envíos.',
      },
      {
        title: 'Optimización de rendimiento',
        text: 'Eliminación de consultas N+1 en los endpoints de evidencias, infracciones y tableros; estadísticas agregadas y ordenamientos apoyados en índices.',
      },
    ],
    tags: [
      'Rails 7.2 API',
      'Angular',
      'PostgreSQL',
      'Redis',
      'Sidekiq',
      'Docker',
      'AWS S3',
      'CloudFront',
      'Liquid',
      'Chrome headless',
      'Webhooks',
    ],
    demo: 'https://sadypit.prev.sapenlinea.com.co/',
  },
  {
    title: 'Maintenance — Mantenimiento predictivo vehicular',
    status: { label: 'En desarrollo', tone: 'warning' },
    description:
      'Proyecto propio para autos y motos que reemplaza las tablas genéricas de mantenimiento ("cambia el aceite cada 5.000 km") por la probabilidad real de falla de cada pieza. Conecta a los dueños de vehículos con talleres y almacenes de repuestos. API en Rails y tres aplicaciones Angular: cliente, taller y almacén.',
    highlights: [
      {
        title: 'Motor de confiabilidad',
        text: 'Curvas de riesgo tipo Weibull por pieza, ajustadas por el clima y el terreno de la ciudad del vehículo, que estiman el riesgo de falla en el próximo tramo de uso.',
      },
      {
        title: 'Red de talleres y almacenes',
        text: 'Solicitudes de servicio ofrecidas a los talleres cercanos (distancia Haversine en SQL), permisos de acceso del dueño al vehículo y compra de repuestos compatibles en una transacción que evita la sobreventa.',
      },
      {
        title: 'Diagnóstico mensual',
        text: 'Reporte que combina la predicción del motor de riesgo, la inspección del técnico y los vencimientos del RUNT, generado en segundo plano.',
      },
      {
        title: 'Integraciones y calidad',
        text: 'NHTSA para decodificar el VIN y consultar recalls, y RUNT vía PlacApi, sin bloquear nunca el registro. TDD con cobertura mínima del 80 % verificada en CI.',
      },
    ],
    tags: [
      'Rails 8.1 API',
      'Angular 20',
      'TypeScript',
      'PostgreSQL',
      'RSpec',
      'Jasmine / Karma',
      'NHTSA API',
      'Brakeman',
      'GitHub Actions',
    ],
  },
  {
    title: 'Configuración versionada, corte de material y reserva de inventario',
    status: { label: 'Reto técnico', tone: 'info' },
    description:
      'Tres ejercicios de backend para un fabricante de productos a medida, cada uno con su documento de decisiones: qué se eligió, qué se descartó y por qué.',
    highlights: [
      {
        title: 'Configuración efectiva',
        text: 'Historial inmutable de directivas versionadas resuelto con cinco reglas de precedencia en una sola consulta con DISTINCT ON, constante respecto al número de unidades y claves.',
      },
      {
        title: 'Planificador de corte',
        text: 'Cutting stock con First Fit Decreasing: 5.000 piezas en 0,65 s usando 790 barras frente a una cota inferior de 780. Estrategias alternativas aisladas y medidas.',
      },
      {
        title: 'Reserva de inventario en PL/pgSQL',
        text: 'Consumo FIFO de lotes seguro ante reintentos y llamadas concurrentes, con bloqueo FOR UPDATE para no declarar faltantes falsos. Probado con dos sesiones simultáneas.',
      },
    ],
    tags: ['Rails 7.2', 'PostgreSQL', 'PL/pgSQL', 'RSpec', 'Algoritmos', 'Concurrencia'],
    repo: 'https://github.com/pierreAngeloAA/prueba-tecnica-rails',
  },
  {
    title: 'Dashboard de empleados y beneficios',
    status: { label: 'Reto técnico', tone: 'info' },
    description:
      'Aplicación fullstack que unifica la gestión de empleados y sus beneficios con datos de geolocalización de OpenStreetMap. Se levanta completa con un solo comando de Docker.',
    highlights: [
      {
        title: 'Autenticación JWT propia',
        text: 'Implementada con bcrypt y JWT sin Devise, con cierre de sesión automático en el frontend cuando el token vence.',
      },
      {
        title: 'Integración con OpenStreetMap',
        text: 'Coordenadas de la ciudad del empleado vía Nominatim, consultadas solo en el detalle para no saturar la API externa.',
      },
      {
        title: 'Pruebas y CI',
        text: '48 pruebas automatizadas (32 en RSpec y 16 en Vitest) con la API externa simulada, ejecutadas en GitHub Actions.',
      },
    ],
    tags: ['Rails 8.1 API', 'Vue 3', 'Pinia', 'Tailwind CSS', 'JWT', 'Docker', 'Vitest', 'GitHub Actions'],
    repo: 'https://github.com/pierreAngeloAA/symplifica-dashboard',
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Lenguajes', items: ['Ruby', 'JavaScript', 'TypeScript', 'SQL y PL/pgSQL', 'HTML', 'CSS'] },
  {
    group: 'Backend',
    items: ['Ruby on Rails (API-only y MVC)', 'APIs REST', 'Service Objects', 'ActiveRecord', 'ActiveJob', 'Sidekiq', 'Liquid'],
  },
  {
    group: 'Frontend',
    items: ['React + Vite', 'Angular', 'Vue 3', 'Tailwind CSS', 'Bootstrap', 'Materialize', 'Node.js'],
  },
  {
    group: 'Bases de datos y nube',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Docker', 'AWS (S3, CloudFront)', 'Cloudflare R2'],
  },
  { group: 'Autenticación y seguridad', items: ['JWT', 'Devise', 'Sorcery', 'RBAC', 'API keys', 'Brakeman'] },
  {
    group: 'Pruebas y metodologías',
    items: ['RSpec', 'FactoryBot', 'Postman', 'Agile', 'Jira', 'Git flow', 'Clean Code', 'SOLID', 'Claude Code'],
  },
]

export const education = [
  {
    title: 'Ingeniero Mecánico',
    place: 'Universidad Autónoma del Caribe',
    year: '2021',
    detail: 'Matrícula Profesional AT230-159268 – Consejo Profesional Nacional de Ingeniería',
  },
  {
    title: 'Diplomado en Gestión de Mantenimiento',
    place: 'ACIEM Barranquilla',
    year: '2021',
  },
  {
    title: 'Formación autodidacta en desarrollo',
    place: 'Platzi · The Odin Project · Udemy · Exercism',
  },
]

export const languages = ['Español – Nativo', 'Inglés – Lectura']
