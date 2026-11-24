// Contenido del portafolio. Edita este archivo para actualizar la web.

export const profile = {
  name: 'Pierre Algarín',
  fullName: 'Pierre Angelo Algarín Vigna',
  role: 'Desarrollador Full-Stack · Líder Técnico y Funcional',
  // Cada tecnología enlaza a su documentación oficial
  stack: [
    { name: 'Ruby on Rails', docs: 'https://guides.rubyonrails.org/' },
    { name: 'Angular', docs: 'https://angular.dev/' },
    { name: 'React', docs: 'https://react.dev/' },
    { name: 'PostgreSQL', docs: 'https://www.postgresql.org/docs/' },
    { name: 'AWS', docs: 'https://docs.aws.amazon.com/' },
    { name: 'Docker', docs: 'https://docs.docker.com/' },
  ],
  location: 'Barranquilla, Colombia',
  locationUrl: 'https://www.google.com/maps/place/Barranquilla,+Atl%C3%A1ntico,+Colombia',
  about: [
    'Desarrollador full-stack con cuatro años construyendo aplicaciones web en Ruby on Rails y Angular / React.',
    'Actualmente soy Líder Técnico y Funcional de una plataforma de fotodetección de infracciones de tránsito para municipios colombianos.',
    'Mis fortalezas son las integraciones con plataformas estatales, la arquitectura, la autorización, la optimización de rendimiento y el despliegue en AWS.',
    'Soy muy bueno automatizando procesos: generación de documentos, tareas en segundo plano, integraciones entre plataformas y despliegues.',
    'Practico el desarrollo asistido por IA con agentes como Claude Code: defino las tareas, reviso los resultados y decido qué se publica. También publiqué verified-recipes, un servidor MCP para agentes de IA.',
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
  summary: string
  tags: string[]
}

export const experience: Job[] = [
  {
    role: 'Desarrollador Full-Stack — Líder Técnico y Funcional',
    company: 'Sistemas y Aplicaciones en Línea',
    period: 'Enero 2025 – Actualidad',
    location: 'Barranquilla, Colombia · Remoto',
    summary:
      'Dirección técnica, arquitectura y revisión de código de fotodetección, y definición funcional del flujo de infracciones con las autoridades de tránsito, a las que también doy capacitación y soporte. Desarrollador principal de las integraciones con SIMIT, RUNT, otras plataformas de tránsito y proveedores de cámaras, con permisos por rol y acción, auditoría y pruebas. Documentos PDF con código QR de validación pública, ingesta de datos entre plataformas y pantallas de cursos. Arquitectura de microfrontends y generación propia de PDF, que reemplazó una dependencia SaaS de pago.',
    tags: ['Ruby 3.3', 'Rails 7.2 API', 'PostgreSQL', 'Redis', 'Sidekiq', 'AASM', 'RSpec', 'Brakeman', 'Liquid', 'Chrome headless', 'NestJS', 'Java', 'Spring Boot', 'Angular 20', 'TypeScript', 'RxJS', 'Angular Material', 'Angular Elements', 'Jest', 'Docker', 'AWS ECS', 'ECR', 'S3', 'CloudFront', 'GitHub Actions'],
  },
  {
    role: 'Desarrollador Web',
    company: 'Alexander Taborda Acosta',
    period: 'Junio 2022 – Enero 2025',
    location: 'Barranquilla, Colombia · Remoto',
    summary:
      'Desarrollo de aplicaciones web de punta a punta: modelado de datos, endpoints CRUD, lógica de negocio, autenticación y permisos por rol. Interfaces que consumen APIs REST, vistas Rails y aplicaciones Angular independientes. Procesos en segundo plano para correos, reportes y exportaciones Excel/PDF, y carga de archivos.',
    tags: ['Ruby on Rails', 'PostgreSQL', 'ActiveRecord', 'Service Objects', 'CarrierWave', 'Active Storage', 'Sidekiq', 'Redis', 'React', 'Angular', 'JavaScript', 'jQuery', 'ERB', 'Bootstrap', 'Docker', 'Git', 'GitHub', 'Jira', 'Postman'],
  },
]

export type Project = {
  title: string
  description: string
  status?: { label: string; tone: 'success' | 'warning' | 'info' }
  highlights?: { title: string; text: string }[]
  tags: string[]
  repo?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'Plataforma de fotodetección de infracciones',
    status: { label: 'En producción', tone: 'success' },
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
  },
  {
    title: 'Sistema contravencional y de cobro coactivo',
    status: { label: 'En desarrollo', tone: 'warning' },
    description:
      'Sistema contravencional de una Secretaría de Tránsito: cursos de capacitación, cobro coactivo, expediente documental, acuerdos de pago e integración con SIMIT. Participo con funcionalidades de backend y frontend.',
    highlights: [
      {
        title: 'Documentos con validación pública',
        text: 'Mandamientos de pago, resoluciones y notificaciones en PDF con código QR firmado para verificar su autenticidad, y trazabilidad de cada emisión.',
      },
      {
        title: 'Conexión con fotodetección',
        text: 'Ingesta desde la plataforma de fotodetección, incluido el comparendo pedagógico, con reintentos por lotes para los PDF.',
      },
      {
        title: 'Cursos y expediente',
        text: 'Pantallas en Angular de inscripciones, asistencia y programación de cursos, y estado del comparendo pedagógico en el expediente.',
      },
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular 20', 'TypeScript'],
  },
  {
    title: 'TallernApp — Mantenimiento predictivo vehicular',
    status: { label: 'En desarrollo', tone: 'warning' },
    description:
      'Proyecto que desarrollo junto al Ing. Alexander Taborda Acosta, antes llamado Maintenance. Para autos y motos, reemplaza las tablas genéricas de mantenimiento ("cambia el aceite cada 5.000 km") por la probabilidad estimada de falla de cada pieza, y conecta a los dueños de vehículos con talleres. API en Rails y una aplicación React con áreas para cliente, taller y almacén.',
    highlights: [
      {
        title: 'Motor de confiabilidad',
        text: 'Curvas de riesgo tipo Weibull por pieza y tipo de vehículo, ajustadas por las condiciones de la ciudad, que estiman la probabilidad de falla según el uso.',
      },
      {
        title: 'Citas y cotizaciones con talleres',
        text: 'Talleres cercanos por distancia calculada en SQL, agenda, cotizaciones que el cliente aprueba antes de cada cita, acceso limitado al vehículo y opiniones verificadas.',
      },
      {
        title: 'RUNT y NHTSA',
        text: 'El cliente consulta su placa en el RUNT y decide qué datos adoptar, sin bloquear nunca el registro. NHTSA para decodificar el VIN y consultar recalls.',
      },
      {
        title: 'Pruebas y calidad',
        text: 'RSpec en la API y Vitest, Testing Library y MSW en el frontend, con cobertura mínima del 80 %; Brakeman en CI.',
      },
    ],
    tags: [
      'Rails 8.1 API',
      'React 19',
      'TypeScript',
      'PostgreSQL',
      'Vite',
      'RSpec',
      'Vitest',
      'NHTSA API',
      'Brakeman',
      'GitHub Actions',
    ],
  },
  {
    title: 'verified-recipes — Recetas verificadas para agentes de IA',
    status: { label: 'Publicado en npm', tone: 'success' },
    description:
      'Paquete npm con un servidor MCP local que da a los agentes de IA recetas cortas sobre errores frecuentes en Rails, Spring Boot, React y Swift, cada una respaldada por un script que se ejecuta contra las versiones más recientes.',
    highlights: [
      {
        title: 'Verificación continua',
        text: 'GitHub Actions ejecuta cada receta todas las semanas: la forma correcta debe funcionar y el error debe seguir fallando. Si una versión nueva cambia el resultado, la receta se marca y se abre un issue.',
      },
      {
        title: 'Servidor MCP',
        text: 'Dos herramientas de solo lectura, search_recipes y get_recipe, con búsqueda ponderada por mensaje de error, etiquetas y título.',
      },
    ],
    tags: ['Node.js', 'MCP', 'Zod', 'GitHub Actions', 'GitHub Pages', 'npm'],
    repo: 'https://github.com/pierreAngeloAA/verified-recipes',
    demo: 'https://www.npmjs.com/package/verified-recipes',
  },
  {
    title: 'Dashboard de Clash of Clans',
    status: { label: 'Proyecto personal', tone: 'info' },
    description:
      'Dashboard del progreso de varias cuentas de Clash of Clans: el nivel de cada defensa, tropa, héroe y hechizo, y cuánto falta para el máximo. Una API en Rails con PostgreSQL sincroniza los datos con la API oficial sin exponer el token al navegador.',
    tags: ['Rails 8.1 API', 'PostgreSQL', 'React 19', 'Vite', 'Tailwind CSS', 'API REST', 'GitHub Actions'],
    repo: 'https://github.com/pierreAngeloAA/clash-dashboard',
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
    tags: ['Rails 8.1', 'PostgreSQL', 'PL/pgSQL', 'RSpec', 'Algoritmos', 'Concurrencia', 'GitHub Actions'],
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
        text: '53 pruebas automatizadas (32 en RSpec y 21 en Vitest) con la API externa simulada, ejecutadas en GitHub Actions.',
      },
    ],
    tags: ['Rails 8.1 API', 'Vue 3', 'Pinia', 'Tailwind CSS', 'JWT', 'Docker', 'Vitest', 'GitHub Actions'],
    repo: 'https://github.com/pierreAngeloAA/symplifica-dashboard',
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Lenguajes', items: ['Ruby', 'Java', 'JavaScript', 'TypeScript', 'SQL y PL/pgSQL', 'HTML', 'CSS'] },
  {
    group: 'Backend',
    items: ['Ruby on Rails (API-only y MVC)', 'Spring Boot', 'NestJS', 'APIs REST', 'Service Objects', 'ActiveRecord', 'ActiveJob', 'Sidekiq', 'Liquid'],
  },
  {
    group: 'Frontend',
    items: ['React 19 + Vite', 'Angular 20', 'Angular Elements', 'Angular Material', 'RxJS', 'Vue 3', 'Tailwind CSS', 'Bootstrap', 'Materialize', 'Node.js'],
  },
  {
    group: 'Bases de datos y nube',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Docker y Compose', 'AWS (ECS Fargate, ECR, RDS, S3, CloudFront, SNS, CloudWatch)', 'Cloudflare R2', 'CI/CD (GitHub Actions, Bitbucket Pipelines)'],
  },
  { group: 'Autenticación y seguridad', items: ['JWT', 'Devise', 'Sorcery', 'RBAC', 'API keys', 'Brakeman'] },
  {
    group: 'Pruebas y metodologías',
    items: ['RSpec', 'FactoryBot', 'Jest', 'Vitest', 'Playwright', 'Postman', 'Agile', 'Jira', 'Git flow', 'Clean Code', 'SOLID', 'Desarrollo asistido por IA (Claude Code, MCP)'],
  },
]

