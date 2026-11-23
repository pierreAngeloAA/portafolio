// Contenido del portafolio. Edita este archivo para actualizar la web.

export const profile = {
  name: 'Pierre Algarín',
  fullName: 'Pierre Angelo Algarín Vigna',
  role: 'Desarrollador Full-Stack · Líder Técnico y Funcional',
  // Cada tecnología enlaza a su documentación oficial
  stack: [
    { name: 'Ruby on Rails', docs: 'https://guides.rubyonrails.org/' },
    { name: 'Java', docs: 'https://docs.oracle.com/en/java/' },
    { name: 'Spring Boot', docs: 'https://docs.spring.io/spring-boot/' },
    { name: 'Angular', docs: 'https://angular.dev/' },
    { name: 'React', docs: 'https://react.dev/' },
    { name: 'PostgreSQL', docs: 'https://www.postgresql.org/docs/' },
    { name: 'AWS', docs: 'https://docs.aws.amazon.com/' },
    { name: 'Docker', docs: 'https://docs.docker.com/' },
  ],
  location: 'Barranquilla, Colombia',
  locationUrl: 'https://www.google.com/maps/place/Barranquilla,+Atl%C3%A1ntico,+Colombia',
  about: [
    'Desarrollador full-stack con cuatro años construyendo aplicaciones web en Ruby on Rails y Angular / React, y backend en Java con Spring Boot.',
    'Actualmente soy Líder Técnico y Funcional de una plataforma de fotodetección de infracciones de tránsito para municipios colombianos.',
    'Mis fortalezas son las integraciones con plataformas estatales, la arquitectura, la autorización, la optimización de rendimiento y el despliegue en AWS.',
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
      'Desarrollador backend principal de fotodetección: Ruby 3.3 / Rails 7.2 API-only, PostgreSQL, Redis + Sidekiq, AASM, Docker y AWS (ECS, ECR, S3, CloudFront) con despliegue continuo en GitHub Actions.',
      'Contravencional y cobro coactivo: funcionalidades backend en Java 21 y Spring Boot sobre PostgreSQL, en un monolito modular migrado desde Oracle con el patrón Strangler Fig, integración SOAP con SIMIT mediante patrón outbox y despliegue en AWS ECS Fargate con Bitbucket Pipelines (Spring Security, Spring Data JPA, Flyway, Redis, OpenAPI, JUnit, Mockito).',
      'Frontend en Angular 20, TypeScript, RxJS, Angular Material y Jest, con arquitectura de microfrontends sobre Angular Elements.',
      'Generación de PDF con Liquid y Chrome headless en Rails y en un servicio NestJS, eliminando una dependencia SaaS de pago.',
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
      'Migración del sistema contravencional de una Secretaría de Tránsito desde un monolito Oracle / Java legado hacia un stack moderno: cursos de capacitación, cobro coactivo, expediente documental, acuerdos de pago e integración con SIMIT.',
    highlights: [
      {
        title: 'Monolito modular con Strangler Fig',
        text: 'Bounded contexts con capas api, application, domain e infrastructure, y una capa anticorrupción hacia los catálogos e identificadores del sistema legado.',
      },
      {
        title: 'Integración con SIMIT mediante outbox',
        text: 'Recaudo sincronizado por SOAP a través de una tabla outbox y un job de reintentos, para no perder eventos cuando SIMIT no responde.',
      },
      {
        title: 'Documentos y procesos programados',
        text: 'Resoluciones, mandamientos de pago y certificados en PDF con código QR firmado con HMAC, generados por jobs diarios con Flyway gestionando el esquema.',
      },
      {
        title: 'Microfrontends y despliegue',
        text: 'Shell en Angular que carga cada módulo como Web Component con Angular Elements; backend en contenedores sobre AWS ECS Fargate y frontends en S3 + CloudFront, desplegados con Bitbucket Pipelines.',
      },
    ],
    tags: [
      'Java 21',
      'Spring Boot 3.5',
      'Spring Security',
      'PostgreSQL',
      'Flyway',
      'Redis',
      'OpenAPI',
      'Angular 20',
      'Angular Elements',
      'AWS ECS Fargate',
      'Bitbucket Pipelines',
    ],
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
  { group: 'Lenguajes', items: ['Ruby', 'Java 21', 'JavaScript', 'TypeScript', 'SQL y PL/pgSQL', 'HTML', 'CSS'] },
  {
    group: 'Backend',
    items: ['Ruby on Rails (API-only y MVC)', 'Spring Boot', 'Spring Data JPA', 'NestJS', 'APIs REST y SOAP', 'OpenAPI', 'Service Objects', 'ActiveRecord', 'ActiveJob', 'Sidekiq', 'Liquid'],
  },
  {
    group: 'Frontend',
    items: ['React 19 + Vite', 'Angular 20', 'Angular Elements', 'Angular Material', 'RxJS', 'Vue 3', 'Tailwind CSS', 'Bootstrap', 'Materialize', 'Node.js'],
  },
  {
    group: 'Bases de datos y nube',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Flyway', 'Docker y Compose', 'AWS (ECS Fargate, ECR, RDS, S3, CloudFront, SNS, CloudWatch)', 'Cloudflare R2', 'CI/CD (GitHub Actions, Bitbucket Pipelines)'],
  },
  { group: 'Autenticación y seguridad', items: ['JWT', 'Devise', 'Sorcery', 'Spring Security', 'RBAC', 'API keys', 'Brakeman'] },
  {
    group: 'Pruebas y metodologías',
    items: ['RSpec', 'FactoryBot', 'JUnit', 'Mockito', 'Jest', 'Vitest', 'Playwright', 'Postman', 'Agile', 'Jira', 'Git flow', 'Clean Code', 'SOLID', 'Desarrollo asistido por IA (Claude Code, MCP)'],
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
