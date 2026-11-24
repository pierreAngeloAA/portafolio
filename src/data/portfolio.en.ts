// English content. Keep it in sync with portfolio.ts (Spanish): same items in the same order,
// because tags and links are taken from there by position.
import * as es from './portfolio'
import type { Education, Job, Project } from './portfolio'

export const profile: typeof es.profile = {
  ...es.profile,
  role: 'Full-Stack Developer · Technical and Functional Lead',
  about: [
    'Full-stack developer with four years building web applications in Ruby on Rails and Angular / React.',
    'I am currently the Technical and Functional Lead of a traffic photo-enforcement platform for Colombian municipalities.',
    'My strengths are integrations with government platforms, architecture, authorization, performance optimization and AWS deployment.',
    'I am very good at automating processes: document generation, background jobs, integrations between platforms and deployments.',
  ],
}

export const experience: Job[] = [
  {
    role: 'Full-Stack Developer — Technical and Functional Lead',
    company: 'Sistemas y Aplicaciones en Línea',
    period: 'January 2025 – Present',
    location: 'Barranquilla, Colombia · Remote',
    summary:
      'Technical direction, architecture and code review for photo enforcement, and functional definition of the violation workflow with traffic authorities, whom I also train and support. Main developer of the integrations with SIMIT (national fines system), RUNT (national vehicle registry), other traffic platforms and camera vendors, with role and action permissions, auditing and tests. PDF documents with a public validation QR code, data ingestion between platforms and training course screens. Micro-frontend architecture and in-house PDF generation, which replaced a paid SaaS dependency.',
    tags: es.experience[0].tags.map((tag) => (tag === 'Chrome headless' ? 'Headless Chrome' : tag)),
  },
  {
    role: 'Web Developer',
    company: 'Alexander Taborda Acosta',
    period: 'June 2022 – January 2025',
    location: 'Barranquilla, Colombia · Remote',
    summary:
      'End-to-end web application development: data modeling, CRUD endpoints, business logic, authentication and role permissions. Interfaces consuming REST APIs, Rails views and standalone Angular applications. Background processing for emails, reports and Excel/PDF exports, and file uploads.',
    tags: es.experience[1].tags,
  },
]

export const projects: Project[] = [
  {
    title: 'Traffic photo-enforcement platform',
    status: { label: 'In production', tone: 'success' },
    description:
      'Platform for Colombian municipalities that manages the life cycle of traffic violations detected by cameras. I lead its technical and functional side.',
    highlights: [
      {
        title: 'Integrations with SIMIT, RUNT and the violations-processing platform',
        text: 'Violations sent with payload builders, idempotent retries and reconciliation; RUNT lookups with a daily cache per plate and webhooks from camera vendors.',
      },
      {
        title: 'In-house PDF generation',
        text: 'Documents generated internally with Liquid templates and headless Chrome on S3 + CloudFront, removing a paid SaaS dependency and a race condition that duplicated submissions.',
      },
      {
        title: 'Performance optimization',
        text: 'N+1 queries removed from the evidence, violation and dashboard endpoints; aggregated statistics and index-backed sorting.',
      },
    ],
    tags: es.projects[0].tags,
  },
  {
    title: 'Violations processing and debt collection system',
    status: { label: 'In development', tone: 'warning' },
    description:
      "Violations system of a traffic department: training courses, debt collection, document files, payment agreements and integration with SIMIT. I contribute back-end and front-end features.",
    highlights: [
      {
        title: 'Documents with public validation',
        text: 'Payment orders, resolutions and notices in PDF with a signed QR code to verify their authenticity, and traceability of every issued document.',
      },
      {
        title: 'Connection with photo enforcement',
        text: 'Ingestion from the photo-enforcement platform, including educational citations, with batched retries for the PDFs.',
      },
      {
        title: 'Courses and case file',
        text: 'Angular screens for course enrollment, attendance and scheduling, and the status of educational citations in the case file.',
      },
    ],
    tags: es.projects[1].tags,
  },
  {
    title: 'TallernApp — Predictive vehicle maintenance',
    status: { label: 'In development', tone: 'warning' },
    description:
      'A project I develop with engineer Alexander Taborda Acosta, formerly called Maintenance. For cars and motorcycles, it replaces generic maintenance tables ("change the oil every 5,000 km") with the estimated failure probability of each part, and connects vehicle owners with workshops. Rails API and a React application with client, workshop and parts store areas.',
    highlights: [
      {
        title: 'Reliability engine',
        text: 'Weibull risk curves per part and vehicle type, adjusted for city conditions, that estimate the probability of failure from usage.',
      },
      {
        title: 'Appointments and quotes with workshops',
        text: 'Nearby workshops by distance computed in SQL, scheduling, quotes the client approves before each appointment, limited access to the vehicle and verified reviews.',
      },
      {
        title: 'RUNT and NHTSA',
        text: 'Clients look up their plate in RUNT (national vehicle registry) and decide which data to adopt, without ever blocking registration. NHTSA to decode the VIN and check recalls.',
      },
      {
        title: 'Testing and quality',
        text: 'RSpec in the API and Vitest, Testing Library and MSW in the front end, with a minimum coverage of 80%; Brakeman in CI.',
      },
    ],
    tags: es.projects[2].tags,
  },
  {
    title: 'verified-recipes — Verified recipes for AI agents',
    status: { label: 'Published on npm', tone: 'success' },
    description:
      'npm package with a local MCP server that gives AI agents short recipes about common mistakes in Rails, Spring Boot, React and Swift, each backed by a script that runs against the latest versions.',
    highlights: [
      {
        title: 'Continuous verification',
        text: 'GitHub Actions runs every recipe weekly: the correct way must work and the mistake must keep failing. If a new version changes the result, the recipe is flagged and an issue is opened.',
      },
      {
        title: 'MCP server',
        text: 'Two read-only tools, search_recipes and get_recipe, with search weighted by error message, tags and title.',
      },
    ],
    tags: es.projects[3].tags,
    repo: es.projects[3].repo,
    demo: es.projects[3].demo,
  },
  {
    title: 'Clash of Clans dashboard',
    status: { label: 'Personal project', tone: 'info' },
    description:
      'Progress dashboard for several Clash of Clans accounts: the level of each defense, troop, hero and spell, and how far it is from the maximum. A Rails API with PostgreSQL syncs the data with the official API without exposing the token to the browser.',
    tags: es.projects[4].tags,
    repo: es.projects[4].repo,
  },
  {
    title: 'Versioned configuration, material cutting and inventory reservation',
    status: { label: 'Technical challenge', tone: 'info' },
    description:
      'Three back-end exercises for a manufacturer of made-to-measure products, each with a decision document: what was chosen, what was discarded and why.',
    highlights: [
      {
        title: 'Effective configuration',
        text: 'Immutable history of versioned directives resolved with five precedence rules in a single DISTINCT ON query, constant with respect to the number of units and keys.',
      },
      {
        title: 'Cutting planner',
        text: 'Cutting stock with First Fit Decreasing: 5,000 pieces in 0.65 s using 790 bars against a lower bound of 780. Alternative strategies isolated and measured.',
      },
      {
        title: 'Inventory reservation in PL/pgSQL',
        text: 'FIFO batch consumption that is safe under retries and concurrent calls, with FOR UPDATE locking to avoid reporting false shortages. Tested with two simultaneous sessions.',
      },
    ],
    tags: ['Rails 8.1', 'PostgreSQL', 'PL/pgSQL', 'RSpec', 'Algorithms', 'Concurrency', 'GitHub Actions'],
    repo: es.projects[5].repo,
  },
  {
    title: 'Employees and benefits dashboard',
    status: { label: 'Technical challenge', tone: 'info' },
    description:
      'Full-stack application that brings together employee and benefits management with OpenStreetMap geolocation data. The whole stack starts with a single Docker command.',
    highlights: [
      {
        title: 'Custom JWT authentication',
        text: 'Built with bcrypt and JWT without Devise, with automatic sign-out in the front end when the token expires.',
      },
      {
        title: 'OpenStreetMap integration',
        text: "Coordinates of the employee's city through Nominatim, requested only in the detail view to avoid overloading the external API.",
      },
      {
        title: 'Testing and CI',
        text: '53 automated tests (32 in RSpec and 21 in Vitest) with the external API mocked, run in GitHub Actions.',
      },
    ],
    tags: es.projects[6].tags,
    repo: es.projects[6].repo,
  },
]

