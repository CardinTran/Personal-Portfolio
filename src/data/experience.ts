import type { Entry } from './types';

export const experience = [
  {
    // MikeGPT/LSU association is preserved as printed; no separate employer.
    sourceId: 'RESUME-MIKEGPT',
    id: 'mikegpt',
    name: 'MikeGPT',
    role: 'Frontend Software Engineer Intern',
    period: { start: 'June 2026', end: 'Present' },
    place: 'Louisiana State University',
    highlights: [
      'Develop and maintain React interfaces for an AI/LLM platform, building reusable workflows for chat, agent configuration, administrative tools, skills, resources, databases, and file management.',
      'Built frontend integration testing infrastructure with Vitest, React Testing Library, and MSW, covering APIs, authentication, routing, state transitions, and core user workflows.',
      'Implemented real-time LLM streaming interfaces for tool execution and search sources, displaying interactive progress, source previews, and streamed responses.',
    ],
  },
  {
    // "60+" is organization membership, not software users or team size.
    sourceId: 'RESUME-TIGERRACING',
    id: 'tigerracing',
    name: 'LSU TigerRacing FSAE',
    role: 'Team Member',
    period: { start: 'July 2025', end: 'Present' },
    place: 'Baton Rouge, LA',
    highlights: [
      'Develop and maintain a React-based internal platform supporting member management, task tracking, and project coordination for a 60+ member Formula SAE organization.',
      'Collaborate with engineering team leads to translate operational requirements into scalable software features, using Git and GitHub for version control and team-based development.',
    ],
  },
] as const satisfies readonly Entry[];

export const leadership = [
  {
    // 42 members and 300+ volunteer hours belong to this entry only.
    sourceId: 'RESUME-LEADERSHIP',
    id: 'rising-dragon',
    name: 'Rising Dragon Lion Dance Team',
    role: 'Head Captain',
    period: { start: 'Dec. 2021', end: 'Present' },
    place: 'Marrero, LA',
    highlights: [
      'Lead and coordinate a 42-member performance team, overseeing practices, training, and execution across frequent community, cultural, and private events.',
      'Serve as the primary client liaison, managing scheduling, expectations, and logistics for weddings and festivals while directing real-time coordination during live performances (300+ volunteer hours).',
    ],
  },
] as const satisfies readonly Entry[];