export type Education = {
  title: string
  place: string
  year?: string
  detail?: string
  documents?: { label: string; src: string }[]
}

// Imágenes en public/documentos, con el número de cédula tapado
export const education: Education[] = [
  {
    title: 'Ingeniero Mecánico',
    place: 'Universidad Autónoma del Caribe',
    year: '2021',
    documents: [
      { label: 'Diploma', src: '/documentos/diploma.jpg' },
      { label: 'Acta de grado', src: '/documentos/acta.jpg' },
    ],
  },
  {
    title: 'Matrícula Profesional AT230-159268',
    place: 'Consejo Profesional Nacional de Ingenierías Eléctrica, Mecánica y Profesiones Afines',
    year: '2022',
    documents: [{ label: 'Matrícula profesional', src: '/documentos/matricula.jpg' }],
  },
  {
    title: 'Diplomado en Gestión de Mantenimiento',
    place: 'ACIEM Capítulo del Atlántico',
    year: '2021',
    detail: '120 horas',
    documents: [{ label: 'Certificado', src: '/documentos/diplomado.jpg' }],
  },
  {
    title: 'Formación autodidacta en desarrollo',
    place: 'Platzi · The Odin Project · Udemy · Exercism',
  },
]

export const languages = ['Español – Nativo', 'Inglés técnico – Lectura']