export const skills: typeof es.skills = [
  { group: 'Languages', items: ['Ruby', 'Java', 'JavaScript', 'TypeScript', 'SQL and PL/pgSQL', 'HTML', 'CSS'] },
  {
    group: 'Back end',
    items: ['Ruby on Rails (API-only and MVC)', 'Spring Boot', 'NestJS', 'REST APIs', 'Service Objects', 'ActiveRecord', 'ActiveJob', 'Sidekiq', 'Liquid'],
  },
  { group: 'Front end', items: es.skills[2].items },
  {
    group: 'Databases and cloud',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Docker and Compose', 'AWS (ECS Fargate, ECR, RDS, S3, CloudFront, SNS, CloudWatch)', 'Cloudflare R2', 'CI/CD (GitHub Actions, Bitbucket Pipelines)'],
  },
  { group: 'Authentication and security', items: es.skills[4].items },
  {
    group: 'Testing and methods',
    items: ['RSpec', 'FactoryBot', 'Jest', 'Vitest', 'Playwright', 'Postman', 'Agile', 'Jira', 'Git flow', 'Clean Code', 'SOLID', 'AI-assisted development (Claude Code, MCP)'],
  },
]

export const education: Education[] = [
  {
    title: 'Mechanical Engineer',
    place: 'Universidad Autónoma del Caribe',
    year: '2021',
    documents: [
      { label: 'Diploma', src: '/documentos/diploma.jpg' },
      { label: 'Graduation record', src: '/documentos/acta.jpg' },
    ],
  },
  {
    title: 'Professional license AT230-159268',
    place: 'National Professional Council of Electrical, Mechanical and Related Engineering (Colombia)',
    year: '2022',
    documents: [{ label: 'Professional license', src: '/documentos/matricula.jpg' }],
  },
  {
    title: 'Diploma course in Maintenance Management',
    place: 'ACIEM, Atlántico Chapter',
    year: '2021',
    detail: '120 hours',
    documents: [{ label: 'Certificate', src: '/documentos/diplomado.jpg' }],
  },
  {
    title: 'Self-taught software development',
    place: 'Platzi · The Odin Project · Udemy · Exercism',
  },
]

export const languages = ['Spanish – Native', 'Technical English – Reading']
