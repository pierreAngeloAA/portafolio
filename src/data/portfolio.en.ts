// English content. Keep it in sync with portfolio.ts (Spanish): same items in the same order,
// because tags and links are taken from there by position.
import * as es from './portfolio'
import type { Education, Job, Project } from './portfolio'

export const profile: typeof es.profile = {
  ...es.profile,
  role: 'Full-Stack Developer · Technical and Functional Lead',
  about: [
    'Full-stack developer with four years building web applications in Ruby on Rails and Angular / React, and Java back ends with Spring Boot.',
    'I am currently the Technical and Functional Lead of a traffic photo-enforcement platform for Colombian municipalities.',
    'My strengths are integrations with government platforms, architecture, authorization, performance optimization and AWS deployment.',
  ],
}

export const experience: Job[] = [
  {
    role: 'Full-Stack Developer — Technical and Functional Lead',
    company: 'Sistemas y Aplicaciones en Línea',
    period: 'January 2025 – Present',
    location: 'Barranquilla, Colombia · Remote',
    summary:
      'Technical direction, architecture and code review for the photo-enforcement platform, and functional definition of the violation workflow with traffic authorities, whom I also train and support.',
    work: [
      {
        name: 'Photo-enforcement back end',
        text: 'Main developer: integrations with SIMIT (national fines system), RUNT (national vehicle registry), the violations-processing platform and camera vendors; role and action permissions, auditing and tests.',
        tags: es.experience[0].work[0].tags,
      },
      {
        name: 'Violations processing and debt collection back end',
        text: 'Modular monolith migrated from Oracle with Strangler Fig and SOAP integration with SIMIT through an outbox.',
        tags: es.experience[0].work[1].tags,
      },
      {
        name: 'Front end',
        text: 'Micro-frontend architecture.',
        tags: es.experience[0].work[2].tags,
      },
      {
        name: 'PDF generation',
        text: 'Replaced a paid SaaS dependency.',
        tags: ['Liquid', 'Headless Chrome', 'Rails', 'NestJS'],
      },
    ],
  },
  {
    role: 'Web Developer',
    company: 'Alexander Taborda Acosta',
    period: 'June 2022 – January 2025',
    location: 'Barranquilla, Colombia · Remote',
    summary: 'End-to-end web application development: data, business logic, interfaces and background processing.',
    work: [
      {
        name: 'Back end',
        text: 'Data modeling, CRUD endpoints, business logic, authentication and role permissions.',
        tags: es.experience[1].work[0].tags,
      },
      {
        name: 'Background processing',
        text: 'Emails, reports and Excel/PDF exports.',
        tags: es.experience[1].work[1].tags,
      },
      {
        name: 'Front end',
        text: 'Interfaces consuming REST APIs, Rails views and standalone Angular applications.',
        tags: es.experience[1].work[2].tags,
      },
      {
        name: 'Tools',
        text: 'Environment, version control and tracking.',
        tags: es.experience[1].work[3].tags,
      },
    ],
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
      "Migration of a traffic department's violations system from a legacy Oracle / Java monolith to a modern stack: training courses, debt collection, document files, payment agreements and integration with SIMIT.",
    highlights: [
      {
        title: 'Modular monolith with Strangler Fig',
        text: 'Bounded contexts with api, application, domain and infrastructure layers, and an anti-corruption layer over the catalogs and identifiers of the legacy system.',
      },
      {
        title: 'SIMIT integration with an outbox',
        text: 'Payments synchronized over SOAP through an outbox table and a retry job, so no event is lost when SIMIT does not respond.',
      },
      {
        title: 'Documents and scheduled processes',
        text: 'Resolutions, payment orders and certificates in PDF with an HMAC-signed QR code, generated by daily jobs, with Flyway managing the schema.',
      },
      {
        title: 'Micro-frontends and deployment',
        text: 'Angular shell that loads each module as a Web Component with Angular Elements; containerized back end on AWS ECS Fargate and front ends on S3 + CloudFront, deployed with Bitbucket Pipelines.',
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
  { group: 'Languages', items: ['Ruby', 'Java 21', 'JavaScript', 'TypeScript', 'SQL and PL/pgSQL', 'HTML', 'CSS'] },
  {
    group: 'Back end',
    items: ['Ruby on Rails (API-only and MVC)', 'Spring Boot', 'Spring Data JPA', 'NestJS', 'REST and SOAP APIs', 'OpenAPI', 'Service Objects', 'ActiveRecord', 'ActiveJob', 'Sidekiq', 'Liquid'],
  },
  { group: 'Front end', items: es.skills[2].items },
  {
    group: 'Databases and cloud',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Flyway', 'Docker and Compose', 'AWS (ECS Fargate, ECR, RDS, S3, CloudFront, SNS, CloudWatch)', 'Cloudflare R2', 'CI/CD (GitHub Actions, Bitbucket Pipelines)'],
  },
  { group: 'Authentication and security', items: es.skills[4].items },
  {
    group: 'Testing and methods',
    items: ['RSpec', 'FactoryBot', 'JUnit', 'Mockito', 'Jest', 'Vitest', 'Playwright', 'Postman', 'Agile', 'Jira', 'Git flow', 'Clean Code', 'SOLID', 'AI-assisted development (Claude Code, MCP)'],
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
